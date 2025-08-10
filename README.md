# XAHAUwallet

A XAHAU wallet to create new mainnet accounts offline, create testnet funded accounts, check balances and send XAH. It uses the xrpl.js library.

It uses a seed to derive the account address and sign transactions.

Testnet accounts use the secp256k1 algorithm, so the wallet generates a 29 characters seed for testnet accounts.

Mainnet accounts use the ed25519 algorithm, so the wallet generates a 31 characters seed for mainnet accounts.

Step by step guide to use the code:

1) Create an empty folder in your desktop and name it as you like.

2) Download the 6 files I have in this project to that folder (or just download the folder and unzip it).

3) Open the HTML file in your browser (xahauwallet.html).

4) Select the network. It works for Mainnet and Testnet.

5) Click on "or create a Mainnet account" to create a Mainnet account (which has to be activated later on with XAH). Do it offline, it's purely mathematical.

6) Click on "or create a Testnet account" to create a Testnet funded account with 1000 XAH from the faucet. You have to do it online as internet connection is needed, it isn't real XAH.

7) It also allows to send XAH. Select Testnet or Mainnet as desired, then paste your seed on the corresponding box and click on "Get Account from Seed", it will show your account and its corresponding balance (this needs internet conection, checking the balance can't be done offline). Then, to send XAH, type the Amount you want to send on the corresponding box and the Destination address on the corresponding box, then click "Send XAH" (in this case, signing and sending are done online (check my other repositories if you want to sign transactions offline (sending-broadcasting is always performed online))) and wait for the results. Warning: if you sign and send a transaction using a computer, as it has internet conection, we can consider the private key compromised once broadcasted the transaction. So, it's recommended having a computer that never is connected to the internet just to generate new accounts offline (and even sign transactions offline). So, you should generate a new keyparir offline using the "offline" computer that never is connected to the internet and send (from the computer that has internet connection) your XAH to that new fresh account. Repeat this process each time you send XAH.
