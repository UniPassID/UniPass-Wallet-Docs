---
sidebar_position: 5
---

# 签名消息与验签

## 相关类型定义：

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

## 示例代码

```typescript
import { SignType } from 'react-native-up';

// 请确认用户已授权登录
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
