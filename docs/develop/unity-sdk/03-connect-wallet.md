---
sidebar_position: 3
---

# Connect UniPass Wallet

```csharp
var account = await wallet.Connect();
Debug.Log(account.address);
Debug.Log(account.email);
Debug.Log(account.newborn);
```
`newborn` can be used to track new registration count.