/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function openAccount(holder, balance) {
  if (balance <= 0 || Number.isInteger(balance) === false) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);

    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};
// this.accounts.Account.number

Bank.prototype.getAccount = function getAccount(number) {
  if (this.accounts.find(o => o.number === number) === undefined) {
    return null;
  }
  var foundAccount = this.accounts.find(o => o.number === number);
  return foundAccount;
};

Bank.prototype.getTotalAssets = function getTotalAssets() {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets = totalAssets + this.accounts[i].getBalance();
  }
  return totalAssets;
};
