---
sidebar_position: 6
---

# UniPass Wallet vs. other wallets

## UniPass Wallet vs. EOA wallet

We can separate accounts on EVM-compatible chains into two main categories. One is Externally Owned Account (EOA) and another is Contract Account (CA). The biggest difference between EOA and CA is that EOA is controlled by private key while smart contract account is controlled by smart contract code, thus able to implement much more sophisticated logics of control.

Most of the accounts we use today is an EOA. You need to take care of the private key or the relatively more human-readable equivalent that is the seed phrase. When the private key or the seed phrase is lost, there will be no way for you to regain the control of the account.

In contrast, smart contract wallet uses CA, which enables us to create a secure and user-friendly control logic in smart contract code. In smart contract wallet, users can enjoy a wide variety of features designed to enhance user experience, including key replacement, social recovery of account, gas fee payment in arbitrary token, and expenditure limit on the account.

|  | Externally Owned Account (EOA) | Contract Account (CA) |
| --- | --- | --- |
| Root privilege | Private Key | Smart Contract |
| Single point of failure | Private Key | None |
| Use dApp | ✓ | ✓ |
| Account Recovery | × | ✓ |
| Expenditure Limit | × | ✓ |
| Gas Payment | only native token supported | supports arbitrary token |
| User Experience | Bad | Good |

## UniPass Wallet vs. other smart contract wallets

### 1. UniPass Wallet has unified account address across all chains

Unipass Wallet can ensure that user enjoys the same address across all EVM-compatible chains. This means that user can use the same address on Ethereum, its layer 2 chains (Arbitrum, Optimism, etc), and other EVM-compatible chains (Binance Smart Chain, Polygon, Avalanche, Cardano, etc).

### 2. Use threshold signature scheme to manage key using multi-party computation

Other smart contract wallet solutions often rely on EOA wallets for private key management. UniPass Wallet uses Multi-Party Computation (MPC) based Threshold Signature Scheme (TSS), which allows us to be reliant on EOA wallets for security and availability while also completely avoiding private key, the largest single point of failure, throughout the entire user journey. This creates a seedless user experience that is both delightful and secure for our users.

### 3. Unique on-chain Email-based verification technique

Email protocols (POP3, SMTP, and IMAP), more than 50 years old already, is a foundational piece of the modern internet and plays a central role in people’s everyday life, both inside and outside of the office.

During the evolution of email protocols, in order to protect emails from  maliciously modification, DNS spoofing, and spam flooding, DomainKeys Identified Mail (DKIM) is introduced in 2004. DKIM is a standardized identity verification technique of email. Senders will add digital signature to outgoing emails. When a email server receive signed emails, it can verify whether the email is coming from the actual sender and the content is not modified.

After endless research, UniPass Wallet is now able to verify DKIM’s digital signature using smart contract on chain using only very limited gas fee. This allows our users to manage their non-custodial contract accounts and carry out social recovery using only emails.

In order to protect our users’ privacy, we also added Zero Knowledge technology to ensure that user’s identity can be verified using only desensitized private information.

### 4. Allow regular internet users to become account guardians

Regular smart contract wallet’s social recovery solution, like the one of Argent, requires guardians to be users of Argent or has an Ethereum wallet already. This means that if your trusted family members and friends are not Web3 users, they cannot become your account’s guardians.

### 5. Support gas fee payment in any supported token

UniPass Wallet supports gas fee payment in any supported token. Developers can customize and deploy their own relayers to achieve customized gas fee payment policies for their users.

### 6. Receive asset with zero upfront cost

Unlike regular EOA, contract account needs to first have the smart contract deployed on chain to receive the account address and carry out operations like receiving payment.

UniPass Wallet can calculate user’s account address before the actual deployment, so that users can start receiving assets using the address before the actual account creation. This way, the smart contract only needs to be deployed when users finally need to carry out other operations, like transferring asset to others. At the same time, our innovation ensures that this account address could only be created with ownership and control belonging to the actual owners, thus preventing actors from owning the account before we initiate the account creation.

Our innovation greatly improved the user experience. Now users do not need to pay an upfront cost just to own an account address across different chains; they only need to do so when they need to use it.

### 7. Highly customizable security model that provides users with the security they need

Thanks to UniPass Wallet’s flexible account model and support of wide range of key types, developers can set up just the right amount of security needed for accounts with different levels of asset. For examples, a new account does not need extra security measures like additional guardian accounts and two-factor authentication, since the default security setting is enough. When users start accumulating more asset inside the account, developers can timely require the users to set up additional security measures. This allows developers to give users just the right amount of security, without unnecessarily sacrificing user experience for the additional security they don’t yet need.