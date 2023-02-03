---
sidebar_position: 6
---

# 登出账户

## 示例代码

```swift
// logout will clear local upAccount data
unipassSdk?.logOut(logOutSuccessBlock: {
    print("unipassSdk: Logout successfully ✅")
    self.refreshUI()
}, logoutErrorBlock: { error in
    print("unipassSdk: Logout failed ❎", error)
}, deep: false)
```
