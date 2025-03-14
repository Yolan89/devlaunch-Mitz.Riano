const prompt = require('prompt-sync')()

const valor = parseInt(prompt('¿Escribe un numero? : '))



if (valor > 0) {
	console.log('Este es un número positivo');
} else if (valor < 0) {
	console.log('Este es un número negativo');

} else if (valor === 0) {
	console.log('Es cero');

} else {
	console.log('Este no es un número valido');

}
