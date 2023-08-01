---
sidebar_position: 4
---

# Send Transaction

## Step1: Generate Transaction

```kotlin
val tx = Transaction(
  to, // To Address
  data, // Transaction Data
  value, // The value transferred to `To Address`
);
```

## Step2: Get Fee Options and Consumption through `simulateTransaction()`

:::tip
💡 You need to call this method in a suspend function because it is an asynchronous method.
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

## Step3: **Validate Whether Fee is Sufficient**

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
Notice that if there is a transaction involving fee tokens, the validating result may not be accurate.
:::

## Step4: Select Fee Option and Send Transaction

:::tip
💡 You need to call this method in a suspend function because it is an asynchronous method.
:::

```kotlin
val txHash = smartAccount.sendTransaction(tx, sendTransactionOptions)
val receipt = smartAccount.waitTransactionReceiptByHash(txHash!!, 2, ChainID.ETHEREUM_MAINNET, 60);
```