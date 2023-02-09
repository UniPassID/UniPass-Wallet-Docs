# Using Web3-Onboard

## Example

A demo app for web3-onboard is available [here](https://up-web3-onboard-demo.vercel.app/), and source code is available too: [Demo Code](https://github.com/UniPassID/web3-onboard-demo).

### Installation

```shell
npm i @web3-onboard/core @unipasswallet/web3-onboard
```

or

```shell
yarn add @web3-onboard/core @unipasswallet/web3-onboard
```

## Parameters

- `options.chainId` -- Default chainId.

- `options.returnEmail` -- If true, email will return when connect function been called.

- `options.appSettings` -- Config appName, appIcon and theme.

## Usage

```typescript
import Onboard from '@web3-onboard/core'
import unipassModule from '@unipasswallet/web3-onboard'

// initialize the module with options
const unipass = unipassModule({
  chainId: 80001,
  returnEmail: true,
  appSettings: {
    appName: 'web3-onboard test for unipass',
    appIcon: 'your icon url',
    theme: UniPassTheme.DARK
  }
})

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    unipass
    //... other wallets
  ]
})
```

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).