class ATM {
  private bills: {
    [key: number]: number
  }
  public total: number
  constructor() {//inicialicacion en parametros es algo que inicializas en los parentesis por que lo recibes.
    this.bills = { // esto es un objeto
      100: 100,
      50: 100,
      20: 100,
      10: 100,
      5: 100
    }
    this.total = Object.keys(this.bills).reduce((total, key) => (total + this.bills[parseInt(key)] * parseInt(key)), 0)
  }

  withdrawal(card: CreditCard, amount: number): number {
    if (card.amountAvailable >= amount) {
      if (amount === 100 || amount === 50 || amount === 20 || amount === 10
        || amount === 5
      ) {
        this.bills[amount] -= 1
        card.subtract(amount)
        console.log("Cantidad disponible en la tarjeta:", card.amountAvailable);

        return amount
      }
    }
    return -1

  }

  print(): void {
    console.log(`El total del cajero es: ${this.total}`);
  }
}

const atm1 = new ATM()

atm1.print()

class CreditCard {
  public amountAvailable: number
  public amountSpent: number

  constructor(available: number, spent: number) {
    this.amountAvailable = available
    this.amountSpent = spent

  }

  subtract(amount: number) {
    this.amountAvailable -= amount
  }
}

const card1 = new CreditCard(1000, 0)

atm1.withdrawal(card1, 100)