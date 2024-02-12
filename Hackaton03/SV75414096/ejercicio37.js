let num1, num2, resto;

console.log("Ingrese el primer número: ");
num1 = parseInt(prompt("Ingrese el primer número: "));

console.log("Ingrese el segundo número: ");
num2 = parseInt(prompt("Ingrese el segundo número: "));

while (num2 !== 0) {
    resto = num1 % num2;
    num1 = num2;
    num2 = resto;
}

console.log("El MCD de los dos números es: ", num1);