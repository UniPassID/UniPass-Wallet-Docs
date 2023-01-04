---
sidebar_position: 1
---

| Version | Last updated   | UniPass Wallet Entry URL        | UPgrade Instruction                                                                    |
| -------- | ---------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.0.3   | 2023.01.04 | https://testnet.wallet.unipass.id/ | Added support for Android API 21 or newer                                              |
| v0.0.2   | 2023.01.03 | https://testnet.wallet.unipass.id/ | Add Connect / Transfer / Sign Message / Logout support                                 |

## Source Code

Source code of the SDK can be found on [Github](https://github.com/UniPassID/UniPass-Android-SDK).

## Quick Start

You can have a look at the [examples](https://github.com/UniPassID/UniPass-Android-SDK/tree/main/app) made on top of this SDK and try it out yourself.

## Demo App

You can download Android demo apk from Google drive

- [unipass_android_demo_v0.0.2.apk](https://drive.google.com/file/d/1U1AnEpxHjZmroz-03veZ8Q0-h7aqaR87/view?usp=sharing)

:::tip
The UniPass Wallet domain used in Demo project is: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## Requirements

Android API version 21 or newer
  - v0.0.2 need Android API 24 or newer

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
    implementation 'com.github.UniPassID:UniPass-Android-SDK:v0.0.3'
}
```

3. Configure Deep Link

Open your app's AndroidManifest.xml file and add the following deep link intent filter to your activity: 
You can refer to the [android developer documents](https://developer.android.com/training/app-links/deep-linking)

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

Make sure your sign-in activity launchMode is set to singleTop in your AndroidManifest.xml

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


