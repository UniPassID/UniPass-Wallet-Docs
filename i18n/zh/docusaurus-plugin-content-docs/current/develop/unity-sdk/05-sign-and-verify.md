---
sidebar_position: 5
---

# 签名消息与验签

## 签名消息

```csharp
var sig = await wallet.SignMessage(message);
Debug.Log(sig);
```

## 验签

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)