---
sidebar_position: 3
---

# Connect UniPass Wallet

```ts
class UpAccount {
  String address;   // Ethereum address of user
  String email;     // Email of user
  bool newborn;     // Newly registered or not

  UpAccount({required this.address, this.email = "", this.newborn = false});
}

/// {@params} BuildContext
try {
  UpAccount upAccount = await uniPassWeb.connect(context);
} catch (err) {
	// User refuesed the connection or connection error
}
```
`newborn` can be used to track new registration count.