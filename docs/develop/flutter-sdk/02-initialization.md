---
sidebar_position: 2
---

# Initialization

Create an instance with a `UniPassOption` object to customize. This is the definition of `UniPassOption`:

```dart
/// The definition of UniPassOption

enum Environment { testnet, mainnet }

enum ChainType { eth, polygon, bsc, rangers }

enum Protocol { https, http }

/// Basic theme
enum UnipassTheme { light, dark }

/// Select connect type
enum ConnectType {
  both,
  google,
  email,
}

/// APP settings
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

/// UniPass Wallet init config
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

## Code sample

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
