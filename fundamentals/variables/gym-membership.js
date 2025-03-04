/*
El Elite Fitnees es un gimnasio boutique ubicado en Polo Alto, California,
Ofrece memebresia por $150 mes.
Opera de 6:00 a 10:00 PM, emplea a 10 entrenadores certificados,
y cuenta con comodidades  como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitnees'

const gymType = 'boutique'

const location = 'Polo Alto, California'

const price = 150
const currency = '$'
const monthlyPay = 'monthly'

const scheduleOpen = 6
const scheduleClose = 22

const trainerAmount = 10

const activities1 = 'sauna'
const activities2 = 'Piscina'
const activities3 = 'Clases grupales'

console.log(`
    Gym: ${gymName}(${gymType})\n
    Location: ${location}\n
    Price: ${currency}${price}/${monthlyPay}\n
    Time: ${scheduleOpen}:00AM - ${scheduleClose - 12}:00PM\n
    Team: ${trainerAmount} certified trainers\n
    Activities: ${activities1}, ${activities2}, ${activities3}\n
    `)


