---
sidebar_position: 2
---

# Initialization

Create an `UniPassPopupSDK` instance with a `PopupSDKOption` object to customize. This is the definition of `PopupSDKOption`:

:::warning Notice
The same email has different UniPass account address in mainnet and testnet, please do not use testnet configuration for mainnet.
:::


```ts
export type Environment = 'test' | 'prod';
export declare type ChainType = | 'polygon'
  | 'bsc'
  | 'rangers'
  | 'eth'
  | 'scroll'
  | 'arbitrum';

// UniPass Wallet entry URL
export interface WalletURL {
  domain?: string;
  protocol?: "https" | "http";
}

// Basic Theme
export declare enum UniPassTheme {
  LIGHT = "light",
  DARK = "dark",
}

// Config before open the popup window
export declare type AppSettings = {
  chain?: ChainType;
  appName?: string;
  appIcon?: string;
  theme?: UniPassTheme;
};

// UniPass Wallet init config
export declare type PopupSDKOption = {
  readonly nodeRPC?: string;
  readonly chainType?: ChainType;
  readonly env?: Environment;
  readonly storageType?: StorageType;
  readonly walletUrl?: WalletURL;
  readonly appSettings?: AppSettings;
  readonly [key: string]: any;
};
```

## Code sample

### Init testnet code sample

```ts
const upWallet = new UniPassPopupSDK({
  env: "test",
  // for polygon mumbai
  chainType: "polygon",
  // choose localStorage if you want to cache user account permanent
  storageType: "sessionStorage"
  appSettings: {
    theme: UniPassTheme.LIGHT,
    appName: "UniPass Wallet Demo",
    appIcon: "",
  },
});
```

### Init mainnet code sample

```ts
const upWallet = new UniPassPopupSDK({
  env: "prod",
  // for polygon mainnet
  chainType: "polygon",
  appSettings: {
    theme: UniPassTheme.LIGHT,
    appName: "UniPass Wallet Demo",
    appIcon: "",
  },
});
```
