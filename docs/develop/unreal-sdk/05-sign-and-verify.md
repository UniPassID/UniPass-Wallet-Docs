---
sidebar_position: 5
---

# Sign Message and Verify

## Sign message

create a `Sign Message` function in the Widget Blueprint, and then complete its parameters.

1. `Message`: the message to be signed by UniPass Wallet.
2. `OnSignMessage Event`: when user confirmed signing the message in UniPass Wallet, a signature will be return as event data.

![sign message](./img/unreal-sign-message.png)

## Verify signature

For how to verify the signature on server, please refer to [**UniPass Verifying Messages**](../verifying-messages/01-unipass-verifying-messages.mdx).