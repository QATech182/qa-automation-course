class ChaseBankAccout {
  #balance; // private field
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  get balance() {
    return `Account Balance is $${this.#balance}.`;
  }

  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("Balance cannot be negative!");
    }
  }
}

const account = new ChaseBankAccout("Alice", 500);
console.log(account.balance);

account.balance = 1000;
console.log(account.balance);
