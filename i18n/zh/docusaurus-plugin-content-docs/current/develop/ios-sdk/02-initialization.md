---
sidebar_position: 2
---

# 初始化

## 创建 UniPassSDK 实例

通过传入自定义的配置信息 UniPassSDKOptions:

```swift
let unipass = UniPassSDK(UniPassSDKOptions)
```

### 参数

UniPassSDKOptions

| 属性 | 类型 | 是否必须| 描述|
| ----------- | ---------------------------------- | -------- | ------------------------------------------------------------------------- |
| environment | UniPassSDK.Environment            | 是 | SDK 网络类型 Mainnet 或 Testnet |
| context     | UIKit.UIViewController            | 否 | 应用上下文 |
| walletUrl   | String                             | 否 | 钱包 URL，默认 https://testnet.wallet.unipass.id          |
| appSettings | UniPassSDK.UniPassSDKAppSettings | 否 | [App自定义配置](#App自定义设置) 用于页面展示 (logo, name, 主题等)  |

### App自定义设置

```swift
public class UniPassSDKAppSetting: NSObject {
    public var chain: ChainType = .polygon
    public var appName: String?
    public var appIcon: String?
    public var theme: UniPassTheme = .dark
}

public enum ChainType: String {
    case eth
    case polygon
    case bsc
    case rangers
    case scroll
}

public enum UniPassTheme: String {
    case light
    case dark
    case cassava
}

```

### 代码示例

```swift
   // init app setting
   let setting = UniPassSDKAppSetting()
   setting.appName = "testWallect"
   setting.chain = .polygon
   setting.theme = .dark
   
   // init sdk option
   let option = UniPassSDKOption()
   option.environment = .Testnet
   option.appSetting = setting
   option.context = self
   
   // init UniPassSDK
   let unipassSdk = UniPassSDK(sdkOption: option)
```