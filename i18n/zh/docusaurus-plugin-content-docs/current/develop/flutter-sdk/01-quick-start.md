---
sidebar_position: 1
---

# 快速开始

| 更新版本 | 更新日期 | 默认使用Domain | 更新说明 |
| --- | --- | --- | --- |
| v0.0.1 | 2022.10.12 | https://testnet.wallet.unipass.id/ | 支持连接钱包，转账代币，签名/验签功能 |

### Android

请前往 Google drive 下载 Android 安装包：
* [unipass_release_v0.0.1.apk](https://drive.google.com/file/d/1LZjZmMPTsDqSxeX9EVnVRMZH28rsLQAU/view?usp=sharing)

### iOS

请在[**申请表**](https://mtf0xus26cg.typeform.com/to/fKTDqMa8)中填写您的邮箱，我们将会给您发送 UniPass iOS demo 的 TestFlight 的测试邀请。

## 相关资料
- [Flutter web SDK GitHub](https://github.com/UniPassID/unipass-flutter-web-sdk)
- [Pub Dev](https://pub.dev/packages/unipass_web_sdk)
- [Demo Project](https://github.com/UniPassID/unipass-flutter-web-sdk/tree/master/example)

:::tip
Demo 工程中使用的 UniPass Wallet 域名: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## 开发环境

- `Dart sdk: '>=2.18.1 <3.0.0'`
- `Flutter: flutter: ">=2.5.0"`

## 安装和使用

1. 在您的项目的 `pubspec.yaml` 文件中添加以下命令：

```xml
dependency:
  unipass_web_sdk: ^0.0.1
```

2. 然后在命令行中运行：

```json
flutter pub get
```

3. 最后在您的 Dart 代码中使用：

```dart
import 'package:unipass_web_sdk/unipass_web_sdk.dart';
```

在 Android 项目中, 请在您的 Manifest file 文件中查看网络权限是否开启：
`<uses-permission android:name="android.permission.INTERNET" />`