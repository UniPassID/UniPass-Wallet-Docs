---
sidebar_position: 2
---

# 初始化

通过传入自定义的配置信息 `UniPassOption`：

```dart
/// UniPassOption 定义

enum Environment { testnet, mainnet }

enum ChainType { eth, polygon, bsc, rangers }

enum Protocol { https, http }

/// 主题
enum UnipassTheme { light, dark }

/// both 两种登录方式都显示，选择 google or email 则只显示相关登录方式
enum ConnectType {
  both,
  google,
  email,
}

/// 应用设置
class AppSetting {
  String? appName;
  String? appIcon;
  UnipassTheme? theme;
  ChainType? chainType;

  AppSetting({
    this.appName,
    this.appIcon,
    this.theme,
    this.chainType,
  });}

/// UniPass Wallet 初始设置
class UniPassOption {
  String? nodeRPC;
  Environment? env;
  String? domain;
  String? protocol;
  AppSetting? appSetting;
  bool? returnEmail;
  ConnectType? connectType;

  UniPassOption({
    this.nodeRPC,
    this.env,
    this.domain,
    this.protocol,
    this.appSetting,
    this.returnEmail,
    this.connectType,
  });
}
```

## 代码示例

```dart
UniPassWeb uniPassWeb = UniPassWeb(
    UniPassOption(
      env: Environment.testnet,
      /// for polygon mumbai
      nodeRPC: "https://node.wallet.unipass.id/polygon-mumbai",

      /// for eth testnet
      /// nodeRPC: "https://node.wallet.unipass.id/eth-goerli",

      /// for bsc testnet
      /// nodeRPC: "https://node.wallet.unipass.id/bsc-testnet",

      /// for rangers robin
      /// nodeRPC: "https://node.wallet.unipass.id/rangers-robin",

      domain: "testnet.wallet.unipass.id",
      protocol: "https",
      appSetting: AppSetting(
        appName: "demo dapp",
        appIcon: "",
        theme: UnipassTheme.dark,
        chainType: ChainType.polygon,
      ),
      returnEmail: false,
      connectType: null,
    ),
  );
```
