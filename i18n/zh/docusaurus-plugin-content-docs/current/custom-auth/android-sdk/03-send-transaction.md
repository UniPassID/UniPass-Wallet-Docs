---
sidebar_position: 4
---

# 发送交易

## Step1: 生成交易

```kotlin
val tx = Transaction(
  to, // To Address
  data, // Transaction Data
  value, // The value transferred to `To Address`
);
```

## Step2: 通过 `simulateTransaction()` 获取手续费选项

:::tip
💡 您需要在 suspend function 中调用此方法，因为它是异步方法。
:::

```kotlin
// data class SimulateResult(
//    var `isFeeRequired`: Boolean,
//    var `feeOptions`: List<FeeOption>,
// )

// data class FeeOption(
//    var `token`: String,
//    var `name`: String,
//    var `symbol`: String,
//    var `decimals`: UByte,
//    var `to`: String,
//    var `amount`: String,
//    var `error`: String?,
// )

val simulateRet = smartAccount.simulateTransaction(tx);
```

## Step3: 应用侧验证手续费代币是否足够

```kotlin
// Create options which is used for sendTransaction
val sendTransactionOptions = SendingTransactionOptions(null)

// Token_CA: The contract address of the token you want to use as gasFee
// Example: Take USDC on Mumbai as gasFee
var Token_CA = "0x87F0E95E11a49f56b329A1c143Fb22430C07332a" 

if (simulateRet!!.isFeeRequired) {
    sendTransactionOptions.fee =
        simulateRet?.feeOptions?.find { it.token.lowercase() == Token_CA.lowercase() }
}
```

:::tip
请注意，如果交易中涉及到手续费代币，验证结果可能不准确。
:::

## Step4: 指定手续费代币并发送交易

:::tip
💡 您需要在 suspend function 中调用此方法，因为它是异步方法。
:::

```kotlin
val txHash = smartAccount.sendTransaction(tx, sendTransactionOptions)
val receipt = smartAccount.waitTransactionReceiptByHash(txHash!!, 2, ChainID.ETHEREUM_MAINNET, 60);
```