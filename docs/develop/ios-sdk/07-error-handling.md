---
sidebar_position: 7
---

# Error Handling

While using the UniPass SDK, errors may be thrown. In order to handle errors more gracefully, the relevant errors are defined as follows:

```swift
public enum UniPassError: Error {
    case noBundleIdentifierFound
    case userNotLogin
    case userCancelled(msg: String?)
    case appCancelled
    case invalidFromAddress
    case invalidTransaction
    case unknownError
    case runtimeError(msg: String)
    case decodingError
    case encodingError
}
```

| Error | Parameter | Description                                                              | 
| ----------- | ----- | ---------------------------------- | 
|noBundleIdentifierFound| | App bundle id not found|
|userNotLogin| |Call signMessage or sendTransaction when user not login |
|userCancelled| msg | User click `cancel` button Login / SignMessage / SendTransaction in UniPass pages |
|appCancelled| | User close webview or reject webview open request |
|invalidFromAddress| | SignMessage / SendTransaction with invalid from address |
|invalidTransaction| | SendTransaction with invalid parameters |
|unknownError| | unknown errors |
|runtimeError| msg | runtime error occured in UniPass Wallet |
|encodingError| | encode request parameters errors |
|decodingError| | deocode response errors |
