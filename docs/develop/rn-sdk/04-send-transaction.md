---
sidebar_position: 4
---

# Send Transaction

## Type definitions:

```typescript
class UniPassWallet {
  sendTransaction(callback: UniPassCallBack<SendTransactionResult>, sendTransactionOption: SendTransactionOption): void;
}

interface Response {
  type: Action;
  errorCode?: number;
  errorMsg?: string;
}

type SendTransactionResult = {
  transactionHash: string;
} & Response;

interface SendTransactionOption {
  from: string;
  to: string;
  value: string;
  data?: string;
}
```

## Code sample

```typescript
// Ensure that the user is authorized to log in
uniPassWallet.sendTransaction(
  {
    success(res) {
			console.log('sendTransaction success: ', res);
		},
		failure(e) {
			console.log('sendTransaction fail: ', e);
		},
	},
	{
		from: funiPassWallet.getAddress(),
		to: '0x7b5Bd7c9E3A0D0Ef50A9b3aCF5d1AcD58C3590d1',
		value: parseEther('0.0001').toHexString(),
	}
);
```
