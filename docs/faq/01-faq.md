---
sidebar_position: 1
---

# FAQ

## Advantages & Differences

### What are the benefits of the UniPass smart contract wallet over the EOA wallet (the in-game wallet)?

Enhancing user conversion rate and asset security are the key benefits. The benefits of the UniPass Wallet are as follows, in more detail.

1. The UniPass Wallet can be generated simply through Email or Google OAuth and does not require the mnemonics. Removing the seed phrase prevents irreparable losses brought on by faulty seed phrase management, considerably simplifies the operating process for Web2 users, and lowers the awareness threshold.
2. Unlike the irreversible leakage of the EOA wallet, the UniPass Wallet supports social recovery, allowing users to regain control of their accounts with the aid of guardians even if they lose control of their wallet due to major incursion.
3. Users can enjoy a gasless experience in UniPass Wallet. The burden of early game participation can be greatly reduced by gasless, preventing user attrition before users getting obsessed in the game. Gasless is especially evident in multi-chain games because users are spared the expense of purchasing the necessary gas tokens for each chain.
4. UniPass Wallet can be modified to incorporate versatile and potent features like off-chain authorization and on-chain transactions, and all changes don't call for the users to modify their addresses.

### How to verify a signature with UniPass Wallet and how does it differ from the EOA wallet?

When the application contract wants to verify the signature of the UniPass Wallet on the chain, it can call the UniPass Wallet contract to verify it in accordance with the [**EIP-1271**](https://eips.ethereum.org/EIPS/eip-1271) protocol. So the EIP-1271 protocol must be supported in application contracts.

On-chain signature verification differences between contract wallet and EOA Wallet:

- Contract Wallet: The contract needs to support the EIP-1271 protocol, then directly call the contract wallet's signature verification interface through EIP-1271 protocol.
- EOA Wallet: Verify the Secp256k1 signature directly in the contract.

---

## About Master key

### How is the master key generated?

Following MPC-TSS calculation, client and server slices generate the master key. The master key contains no private key, only a computed public key.

### Where is the master key stored?

`Client slice` will build a keystore file after encryption with the user's password (the password will be processed on the client side by pbkdf2). The keystore file is saved in UniPass cloud storage, and users can then save it to Google Drive, iCloud, and other third-party cloud drives, or save it to their local computer.

`Server slices` are produced independently for each account and encrypted with AWS's HSM (Hardware Security Module), which can be accessed by UniPass only when the user has entered 2FA.

In conclusion, because the master key lacks the corresponding complete private key, there is no single point of failure problem of private key leakage. Second, because the client and server slices are stored separately with different security schemes, the likelihood of being cracked and matched at the same time is extremely low.

---

## About Relayer

### What is the role and authority of Relayer?

Relayer's duty is limited to submitting transactions and paying for gas on behalf of the user; they cannot change the operation in the user's signature.

### Does only UniPass can run the relayer?

Of course not, UniPass will run a relayer, but partners or even anyone can also run relayer. We will provide operation and maintenance help if someone choose to run it themselves.

### What is the principle and implementation of gasless?

The [**Meta Transaction**](https://medium.com/coinmonks/ethereum-meta-transactions-101-de7f91884a06)  method allows for the gasless experience.

![Process of meta transaction](./img/meta-transaction.png)

First, in the smart contract wallet solution, user’s account is a contract on-chain. It has an in-built authentication method, which means that the action and signature are supplied as parameters to the contract, and the internal logic is utilized to verify the signature. Then it is clear that what the user signs directly (account operation and signature) is not a Layer 1 transaction, but its basic operation, and anyone who obtains the core operation wraps a full Layer 1 transaction, submits it to the chain, and pays the needed gas. The operation that user-signed is then referred to as a meta-transaction.

In other words, the purpose of the contract wallet is to change the state of the smart contract via a Layer 1 transaction on the chain, and this Layer 1 transaction must include at least two parts of signature. One part is the user's signature in the data field for the operation he wishes to perform, which can be transmitted to the contract for verification and can only be signed by the user. The other part is the signature of the relayer who is willing to assist in the submission of the Layer 1 transaction to the chain. The relayer can be anyone, it is a part required for a standard transaction, and the relayer need to pay the gas.

---

## What can I do if UniPass closed

### Can UniPass Wallet be exported to traditional wallets?

Because the user's address does not match to a private key, UniPass Wallet is a smart contract wallet that cannot directly export a traditional private keys or seed phases. But same to how Gnosis safe is used with simply 1-1 single signatures, the user can transfer control of the contract to a MetaMask address.

### How to migrate to MetaMask when UniPass stop working?

UniPass has an email-based social recovery mechanism, and it can be performed without any help from UniPass or other 3rd party (like Zengo’s Escrow):If UniPass’ bot (which functions to receive the recovery email and verify) is failed, an open source front-end (compiled to native app with Electron) can be downloaded by users, and run on their computer. Also a web form is available with IPFS hosting and users can perform the recovery with their phone. Then there will be instructions like:

1. Input information like your email address / UniPass account address
2. Input the destination address (e.g. a MetaMask address) you want to use to control your UniPass account in the future
3. Hit the ‘Generate’ button to get an email template (subject & body), and you can send them to your guardians’ email addresses.
4. Tell you guardians to forward the email they received back to your email address. And if you are also using your own email as a guardian, you can send the email template to any email address that you can receive.
5. Download the email files (.eml) from your inbox and upload them with this front-end and also the help with your MetaMask to the blockchain. Done.