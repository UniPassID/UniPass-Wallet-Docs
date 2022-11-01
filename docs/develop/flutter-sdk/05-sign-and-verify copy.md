---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

```ts
/// {@params} BuildContext context
/// {@params} String message
/// {@return} String signedMessage
try {
  String signedMessage = await uniPassWeb.signMessage(context, message);
} catch (err) {
  // User refuesed the signature or connection error
}
```

## Verify message

```ts
/// {@params} BuildContext context
/// {@params} String message
/// {@return} String signedMessage
try {
  String signedMessage = await uniPassWeb.signMessage(context, message);
} catch (err) {
  // User refuesed the signature or connection error
}
```
