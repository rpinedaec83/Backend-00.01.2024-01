// Variables
let n;
let pi = 0;
let termino;

// Ingreso de la cantidad de términos
console.log("Ingrese la cantidad de términos para la aproximación de pi:");
// En un entorno de consola, podrías usar un paquete como 'readline-sync'.
n = parseInt(prompt());

// Calcular la aproximación de pi usando la serie de Gregory-Leibniz
for (let i = 0; i < n; i++) {
    // Calcular el término actual de la serie
    termino = 4 / (1 + 2 * i);

    // Sumar o restar el término según el índice
    if (i % 2 === 0) {
        pi += termino;
    } else {
        pi -= termino;
    }
}

// Mostrar la aproximación de pi
console.log("La aproximación de pi con", n, "términos es:", pi);