class Vehicle {
  private isOn: boolean

  constructor(
    protected emoji: string,
    protected brand: string,
    protected model: string,
    protected year: number,
  ) {
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
    this.isOn = false
  }

  run() {
    this.isOn = true
  }

  toString() {
    return `Emoji: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`
  }

}

class Car extends Vehicle {
  private isAirOn = false
  constructor(
    emoji: string,
    brand: string,
    model: string,
    year: number,
    private numOfDoors: number = 4
  ) {
    super('🏎️', brand, model, year)
    this.isAirOn = false
  }
}

class Motorcycle extends Vehicle {
  constructor(
    emoji: string,
    brand: string,
    model: string,
    year: number,

  ) {
    super('🏍️', brand, model, year)

  }
  wheelie() {
    return '🛞'
  }
}

const car1 = new Car('🏎️', 'Ford', 'lobo', 2019)
const mtc1 = new Motorcycle('🏍️', 'Yamaha', 'M200', 2024)

console.log(car1.toString());
console.log(mtc1.toString());
