---
sidebar_position: 2
---

# Session Key

:::tip Notice
- 本功能为试验性功能，目前仅在 UniPass 测试网可用
- 本功能仅针对 Popup SDK
:::

## 背景介绍

Session key 是指用户可以在应用端生成一把临时的密钥，UniPass 用户可以通过授权 session key，减少唤起 UniPass 请求用户签名的操作，授权应用在一定范围内操作用户资产的能力，来获得最佳的使用体验。

用户在授权 session key 时会生成一个 permit，permit 中规定了 session key 可以执行的具体操作。

我们可以在生成 permit 时，从以下一些方面对 session key 进行限制：

- 有效期：授权时间，授权开始有效时间，授权过期时间
- 特定链 ID：只能在某条链上使用
- **交互白名单合约**：只能和指定的白名单内的合约地址进行交互
- 特定币种：只能操作特定代币
- 最大单笔交易限额
- 单日累计交易限额

:::warning Notice
- 当前 session key 授权仅支持有效期限制（SDK 中默认为 7 天），被授权的 session key 可以直接转移用户资产
- 当前 session key 功能仅用于试验性功能开发与测试，不可用于生产环境
:::

## 初始化 session key 功能

本功能仅针对 Popup SDK，关于 Popup SDK 的更多介绍请参考：[SDK 初始化](../popup-sdk/02-initialization.md)，[连接钱包参数配置](../popup-sdk/03-connect-wallet.md)

### 安装指定版本 SDK 包

```
npm install unipasswallet/popup-sdk@1.1.5-alpha.2
```

新增 `sessionKeyAddress` 参数说明:

- `sessionKeyAddress`: sessionKey 的以太坊地址。

### 代码示例

```tsx
try {
  const account = await upWallet.login({
    email: true,
    eventListener: (event: UPEvent) => {
      console.log("event", event);
      const { type, body } = event;
      if (type === UPEventType.REGISTER) {
        console.log("account", body);
        ElMessage.success("a user register");
      }
    },
    connectType: "both",
    sessionKeyAddress: "your session key address",
  });
  const { address, email } = account;
  console.log("account", address, email);
} catch (err) {
  console.log("connect err", err);
}
```

返回结果：连接 UniPass 成功后返回结果为 `UPAccount` 类型数据，如果用户拒绝 UniPass Wallet 连接会抛出异常，应用需要捕获该异常并处理。

```tsx
export interface UPAccount {
  address: string; // Ethereum address of user
  email?: string | undefined; // Email
  newborn?: boolean | undefined; // Newly registered or not
  message?: string; // sign with ethereum message when authorize is true
  signature?: string; // sign with ethereum signature when authorize is true
  sessionKeyPermit?: string; // sessionKeyPermit if pass sessionKeyAddress when login, it is a json string that contains timestamp, weight and permit
}
```

## 获取 session key permit

### 通过 `UPAccount` 获取 Wallet

- `upAccount` : 从 login 获取的`UPAccount`信息

```tsx
import { Wallet } from "@unipasswallet/wallet";
import { Keyset } from "@unipasswallet/keys";
import { RpcRelayer } from "@unipasswallet/relayer";
import { providers, utils } from "ethers";
import { TESTNET_UNIPASS_WALLET_CONTEXT } from "@unipasswallet/network";

const provider = new providers.JsonRpcProvider("rpcUrl");
const relayer = new RpcRelayer(
  "https://testnet.wallet.unipass.vip/relayer-v2-goerli",
  TESTNET_UNIPASS_WALLET_CONTEXT,
  provider
);
let upAccount: UPAccount;
const wallet = new Wallet({
  address: upAccount.address,
  keyset: new Keyset([]), // 由session key签名， 因此传空值
  provider,
  relayer,
});
```

### 通过 `UPAccount` 获取 session key permit

- `sessionKeyEoaWallet` : `sessionKeyAddress` 的私钥生成的 EOA Wallet, 通常由`ethers.Wallet.createRandom()` 获取

```tsx
import { SignType } from "@unipasswallet/keys";

const permit: IPermit = JSON.parse(upAccount.sessionKeyPermit);
const sessionKey = new SessionKey(
  sessionKeyEoaWallet,
  SignType.EthSign,
  upAccount.address,
  permit
);
```

```tsx
export enum SignType {
  EIP712Sign = 1, // 通过EIP712签名
  EthSign = 2, // 通过Personal Sign签名 此处固定传 `SignType.EthSign`
}

export interface IPermit {
  readonly timestamp: number; // SessionKey 过期时间
  readonly weight: number; // SessionKey 权重，>= 100 有效
  readonly permit: string; // UniPass Wallet 授权签名
}
```

## 通过 session key 发送交易

- `nonce`: UniPass Wallet nonce
- `revertOnError`: 如果交易失败是否 revert
- `gasLimit`: 交易 gasLimit, 如果为 0 不做限制
- `target`: 交易对象地址
- `data`: 交易 input data

```tsx
import { CallTxBuilder } from "@unipasswallet/transaction-builders";
import { RawMainExecuteCall } from "@unipasswallet/wallet";

const nonce = await wallet.getNonce();
const tx = new CallTxBuilder(
  revertOnError,
  gasLimit,
  target,
  value,
  data
).build();
const ret = await wallet.sendTransactions(
  new RawMainExecuteCall(tx, nonce, sessionKey)
);
const receipt = await ret.wait();
```

## 通过 session key 签名

- messageHash: 待签名的消息 hash

```tsx
const signature = await wallet.signMessage(arrayify(messageHash), sessionKey);
```

### Session key 验签

验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)
