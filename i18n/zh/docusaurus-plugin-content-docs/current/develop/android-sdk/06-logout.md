---
sidebar_position: 6
---

# 登出账户

## 代码示例

```java
/// 该操作会清除本地 upAccount 数据
unipassInstance.logout(object : UnipassCallBack<Void> {
    override fun success(output: Void?) {
        Log.d("Unipass Logout", "success")
    }
    override fun failure(error: Exception) {
        Log.d("Unipass Logout", error.message ?: "Something went wrong")
    }
})
```
