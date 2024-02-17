// Definir variables
var numero, suma = 0, cantidad = 0, media = 0;

// Leer números hasta que se ingrese uno negativo
while (numero >= 0) {
    console.log("Ingrese un número (ingrese un número negativo para finalizar):");
    numero = parseFloat(prompt("Número:"));

    if (numero >= 0) {
        suma += numero;
        cantidad++;
    }
}

// Calcular la media si se ingresaron números positivos
if (cantidad > 0) {
    media = suma / cantidad;
    console.log("La media de los números positivos ingresados es: " + media);
} else {
    console.log("No se ingresaron números positivos.");
}