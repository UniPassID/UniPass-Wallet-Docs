---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

```csharp
var sig = await wallet.SignMessage(message);
Debug.Log(sig);
```

## Verify message

```csharp
var isValid = await wallet.isValidSignature(message, sig);
Debug.Log("isValid:" + isValid);
```