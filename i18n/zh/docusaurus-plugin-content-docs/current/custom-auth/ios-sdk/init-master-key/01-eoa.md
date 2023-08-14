---
sidebar_position: 1
---

# 将 EOA 作为 Master Key

Master key 是签名消息和交易的 signer，您可以使用 SDK 提供的 EOASigner 类创建 EOA Singer。

## 从 EOA 初始化 signer

```swift
import web3

let keyStorage = EthereumKeyLocalStorage()
                        
let masterKeySigner = try? EthereumAccount.create(replacing: keyStorage, keystorePassword: "MY_PASSWORD")
```