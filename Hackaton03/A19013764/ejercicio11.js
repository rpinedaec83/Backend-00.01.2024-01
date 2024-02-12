function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}


const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const numero3 = parseFloat(prompt("Ingrese el tercer número:"));

const mayor = encontrarMayor(numero1, numero2, numero3);
console.log(`El número mayor es: ${mayor}`);