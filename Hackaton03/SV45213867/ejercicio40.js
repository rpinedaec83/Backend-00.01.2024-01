// Variables
let n;
let pi = 3; // Inicializamos con el primer término de la serie

// Ingreso de la cantidad de términos
console.log("Ingrese la cantidad de términos para la aproximación de pi:");
// En un entorno de consola, podrías usar un paquete como 'readline-sync'.
n = parseInt(prompt());

// Calcular la aproximación de pi usando la serie de Nilakantha
for (let i = 1; i <= n; i++) {
    // Calcular el numerador y denominador del término actual
    let numerador = 4 * Math.pow(-1, i);
    let denominador = (2 * i) * ((2 * i) + 1) * ((2 * i) + 2);

    // Sumar o restar el término según el índice
    pi += numerador / denominador;
}

// Mostrar la aproximación de pi
console.log("La aproximación de pi con", n, "términos es:", pi);