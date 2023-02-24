---
sidebar_position: 1
---

# 快速开始

| 更新版本  | 更新日期   | 默认使用 Domain          | 更新说明                                                                   |
| -------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.1.0   | 2023.02.23     | https://testnet.wallet.unipass.id/ | Add Connect / Transfer / Sign Message / Logout support                                 |

## 环境依赖

`react-native 0.60+`

`@react-native-async-storage/async-storage ^1.17.11`

## 安装和使用

- ## 安装

#### 通过 npm:

```
npm install @unipasswallet/react-native-sdk
npm install @react-native-async-storage/async-storage
```

#### 通过 Yarn

``` 
yarn add @unipasswallet/react-native-sdk
yarn add @react-native-async-storage/async-storage
```

在 IOS 场景中，可能需要使用 CocoaPods 来添加 RNAsyncStorage 的原生依赖到项目中:

```
cd ios
npx pod-install
```

- ## 开启深度链接

#### Android

有关如何在Android上添加对深度链接的支持的说明，请参阅 [Deep Links for App Content - Add Intent Filters for Your Deep Links.](https://developer.android.com/training/app-links/deep-linking#adding-filters)

在 AndroidManifest.xml 中设置 MainActivity 的 launchMode 为 singleTask。

阅读 [相关文档](https://reactnative.dev/docs/linking) 以获取更多资料。

#### IOS

将以下代码添加到项目 ios 文件夹的 `AppDelegate.m` 中

```
// iOS 9.x 或以上版本
#import <React/RCTLinkingManager.h>

- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}
```

如果您的构建产物是iOS 8.x 或更老的版本，您可以使用以下代码代替

```
// iOS 8.x 或以前版本
#import <React/RCTLinkingManager.h>

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
```

然后您需要在 Info.plist 中添加 URLTypes 配置，以下配置仅供参考

```
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>${Your app Scheme}</string>
    </array>
    <key>CFBundleURLName</key>
    <string>{Your Bundle URL name}</string>
  </dict>
  <dict>
    <key>CFBundleURLName</key>
    <string></string>
  </dict>
</array>
```

如果你的应用程序使用 Universal Links，你还需要添加以下代码:

```
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
 restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
 return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
}
```

- ## 现在您可以使用 UniPassWalletSDK 在您的项目中:

```typescript
import UniPassWallet from '@unipasswallet/react-native-sdk'
```


