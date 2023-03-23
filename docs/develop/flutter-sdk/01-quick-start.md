---
sidebar_position: 1
---

# Quick Start

## Source Code

- [Flutter web SDK GitHub](https://github.com/UniPassID/unipass-flutter-web-sdk)
- [Pub Dev](https://pub.dev/packages/unipass_web_sdk)
- [Demo Project](https://github.com/UniPassID/unipass-flutter-web-sdk/tree/master/example)

### Android demo

Please download the installation package of Android on Google drive

- [unipass_flutter_demo_v0.0.2.apk](https://drive.google.com/file/d/1BqGSfPX39m7Kqk2KRhIVVQqCt0waC1mY/view?usp=sharing)
- [unipass_flutter_demo_v0.0.1.apk](https://drive.google.com/file/d/1LZjZmMPTsDqSxeX9EVnVRMZH28rsLQAU/view?usp=sharing)

### iOS demo

Please fill in your email address in the [**Application Form**](https://mtf0xus26cg.typeform.com/to/fKTDqMa8) and we will send you a test invitation through [TestFlight](https://apps.apple.com/us/app/testflight/id899247664) as soon as possible.

:::tip
UniPass Wallet entry URL used by current demo: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## Development environment

- `Dart sdk: '>=2.18.1 <3.0.0'`
- `Flutter: flutter: ">=2.5.0"`

## Setup

1. Add a dependency to the file of `pubspec.yaml` in your project:

```xml
dependencies:
  unipass_web_sdk: ^0.0.2
```

2. Then run the following command:

```json
flutter pub get
```

3. Finally, use it in your Dart code:

```dart
import 'package:unipass_web_sdk/unipass_web_sdk.dart';
```

In the Android project, please check the network permissions has been enabled in your Manifest file.

`<uses-permission android:name="android.permission.INTERNET" />`

## History version

| Version | Last updated | UniPass Wallet Entry URL           | Upgrade Instructions                                                                                    |
| ------- | ------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| v0.0.3  | 2022.11.14   | https://testnet.wallet.unipass.id/ | Support Google login. Add the optional function of connect to return email. Add a prefix in signMessage |
| v0.0.1  | 2022.10.12   | https://testnet.wallet.unipass.id/ | Connect / Transfer / Sign Message & Verify                                                              |