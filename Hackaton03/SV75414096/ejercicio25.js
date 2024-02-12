// Definir variables
var dividendo, divisor, cociente = 0, resto = 0;

// Solicitar al usuario que ingrese el dividendo y el divisor
console.log("Ingrese el dividendo:");
dividendo = parseInt(prompt("Dividendo:"));

console.log("Ingrese el divisor:");
divisor = parseInt(prompt("Divisor:"));

// Realizar la división entera
while (dividendo >= divisor) {
    dividendo -= divisor;
    cociente++;
}

resto = dividendo;

// Mostrar el cociente y el resto
console.log("El cociente es: " + cociente);
console.log("El resto es: " + resto);