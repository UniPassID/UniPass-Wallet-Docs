---
sidebar_position: 5
---

# Sign Message and Verify

## Type definitions:

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

## Code sample

```java
// Ensure that the user is authorized to log in
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
