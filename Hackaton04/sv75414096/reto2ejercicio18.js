function filterList(arr) {
    return arr.filter(element => typeof element === 'number');
}
let resultado = filterList([1, 2, 3, "x", "y", 10]);
console.log(resultado); // Output: [1, 2, 3, 10]