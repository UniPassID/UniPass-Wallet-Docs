---
sidebar_position: 7
---

# Switch Account

## Step1:  Destroy the Old Smart Account

```tsx
await smartAccount.destroy();
```

Notice that if you are using `UniPassJwtSigner` and pass the `storage`, please run `destroy` method to avoid security issues.

## Step2: Initialize a New Smart Account

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