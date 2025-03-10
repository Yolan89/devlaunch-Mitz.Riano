
const prompt = require('prompt-sync')()



const name = prompt('Nombre : ')
const height = parseFloat(prompt('Height : '))
const weight = parseFloat(prompt('Weight : '))

const imc = weight / Math.pow(height, 2)

console.log(`
    Name: ${name}
    Height: ${height}
    Weight: ${weight}
    IMC: ${imc}
    `);
