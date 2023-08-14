---
sidebar_position: 3
---

# 初始化智能钱包

## 初始化 `SmartAccount`

```swift
import Shared
import CustomAuthSdk

// public struct SmartAccountOptions { 
//     public init(masterKeySigner: Signer? = nil, masterKeyRoleWeight: RoleWeight? = nil, appId: String, unipassServerUrl: String? = nil, chainOptions: Array<ChainOptions>);
// }
//
// public struct ChainOptions {   
//     public init(chainId: ChainID, rpcUrl: String, relayerUrl: String? = nil);
// }

let options = SmartAccountOptions(masterKeySigner: masterKeySigner, appId: appId,  chainOptions: [ChainOptions(chainId: ChainID.POLYGON_MUMBAI, rpcUrl: "https://node.wallet.unipass.id/polygon-mumbai")])

let smartAccount = SmartAccount(options:options)

let initOptions = SmartAccountInitOptions(chainId: ChainID.POLYGON_MUMBAI)
smartAccount.initialize(options: initOptions)
```

:::tip
初始化 `SmartAccount` 时，您需要设置初始化的 chainId。
:::

## `SmartAccount` 的方法

`SmartAccount` 实例提供以下函数：

- 获取 SmartAccount 的信息
    - `address()`: 返回 SmartAccount 的地址。
    - `isDeployed()`: 返回当前链上 SmartAccount 是否已部署。
    - `chainId()`: 返回 SmartAccount 当前的链 ID。
- `switchChain()`: 切换链
- `sendTransaction()`: 返回交易的响应。
- `signMessage()`: 返回使用个人签名的消息签名。
- `signTypedData()`: 返回使用签名类型数据的签名。

## 获取 `SmartAccount` 的信息

### `address()`

返回 SmartAccount 的地址。

```swift
let address = try? await smartAccount.address();
```

### `isDeployed()` 

返回当前链上 SmartAccount 是否已部署。

```swift
let isDeployed = try? await smartAccount.isDeployed();
```

### `chainId()`

返回 SmartAccount 当前的链 ID。

```swift
let chainId = try? smartAccount.chainId(); // ChainID
```

### `switchChain()`

切换链

```swift
try? smartAccount.switchChain(chainId: chainId); // Notice that chainId must be included in the `chainOptions`
```