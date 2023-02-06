---
sidebar_position: 3
---

# 连接至 UniPass Wallet

## 相关类型定义：

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

## 代码示例

```java
unipassInstance.login(object : UnipassCallBack<LoginOutput> {
    override fun success(output: LoginOutput?) {
        Log.d("Unipass Login", "success")
    }

    override fun failure(error: Exception) {
        Log.d("Unipass Login", error.message ?: "Something went wrong")
    }
})
// LoginOption不是必需的，用于自定义登录选项
// 或者您可以使用重载的方法，以便用户按您选择的类型连接
// connectType 默认值为 BOTH
unipassInstance.login(ConnectType.GOOGLE, object : UnipassCallBack<LoginOutput> {
    override fun success(output: LoginOutput?) {
        Log.d("Unipass Login", "success")
    }

    override fun failure(error: Exception) {
        Log.d("Unipass Login", error.message ?: "Something went wrong")
    }
})
```

`newborn` 可以被用来追踪新注册用户。
