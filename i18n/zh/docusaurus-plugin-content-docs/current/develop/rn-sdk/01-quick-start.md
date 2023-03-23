---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 快速开始

## 环境依赖

`react-native 0.60+`

## 安装和使用

### 安装

<Tabs>
<TabItem value="npm">

```bash
npm install @unipasswallet/react-native-sdk
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @unipasswallet/react-native-sdk
```

</TabItem>
</Tabs>

在 IOS 场景中，可能需要使用 CocoaPods 来添加原生依赖到项目中:

```
cd ios
npx pod-install
```

### 开启深度链接

#### Android

在 app 的 AndroidManifest.xml 文件中添加 UniPassActivity， 并对 UniPassActivity 配置指向您应用的深层链接，具体配置可以参考 [android developer 文档](https://developer.android.com/training/app-links/deep-linking)

```xml
<activity
    android:name="com.unipass.core.UniPassActivity"
    android:exported="true"
    android:launchMode="singleTop">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <!-- Accept URIs: {YOUR_APP_PACKAGE_NAME}://* -->
        <data android:scheme="{YOUR_APP_PACKAGE_NAME}" />
        <!-- 以下配置可以供您参考 -->
        <data
            android:scheme="unipassapp"
            android:host="com.unipass.wallet"
            android:pathPattern="/*"
            android:pathPrefix="/redirect" />
    </intent-filter>
</activity>
```

现在您可以使用 UniPassWalletSDK 在您的项目中:

```typescript
import UniPassWallet from "@unipasswallet/react-native-sdk";
```

## 历史版本

| 更新版本 | 更新日期   | 默认使用 Domain                    | 更新说明                                               |
| -------- | ---------- | ---------------------------------- | ------------------------------------------------------ |
| v0.2.0   | 2023.03.06 | https://testnet.wallet.unipass.id/ | Add Connect / Transfer / Sign Message / Logout support |