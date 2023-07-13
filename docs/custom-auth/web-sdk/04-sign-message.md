---
sidebar_position: 4
---

# Sign & Verify Message

## Sign Message

```tsx
const message; // The Message to Sign
const signature = await smartAccount.signMessage(message); // Sign message
```

## Verify Message

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