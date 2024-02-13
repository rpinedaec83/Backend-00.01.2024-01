function sumaNPrimerosNumeros(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

const n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
console.log(`La suma de los primeros ${n} números es: ${sumaNPrimerosNumeros(n)}`);
