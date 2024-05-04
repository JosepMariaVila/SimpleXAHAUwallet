// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************

function getNet() {
  let net;
  if (document.getElementById("tn").checked) net = "wss://xahau-test.net";
  if (document.getElementById("mn").checked) net = "wss://xahau.network";
  return net;
} // End of getNet()

// *******************************************************
// ************* Create XAHAU Testnet Account ************
// *******************************************************

async function getSome() {
  const call = await window.fetch("https://xahau-test.net/newcreds", {
    method: "POST",
  });
  const data = await call.json();
  console.log(data);

  standbyAccountField.value = data.address;
  standbySeedField.value = data.secret;
  standbyBalanceField.value = data.xrp;
  seeds.value = standbySeedField.value;
  standbyAmountField.value = "";
  standbyDestinationField.value = "";

  standbyResultField.value =
    "New account created:" +
    "\nAccount: " +
    data.address +
    "\nSeed: " +
    data.secret +
    "\nXRP: " +
    data.xrp +
    "\nHash: " +
    data.hash +
    "\nCode: " +
    data.code;
}

// *******************************************************
// ************* Create XAHAU Mainnet Account **************
// *******************************************************
async function getAccount2() {
  const wallet = xrpl.Wallet.generate("ed25519");
  console.log(wallet);

  standbyResultField.value =
    "Creating a wallet...\n" + "Wallet created:\n" + JSON.stringify(wallet);

  standbyAccountField.value = wallet.address;
  standbySeedField.value = wallet.seed;
  seeds.value = standbySeedField.value;
  standbyBalanceField.value = "";
  standbyAmountField.value = "";
  standbyDestinationField.value = "";
} // End of getAccount2()

// *******************************************************
// ********** Get Accounts from Seeds ********************
// *******************************************************

async function getAccountsFromSeeds() {
  let net = getNet();
  const client = new xrpl.Client(net);
  results = "Connecting to " + getNet() + "....";
  standbyResultField.value = results;
  await client.connect();
  results += "\nConnected.\n";
  standbyResultField.value = results;

  // -------------------------------------------------Find the test account wallets.
  var lines = seeds.value.split("\n");
  const standby_wallet = xrpl.Wallet.fromSeed(lines[0]);

  // -------------------------------------------------------Get the current balance.
  const standby_balance = await client.getXrpBalance(standby_wallet.address);

  // ----------------------Populate the fields for Standby account.
  standbyAccountField.value = standby_wallet.address;
  standbySeedField.value = standby_wallet.seed;
  standbyBalanceField.value = await client.getXrpBalance(
    standby_wallet.address
  );
  standbyAmountField.value = "";
  standbyDestinationField.value = "";

  client.disconnect();
} // End of getAccountsFromSeeds()

// *******************************************************
// ******************** Send XAHAU *************************
// *******************************************************

async function sendXAHAU() {
  results = "Connecting to the selected ledger.\n";
  standbyResultField.value = results;
  let net = getNet();
  results = "Connecting to " + getNet() + "....";
  const client = new xrpl.Client(net);
  await client.connect();

  results += "\nConnected. Sending XAHAU...";
  standbyResultField.value = results;

  const standby_wallet = xrpl.Wallet.fromSeed(standbySeedField.value);
  const sendAmount = standbyAmountField.value;

  results += "\nSending from account: " + standby_wallet.address;
  standbyResultField.value = results;
  if (net === "wss://xahau-test.net") {
    networkID = 21338;
  }
  if (net === "wss://xahau.network") {
    networkID = 21337;
  }
  // -------------------------------------------------------- Prepare transaction
  const prepared = await client.autofill({
    TransactionType: "Payment",
    Account: standby_wallet.address,
    Amount: xrpl.xrpToDrops(sendAmount),
    Destination: standbyDestinationField.value,
    NetworkID: networkID,
  });

  // ------------------------------------------------- Sign prepared instructions
  const signed = standby_wallet.sign(prepared);

  // -------------------------------------------------------- Submit signed blob
  const tx = await client.submitAndWait(signed.tx_blob);

  results +=
    "\nBalance changes: " +
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2);
  standbyResultField.value = results;

  standbyBalanceField.value = await client.getXrpBalance(
    standby_wallet.address
  );
  client.disconnect();
} // End of sendXAHAU()

async function reload() {
  window.location.reload();
}
