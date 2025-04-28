class Persona{
  constructor(
  protected name: string,
  protected age: number
  ){
  this.name = name
  this.age = age
  }

  presentar(){
    return`Mi nombre es ${this.name} y tengo ${this.age} años`
  }
}

class Student extends Persona{
  curse: string
  constructor(
    name: string,
    age: number,
    curse: string

  ){
   super(name, age)
   this.curse =curse

  }
  estudiar(){
    return `${this.name} esta estudiando el curso ${this.curse}`
  }

}



const per1 = new Persona('Mit',28)
console.log(per1.presentar());

const estudian1 = new Student('Mit',28, 'Español')
console.log(estudian1.presentar());
console.log(estudian1.estudiar());



