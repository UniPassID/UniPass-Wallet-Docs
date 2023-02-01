# Using Web3-React V6

web3-react connector for the [UniPass](https://unipass.vip/) wallet.

## Example

A demo app for web3-react is available [here](https://up-web3-react-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/web3-react-demo).

## Installation

```shell
  npm install @web3-react/unipass
```
or
```shell
  yarn add @web3-react/unipass
```

## Parameters

* `options.connect.chainId` -- Default chainId.

* `options.connect.returnEmail` -- If true, email will return when connect function been called.

* `options.connect.appSettings` -- Config appName, appIcon and theme.

## Usage

```js
import { UniPassTheme } from "@unipasswallet/popup-types";
import { initializeConnector } from "@web3-react/core";
import { UniPass } from "@unipasswallet/web3-react";

export const [uniPassWallet, hooks] = initializeConnector<UniPass>(
  (actions) =>
    new UniPass({
      actions,
      options: {
        chainId: 5,
        returnEmail: true,
        appSettings: {
          appName: "web3-react test for unipass",
          appIcon: "your icon url",
          theme: UniPassTheme.DARK,
        },
      },
    })
);
```
```js
import { hooks, uniPassWallet } from "./connector";

const { useProvider, useAccount } = hooks;

const provider = useProvider();
const account = useAccount();

const connect = () => {
    return uniPassWallet.activate().catch((e) => {
        console.error(e);
    });
};

const disconnect = () => {
    return uniPassWallet.deactivate()
};
```
## Verify Message

You can find how to verify message [**HEAR**](../verifying-messages/eip191-verifying-messages).