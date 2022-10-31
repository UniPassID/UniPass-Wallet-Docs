---
sidebar_position: 4
---

# 发送交易

相关类型定义：

```ts
/// 交易类型定义
class TransactionMessage {
  String from;
  String to;
  String value;
  String data;

  TransactionMessage({
    required this.from,  // 发送者钱包地址
    required this.to,    // 接收者钱包地址
    required this.value, // 交易数量 单位 Wei
    required this.data,  // 交易data
  });
}
```

## 发送原生代币

```ts
/// {@params} BuildContext context  -  Widget上下文
/// {@params} TransactionMessage tx  -  交易数据
/// {@return} String txHash  -  交易Hash
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
  // 用户取消转账或者转账失败
}
```

## 发送 ERC20 代币

```ts
/// {@params} BuildContext context  -  Widget上下文
/// {@params} TransactionMessage tx  -  交易数据
/// {@return} String txHash  -  交易Hash
try {
	/// 1、构造 ERC20 转账的 input data
  final erc20TokenData = Erc20(
    address: web3.EthereumAddress.fromHex(usdcAddress),
    client: uniPassWeb.getProvider(),
  ).self.function("transfer").encodeCall(
    [
      web3.EthereumAddress.fromHex(toAddress),
      etherToWei(value, decimal: usdcDecimal, toString: false),
    ],
  );

	/// 2、发送交易
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
 // 用户取消转账或者转账失败
}
```

## 调用合约

与合约交互的方式跟 `发送 ERC20 代币` 的方式类似，构建出调用 data 后，直接使用 `sendTransaction` 完成交易的发送。
