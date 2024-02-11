function ejercicio27(params) {
    function calcularMedia() {
        let suma = 0;
        let cantidadNumeros = 0;

        while (true) {
            let numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para finalizar):"));

            if (numero < 0) {
                break;
            }

            suma += numero;
            cantidadNumeros++;
        }

        if (cantidadNumeros === 0) {
            return "No se ingresaron números positivos.";
        } else {
            let media = suma / cantidadNumeros;
            return "La media de los números ingresados es: " + media.toFixed(2);
        }
    }

    console.log(calcularMedia());

}