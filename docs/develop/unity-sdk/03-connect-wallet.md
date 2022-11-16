---
sidebar_position: 3
---

# Connect UniPass Wallet

```csharp
var connectType = WalletConfig.ConnectType.both;
// or connectType = WalletConfig.ConnectType.google;
// or connectType = WalletConfig.ConnectType.email;

var account = await wallet.Connect(connectType);
Debug.Log(account.address);
Debug.Log(account.email); // null if returnEmail is false
Debug.Log(account.newborn);
```

`newborn` can be used to track new registration count.
