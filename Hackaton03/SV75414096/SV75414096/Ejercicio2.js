function verificarPositivoNegativo() {
    // Pedir al usuario que escriba un número
    var numero1 = parseInt(prompt("Escriba un número:"));

    // Verificar si el número es negativo
    if (numero1 < 0) {
        // Mostrar un mensaje si el número es negativo
        console.log("El número es negativo");
    } else {
        // Mostrar un mensaje si el número es positivo o cero
        console.log("El número es positivo o cero");
    }
}

// Llamar a la función para iniciar la verificación del número
verificarPositivoNegativo();