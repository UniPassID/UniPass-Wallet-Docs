---
sidebar_position: 2
---

# Sign-in With Ethereum

如果在连接 UniPass Wallet 时，设置 `authorize` = `true`，将会获得自动生成的 `Sign-in With Ethereum` 消息和对应的签名，该消息和签名可以通过 [siwe](https://github.com/spruceid/siwe) 包来完成验证。

另外，也可以通过 @unipasswallet/popup-utils 中的 `verifyMessageSignature` 来完成授权信息 Authorization 的验证。

:::info Tips
请在 AuthChain(Polygon) 上调用 UniPass Wallet 智能合约钱包进行验证。
:::

```ts
import { SiweMessage } from "siwe";
import { providers } from "ethers";
import { verifyMessageSignature } from "@unipasswallet/popup-utils";

const provider = new providers.JsonRpcProvider(
  "https://node.wallet.unipass.id/polygon-mumbai"
);
const userInfo = {
  address: "0x6939dBfaAe305FCdA6815ebc9a297997969d39aB",
  email: "zhanghuaqiang@gmail.com",
  newborn: false,
  message:
    "http://localhost:1800/ wants you to sign in with your Ethereum account:\n0x6939dBfaAe305FCdA6815ebc9a297997969d39aB\n\nemail: zhanghuaqiang@gmail.com\n\nURI: http://localhost:1800/\nVersion: 1\nChain ID: 80001\nNonce: xOqEIRemQR71mKvkU\nIssued At: 2023-02-09T07:20:43.007Z\nExpiration Time: 2023-02-09T07:30:43.007Z",
  signature:
    "0x000001f0abeed43192d4a91ce7f488ae8d73bb268b84b6fa99f334ddd4333671ed94f75503884e0dea1d89ef3fb0f84c0e4acd7c16905c44dd5861e3487dfb816cc2341b020000003c000000640000000002007e7649ccd0315628dabe5256cd050d4ce7e1824d1217dba20cc5e3e5626553970000003c000000000000003c0000c06495b106de8a0701ff5e84d9f8a5c9d711b1b6000000280000000000000000",
};

async function verifyAuthBySIWE() {
  const siweMsg = new SiweMessage(userInfo.message);
  try {
    const ret = await siweMsg.validate(userInfo.signature);
    console.log("ret", ret);
    if (ret === true) {
      console.log("verify siwe message & sig success!");
    } else {
      console.log("verify siwe message & sig failed!");
    }
    // TODO: verify other info from siwe message, like expires, domain, and address etc.
  } catch (e) {
    console.log("verify err", e);
  }
}

async function verifyAuthByPopupUtils() {
  try {
    const { message, signature, address } = userInfo;
    const ret = await verifyMessageSignature(
      message,
      signature,
      address,
      true,
      provider
    );
    if (ret === true) {
      console.log("verify auth with @unipasswallet/popup-utils success!");
    } else {
      console.log("verify auth with @unipasswallet/popup-utils failed!");
    }
  } catch (e) {
    console.log("verify err", e);
  }
}

// verifyAuthBySIWE();

// verifyAuthByPopupUtils();
```