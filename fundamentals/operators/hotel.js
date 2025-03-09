
const prompt = require('prompt-sync')()
const PRICE_PER_DAY = 100
const discount = 0.05
const days = parseInt(prompt('¿Cuántos días desea quedarse? :'))

const subtotal = PRICE_PER_DAY * days

const discountSubtotal = subtotal * discount

const total = subtotal - discountSubtotal



console.log(`
    
-------------------
    HOTEL RECEIPT
-------------------
  Nights #: ${days}\n
  Payment
   -Subtotal: $${subtotal}
   -Discount: $${discountSubtotal}
   -Total: $${total}
    `);
