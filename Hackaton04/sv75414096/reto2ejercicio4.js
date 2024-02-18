function sumar(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

console.log(sumar(1, 2, 3)); // Output: 6
console.log(sumar(5, 10, 15, 20)); // Output: 50
console.log(sumar(2)); // Output: 2
console.log(sumar()); // Output: 0