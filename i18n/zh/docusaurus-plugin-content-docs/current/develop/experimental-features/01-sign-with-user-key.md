---
sidebar_position: 1
---

# 使用用户端密钥进行签名

:::tip Notice
- 本功能为试验性功能，目前仅在 UniPass 测试网可用
- 本功能仅针对 Popup SDK
:::

## 背景介绍

在 StarkEx，zkLink 等 L2 交易模式中，需要用户使用 L1 层的账户通过签名绑定一个 L2 层的密钥（叫做 StarkKey 或 pubKeyHash）。

但考虑到 UniPass 用户在 L1 层使用的 [master key](../../architecture/03-master-key.md) 是一把 MPC key，此时如果直接使用 MPC key 的签名衍生 L2 层密钥的话，会导致 UniPass 服务器也可以获得此签名结果，这会影响 L2 层密钥的安全性。

> MPC key 的 2 个密钥分片分别是：
>
> `User key`：将会以 “密码 + keystore” 的形式存在，密码由用户自己保存，keystore 用户可以保存在云端服务器（如 iCloud、Google Drive 等）或者托管在信任的第三方存储中。
>
> `Server key`：目前将由 UniPass 官方进行安全管理，用户通过 2FA 验证身份来获得 Key 操作权限。2FA 验证将包括：邮箱/手机验证码，谷歌验证器，OAuth 验证，WebAuthn 等。

因此我们提供了一个可以只调用 user key 进行签名的功能。

## 使用用户端密钥进行签名

本功能仅针对 Popup SDK，关于 Popup SDK 的更多介绍请参考：[SDK 初始化](../popup-sdk/02-initialization.md)，[连接钱包参数配置](../popup-sdk/03-connect-wallet.md)

### 安装指定版本 SDK 包

```
npm install unipasswallet/popup-sdk@1.1.5-alpha.2
```

新增 `starkKeyMessage` 参数说明:

- `starkKeyMessage`: 生成 starkKey or pubKeyHash 所需签名的消息，用户端密钥碎片会对此消息进行签名；

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
    starkKeyMessage: "Hello StarKKey",
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
  starkKeyInfo?: string; // starkKeyInfo if pass starKeyMessage when login，it is a json string that contains publicKey and signature
}
```

## 通过 starkKeyInfo 生成 starkKey

```jsx
// usage of starkKeyInfo
const starkwareCrypto = require("@starkware-industries/starkware-crypto-utils");

function main(starkKeyInfo) {
  try {
    const { publicKey, signature } = JSON.parse(starkKeyInfo || "{}");
    const privateKey =
      starkwareCrypto.keyDerivation.getPrivateKeyFromEthSignature(signature);
    const startKey =
      starkwareCrypto.keyDerivation.privateToStarkKey(privateKey);
    console.log("publicKey:", publicKey);
    console.log("privateKey:", privateKey);
    console.log("startKey:", startKey);
  } catch (error) {
    console.log(error);
  }
}

main(
  '{"publicKey":"0x042286654d5268a267215de30a66bb998febb6516e96831eabec4d2781ffbe20db783a7992374aeb8568929e73b3dc9f13c3ea92a890bb0639a120f478590e882c","signature":"0x29a7efe2a5265eda0ed705f9fca9805db06d9c2605289de1084c06c6e2be39487e4cb041b34e1ffedb62ac99433c34fbcc98352029a627c335cea02cef52bf551c"}'
);
```

## Stark key 的 Demo 分支链接

[GitHub - UniPassID/unipass-popup-sdk at feat-starkey](https://github.com/UniPassID/unipass-popup-sdk/tree/feat-starkey)