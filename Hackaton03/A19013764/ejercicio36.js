function fibonacci(n) {
    let a = 0, b = 1, temp;
    let serie = [0, 1];
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
        serie.push(temp);
    }
    return serie;
}

const n = parseInt(prompt("Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular:"));
console.log(`La serie de Fibonacci con ${n} términos es: ${fibonacci(n)}`);
