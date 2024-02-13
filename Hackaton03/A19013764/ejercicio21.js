function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

const numFactorial = parseInt(prompt("Ingrese un número para calcular su factorial:"));
console.log(`El factorial de ${numFactorial} es: ${factorial(numFactorial)}`);
