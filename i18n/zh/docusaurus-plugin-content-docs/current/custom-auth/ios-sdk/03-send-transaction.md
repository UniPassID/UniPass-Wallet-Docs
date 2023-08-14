---
sidebar_position: 4
---

# 发送交易

## Step1: 生成交易

```swift
let tx = Shared.Transaction(
	to: to,       // to address hex string 
	data: "0x",   // transaction data
	value: "0x1"  // transaction value
);
```

## Step2: 通过 `simulateTransaction()` 获取手续费选项

:::tip
💡 您需要在 suspend function 中调用此方法，因为它是异步方法。
:::

```swift
// public struct SimulateResult {
//     public var isFeeRequired: Bool
//     public var feeOptions: [FeeOption]

//     public init(isFeeRequired: Bool, feeOptions: [FeeOption]);
// }

// public struct FeeOption {
//     public var token: String
//     public var name: String
//     public var symbol: String
//     public var decimals: UInt8
//     public var to: String
//     public var amount: String
//     public var error: String?

//     public init(token: String, name: String, symbol: String, decimals: UInt8, to: String, amount: String, error: String?);
// }

let simulateRet = try? await smartAccount.simulateTransaction(transaction: tx);
```

## Step3: 应用侧验证手续费代币是否足够

```swift
// Token_CA: The contract address of the token you want to use as gasFee
// Example: Take USDC on Mumbai as gasFee
let Token_CA = "0x87F0E95E11a49f56b329A1c143Fb22430C07332a" 

var fee:FeeOption?
if (simulateRet!!.isFeeRequired) {
    fee = feeOptions.first(where: { feeOption in
		    feeOption.token == Token_CA.lowercased()
		})
}

let sendTransactionOptions = SendintTransactionOptions(fee:fee)
```

:::tip
请注意，如果交易中涉及到手续费代币，验证结果可能不准确。
:::

## Step4: 指定手续费代币并发送交易

:::tip
💡 您需要在 suspend function 中调用此方法，因为它是异步方法。
:::

```swift
let txHash = try? await smartAccount.sendTransaction(transaction: tx, options: sendTransactionOptions)
let receipt = try? await smartAccount.waitTransactionReceiptByHash(transactionHash: txHash!!);
```