---
sidebar_position: 3
---

# Connect UniPass Wallet

After the initialization is complete, invoke the `login` method to get information about the UniPass Account `UniPassUserInfo`.

UniPass currently supports customizing specific connect type for login. Currently, the login connect type provided are: `google` `email` `both`

## Type definitions:

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

## Sample Code

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

`newborn` can be used to track new registration count.
