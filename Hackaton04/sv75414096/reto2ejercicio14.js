function squaresSum(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i; 
    }
    return suma;
}
console.log(squaresSum(3)); // Output: 14