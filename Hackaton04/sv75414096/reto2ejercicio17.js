function diffMaxMin(arr) {
    let max = Math.max(...arr); // Encuentra el número más grande en la matriz
    let min = Math.min(...arr); // Encuentra el número más pequeño en la matriz
    return max - min; // Devuelve la diferencia entre el número más grande y el más pequeño
}

let resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
console.log(resultado); // Output: 82