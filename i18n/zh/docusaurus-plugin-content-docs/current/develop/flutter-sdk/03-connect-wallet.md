---
sidebar_position: 3
---

# 连接至 UniPass Wallet

```ts
class UpAccount {
  String address;   // 用户地址
  String email;     // 邮箱
  bool newborn;     // 是否为新注册用户
  UpAccount({required this.address, this.email = "", this.newborn = false});
}

/// {@params} BuildContext context  -  Widget 上下文
try {
  UpAccount upAccount = await uniPassWeb.connect(context);
} catch (err) {
	// 用户拒绝连接或者连接错误
}
```
`newborn` 可以被用来追踪新注册用户.