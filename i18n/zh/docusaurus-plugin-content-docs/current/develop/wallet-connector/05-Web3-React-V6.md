# Using Web3-React V6

## Example

A demo app for web3-react V6 is available [here](https://up-web3-react-v6-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/we3-react-v6-demo).

## Installation

```shell
  npm install @unipasswallet/web3-react-v6-connector
```
or
```shell
  yarn add @unipasswallet/web3-react-v6-connector
```

## Parameters

* `options.connect.chainId` -- Default chainId.

* `options.connect.returnEmail` -- If true, email will return when connect function been called.

* `options.connect.appSettings` -- Config appName, appIcon and theme.

## Usage

```ts
import { providers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider: any): providers.Web3Provider {
  return new providers.Web3Provider(provider);
}

export default function Layout() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}

```
```ts
import { useWeb3React } from "@web3-react/core";
import { UniPassConnector } from "@unipasswalet/web3-react-v6-connector";

export const unipassConnector = new UniPassConnector({
  chainId: 80001,
  returnEmail: false,
  appSettings: {
    appName: "Web3 React Demo app",
  },
});

const { active, library, activate, account, chainId, deactivate } = useWeb3React();

const connect = async () => {
  try {
    await activate(unipassConnector, () => {}, true);
  } catch (e) {
    console.error(e);
  }
};
```
## Verify Message

You can find how to verify message [**HEAR**](../verifying-messages/eip191-verifying-messages).