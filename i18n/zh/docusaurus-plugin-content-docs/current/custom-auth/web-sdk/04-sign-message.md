---
sidebar_position: 4
---

# 签名消息与验签

## 签名消息

```tsx
const message; // The Message to Sign
const signature = await smartAccount.signMessage(message); // Sign message
```

## 验签

```tsx
import { verifyMessage } from "@unipasswallet/smart-account-validator";

const isValid = await verifyMessage({
  // Verify Message
  message,
  signature,
  provider,
  address: await smartAccount.getAddress(),
});
```