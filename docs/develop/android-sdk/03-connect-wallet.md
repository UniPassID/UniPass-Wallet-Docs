---
sidebar_position: 3
---

# Connect UniPass Wallet

## Type definitions:

```java
interface UnipassCallBack <T>{
    fun success(output: T?)
    fun failure(exception: Exception)
}

data class LoginOption (
    val connectType: ConnectType,
    val authorize: Boolean
)

class LoginOutput: BaseOutput(OutputType.Login) {
    val userInfo: UserInfo? = null
}

data class UserInfo (
    var email: String?,
    var address: String,
    var newborn: Boolean = false,
    val message: String?,
    val signature: String?
)

enum class OutputType {
    @SerializedName("UP_LOGIN")
    Login,

    @SerializedName("UP_LOGOUT")
    Logout,

    @SerializedName("UP_SIGN_MESSAGE")
    SignMessage,

    @SerializedName("UP_TRANSACTION")
    SendTransaction
}

enum class ConnectType(value: String) {
    GOOGLE("google"),

    EMAIL("email"),

    BOTH("both"),
}

```

## Sample Code

```java
unipassInstance.login(object : UnipassCallBack<LoginOutput> {
    override fun success(output: LoginOutput?) {
        Log.d("Unipass Login", "success")
    }

    override fun failure(error: Exception) {
        Log.d("Unipass Login", error.message ?: "Something went wrong")
    }
}, LoginOption(ConnectType.BOTH, authorize))
// LoginOption is not required, it is used to customize login option
// Or you can use an overloaded login so that users connect at the type you choose
// connectType default is BOTH
unipassInstance.login(ConnectType.GOOGLE, object : UnipassCallBack<LoginOutput> {
    override fun success(output: LoginOutput?) {
        Log.d("Unipass Login", "success")
    }

    override fun failure(error: Exception) {
        Log.d("Unipass Login", error.message ?: "Something went wrong")
    }
})
```

`newborn` can be used to track new registration count.
