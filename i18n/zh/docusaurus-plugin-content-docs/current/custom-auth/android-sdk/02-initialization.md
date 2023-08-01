---
sidebar_position: 3
---

# 初始化智能钱包

## 初始化 `SmartAccount`

```kotlin
import com.unipass.smartAccount.*

// class SmartAccountOptions(
//    val masterKeySigner: Signer,
//    val appId: String,
//    val unipassServerUrl?: String,
//    val chainOptions: Array<ChainOptions>
// )
//
// class ChainOptions(
//    var chainId: ChainID,
//    var rpcUrl: String,
//    var relayerUrl: String?
// )

val smartAccountOption = SmartAccountOptions(
    signer,
    appId, // appId registered From UniPass Dashboard
    arrayOf(
        ChainOptions(
            ChainID.POLYGON_MUMBAI,
            "https://node.wallet.unipass.id/polygon-mumbai",
            "https://t.wallet.unipass.vip/relayer-v2-polygon"
        )
    )
)

val smartAccount = SmartAccount(smartAccountOption)
smartAccount.init(SmartAccountInitOptions(ChainID.POLYGON_MUMBAI))
```

:::tip
初始化 `SmartAccount` 时，您需要设置初始化的 chainId。
:::

## `SmartAccount` 的方法

`SmartAccount` 实例提供以下函数：

- 获取 SmartAccount 的信息
    - `getAddress()`: 返回 SmartAccount 的地址。
    - `isDeployed()`: 返回当前链上 SmartAccount 是否已部署。
    - `getChainId()`: 返回 SmartAccount 当前的链 ID。
- `switchChain()`: 切换链
- `sendTransaction()`: 返回交易的响应。
- `signMessage()`: 返回使用个人签名的消息签名。
- `signTypedData()`: 返回使用签名类型数据的签名。

## 获取 `SmartAccount` 的信息

### `getAddress()`

返回 SmartAccount 的地址。

```kotlin
val address = smartAccount.address();
```

### `isDeployed()` 

返回当前链上 SmartAccount 是否已部署。

```kotlin
val isDeployed = smartAccount.isDeployed();
```

### `getChainId()`

返回 SmartAccount 当前的链 ID。

```kotlin
val chainId = smartAccount.chainId(); // ChainID
```

### `switchChain()`

切换链

```kotlin
smartAccount.switchChain(chainId); // Notice that chainId must be included in the `chainOptions`
```