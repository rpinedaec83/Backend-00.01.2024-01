function findLargestNums(matrix) {
    const largestNums = matrix.map(subArray => Math.max(...subArray));
    return largestNums;
}

const matriz = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
const numerosMasGrandes = findLargestNums(matriz);
console.log(numerosMasGrandes); // Output: [7, 90, 2]