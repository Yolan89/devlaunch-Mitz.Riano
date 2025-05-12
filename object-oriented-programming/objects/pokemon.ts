abstract class Pokemon {
    public name: string
    public health: number

    constructor(name: string, health: number = 100) {
        this.name = name
        this.health = health

    }
    isAlive(): boolean {
        return this.health > 0
    }

    receiveDamage(damage: number) {
        if (this.health < damage) {
            this.health = 0

        } else {
            this.health -= damage
        }
    }
}

class Pikachu extends Pokemon {
    public heal: boolean
    constructor() {
        super('Pikachu')
        this.heal = false

    }

    thunderShock(opponent: Pokemon) {
        if (this.isAlive()) {
            const damage = 20
            opponent.receiveDamage(damage)
        }

    }

    quickAttack(opponent: Pokemon) {
        if (this.isAlive()) {
            const damage = 10
            opponent.receiveDamage(damage)
        }
    }
    healSpark(healthBoost: number = 20) {
        if (this.heal) {
            console.log('HealSpark can only used one');
            return;

        } else {
            
            this.health += healthBoost
            this.heal= true
            console.log(`Pikachu have a new power ${this.health}`);
        }

    }

}

class Charizad extends Pokemon {
    public isFireBreathing: boolean
    constructor() {
        super('Charizad')
        this.isFireBreathing = true
        }    
        extraPower(healthBoost:number = 10){
            if(this.isFireBreathing){
                this.health += healthBoost
                console.log(this.health);

    }
    }

    flamethrower(opponent: Pokemon) {
        if (this.isAlive()) {
            const damage = 20
            opponent.receiveDamage(damage)
        }
    }
    Scratch(opponent: Pokemon) {
        if (this.isAlive()) {
            const damage = 15
            opponent.receiveDamage(damage)
        }
    }
    fireBreath(opponent: Pokemon) {
        if (this.isAlive()) {
            const damage = 10
            opponent.receiveDamage(damage)

        }
}
    
}    



const pika1 = new Pikachu
const Charizad1 = new Charizad


// pika1.thunderShock(Charizad1)
// Charizad1.Scratch(pika1)
// Charizad1.flamethrower(pika1)
// pika1.thunderShock(Charizad1)
// pika1.quickAttack(Charizad1)
// Charizad1.flamethrower(pika1)
// pika1.thunderShock(Charizad1)
// Charizad1.flamethrower(pika1)
// pika1.thunderShock(Charizad1)
// Charizad1.flamethrower(pika1)
// pika1.thunderShock(Charizad1)
// Charizad1.flamethrower(pika1)
// pika1.thunderShock(Charizad1)
// Charizad1.flamethrower(pika1)
// console.log(pika1.health);
// console.log(Charizad1.health);
Charizad1.fireBreath(pika1)









