---
sidebar_position: 5
---

# 签名消息与验签

## 签名消息

```ts
/// {@params} BuildContext context  -  Widget 上下文
/// {@params} String message  -  需要签名的字符串
/// {@return} String signedMessage  -  sig
try {
  String signedMessage = await uniPassWeb.signMessage(context, message);
} catch (err) {
  // 用户拒绝签名或者连接错误
}
```

## 验签

```ts
/// {@params} String message  -  需要验签的字符串
/// {@params} String sig  -  需要验签的签名
/// {@return} bool isValid  -  验签是否通过
try {
  bool isValid = await uniPassWeb.isValidSignature(message, sig);
} catch (err) {
  // 验签错误
}
```
