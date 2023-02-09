---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

```csharp
var sig = await wallet.SignMessage(message);
Debug.Log(sig);
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).