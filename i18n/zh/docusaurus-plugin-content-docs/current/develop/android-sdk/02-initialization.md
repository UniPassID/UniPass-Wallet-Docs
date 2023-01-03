---
sidebar_position: 2
---

# 初始化

初始化 unipass SDK 包含以下两个步骤

1. 创建 unipass SDK 实例
2. 配置 Result URL

## 创建 unipass SDK 实例

通过传入自定义的配置信息 `UniPassSDKOptions`：

```java
unipassInstance = UniPassSDK(UniPassSDKOptions)
```

### 参数说明

UniPassSDKOptions

| 属性         |   类型                             | 是否必须 |   说明                                            |
| ----------- | ---------------------------------- | ------ | ------------------------------------------------- |
| context     | android.content.Context            | 是     | 应用上下文                                          |
| env         | com.unipass.core.types.Environment | 是     | SDK 环境参数                                        |
| redirectUrl | Uri                                | 否     | 重定向地址，用于重新唤起 app，需要根据您的 deep link 配置 |
| walletUrl   | String                             | 否     | 钱包 Url，默认 domain https://testnet.wallet.unipass.id   |
| appSettings | com.unipass.core.types.AppSettings | 否     | app 自定义配置，用于页面展示 （logo, icon, 主题色等）   |

```java
/// app 自定义配置（appSettings）
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

// 主题（UniPassTheme）
enum class UniPassTheme(val value: String){
    dark("dark"),
    light("light")
}
```

### 代码示例

```java
unipassInstance = UniPassSDK(
    UniPassSDKOptions(
        context = this!!,
        redirectUrl = Uri.parse("unipassapp://com.unipass.wallet/redirect"),
        env = Environment.TESTNET
    )
)
```

## 配置 Result URL

```java
override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    unipassInstance.setResultUrl(intent?.data)
}
```