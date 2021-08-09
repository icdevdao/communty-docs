In order to deploy to the production Internet Computer network, you will need to acquire ICP and then mint cycles for your canisters.

You can purchase ICPs for yourself at any well known exchange. In order to withdraw from the exchange to your personal address, you'll need a `ledger account id`.

For the purpose of this tutorial, we will use `dfx` to manage our identities.

### Dfx Identities

`dfx` comes bundled with an identity management toolchain. You can view your current identity by running the command:

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

### Principal Id
As with other blockchain networks, digital signature schemes are used for authenticating messages in various parts of the IC infrastructure. When creating an identity with `dfx` a [`.pem` file](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) is generated for the identity. These files can be found under the `~/.config/dfx/identity/` directory. Your Internet Computer "Principal" is roughly equivalent to your "public address" in other blockchain systems. You will need this identifier handy in the cycles creation steps. You can get your Principal id with the following command:

```
% dfx identity get-principal
jvehu-ucxvu-4kulk-noxef-ggd5l-vtx7j-55dob-6546u-eklzd-s4uut-2qe
```

### Ledger Id

Now that you've created a new identity you will need to find the `ledger account id` for that identity's principal address. Luckily, `dfx` comes bundled with support for the ICP Ledger canister. You can get the ledger account id with the `dfx ledger account-id` command:

```
% dfx ledger account-id
5126d232242e7c54f8da0ab6a5b37e020d06ffc05acacad536290eda22bbf134
```

Now that you have a ledger account-id; you can withdraw ICPs from your exchange of choice to the account address.

You can always check your ICP balance with `dfx` and assuming you withdrew ICPs to your account, you should have some balance:

```
% dfx ledger --network ic balance
1.00000000 ICP
```

### Cycles Wallet

Now that you have ICPs in the `ICP Ledger`, you can use those ICPs to mint `cycles`. Minting cycles is a one way process; ICPs can mint cycles and cycles are used to pay for canister computation. Cycles cannot be transformed back into ICPs.

The first step to mint cycles is to to create a wallet canister on the production Internet Computer network computer. You will need the `Principal id` you used when creating your identity.

The command will look like:
```
dfx ledger --network ic create-canister <principal-identifier> --amount <icp-tokens>
```

Lets create an empty canister and preload it with 0.1 ICP as follows:
```
% dfx ledger --network ic create-canister jvehu-ucxvu-4kulk-noxef-ggd5l-vtx7j-55dob-6546u-eklzd-s4uut-2qe --amount 0.1
Transfer sent at BlockHeight: 239461
Canister created with id: "ad6mp-3aaaa-aaaah-qacya-cai"
```

Great! Now you have a empty canister living on the Internet Computer. Next we will install the `cycles-wallet` code into that canister with `dfx`:

```
dfx identity --network ic deploy-wallet <canister-identifer>
```

The previous command gave us our canister id, so lets use that:

```
% dfx identity --network ic deploy-wallet ad6mp-3aaaa-aaaah-qacya-cai
Creating a wallet canister on the ic network.
The wallet canister on the "ic" network for user "icptutorial" is "ad6mp-3aaaa-aaaah-qacya-cai"
```

Congrats! You now have a cycles wallet. You can check the balance with `dfx` using:

```
% dfx wallet --network ic balance
1923942143701 cycles.
```

You can also view your wallet canister web UI by putting your canister id in the browser URL box and adding [`.raw.ic0.app/`](https://ad6mp-3aaaa-aaaah-qacya-cai.raw.ic0.app/) to the end. You will need to sign in with Internet Identity and authorize the wallet to your II in order to view the cycles wallet UI.

### Topping Up

If you ever run low on cycles you can always top up your cycles balance with `dfx`:

```
% dfx ledger --network ic top-up --amount 0.5 ad6mp-3aaaa-aaaah-qacya-cai
Transfer sent at BlockHeight: 239474
Canister was topped up!
% dfx wallet --network ic balance
1923941192095 cycles.
```

## Be Mindful!

Please be mindful, `dfx` is a command line tool meant for development and deployment. It is *not* intended to be a secure, general purpose wallet for storing secure private keys. If you will be using `dfx` for development purposes it is highly recommended that you only maintain a balance required for developing and deploying your applications while maintaining larger balances in a more conventionally safe storage medium (cold wallets, hardware wallets, online custodial services, etc).