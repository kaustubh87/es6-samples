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


class SavingsAccount extends BankAccount{
    withdraw(amount){
      console.log('You cannot withdraw money from savings account');
    }

    deposit(amount){
      if(super.deposit(amount)){
      console.log(`Congratulations on making your deposit! of ${amount}$`);

}
    }
}


var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
//account.printBalance();
savingsAccount.printBalance();
//account.printBalance();
