/*
El evento es parte de las Eliminatorias Sudamericas para la Copa del Mundo.
En un partido celerado el 22/11/2023 a las 20:30, el equipo local Argentina
Se enfrento al equipo visitante Brasil. l resultado final fue 1-0,
indicando a argentina como el eqipo ganador.
*/

const everName = 'Eliminatorias Sudamericas'

const day = '22'
const month = '11'
const year = '2023'

const date = `${day}/${month}/${year}`

const hour = '20'
const minutes = '30'

const time = `${hour}:${minutes}`

const formatHour = hour - 12
const formatTime = `${formatHour}:${minutes}PM`

console.log(formatTime);


const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const localTeamScore = 1
const awayTeamScore = 0

const score = `${localTeamScore}-${awayTeamScore}`

console.log(score);

console.log(`
    
    Torneo: ${everName}- ${time}\n
    Euipos: ${localTeam} VS ${awayTeam}\n
    resultado: ${score}
    `);
