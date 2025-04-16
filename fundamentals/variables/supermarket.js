/*
Voy al supermercado GreenCenter para hacer mis compras habituales
y planeo comprar manzanas y naranjas.

Cuando estoy allí, veo que no hay platanos y uvas, así que cambio un poco mi lista.
Veo que 3 cajeros están trabajando así que me preparo a pagar.

Mis cosas cuestan $100 total.
Entrego $150 y recibo de cambio $50

*/

const supermarket = 'GreenCenter'

const fruit1 = 'Manzanas'
const fruit2 = 'Naranjas'

const areBananasAvailable = false
const areGrapesAvailable = false

const Cashiers = 3

const pay = 150
const totalPurchase = 100
const changeDollars = pay - totalPurchase

console.log(`
    
    Supermercado: ${supermarket}\n
    Frutas: ${fruit1}, ${fruit2}\n
    Pague con: ${pay}
    Total de los productos: ${totalPurchase}
    Cambio: ${changeDollars}
    
    `);
