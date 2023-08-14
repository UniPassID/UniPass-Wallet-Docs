---
sidebar_position: 1
---

# Init Master Key from EOA 

Master key the main signer for signing messages and transactions. Master Key Signer is the main signer for signing messages and transactions. You can create the  EOA Signer using the EOASigner class provided by the SDK.

## Init Master Key from EOA

```swift
import web3

let keyStorage = EthereumKeyLocalStorage()
                        
let masterKeySigner = try? EthereumAccount.create(replacing: keyStorage, keystorePassword: "MY_PASSWORD")
```