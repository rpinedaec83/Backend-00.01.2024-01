function repeat(elemento, veces) {
    let resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

console.log(repeat(13, 5)); // Output: [13, 13, 13, 13, 13]