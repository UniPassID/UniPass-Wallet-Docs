---
sidebar_position: 4
---

# 发送交易

相关类型定义：

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

## 发送原生代币

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

## 发送 ERC20 代币

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

## 调用合约

与合约交互的方式跟 `发送 ERC20 代币` 的方式类似，构建出调用 data 后，直接使用 `sendTransaction` 完成交易的发送。
