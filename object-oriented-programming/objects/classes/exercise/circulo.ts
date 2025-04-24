class Circulo {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio
    }
    areaCirculo() {
    const area = Math.PI * Math.pow(this.radio, 2);
    return area
    }
    perimetroCirculo(){
        const perimetro = 2 * Math.PI * this.radio;
        return perimetro
    }

}

const C1 = new Circulo(5)


console.log(C1.areaCirculo());
console.log(C1.perimetroCirculo());



