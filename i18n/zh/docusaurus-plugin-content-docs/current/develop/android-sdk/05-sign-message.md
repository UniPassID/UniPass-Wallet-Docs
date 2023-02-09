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

class SignOutput: BaseOutput(OutputType.SignMessage) {
    val signature: String? = null
}
```

## 代码示例

```java
// 请确认用户已授权登录
if (unipassInstance.isLogin()) {
    var signInput = SignInput(unipassInstance.getAddress(), SignType.PersonalSign, "message to be signed")
    unipassInstance.signMessage(signInput, object : UnipassCallBack<SignOutput> {
        override fun success(output: SignOutput?) {
            Log.d("Unipass Sign Message", "success")
        }
        override fun failure(error: Exception) {
            Log.d("Unipass Sign Message", error.message ?: "Something went wrong")
        }
    })
}
```

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)