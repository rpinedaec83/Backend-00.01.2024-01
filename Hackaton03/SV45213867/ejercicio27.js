// Variables
let numero, suma, cantidad, media;

// Inicializar variables
suma = 0;
cantidad = 0;

// Entrada de datos y cálculo de medias
console.log("Ingrese números positivos (ingrese un número negativo para terminar):");

numero = parseFloat(prompt("Ingrese un número:"));

while (numero >= 0) {
    // Validar que el número sea positivo
    if (numero >= 0) {
        suma += numero;
        cantidad += 1;
    }

    // Leer el próximo número
    numero = parseFloat(prompt("Ingrese un número:"));
}

// Calcular la media si se ingresaron números positivos
if (cantidad > 0) {
    media = suma / cantidad;
    console.log("La media de los números positivos ingresados es: " + media);
} else {
    console.log("No se ingresaron números positivos.");
}