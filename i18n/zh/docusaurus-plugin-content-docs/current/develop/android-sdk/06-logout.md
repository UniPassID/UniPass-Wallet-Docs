---
sidebar_position: 6
---

# 登出账户 & 错误提示

## 登出账户

```java
/// 该操作会清除本地 upAccount 数据
var logoutCompletableFuture = unipassInstance.logout()
logoutCompletableFuture.whenComplete{ _, error ->
    if (error == null) {
        Log.d("Unipass Logout", "success")
    } else {
        Log.d("Unipass Logout", error.message ?: "Something went wrong")
    }
}
```
