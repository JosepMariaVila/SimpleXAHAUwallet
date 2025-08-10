A simple javascript XAHAU wallet to check balances, send XAH, create new mainnet accounts offline, create testnet funded accounts, check balances and send XAH. It uses the xrpl.js library.

It uses a seed to derive the account address and sign transactions

Testnet accounts use the secp256k1 algorithm, which generates a 29 characters seed.

Mainnet accounts use the ed25519 algorithm, which generates a 31 characters seed.

Step by step guide to use the code:

1) Create an empty folder in your desktop and name it as you like.

2) Download the 4 files I have in this project to that folder.

3) Open the HTML file in your browser.

4) Select the network. It works for Mainnet and Testnet.

5) It allows to create a Mainnet account (which has to be activated later with XAH). Do it offline, it's purely mathematical.

6) It allows to create a Testnet funded account from the faucet. You can do it online as it's just testnet XAH.

7) It allows to send XAH. Warning: if you sign and send a transaction using the same computer, as it has internet conection, we can consider the private key compromised once broadcasted the transaction. So, each time you send XAH using this wallet you should generate a new keyparir using a computer that never is connected to the internet and send your XAH there.

Demo online just for educational purposes here: 
https://skunk-proper-smoothly.ngrok-free.app/tools/simpleXAHAUwallet/xahauwallet
