---
sidebar_position: 1
---

# 快速开始

| 更新版本 | 更新日期   | 默认使用 Domain                    | 更新说明                                                                               |
| -------- | ---------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.0.1   | 2023.01.03 | https://testnet.wallet.unipass.id/ | 支持连接钱包，转账代币，签名功能，登出                                                 |

## 环境需求

Android API 24 或以上版本

## 安装和使用

1. 在您的项目的 `settings.gradle` 或 `build.gradle` 文件中, 添加 JitPack repository：

```
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }  // 添加本行
  }
}
```

2. 在 `build.gradle` 添加依赖：

```
dependencies {
    implementation 'com.github.UniPassID:UniPass-Android-SDK:v0.0.2'
}
```

3. 配置深层链接 (Deep Link)

在 app 的 AndroidManifest.xml 文件中添加指向您应用的深层链接，具体配置可以参考 [android developer 文档](https://developer.android.com/training/app-links/deep-linking)

```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />

  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />

  <!-- Accept URIs: {YOUR_APP_PACKAGE_NAME}://* -->
  <data android:scheme="{YOUR_APP_PACKAGE_NAME}" />
  <!-- 以下配置可以供您参考 -->
  <data android:scheme="unipassapp"
        android:host="com.unipass.wallet"
        android:pathPattern="/*"
        android:pathPrefix="/redirect" />
</intent-filter>
```

请确保 app 配置文件 `AndroidManifest.xml` 中您应用的 launchMode 已被设置为 singleTop

```xml
<activity
  android:launchMode="singleTop"
  android:name=".YourActivity">
  // ...
</activity>
```

4. 最后在您的 Java/Kotlin 代码中使用：

```Kotlin
import com.unipass.core.UniPassSDK
```

请在您的 Manifest file 文件中查看网络权限是否开启： `<uses-permission android:name="android.permission.INTERNET" />`

## 源码

SDK 源代码可以在 [Github](https://github.com/UniPassID/UniPass-Android-SDK) 中找到

## 快速开始

您可以浏览 [示例工程](https://github.com/UniPassID/UniPass-Android-SDK/tree/main/app) 并自行调试
