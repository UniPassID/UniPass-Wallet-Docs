---
sidebar_position: 5
---

# 签名消息

## 相关类型定义：

```java
enum class SignType(val value: String) {
    @SerializedName("PersonalSign")
    PersonalSign("PersonalSign"),

    @SerializedName("SignTypedData")
    SignTypedData("SignTypedData"),
}

data class SignInput (
    val from: String,
    val type: SignType,
    val msg: String
)
```

## 代码示例

```java
if (unipassInstance.isLogin()) {
    var signInput = SignInput(unipassInstance.getAddress(), SignType.PersonalSign, "message to be signed")
    var signMsgCompletableFuture = unipassInstance.signMessage(signInput)
    signMsgCompletableFuture.whenComplete{ output, error ->
        if (error == null) {
            Log.d("Unipass Sign Message", "success")
        } else {
            Toast.makeText(this, error.message, Toast.LENGTH_SHORT).show()
            Log.d("Unipass Sign Message", error.message ?: "Something went wrong")
        }
    }
}
```
