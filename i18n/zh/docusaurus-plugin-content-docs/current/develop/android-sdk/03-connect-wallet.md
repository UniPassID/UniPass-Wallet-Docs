---
sidebar_position: 3
---

# 连接至 UniPass Wallet

```java
var loginCompletableFuture: CompletableFuture<LoginOutput> = unipassInstance.login()
loginCompletableFuture.whenComplete{ output, error ->
    if (error == null) {
        Log.d("Unipass Login", "success")
    } else {
        Log.d("Unipass Login", error.message ?: "Something went wrong")
    }
}
```

`newborn` 可以被用来追踪新注册用户。
