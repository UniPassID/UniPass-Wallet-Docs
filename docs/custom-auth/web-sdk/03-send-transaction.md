---
sidebar_position: 4
---

# Send Transaction

## Step1: Generate Transaction

```jsx
const tx = {
  to, // To Address
  data, // Transaction Data
  value, // The value transferred to `To Address`
};
```

## Step2: Get Fee Options and Consumption through `simulateTransaction()`

```jsx
const {
  isFeeRequired, // whether required fee for the transaction
  feeOptions: FeeOptions, // the fee options
} = await smartAccount.simulateTransaction(tx);
```

## Step3: **Validate Whether Fee is Sufficient**

```jsx
import { constants } from "ethers";

if (isFeeRequired) {
  const feeOption; // Select Fee Option from fee options Got From `Step1`
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
Notice that if there is a transaction involving fee tokens, the validating result may not be accurate.
:::

## Step4: Select Fee Option and Send Transaction

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