// Definir variables
var numero, sumaPares = 0, sumaImpares = 0, contadorPares = 0, contadorImpares = 0, mediaPares, mediaImpares;

// Bucle para solicitar y procesar los números
for (var i = 1; i <= 10; i++) {
    numero = parseFloat(prompt("Ingrese el número " + i + ":"));

    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    } else {
        sumaImpares += numero;
        contadorImpares++;
    }
}

// Calcular y mostrar la media de los números pares
if (contadorPares > 0) {
    mediaPares = sumaPares / contadorPares;
    console.log("La media de los números pares es: " + mediaPares);
} else {
    console.log("No se ingresaron números pares.");
}

// Calcular y mostrar la media de los números impares
if (contadorImpares > 0) {
    mediaImpares = sumaImpares / contadorImpares;
    console.log("La media de los números impares es: " + mediaImpares);
} else {
    console.log("No se ingresaron números impares.");
}