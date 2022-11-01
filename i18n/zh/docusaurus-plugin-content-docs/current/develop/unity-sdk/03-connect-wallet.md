---
sidebar_position: 3
---

# 连接至 UniPass Wallet

```csharp
var account = await wallet.Connect();
Debug.Log(account.address);
Debug.Log(account.email);
Debug.Log(account.newborn);
```
`newborn` 可以被用来追踪新注册用户。