A simple javascript XAHAU wallet to check the balance, send XAH, create new mainnet accounts offline and create testnet funded accounts.

It uses the xrpl.js library.

Use Node.js and VisualStudioCode to set up the project (or any similar tool). 

Step by step guide to use the code:

1) Create an empty folder in your desktop and name it as you like.

2) Download the 2 files I have in this project and put them in that folder:  xahauwallet.js xahauwallet.html

Open that folder with VSC, or when you are in VSC open the folder.

Open a terminal and type (it creates a basic package.json): npm init --yes

Then type in the terminal (it installs the library): npm install --save xrpl

Close VisualStudioCode.

Open the HTML file in your browser.

Select the network. It works for Mainnet and Testnet.

It allows to create a Mainnet account (which has to be activated later with XAH). Do it offline, it's purely mathematical.

It allows to create a Testnet funded account from the faucet. You can do it online as it's just testnet XAH.

It allows to send XAH.

Try the demo online here:
