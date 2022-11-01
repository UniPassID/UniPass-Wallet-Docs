---
sidebar_position: 4
---

# Send Transactions

Type definitions:

```dart
/// Type definitions of transaction
class TransactionMessage {
  String from;
  String to;
  String value;
  String data;

  TransactionMessage({
    required this.from,  // Address of sender
    required this.to,    // Address of receiver
    required this.value, // Token amount, unit: Wei
    required this.data,  // Transaction data
  });
}
```

## Transfer Native Token

```dart
/// {@params} BuildContext context
/// {@params} TransactionMessage tx
/// {@return} String txHash
try {
  String txHash = await uniPassWeb.sendTransaction(
    context,
    TransactionMessage(
      from: uniPassWeb.getAddress(),
      to: _toController.text,
      value: etherToWei(_transactionController.text, decimal: 18),
      data: "0x00",
    ),
  );
} catch (err) {
  // User canceled the transfer or transaction error
}
```

## Transfer ERC20 Token

```dart
/// {@params} BuildContext context
/// {@params} TransactionMessage tx
/// {@return} String txHash
try {
	/// 1、Initialize the interface of ERC20 contratc
  final erc20TokenData = Erc20(
    address: web3.EthereumAddress.fromHex(usdcAddress),
    client: uniPassWeb.getProvider(),
  ).self.function("transfer").encodeCall(
    [
      web3.EthereumAddress.fromHex(toAddress),
      etherToWei(value, decimal: usdcDecimal, toString: false),
    ],
  );

	/// 2、Send transaction
  String txHash = await uniPassWeb.sendTransaction(
    context,
    TransactionMessage(
      from: uniPassWeb.getAddress(),
      to: usdcAddress,
      value: "0x",
      data: bytesToHex(erc20TokenData, include0x: true),
    ),
  );
} catch (err) {
 // User canceled the transfer or transaction error
}
```

## Call contract

Similar with transferring ERC20 token. First construct the call data, and then invoke `sendTransaction`.
