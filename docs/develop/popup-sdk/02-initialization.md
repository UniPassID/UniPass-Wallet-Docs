---
sidebar_position: 2
---

# Initialization

Create an `UniPassPopupSDK` instance with a `PopupSDKOption` object to customize. This is the definition of `PopupSDKOption`:

```ts
export declare type Environment =  'test' | 'prod';
export declare type ChainType = 'polygon' | 'bsc' | 'rangers';

// UniPass Wallet entry URL
export interface WalletURL {
  domain?: string;
  protocol?: 'https' | 'http';
}

// Basic Theme
export declare enum UniPassTheme {
  LIGHT = "light",
  DARK = "dark"
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
  readonly walletUrl?: WalletURL;
  readonly appSettings?: AppSettings;
  readonly [key: string]: any;
};
```

## Code sample

```ts
const upWallet = new UniPassPopupSDK({
  env: "test",
	// for polygon mumbai
	chainType: "polygon",
    nodeRPC: "https://node.wallet.unipass.id/polygon-mumbai",
	
	// for bsc testnet
	// chainType: "bsc",
    // nodeRPC: "https://node.wallet.unipass.id/bsc-testnet",

	// for rangers robin
    // chainType: "rangers",
    // nodeRPC: "https://node.wallet.unipass.id/rangers-robin",

  appSettings: {
    chain: "polygon",
    theme: toTheme.value as UniPassTheme,
    appName: "UniPass Wallet Demo",
    appIcon: "",
  },
  walletUrl: {
    domain: "https://testnet.wallet.unipass.id",
    protocol: "https",
  },
});
```