---
sidebar_position: 6
---

# Logout Account

## Type definitions:

```typescript
class UniPassWallet {
    // Website state won't be cleared when deep is set to false, default is true
    logout(callback: UniPassCallBack<null>, deep?: boolean): void;
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
// logout will clear local upAccount data
uniPassWallet.logout({
	success() {
    console.log('logout success');
	},
	failure(e) {
    console.log('login fail: ', e);
	},
});
```
