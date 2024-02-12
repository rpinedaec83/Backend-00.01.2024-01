let numero, mayor, menor;

console.log("Ingrese el primer número:");
numero = parseFloat(prompt("Ingrese el primer número:"));
mayor = numero;
menor = numero;

for (let i = 2; i <= 20; i++) {
    console.log("Ingrese el número " + i + ":");
    numero = parseFloat(prompt("Ingrese el número " + i + ":"));

    if (numero > mayor) {
        mayor = numero;
    }

    if (numero < menor) {
        menor = numero;
    }
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);