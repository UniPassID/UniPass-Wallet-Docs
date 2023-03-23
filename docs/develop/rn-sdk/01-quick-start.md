---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

## Requirements

`react-native 0.60+`

## Installation

### Install

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

On iOS, use CocoaPods to add the native RNAsyncStorage to your project:

```
cd ios
npx pod-install
```

### Enabling Deep Links

#### Android

Open your app's AndroidManifest.xml file and add UniPassActivity activity in your application, add deep link intent filter to UniPassActivity activity. You can refer to the [android developer documents](https://developer.android.com/training/app-links/deep-linking)

```xml
<activity
    android:name="com.unipass.core.UniPassActivity"
    android:exported="true"
    android:launchMode="singleTop">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <!-- Replace { scheme/host/path } with YOUR_APP_PACKAGE_NAME -->
        <data
            android:scheme="{scheme}"
            android:host="{host}"
            android:pathPattern="/*"
            android:pathPrefix="/{path}" />
    </intent-filter>
</activity>
```

Then you can use UniPassSDK in your project:

```typescript
import UniPassWallet from '@unipasswallet/react-native-sdk'
```

## History Version

| Version  | Last updated   | UniPass Wallet Entry URL           | UPgrade Instruction                                                                    |
| -------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------- |
| v0.2.0   | 2023.03.06     | https://testnet.wallet.unipass.id/ | Add Connect / Transfer / Sign Message / Logout support                                 |