const prompt = require('prompt-sync')()

const GRADE_AMOUNT = 3
const MAX_DIGITS = 2

const grade1 = parseFloat(prompt('Nota #1 : '))
const grade2 = parseFloat(prompt('Nota #2 : '))
const grade3 = parseFloat(prompt('Nota #3 : '))

const average = (grade1 + grade2 + grade3) / GRADE_AMOUNT

console.log(`
   
 Nota final: ${average.toFixed(MAX_DIGITS)}`);
