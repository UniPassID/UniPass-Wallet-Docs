---
sidebar_position: 3
---

# 连接至 UniPass Wallet

调用`login`方法获取UniPass Account `UniPassUserInfo`信息。

UniPass 目前支持自定义登录选项设置, 包括下列选项:
- `connectType`: 指定 UniPass 通过特定方式登录，目前提供的选项有 `google`, `email` 和 `both`. 默认值为 `both`, 表示允许支持的任意方式进行登录.
- `authorize`: 如果设置为 `true`, UniPass 将会返回一个自动生成的 `Sign-in With Ethereum` 消息和对应的签名. 默认值为 `false`.
- `returnEmail`: 如果设置为 `true`, UniPass 账户邮箱 email 将会返回. 默认值为 `false`.

## 类型定义:

```swift
public struct UniPassSDKLoginOption {
    public var connectType: ConnectType? = ConnectType.both
    public var authorize: Bool? = false
    public var returnEmail: Bool? = false
    
    public init(connectType: ConnectType?, authorize: Bool?, returnEmail: Bool?) {
        self.connectType = connectType
        self.authorize = authorize
        self.returnEmail = returnEmail
    }
}

public struct UniPassUserInfo: Codable {
    public let address: String
    public let email: String?
    public let newborn: Bool?
    public let message: String?
    public let signature: String?
}

```

## 代码示例

```swift
    func loginBtnClicked() {
        unipassSdk?.logIn(loginSuccessBlock: { userinfo in
            print("unipassSdk: Login successfully ✅")
            self.userIdLabel?.text = userinfo.address
        }, loginErrorBlock: { error in
            print("unipassSdk: Login failed ❎", error)
        }, loginOption: UniPassSDKLoginOption(connectType: ConnectType.google, authorize: false, returnEmail: emailReturnSwitch?.isOn))
    }
```

`newborn` 表示用户是否在本次连接过程中注册


## Sign-in With Ethereum 签名验证

如果您将 `authorize` 设置为 `true`，你可能需要进行 Sign-in With Ethereum 验签，请参考 [**Sign-in With Ethereum**](../verifying-messages/02-sign-in-with-ethereum.md)。