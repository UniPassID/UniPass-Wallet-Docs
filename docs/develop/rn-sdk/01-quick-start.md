---
sidebar_position: 1
---

# Quick Start

| Version  | Last updated   | UniPass Wallet Entry URL           | UPgrade Instruction                                                                    |
| -------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.1.0   | 2023.02.23     | https://testnet.wallet.unipass.id/ | Add Connect / Transfer / Sign Message / Logout support                                 |

## Requirements

 - react-native 0.60+

 - @react-native-async-storage/async-storage ^1.17.11

## Installation

- ## Install

#### With npm:

```
npm install @unipasswallet/react-native-sdk
npm install @react-native-async-storage/async-storage
```

#### With Yarn

``` 
yarn add @unipasswallet/react-native-sdk
yarn add @react-native-async-storage/async-storage
```

On iOS, use CocoaPods to add the native RNAsyncStorage to your project:

```
cd ios
npx pod-install
```

- ## Enabling Deep Links

#### Android

For instructions on how to add support for deep linking on Android, refer to Enabling [Deep Links for App Content - Add Intent Filters for Your Deep Links.](https://developer.android.com/training/app-links/deep-linking#adding-filters)

Set the launchMode of MainActivity to singleTask in AndroidManifest.xml. 

```
<activity
  android:name=".MainActivity"
  android:launchMode="singleTask">
```

See [documentation](https://reactnative.dev/docs/linking) for more information.

#### IOS

Add the following lines to your `AppDelegate.m` in ios folder

```
// iOS 9.x or newer
#import <React/RCTLinkingManager.h>

- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}
```

If you're targeting iOS 8.x or older, you can use the following code instead:

```
// iOS 8.x or older
#import <React/RCTLinkingManager.h>

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
```

Then you need to add URLTypes configure in Info.plist

```
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>unipass</string>
    </array>
    <key>CFBundleURLName</key>
    <string>com.unipass.wallet</string>
  </dict>
  <dict>
    <key>CFBundleURLName</key>
    <string></string>
  </dict>
</array>
```

If your app is using Universal Links, you'll need to add the following code as well:

```
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
 restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
 return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
}
```

- ## Then you can use UniPassSDK in your project:

```typescript
import UniPassWallet from '@unipasswallet/react-native-sdk'
```


