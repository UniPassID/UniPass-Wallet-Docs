---
sidebar_position: 2
---

# Email recovery

When using non-custodial smart contract wallets, once users lose access to the key due to all sorts of reasons, they won’t be able to control the account anymore. To regain their control, the users need to replace the account’s key through account recovery.

As of now, the account recovery solution on the market is quite limited. Argent’s social recovery solution, arguably the most well known on the market, only allows users to set other Argent accounts or EOA addresses as guardians. Such solution essentially requires all your guardians to be crypto native already.

With our unique on-chain email verification technology, users can set multiple internet emails as guardians of the account, which can help users achieve account recovery by simply submitting emails to smart contract on chain. This greatly lowers the requirement on guardians and allows all your family members and friends with emails to become guardians of your account.

:::tip TIPS
- When users have more than 2 guardian emails (including the main email), users can immediately recover the account using both of them to submit account recovery emails.
- When users only have one guardian email (by default the main email) the users need to wait for a 48-hour lock period before the account recovery takes place.

For your account safety, we highly recommend you set up 2 or more guardian emails.
:::

UniPass allowed the difficulty to owning and guarding a wallet account to Web2 level, giving users a smart contract account truly easy to understand, operate, and manage.

## Privacy preserving

Because Web2 accounts’ private account information is stored in centralized servers outsiders cannot access, in normal circumstances these private information would not be leaked. Since UniPass is a non-custodial smart contract wallet, even though it stores users’ sensitive information after hashing, when such information is verified on chain, it is still possible that it could be exposed.

UniPass Wallet uses zero knowledge technology to completely desensitize user’s private information on chain, achieving decentralized verification while effectively protecting user’s privacy.