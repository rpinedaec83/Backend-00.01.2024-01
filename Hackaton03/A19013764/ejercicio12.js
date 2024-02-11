function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Los números son iguales";
    }
}


const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

const mayor = encontrarMayor(numero1, numero2);
console.log(`El número mayor es: ${mayor}`);