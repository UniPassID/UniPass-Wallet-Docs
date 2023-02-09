---
sidebar_position: 5
---

# 签名消息

调用 `signMessage` 在 UniPass Wallet 中对指定的消息进行签名。 目前提供两种消息签名方法: `PersonalSign` 和 `SignTypedData`

## 类型定义:

```swift
public enum UniPassSignType: String {
    case PersonalSign
    case SignTypedData
}

public class UniPassSignInput: NSObject {
    public var from: String = ""
    public var type: UniPassSignType = .PersonalSign
    public var msg: String = ""
}

```

## 示例代码

```swift
// Ensure that the user is authorized to log in
if let userInfo = unipassSdk?.getUserInfo() {
    let signInput = UniPassSignInput()
    signInput.from = userInfo.address
    signInput.type = UniPassSignType.PersonalSign
    signInput.msg = signTextField?.text ?? "Test Sign Message"
        
    unipassSdk?.signMessage(signInput, SuccessBlock: { signature in
        print("unipassSdk: sign message successfully ✅", signature)
        self.signatureLabel?.text = signature
    }, ErrorBlock: { error in
        print("unipassSdk: sign message failed ❎", error)
    })
} else {
    print("unipassSdk: user not login ❎")
}

```

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)