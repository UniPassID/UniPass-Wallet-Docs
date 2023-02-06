---
sidebar_position: 2
---

# 初始化

应用可以通过传入自定义的配置信息 `PopupSDKOption` 来创建 `UniPassPopupSDK` 对象，`PopupSDKOption` 定义如下：

:::warning 注意
同一个邮箱在主网和测试网环境中 UniPass 账户地址不同，请勿在主网使用测试网配置
::: 

```ts
export declare type Environment = "test" | "prod";
export declare type ChainType = | 'polygon'
  | 'bsc'
  | 'rangers'
  | 'eth'
  | 'scroll'
  | 'arbitrum';

// UniPass Wallet 的主页 URL
export interface WalletURL {
  domain?: string;
  protocol?: "https" | "http";
}

// 设置 UniPass Wallet 的主题 Theme
export declare enum UniPassTheme {
  LIGHT = "light",
  DARK = "dark",
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
  readonly nodeRPC?: string; // 区块链全节点RPC
  readonly chainType?: ChainType; // 区块链类型
  readonly env?: Environment; // 环境类型
  readonly storageType?: StorageType; // 用户信息存储方式 sessionStorage 或者localStorage
  readonly walletUrl?: WalletURL; // UniPass Wallet URL
  readonly appSettings?: AppSettings; // 打开 UniPass Wallet 的设置
  readonly [key: string]: any; // 其他配置
};
```

## 创建示例

### 创建测试网示例

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

### 创建主网示例
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