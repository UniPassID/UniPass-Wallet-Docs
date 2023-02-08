---
sidebar_position: 1
---

# Quick Start

| Version  | Last updated   | UniPass Wallet Entry URL           | UPgrade Instruction                                                                    |
| -------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.0.11  | 2023.02.07     | https://testnet.wallet.unipass.id/ | Move login parameter *connectType* to *loginOption*, and add more options like returnEmail, authorize etc to *loginOption*. |
| v0.0.10  | 2023.02.06     | https://testnet.wallet.unipass.id/ | Add optional parameter *loginOption* to the login method                           |
| v0.0.9   | 2023.02.03     | https://testnet.wallet.unipass.id/ | Add option *deep* for logout. Website state won't be cleared when deep is set to false |
| v0.0.8   | 2023.01.29     | https://testnet.wallet.unipass.id/ | Support buildType:minifyEnable                                                         |
| v0.0.7   | 2023.01.15     | https://testnet.wallet.unipass.id/ | Chore: Throw Exception when user close browser or interrupt process                    |
| v0.0.6   | 2023.01.13     | https://testnet.wallet.unipass.id/ | Add overload API login, allow connectType for login . Code optimizing                  | 
| v0.0.5   | 2023.01.09     | https://testnet.wallet.unipass.id/ | Add UniPassActivity , remove requirements for singleTop launchMode . UniPassSDKOptions adds parameter: activity |
| v0.0.3   | 2023.01.04     | https://testnet.wallet.unipass.id/ | Add Connect / Transfer / Sign Message / Logout support                                 |

## Source Code

Source code of the SDK can be found on [Github](https://github.com/UniPassID/UniPass-Android-SDK).

You can have a look at the [examples](https://github.com/UniPassID/UniPass-Android-SDK/tree/main/app) made on top of this SDK and try it out yourself.

### Android demo

You can download Android demo apk from Google drive:

- [unipass_android_demo_v0.0.3.apk](https://drive.google.com/file/d/1U1AnEpxHjZmroz-03veZ8Q0-h7aqaR87/view?usp=sharing)

:::tip
The UniPass Wallet domain used in Demo project is: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## Requirements

Android `API version 21` or newer

## Installation

1. In your project-level `build.gradle` or `settings.gradle` file, add JitPack repository:

```
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }  // Add this line
  }
}
```

2. In your app-level `build.gradle` dependencies section, add the following:

```
dependencies {
    // Replace {Version} with the version you what. For example v0.0.5
    implementation 'com.github.UniPassID:UniPass-Android-SDK:{Version}'
}
```

3. Add UniPassActivity / Configure Deep Link

Open your app's AndroidManifest.xml file and add UniPassActivity activity in your application, add deep link intent filter to UniPassActivity activity: 
You can refer to the [android developer documents](https://developer.android.com/training/app-links/deep-linking)

```xml
<activity
    android:name="com.unipass.core.UniPassActivity"
    android:exported="true"
    android:launchMode="singleTop">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="unipassapp"
            android:host="com.unipass.wallet"
            android:pathPattern="/*"
            android:pathPrefix="/redirect" />
    </intent-filter>
</activity>
```

If you are using v0.0.3 or below, you can add just deep link intent to your activity, but you should make sure your activity launchMode is set to singleTop

```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />

  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />

  <!-- Accept URIs: {YOUR_APP_PACKAGE_NAME}://* -->
  <data android:scheme="{YOUR_APP_PACKAGE_NAME}" />
  <!-- For reference only -->
  <data android:scheme="unipassapp"
        android:host="com.unipass.wallet"
        android:pathPattern="/*"
        android:pathPrefix="/redirect" />
</intent-filter>
```

Make sure your sign-in activity launchMode is set to singleTop in your AndroidManifest.xml if you are using v0.0.3 or below

```xml
<activity
  android:launchMode="singleTop"
  android:name=".YourActivity">
  // ...
</activity>
```

Open your app's AndroidManifest.xml file and add the following permission: 
`<uses-permission android:name="android.permission.INTERNET" />`

4. Then you can use UniPassSDK in your project:

```Kotlin
import com.unipass.core.UniPassSDK
```


