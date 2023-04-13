---
sidebar_position: 3
---

# Connect UniPass Wallet

After the initialization is complete, invoke the `login` method to get information about the UniPass Account `UniPassUserInfo`.

UniPass currently supports customizing login options for `login` method, including:
- `connectType`: indicate the provider used to login UniPass, including `google`, `email` and `both` options. The default value is `both`, indicating use any supported way to login UniPass.
- `authorize`: if set to `true`, UniPass will return a auto generated `Sign-in With Ethereum` message, and a signature for the message. The default value is `false`.
- `returnEmail`: if set to `true`, UniPass account `email` will be returned. The default value is `false`.


## Type definitions

```swift
public enum ConnectType: String {
    case google
    case email
    case both
}

public struct UniPassSDKLoginOption {
    public var connectType: ConnectType? = ConnectType.both
    public var authorize: Bool? = false
    public var returnEmail: Bool? = false
    public var forceLogin: Bool? = false
    
    public init(connectType: ConnectType?, authorize: Bool?, returnEmail: Bool?, forceLogin: Bool?) {
        self.connectType = connectType
        self.authorize = authorize
        self.returnEmail = returnEmail
        self.forceLogin = forceLogin
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

## Code sample

```swift
    func loginBtnClicked() {
        unipassSdk?.logIn(loginSuccessBlock: { userinfo in
            print("unipassSdk: Login successfully ✅")
            self.userIdLabel?.text = userinfo.address
        }, loginErrorBlock: { error in
            print("unipassSdk: Login failed ❎", error)
        }, loginOption: UniPassSDKLoginOption(connectType: ConnectType.google, authorize: false, returnEmail: emailReturnSwitch?.isOn, forceLogin: forceLoginSwitch?.isOn))
    }
```

`newborn` can be used to track new registration count.

## Verification for Sign-in With Ethereum

If you set `authorize` to `true`, you may need to verify the signature of Sign-in With Ethereum, please refer to [**Sign-in With Ethereum**](../verifying-messages/02-sign-in-with-ethereum.md).