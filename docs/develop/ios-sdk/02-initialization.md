---
sidebar_position: 2
---

# Initialization

## Creating a UniPassSDK instance

The UniPassSDK Constructor takes an object with UniPassSDKOptions as input

```swift
let unipass = UniPassSDK(UniPassSDKOptions)
```

### Arguments

UniPassSDKOptions

| Parameter   | Type                               | Mandatory | Description                                                              |
| ----------- | ---------------------------------- | -------- | ------------------------------------------------------------------------- |
| environment | UniPassSDK.Environment            | Yes      | SDK Environment                                                           |
| context     | UIKit.UIViewController            | No | iOS context to launch UniPass Wallet, usually is the current view |
| walletUrl   | String                             | No       | UniPass Wallet Url，Default is https://testnet.wallet.unipass.id          |
| appSettings | UniPassSDK.UniPassSDKAppSettings | No       | configuration optional object to use custom app settings. Refer [UniPassSDKAppSettings](#appsettings) for more info  |

### AppSettings

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

### Code sample

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