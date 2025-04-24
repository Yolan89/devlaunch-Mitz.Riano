class Animal {

  constructor(
    protected name: string,
    protected species: string,
    protected age: number
  ) {
    this.name = name
    this.species = species
    this.age = age
  }
  makeSound() {
    return ''

  }

  toString() {
    return `Name: ${this.name}\nspecies: ${this.species}\nage: ${this.age}`
  }
}

class Lion extends Animal {
  constructor(
    name: string,
    species: string,
    age: number,
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Roar..'
  }
  
  print(): string{
  const info = this.toString()

  return ` 🦁 \n${info}`
  }
  
}

type Elephantsize = 'small' | 'medium' | 'big'
class Elephant extends Animal{
  constructor(
    name: string,
    species: string,
    age: number,
    private size : Elephantsize
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Phrr..'
  }
  
  print(): string{
  const info = this.toString()

  return ` 🐘 \n${info}\nsize:${this.size}`
  }
}


const l1 = new Lion('Simba', 'King', 8)
console.log(l1.makeSound());
console.log(l1.print());

const el1 = new Elephant('Dumbo', 'fly', 1,'small')
console.log(el1.makeSound());
console.log(el1.print());
class Animal {

  constructor(
    protected name: string,
    protected species: string,
    protected age: number
  ) {
    this.name = name
    this.species = species
    this.age = age
  }
  makeSound() {
    return ''

  }

  toString() {
    return `Name: ${this.name}\nspecies: ${this.species}\nage: ${this.age}`
  }
}

class Lion extends Animal {
  constructor(
    name: string,
    species: string,
    age: number,
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Roar..'
  }
  
  print(): string{
  const info = this.toString()

  return ` 🦁 \n${info}`
  }
  
}

type Elephantsize = 'small' | 'medium' | 'big'
class Elephant extends Animal{
  constructor(
    name: string,
    species: string,
    age: number,
    private size : Elephantsize
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Phrr..'
  }
  
  print(): string{
  const info = this.toString()

  return ` 🐘 \n${info}\nsize:${this.size}`
  }
}


const l1 = new Lion('Simba', 'King', 8)
console.log(l1.makeSound());
console.log(l1.print());

const el1 = new Elephant('Dumbo', 'fly', 1,'small')
console.log(el1.makeSound());
console.log(el1.print());
