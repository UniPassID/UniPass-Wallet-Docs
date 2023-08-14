---
sidebar_position: 3
---

# Initialize Smart Account

## Initialize `SmartAccount`

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
To initialize the smart account, you need to init the active chainId by default.
:::

## Methods of `SmartAccount`

The instance of `SmartAccount` returns the following functions:

- Get Smart Account Info
    - `address()` : returns the address of your smart account.
    - `isDeployed()` : returns the result whether your smart account is deployed in current chain.
    - `chainId()`: returns current chain id of your smart account.
- `switchChain()`: switch active chain.
- `sendTransaction()`: returns the response of transaction
- `signMessage()`: returns the signature using personal sign
- `signTypedData()`: returns the signature using sign typed data

## Get Info of `SmartAccount`

### `address()`

This returns the address of your smart account.

```swift
let address = try? await smartAccount.address();
```

### `isDeployed()` 

This returns the result whether your smart account is deployed in current chain.

```swift
let isDeployed = try? await smartAccount.isDeployed();
```

### `chainId()`

This returns current chain of your smart account.

```swift
let chainId = try? smartAccount.chainId(); // ChainID
```

### `switchChain()`

Switch active chain.

```swift
try? smartAccount.switchChain(chainId: chainId); // Notice that chainId must be included in the `chainOptions`
```