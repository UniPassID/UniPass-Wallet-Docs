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

服务器端验签可参考：[**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx)