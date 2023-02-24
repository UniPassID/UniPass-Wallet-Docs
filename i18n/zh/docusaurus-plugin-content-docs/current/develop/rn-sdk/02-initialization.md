---
sidebar_position: 2
---

# Initialization

## Creating a UniPassSDK instance

UniPassSDK 是一个单例模式，请使用 `getInstance` 初始化类或获取 uniPassWallet 实例

```typescript
uniPassWallet = UniPassWallet.getInstance(uniPassWalletOptions: UniPassWalletOptions)
```

### 相关类型定义

```typescript
interface UniPassWalletOptions {
  env: Environment; // SDK Environment
  redirectUrl: string; // URL that UniPassSDK will redirect API responses  
  walletUrl?: string; // UniPass Wallet Url，Default is https://testnet.wallet.unipass.id 
  appSettings?: AppSetting; // configuration optional object to use custom app settings
}
```

### AppSettings

```typescript
// appSettings
interface AppSetting {
  chain: ChainType;
  appName: string;
  appIcon: string;
  theme: UniPassTheme;
}

// ChainType
type ChainType = 'eth' | 'polygon' | 'bsc' | 'rangers' | 'scroll';

//（UniPassTheme）
enum UniPassTheme {
  DARK = 'dark',
  LIGHT = 'light',
  CASSAVA = 'cassava',
}

enum Environment {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
}
```

### Code sample

```typescript
import UniPassWallet, { Environment } from 'react-native-up';

const uniPassWallet = UniPassWallet.getInstance({
    env: Environment.TESTNET,
    redirectUrl: 'unipass://com.unipass.wallet/redirect',
});
```
