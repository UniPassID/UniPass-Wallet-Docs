---
sidebar_position: 1
---

# 快速开始

| 更新版本 | 更新日期 | 默认使用Domain | 更新说明 |
| --- | --- | --- | --- |
| v0.0.1 | 2022.10.28 | https://testnet.wallet.unipass.id/ | 支持连接钱包，转账代币，签名/验签功能 |

### Android

请前往 Google drive 下载 Android 安装包：
* [unipass_unity_demo_0.0.1.apk](https://www.notion.so/lay2/Unity-SDK-of-UniPass-Wallet-EN-3160454e2a75465d8c41b1227fdb4e49#f42e5d14ebfc4375928909c26c78e938)

### iOS

准备中...

## 相关资料
- [Unity SDK GitHub](https://github.com/UniPassID/unipass-unity-web-sdk)
- [Demo Project](https://github.com/UniPassID/unipass-unity-web-sdk/blob/master/Example/unipass_demo.cs)

:::tip
Demo 工程中使用的 UniPass Wallet 域名: [https://testnet.wallet.unipass.id/](https://testnet.wallet.unipass.id/login)
:::

## 开发环境

- `UnityHub Verison: 2021.2.11f1`
- 第三方包:
    - Vuplex for Android, Vuplex for iOS
    - Nethereum `v4.8.0`

## 安装和使用

1. 开始前, 你需要在项目中添加 [**Vuplex**](https://store.vuplex.com/webview/overview) 和 [**Nethereum**](https://docs.nethereum.com/en/latest/nethereum-smartcontrats-gettingstarted/) 插件， Vuplex 需要购买后使用。
    
:::tip
注意，由于 UniPass 使用了浏览器自带加密函数，所以不能使用 Vuplex 的 CanvasWebView 加载 UniPass 站点
:::
    
2. 然后，将 Unipass SDK 作为插件拖入 Unity 项目中。

3. 最后，在 C# 代码中使用。
    
```csharp
using UnipassWallet;
```