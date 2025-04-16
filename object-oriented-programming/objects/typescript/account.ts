interface AccountShape{
  id: number
  name: string
  balance: (amount:number) => void
  deposit: (amount:number) => number | null
  transfer:(toAccount:AccountShape, amount:number) => AccountShape |null
}


function Account(id: number, name: string, balance: number = 0) {
  this.id = id
  this.name = name
  this.balance = balance

  this.deposit = (amount:number) => {
    this.balance += amount
  }

  this.withdraw = (amount:number) => {
    if (this.balance >= amount) {
      this.balance -= amount
      return amount
    }
    return null
  }

  console.log('hey');


  this.transfer = (toAccount: AccountShape, amount:number) => {
    const cash = this.withdraw(amount)

    if (cash) {
      toAccount.deposit(cash)
      return toAccount

    }
    return null
  }

  return this
}

const acc1:AccountShape = new (Account as any)(1, 'Mitz', 10000)


const acc2:AccountShape = new  (Account as any)(2, 'Pola')

console.log(acc1.transfer(acc2, 6000))
console.log(acc1);
