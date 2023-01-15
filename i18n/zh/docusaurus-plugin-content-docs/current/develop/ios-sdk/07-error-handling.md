---
sidebar_position: 7
---

# 错误处理

在使用 UniPass SDK 的过程中，可能会抛出下列错误：

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
|noBundleIdentifierFound| | App bundle id 未设置|
|userNotLogin| | 用户未登录 |
|userCancelled| msg | 用户在 UniPass 页面中点击 `cancel` 按钮，拒绝了相关请求 |
|appCancelled| | 用户关闭了 webview 打开请求 |
|invalidFromAddress| | 签名或发交易时传入了无效的 from 地址 |
|invalidTransaction| | 无效的交易 |
|unknownError| | 未知错误 |
|runtimeError| msg | 运行时错误，具体原因将在 msg 参数中显示 |
|encodingError| | 编码请求参数错误 |
|decodingError| | 解码响应参数错误 |
