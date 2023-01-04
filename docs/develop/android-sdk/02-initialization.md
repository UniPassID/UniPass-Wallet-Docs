---
sidebar_position: 2
---

# Initialization

Initialization is a two-step process:

1. Creating a unipass SDK Instance
2. Setting a Result URL

## 创建 unipass SDK 实例

The UniPassSDK Constructor takes an object with UniPassSDKOptions as input

```java
unipassInstance = UniPassSDK(UniPassSDKOptions)
```

### Arguments

UniPassSDKOptions

| Parameter   | Type                               | Mandatory | Description                                                              |
| ----------- | ---------------------------------- | -------- | ------------------------------------------------------------------------- |
| context     | android.content.Context            | Yes      | Android context to launch UniPass Wallet, usually is the current activity |
| env         | com.unipass.core.types.Environment | Yes      | SDK Environment                                                           |
| redirectUrl | Uri                                | No       | URL that UniPassSDK will redirect API responses                           |
| walletUrl   | String                             | No       | UniPass Wallet Url，Default is https://testnet.wallet.unipass.id          |
| appSettings | com.unipass.core.types.AppSettings | No       | configuration optional object to use custom app settings. Refer [AppSettings](#appsettings) for more info  |

# AppSettings

```java
// appSettings
data class AppSettings(
    val chain: ChainType = ChainType.polygon,
    val appName: String? = null,
    val appIcon: String? = null,
    val theme: UniPassTheme = UniPassTheme.dark
)

// ChainType
enum class ChainType(val value: String) {
    eth("eth"),
    polygon("polygon"),
    bsc("bsc"),
    rangers("rangers"),
    scroll("scroll")
}

//（UniPassTheme）
enum class UniPassTheme(val value: String){
    dark("dark"),
    light("light")
}
```

### Sample Code

```java
unipassInstance = UniPassSDK(
    UniPassSDKOptions(
        context = this!!,
        redirectUrl = Uri.parse("unipassapp://com.unipass.wallet/redirect"),
        env = Environment.TESTNET
    )
)
```

## Set Result URL

```java
override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    unipassInstance.setResultUrl(intent?.data)
}
```
