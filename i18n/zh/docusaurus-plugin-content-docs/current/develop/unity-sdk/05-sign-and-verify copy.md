---
sidebar_position: 5
---

# 签名消息和验签

## 签名消息

```csharp
var sig = await wallet.SignMessage(message);
Debug.Log(sig);
```

## 验签

```csharp
var isValid = await wallet.isValidSignature(message, sig);
Debug.Log("isValid:" + isValid);
```