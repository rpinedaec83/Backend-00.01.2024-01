function sumOfCubes(...numeros) {
    let sumaCubos = 0;
    for (let numero of numeros) {
        sumaCubos += Math.pow(numero, 3);
    }
    return sumaCubos;
}

let resultado = sumOfCubes(1, 5, 9);
console.log("La suma de los cubos es:", resultado);