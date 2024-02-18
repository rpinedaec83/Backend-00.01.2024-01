function ejecicio10(params) {
    function determinarParImpar(numero) {
        if (numero % 2 === 0) {
            return "par";
        } else {
            return "impar";
        }
    }

    let numero = parseInt(prompt("Ingrese un número:"));
    console.log("El número ingresado es " + determinarParImpar(numero) + ".");

}