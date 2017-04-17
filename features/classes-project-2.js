class BankAccount{

constructor (balance){
  this.balance = typeof balance === 'number' ? balance : 0;
}

set balance (amount) {

  this._balance = amount;
  this.balanceUpdatedAt = new Date();
}

get balance(){
  return this._balance;
}


deposit(amount){
  if(typeof amount === 'number')
  {
     this.balance  = amount + this.balance;
     return true;
  }
  else {
    console.log('Amount is not a number');
    return false;
  }
}

withdraw(amount){
  if(typeof amount === 'number')
  {
     this.balance -= amount;
     return this.balance;
  }
  else {
    console.log('Amount is not a number');
    return false;
  }

}

printBalance(){

  console.log(`Your account balance is ${this.balance} Last updated at ${this.balanceUpdatedAt} `);

}



}


var account = new BankAccount(100);
account.deposit(100);
account.printBalance();
account.withdraw(50);
account.printBalance();
