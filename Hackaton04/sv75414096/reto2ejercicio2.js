const sumOfCubes = (...numeros) => {
    let sumaCubos = 0;
    for (let num of numeros) {
        sumaCubos += Math.pow(num, 3);
    }
    return sumaCubos;
};
console.log(sumOfCubes(1, 5, 9)); // Output: 855