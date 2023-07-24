---
sidebar_position: 7
---

# 切换账户

## Step1: 清除当前智能账户

```tsx
await smartAccount.destroy();
```

Notice that if you are using `UniPassJwtSigner` and pass the `storage`, please run `destroy` method to avoid security issues.

## Step2: 初始化新的智能账户

```tsx
// Destroy Old Smart Account
await oldSmartAccount.destroy();

// Reconstruct a new Smart Account
const newSmartAccount = new SmartAccount({
  masterKeySigner: signer,
  appId,
  chainOptions,
});

await newSmartAccount.init({ chainId });
```