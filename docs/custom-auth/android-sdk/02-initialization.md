---
sidebar_position: 3
---

# Initialize Smart Account

## Initialize `SmartAccount`

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
To initialize the smart account, you need to init the active chainId by default.
:::

## Methods of `SmartAccount`

The instance of `SmartAccount` returns the following functions:

- Get Smart Account Info
    - `getAddress()` : returns the address of your smart account.
    - `isDeployed()` : returns the result whether your smart account is deployed in current chain.
    - `getChainId()`: returns current chain id of your smart account.
- `switchChain()`: switch active chain.
- `sendTransaction()`: returns the response of transaction
- `signMessage()`: returns the signature using personal sign
- `signTypedData()`: returns the signature using sign typed data

## Get Info of `SmartAccount`

### `getAddress()`

This returns the address of your smart account.

```kotlin
val address = smartAccount.address();
```

### `isDeployed()` 

This returns the result whether your smart account is deployed in current chain.

```kotlin
val isDeployed = smartAccount.isDeployed();
```

### `getChainId()`

This returns current chain of your smart account.

```kotlin
val chainId = smartAccount.chainId(); // ChainID
```

### `switchChain()`

Switch active chain.

```kotlin
smartAccount.switchChain(chainId); // Notice that chainId must be included in the `chainOptions`
```