let numero, sumaDivisores, divisor;

console.log("Ingrese un número para verificar si es perfecto: ");
numero = parseInt(prompt("Ingrese un número para verificar si es perfecto: "));
sumaDivisores = 0;

for (divisor = 1; divisor <= numero / 2; divisor++) {
    if (numero % divisor === 0) {
        sumaDivisores += divisor;
    }
}

if (sumaDivisores === numero) {
    console.log("El número", numero, "es un número perfecto.");
} else {
    console.log("El número", numero, "no es un número perfecto.");
}