---
sidebar_position: 3
---

# 连接至 UniPass Wallet

调用`login`方法获取UniPass Account `UniPassUserInfo`信息。

UniPass 目前支持自定义登录的特定连接类型。 目前提供的登录连接类型：`google` `email` `both`

## 类型定义:

```swift
public enum ConnectType: String {
    case google
    case email
    case both
}

public struct UniPassUserInfo: Codable {
    public let address: String
    public let email: String?
    public let newborn: Bool?
}

```

## 示例代码

```swift
    func loginBtnClicked(loginType: ConnectType) {
        unipassSdk?.logIn(loginType: loginType, loginSuccessBlock: { userinfo in
            print("unipassSdk: Login successfully ✅")
            self.userIdLabel?.text = userinfo.address
        }, loginErrorBlock: { error in
            print("unipassSdk: Login failed ❎", error)
        })
    }
```

`newborn` 表示用户是否在本次连接过程中注册
