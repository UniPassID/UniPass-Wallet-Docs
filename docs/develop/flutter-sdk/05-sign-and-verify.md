---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

```dart
/// {@params} BuildContext context
/// {@params} String message
/// {@return} String signedMessage
try {
  String signedMessage = await uniPassWeb.signMessage(context, message);
} catch (err) {
  // User refused the signature or connection error
}
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).