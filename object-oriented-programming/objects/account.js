function Account(id, name, balance = 0) {
  this.id = id
  this.name = name
  this.balance = balance

  this.deposit = (amount) => {
    this.balance += amount
  }

  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount
      return amount
    }
    return null
  }

  console.log('hey');


  this.transfer = (toAccount, amount) => {
    const cash = this.withdraw(amount)

    if (cash) {
      toAccount.deposit(cash)
      return toAccount

    }
    return null
  }

  return this
}

const acc1 = new Account(1, 'Mitz', 10000)


const acc2 = new Account(2, 'Pola')

console.log(acc1.transfer(acc2, 2000))
console.log(acc1);
