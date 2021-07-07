In order to deploy to the production Internet Computer network, you will need to acquire ICP and then mint cycles for your canisters.

You can purchase ICPs for yourself at any well known exchange. In order to withdraw from the exchange to your personal address, you'll need a `ledger account`.

For the purpose of this tutorial, we will use `dfx` to manage our identities.

### Dfx Identities

dfx comes bundled with an identity management toolchain. You can view your current identity by running the command:

```
dfx identity whoami
```

The response will most likely be `default` if you are using a clean installation of `dfx`.

You can list your identities with:
```
dfx identity list
```

Go ahead and create a new identity for this example `dfx identity new icptutorial`:

```
% dfx identity new icptutorial
Creating identity: "icptutorial".
Created identity: "icptutorial".
```

and switch to the identity with `dfx identity use icptutorial`:

```
% dfx identity use icptutorial
Using identity: "icptutorial".
```

### Ledger Id

Now that you've created a new identity you will need to find the `Ledger Account Id` for that identity's principal address. Luckily, `dfx` comes bundled with support for the ICP Ledger canister. You can get the ledger account id with the `dfx ledger account-id` command:

```
% dfx ledger account-id
5126d232242e7c54f8da0ab6a5b37e020d06ffc05acacad536290eda22bbf134
```

Now that you have a ledger account-id; you can withdraw ICPs from your exchange of choice to the account address.

You can always check your ICP balance with:

```
dfx ledger --network ic balance
```

## Be Mindful!

Please be mindful, `dfx` is a command line tool meant for development and deployment. It is *not* intended to be a secure, general purpose wallet for storing secure private keys. If you will be using `dfx` for development purposes it is highly recommended that you only maintain a balance required for developing and deploying your applications while maintaining larger balances in a more conventionally safe storage medium (cold wallets, hardware wallets, online custodial services, etc).