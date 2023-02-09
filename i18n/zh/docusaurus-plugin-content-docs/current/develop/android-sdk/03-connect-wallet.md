---
sidebar_position: 3
---

# 连接至 UniPass Wallet

调用`login`方法获取UniPass Account `UniPassUserInfo`信息。

UniPass 目前支持自定义登录选项设置, 包括下列选项:
- connectType: 指定 UniPass 通过特定方式登录，目前提供的选项有 `google`, `email` 和 `both`. 默认值为 `both`, 表示允许支持的任意方式进行登录.
- authorize: 如果设置为 `true`, UniPass 将会返回一个自动生成的 `Sign-in With Ethereum` 消息和对应的签名. 默认值为 `false`.
- returnEmail: 如果设置为 `true`, UniPass 账户邮箱 email 将会返回. 默认值为 `false`.

## 相关类型定义：

```java
interface UnipassCallBack <T>{
    fun success(output: T?)
    fun failure(exception: Exception)
}

data class LoginOption (
    val connectType: ConnectType? = ConnectType.BOTH,
    val authorize: Boolean? = false,
    val returnEmail: Boolean? = false
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
}, LoginOption(ConnectType.BOTH, authorize))
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

## Sign-in With Ethereum 签名验证

`Sign-in With Ethereum` 消息和签名的验证可参考：[**Popup-SDK 授权验证**](../popup-sdk/03-connect-wallet.md#sign-in-with-ethereum-签名验证)