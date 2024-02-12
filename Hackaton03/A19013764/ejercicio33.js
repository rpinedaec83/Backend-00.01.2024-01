function continuarPrograma() {
    let respuesta;
    do {
        respuesta = prompt("¿Desea continuar con el programa? (S/N)").toUpperCase();
    } while (respuesta !== 'S' && respuesta !== 'N');
    return respuesta === 'S';
}

while (continuarPrograma()) {
    console.log("El programa continúa...");
}
