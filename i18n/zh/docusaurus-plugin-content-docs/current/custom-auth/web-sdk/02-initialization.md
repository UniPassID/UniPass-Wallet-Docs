---
sidebar_position: 3
---

# 初始化智能钱包

## 初始化 `SmartAccount`

```tsx
import { SmartAccount } from "@unipasswallet/smart-account";

/**
 * export type SmartAccountOptions = {
 *  appId: string;                             // appId registered From UniPass Dashboard
 *  masterKeySigner: Signer;                   // Got Master Key Signer
 *  chainOptions: {                            // Chain Options
 *    chainId: number;
 *    rpcUrl: string;                          // The Rpc Url matched the chainId
 *    relayerUrl?: string;                     // relayer url, default official relayer
 *  }[];
 *  fetch?: typeof fetch;
 *  unipassServerUrl?: string;
 *  keysetJson?: string;                            // the keyset json string
 *  address?: string;                               // the address of smart account
 * };
 */

const smartAccount = new SmartAccount({
  masterKeySigner: signer,
  appId,
  chainOptions:[{
		chainId,
		rpcUrl,
	}],
});

await smartAccount.init({ chainId }); // init with active chain id. Notice that the chainId must be included in the `chainOptions`.
```

:::tip
初始化 `SmartAccount` 时，您需要设置初始化的 chainId。
:::

---

## `SmartAccount` 的方法

`SmartAccount` 实例提供以下函数：

- 获取 SmartAccount 的信息
    - `getAddress()`: 返回 SmartAccount 的地址。
    - `isDeployed()`: 返回当前链上 SmartAccount 是否已部署。
    - `getProvider()`: 返回 SmartAccount 当前使用的提供者。
    - `getChainId()`: 返回 SmartAccount 当前的链 ID。
    - `destroy()`: 清除当前登录的账户。
- `switchChain()`: 切换活动链，并返回具有新链的 SmartAccount。
- `sendTransaction()`: 返回交易的响应。
- `signMessage()`: 返回使用个人签名的消息签名。
- `signTypedData()`: 返回使用签名类型数据的签名。

## 获取 `SmartAccount` 的信息

### `getAddress()`

返回 SmartAccount 的地址。

```tsx
const address = await smartAccount.getAddress();
```

### `isDeployed()`

返回当前链上 SmartAccount 是否已部署。

```tsx
const isDeployed = await smartAccount.isDeployed();
```

### `getProvider()`

返回 SmartAccount 当前使用的提供者。

```tsx
const provider = smartAccount.getProvider();
```

### `getChainId()`

返回 SmartAccount 当前的链 ID。

```tsx
const chainId = smartAccount.getChainId();
```

### `switchChain()`

切换链，并返回具有新链的 SmartAccount。

```tsx
smartAccount = await smartAccount.switchChain(chainId); // 注意：chainId 必须包含在 `chainOptions` 中
```

### `destroy()`

清除当前登录的账户。

```tsx
await smartAccount.destroy();
```