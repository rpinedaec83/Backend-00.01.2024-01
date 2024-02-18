// Variables
let numero, sumaDivisores = 0;

// Ingreso del número
console.log("Ingrese un número:");
// Se puede usar 'prompt()' para obtener la entrada del usuario en un entorno de navegador.
// En un entorno de consola, podrías usar un paquete como 'readline-sync'.
numero = parseInt(prompt());

// Calcular la suma de los divisores propios del número
for (let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
}

// Determinar si el número es perfecto
if (sumaDivisores === numero) {
    console.log("El número", numero, "es un número perfecto.");
} else {
    console.log("El número", numero, "no es un número perfecto.");
}