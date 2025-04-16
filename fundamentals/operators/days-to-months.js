const prompt = require('prompt-sync')()

const DAYS_PER_MONTHS = 30

const days = parseInt(prompt(' # Days : '))

const months = Math.floor(days / DAYS_PER_MONTHS)
const daysLeft = days % DAYS_PER_MONTHS

console.log( `${days} days are ${months}mpnths and ${daysLeft} days `);
