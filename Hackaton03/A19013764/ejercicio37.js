function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));
console.log(`El M.C.D de ${num1} y ${num2} es: ${mcd(num1, num2)}`);
