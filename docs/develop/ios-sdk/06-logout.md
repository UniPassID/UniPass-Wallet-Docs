---
sidebar_position: 6
---

# Logout Account

## Sample Code

```swift
// logout will clear local upAccount data
unipassSdk?.logOut(logOutSuccessBlock: {
    print("unipassSdk: Logout successfully ✅")
    self.refreshUI()
}, logoutErrorBlock: { error in
    print("unipassSdk: Logout failed ❎", error)
}, deep: false)
```
