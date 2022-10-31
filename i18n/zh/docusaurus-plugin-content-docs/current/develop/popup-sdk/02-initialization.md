---
sidebar_position: 2
---

# 初始化

应用可以通过传入自定义的配置信息 `PopupSDKOption` 来创建 `UniPassPopupSDK` 对象，`PopupSDKOption` 定义如下：

```ts
export declare type Environment =  'test' | 'prod';
export declare type ChainType = 'polygon' | 'bsc' | 'rangers';

// UniPass Wallet 的主页 URL
export interface WalletURL {
    domain?: string;
    protocol?: 'https' | 'http';
}

// 设置 UniPass Wallet 的主题 Theme
export declare enum UniPassTheme {
    LIGHT = "light",
    DARK = "dark"
}

// 每次打开 UniPass Wallet 设置
export declare type AppSettings = {
    chain?: ChainType;
    appName?: string;
    appIcon?: string;
    theme?: UniPassTheme;
};

// UniPass Wallet 初始设置
export declare type PopupSDKOption = {
    readonly nodeRPC?: string;            // 区块链全节点RPC
    readonly chainType?: ChainType;       // 区块链类型
    readonly env?: Environment;           // 环境类型
    readonly walletUrl?: WalletURL;       // UniPass Wallet URL
    readonly appSettings?: AppSettings;   // 打开 UniPass Wallet 的设置
    readonly [key: string]: any;          // 其他配置
};
```

## 创建示例

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