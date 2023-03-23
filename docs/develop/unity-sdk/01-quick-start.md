---
sidebar_position: 1
---

# Quick Start

## Source Code

- [Unity SDK GitHub](https://github.com/UniPassID/unipass-unity-web-sdk)
- [Demo Project](https://github.com/UniPassID/unipass-unity-web-sdk/blob/master/Example/unipass_demo.cs)

### Android demo

Please download the installation package of Android on Google drive

- [unipass_unity_demo_0.0.2.apk](https://drive.google.com/file/d/1uU7Qek-bKV6CSsEI6Uhen6Nzj_AUAMI7/view?usp=sharing)
- [unipass_unity_demo_0.0.1.apk](https://drive.google.com/file/d/1nKyi6eJJ7N2OnrIpH7WpypDFluwtZ0z7/view?usp=sharing)

### iOS demo

Please fill in your email address in the [**Application Form**](https://mtf0xus26cg.typeform.com/to/TW0Eh9Yu) and we will send you a test invitation through [TestFlight](https://apps.apple.com/us/app/testflight/id899247664) as soon as possible.

:::tip
UniPass Wallet entry URL used by current demo: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## Development environment

- `UnityHub Verison: 2021.2.11f1`
- Third-party packages:
  - Vuplex for Android, Vuplex for iOS
  - Nethereum `v4.8.0`

## Setup

1. To start, you need to add [**Vuplex**](https://store.vuplex.com/webview/overview) and [**Nethereum**](https://docs.nethereum.com/en/latest/nethereum-smartcontrats-gettingstarted/) plugins into your project. You need to buy & import Vuplex.

:::tip
You can not load UniPass in Vuplex’s CanvasWebView, because UniPass uses the encryption functions in the native browser.
:::

2. Then add UniPass SDK into your Unity project as a plugin.

3. Finally, run it in C# code.

```csharp
using UnipassWallet;
```

## History Version

| Version | Last updated | UniPass Wallet Entry URL           | Upgrade Instructions                                                                                    |
| ------- | ------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| v0.0.2  | 2022.11.14   | https://testnet.wallet.unipass.id/ | Support Google login. Add the optional function of connect to return email. Add a prefix in signMessage |
| v0.0.1  | 2022.10.28   | https://testnet.wallet.unipass.id/ | Connect / Transfer / Sign Message & Verify                                                              |