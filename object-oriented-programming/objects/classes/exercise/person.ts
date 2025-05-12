class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age}`);
    }

}

const person1 = new Person('Mitz', 28)
person1.saludar();


