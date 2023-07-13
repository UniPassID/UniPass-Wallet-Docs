---
sidebar_position: 3
---

# 发送交易

## Step1: 生成交易

```jsx
const tx = {
  to, // To Address
  data, // Transaction Data
  value, // The value transferred to `To Address`
};
```

## Step2: 通过 `simulateTransaction()` 获取手续费选项

```jsx
const {
  isFeeRequired, // whether required fee for the transaction
  feeOptions: FeeOptions, // the fee options
} = await smartAccount.simulateTransaction(tx);
```

## Step3: 应用侧验证手续费代币是否足够

```jsx
import { constants } from "ethers";

if (isFeeRequired) {
  const feeOption; // Select Fee Option from fee options Got From `Step2`
  let balance;
  // Validate Native Token
  if (feeOption.token === constants.ZeroAddress) {
    balance = await smartAccount
      .getProvider()
      .getBalance(await smartAccount.getAddress());

    // Validate ERC20 Token
  } else {
    const erc20Interface = [
      "function balanceOf(address _owner) public view returns (uint256 balance)",
    ];
    const erc20Contract = new Contract(
      feeOption.token,
      new ethers.utils.Interface(ERC20Interface),
      smartAccount.getProvider()
    );
    balance = erc20Contract.balanceOf(await smartAccount.getAddress());
  }

  if (balance.le(feeOptions.amount)) {
    console.error("Fee Balance Not Enough");
  }
}
```

:::tip
请注意，如果交易中涉及到手续费代币，验证结果可能不准确。
:::

## Step4: 指定手续费代币并发送交易

```jsx
if (isFeeRequired) {
  const feeOption;
  const response = await smartAccount.sendTransaction(tx, {
    fee: feeOption,
  }); // Send Transaction
  const receipt = await response.wait(); // Got Transaction Receipt Or Wait For at most 60 seconds
  // const receipt = await response.wait(1, 60);
} else {
  // Not Need Fee
  const response = await smartAccount.sendTransaction(tx); // Send Transaction
  const receipt = await response.wait(); // Got Transaction Receipt
}
```