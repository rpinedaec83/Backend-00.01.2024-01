function sumaImparesHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    return suma;
}

const n = parseInt(prompt("Ingrese un número para calcular la suma de los números impares menores o iguales a n:"));
console.log(`La suma de los números impares menores o iguales a ${n} es: ${sumaImparesHastaN(n)}`);
