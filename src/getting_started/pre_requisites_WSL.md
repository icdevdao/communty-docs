 ## Install the latest version of WSL from  [Window's official website](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install)
 
 Open PowerShell as Administrator and run:

 ```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
Enable Virtual Machine feature by running:

 ```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
Download the Linux kernel update package from [this link](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

Run the update package downloaded in the previous step.

Open PowerShell and run this command to set WSL 2 as the default version:

 ```
wsl --set-default-version 2
```

 ## Install ubuntu or any other Linux distribution from [Window's store](https://docs.microsoft.com/en-us/windows/wsl/wsl2-install)

Open terminal and install NodeJS by running

 ```
sudo apt install nodejs
```

Once installed, verify it by checking the installed version by running:

 ```
node -v or node –version
```
and you should see a response similar to

```
% node --version
v14.17.0
```

Install NPM by running

 ```
sudo apt install npm
npm -v or npm –version
```
## Install the SDK

In your terminal, run:

```
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

*Note if while creating a new project you get a error of missing module run the following commands in the root of the project directory.*

```
npm install @dfinity/candid

npm install @dfinity/agent

npm i @dfinity/principal
```
