---
sidebar_position: 4
---

# Send Transactions

Type definitions:

```ts
export declare class UPTransactionMessage {
  readonly from: string;
  readonly to: string;
  readonly value: string;
  readonly data: string;
  constructor(from: string, to: string, value: string, data: string);
}

export declare class UniPassPopupSDK {
  /**
   * call user's contract to send transaction
   *
   * @param _transaction transaction object
   * @returns the transaction hash
   */
  sendTransaction(_transaction: UPTransactionMessage): Promise<string>;

	 /**
   * sign message with UniPass Wallet, it is compatible with EIP-1271
   *
   * @param message message to be signed
   * @returns signature
   */
  signMessage(message: BytesLike): Promise<string>;

  /**
   * verify UniPass Wallet signed message and sig on user's contract
   *
   * @param _msg the message to be signed
   * @param _sig the signature response returned by UniPass
   * @returns boolean true: pass verification, false: failed verification
   */
  isValidSignature(_msg: string, _sig: string): Promise<boolean>;
}
```

## Transfer native token

```ts
async sendNativeToken() {
  try {
    const tx = {
      from: fromAddress,
      to: toAddress,
      value: parseEther(toAmount).toHexString(),
      data: "0x",
    };
    txHash.value = await upWallet.sendTransaction(tx);
    if (await checkTxStatus(txHash)) {
      console.log("send Native Token success", txHash);
    } else {
      console.error(`send Native Token failed, tx hash = ${txHash}`);
    }
  } catch (err) {
    console.log("err", err);
  }
}
```

## Transfer ERC20 token

```ts
async sendToken() {   
  try {
		const tokenAddress = '0x25c58Aa062Efb4f069bD013De3e3C5797fb40651';
		const data = new utils.Interface(['function transfer(address _to, uint256 _value)']).encodeFunctionData('transfer', [toAddress, amount]);
    const tx = {
      from: fromAddress,
      to: tokenAddress,
      value: "0x0";,
      data: data,
    };
    txHash.value = await upWallet.sendTransaction(tx);
    if (await checkTxStatus(txHash)) {
      console.log("send Token success", txHash);
    } else {
      console.error(`send Token failed, tx hash = ${txHash}`);
    }
  } catch (err) {
    console.log("err", err);
  }
}
```

## Call contract

Similar with transferring ERC20 token. First construct the call data, and then invoke `sendTransaction`.
