// Variables
let numero, sumaPares = 0, sumaImpares = 0, contadorPares = 0, contadorImpares = 0;
let mediaPares, mediaImpares;

// Ingreso de diez números
for (let i = 1; i <= 10; i++) {
    numero = parseInt(prompt("Ingrese el número " + i + ":"));

    // Verificar si es par o impar y actualizar sumas y contadores
    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    } else {
        sumaImpares += numero;
        contadorImpares++;
    }
}

// Calcular medias
if (contadorPares > 0) {
    mediaPares = sumaPares / contadorPares;
    console.log("La media de los números pares es: " + mediaPares);
} else {
    console.log("No se ingresaron números pares.");
}

if (contadorImpares > 0) {
    mediaImpares = sumaImpares / contadorImpares;
    console.log("La media de los números impares es: " + mediaImpares);
} else {
    console.log("No se ingresaron números impares.");
}