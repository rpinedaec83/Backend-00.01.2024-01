// Variables
let dividendo, divisor, cociente, resto;

// Entrada de datos
dividendo = parseInt(prompt("Ingrese el dividendo:"));
divisor = parseInt(prompt("Ingrese el divisor:"));

// Validar que el divisor sea distinto de 0
while (divisor === 0) {
    divisor = parseInt(prompt("Por favor, ingrese un divisor diferente de 0:"));
}

// Inicializar cociente y resto a 0
cociente = 0;
resto = 0;

// Calcular cociente y resto por medio de restas sucesivas
while (dividendo >= divisor) {
    dividendo -= divisor;
    cociente += 1;
}

// El valor final de dividendo es el resto
resto = dividendo;

// Mostrar resultado
console.log("El cociente es: " + cociente);
console.log("El resto es: " + resto);