function minMax(array) {
    return [Math.min(...array), Math.max(...array)];
}
const numeros = [1, 2, 3, 4, 5];
const resultado = minMax(numeros);
console.log(resultado); // Output: [1, 5]