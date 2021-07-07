
## Ensure you have Homebrew installed

*Note dfx is currently not officially supported on Macs with M1 CPUs. The SDK team is [working on a fix](https://forum.dfinity.org/t/a-trick-way-to-run-motoko-in-mac-m1/2201/2).*

In your terminal run:

```
brew --version
```

and you should see a response similar to

```
% brew --version
Homebrew 3.2.0
Homebrew/homebrew-core (git revision 9ea42e7407; last commit 2021-06-23)
Homebrew/homebrew-cask (git revision 2696a93ca5; last commit 2021-06-23)
```

If you see a Homebrew version ; you have Homebrew installed and can proceed to the next section. If not paste the following command in your terminal to install Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Ensure you have Node installed

In your terminal run:

```
node --version
```

and you should see a response similar to

```
% node --version
v14.17.0
```

If you see a Node version ; you have Node installed and can proceed to the next section. If not, use brew to install Node:

```
brew install node
```

## Install Rust (Optional)

In your terminal, run:

```
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

and follow the instructions to install Rust.

## Install the SDK

In your terminal, run:

```
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

## Get Cycles (for Network Deployments)

Now that you've successfully installed the SDK follow the steps to [get cycles](getting_started/get_cycles.md)