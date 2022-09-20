/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function deposit(amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else if (amount <= 0 || Number.isInteger(amount) === false) {
    return false;
  }

};
Account.prototype.withdraw = function withdraw(amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else if (amount <= 0 || Number.isInteger(amount) === false) {
    return false;
  }
};
Account.prototype.getBalance = function getBalance() {
  var currentBalance = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        currentBalance = currentBalance + this.transactions[i].amount;
      } if (this.transactions[i].type === 'withdrawal') {
        currentBalance = currentBalance - this.transactions[i].amount;
      }
    }
    return currentBalance;
  }
};
