function verificarTerminaEnCuatro() {
    // Pedir al usuario que escriba un número
    var numero1 = parseInt(prompt("Escriba un número:"));

    // Verificar si el número termina en 4
    if (numero1 % 10 === 4) {
        // Mostrar un mensaje si el número termina en 4
        console.log("El número termina en 4");
    } else {
        // Mostrar un mensaje si el número no termina en 4
        console.log("El número no termina en 4");
    }
}

// Llamar a la función para iniciar la verificación del número
verificarTerminaEnCuatro();