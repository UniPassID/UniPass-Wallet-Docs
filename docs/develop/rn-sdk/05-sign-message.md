---
sidebar_position: 5
---

# Sign Message and Verify

## Type definitions:

```typescript
class UniPassWallet {
	signMessage(callback: UniPassCallBack<SignResult>, signOption: SignOption): void;
}

type SignResult = {
  signature: string;
} & Response;

interface SignOption {
  from: string;
  type: SignType;
  msg: string;
}
```

## Code sample

```typescript
import { SignType } from 'react-native-up';

// Ensure that the user is authorized to log in
uniPassWallet.signMessage(
	{
		success(res) {
			console.log('signMsg success: ', res);
		},
		failure(e) {
			console.log('signMsg fail: ', e);
		},
	},
	{
		from: uniPassWallet.getAddress()!,
		type: SignType.PersonalSign,
		msg: 'message to be signed',
	}
);
```
