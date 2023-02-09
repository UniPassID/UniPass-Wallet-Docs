---
sidebar_position: 2
---

# Initialization

## Creating a UniPassSDK instance

The UniPassSDK Constructor takes an object with UniPassSDKOptions as input

```java
unipassInstance = UniPassSDK(UniPassSDKOptions)
```

### Arguments

UniPassSDKOptions

| Parameter   | Type                               | Mandatory | Description                                                              |
| ----------- | ---------------------------------- | -------- | ------------------------------------------------------------------------- |
| context     | android.content.Context            | Yes      | Android context to launch UniPass Wallet, usually is the current activity |
| activity    | AppCompatActivity                  | Yes      | Android activity to use UniPassSDK                                        |
| env         | com.unipass.core.types.Environment | Yes      | SDK Environment                                                           |
| redirectUrl | Uri                                | No       | URL that UniPassSDK will redirect API responses                           |
| walletUrl   | String                             | No       | UniPass Wallet Url，Default is https://testnet.wallet.unipass.id          |
| appSettings | com.unipass.core.types.AppSettings | No       | configuration optional object to use custom app settings. Refer [AppSettings](#appsettings) for more info  |

### AppSettings

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

### Code sample

```java
unipassInstance = UniPassSDK(
    UniPassSDKOptions(
        context = this,
        activity = this,
        redirectUrl = Uri.parse("unipassapp://com.unipass.wallet/redirect"),
        env = Environment.TESTNET
    )
)
```

If you are using v0.0.3 or below, you also need to call the setResultUrl API in onNewIntent

## Set Result URL

```java
override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    unipassInstance.setResultUrl(intent?.data)
}
```
