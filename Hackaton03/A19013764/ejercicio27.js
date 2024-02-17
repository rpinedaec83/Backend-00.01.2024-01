function calcularMedia() {
    let suma = 0;
    let contador = 0;
    let numero = 0;

    do {
        numero = parseFloat(prompt("Ingrese un número positivo (ingrese un número negativo para terminar):"));
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } while (numero >= 0);

    if (contador === 0) {
        return "No se ingresaron números positivos.";
    } else {
        return suma / contador;
    }
}

console.log(`La media de los números positivos ingresados es: ${calcularMedia()}`);
