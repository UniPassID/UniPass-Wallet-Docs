---
sidebar_position: 2
---

# User-friendly account

## Design for Web2 users

We have developed a user-friendly, seedless, non-custodial smart contract account solution based on the adaptable UniPass Wallet architecture.

Users can skip setting a guardian when creating an account for the first time. The parameters can now be set as follows.

|                | Owner | Guardian | Operator |
| -------------- | ----- | -------- | -------- |
| Master key     | `60`  | —        | `100`    |
| Register email | `60`  | `60`     | —        |
| Guardian email | —     | `50`     | —        |

:::tip Parameter details:

- Register email, with the permissions `Owner: 60` and `Guardian: 50`. The registered email of the user can be used to carry out Owner operations with the Master key or Guardian operations with other Guardians.

- Master key, with the permissions `Owner: 60` and `Operator: 100`. Users utilize this key for daily asset transfers and contract calls.

- Guardian email, with the permissions `Guardian: 50`. The guardian email enables users to send emails via Register and Guardian email to start social recovery when the master key is lost to update the keys in the account.
:::

In this case:

- Master key + Register email, allows you to perform the `owner` action.
- When the master key is lost:
  - The register email can start an account recovery with a time lock by sending an email to update the master key in the account.
  - If the Register email and Guardian email both start the account recovery can instantly update the Master key in the account without time lock.
  - More details >> [**Email Recovery**](../wallet/04-email-recovery.md)
