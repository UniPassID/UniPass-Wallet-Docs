---
sidebar_position: 4
---

# Send Transaction

## Step1: Generate Transaction

```swift
let tx = Shared.Transaction(
	to: to,       // to address hex string 
	data: "0x",   // transaction data
	value: "0x1"  // transaction value
);
```

## Step2: Get Fee Options and Consumption through `simulateTransaction()`

:::tip
💡 You need to call this method in a suspend function because it is an asynchronous method.
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

## Step3: **Validate Whether Fee is Sufficient**

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
Notice that if there is a transaction involving fee tokens, the validating result may not be accurate.
:::

## Step4: Select Fee Option and Send Transaction

:::tip
💡 You need to call this method in a suspend function because it is an asynchronous method.
:::

```swift
let txHash = try? await smartAccount.sendTransaction(transaction: tx, options: sendTransactionOptions)
let receipt = try? await smartAccount.waitTransactionReceiptByHash(transactionHash: txHash!!);
```