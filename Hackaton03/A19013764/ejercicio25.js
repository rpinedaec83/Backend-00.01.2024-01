function factorialIterativo(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

const numFactorial = parseInt(prompt("Ingrese un número para calcular su factorial (forma iterativa):"));
console.log(`El factorial de ${numFactorial} es: ${factorialIterativo(numFactorial)}`);
