class cuentaBancaria{
    public nombre: string
    public saldo: number

    constructor(nombre: string, saldo:number,){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    retirar(retiroSaldo: number){
        if(this.saldo >= retiroSaldo){
         this.saldo -= retiroSaldo

         return retiroSaldo

         
        }
    }

    depositar(nuevoSaldo: number){
        this.saldo += nuevoSaldo
        return nuevoSaldo
    }

}


const cuenta = new cuentaBancaria("Mitz", 1000)

cuenta.depositar(800)
cuenta.retirar(200)
console.log(cuenta.saldo);


