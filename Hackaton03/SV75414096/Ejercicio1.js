function verificarNumero() {
    // Pedir al usuario que ingrese un número de 3 dígitos
    var numero1 = parseInt(prompt("Digite un número de 3 dígitos:"));

    // Verificar si el número tiene 3 dígitos
    if (numero1 >= 100 && numero1 <= 999) {
        // Mostrar un mensaje si el número tiene 3 dígitos
        console.log("El número tiene 3 dígitos");
    } else {
        // Mostrar un mensaje si el número no tiene 3 dígitos
        console.log("El número no tiene 3 dígitos");
    }
}

// Llamar a la función para iniciar la verificación del número
verificarNumero();