---
sidebar_position: 3
---

# 连接至 UniPass Wallet

```csharp
var connectType = WalletConfig.ConnectType.both;
// or connectType = WalletConfig.ConnectType.google;
// or connectType = WalletConfig.ConnectType.email;

var account = await wallet.Connect(connectType);
Debug.Log(account.address);
Debug.Log(account.email); // null if returnEmail is false
Debug.Log(account.newborn);
```

`newborn` 可以被用来追踪新注册用户。
