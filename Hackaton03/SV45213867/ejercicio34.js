// Ciclo externo para recorrer los números del 1 al 9
for (let numero = 1; numero <= 9; numero++) {
    console.log(`Tabla de multiplicar del ${numero}:`);

    // Ciclo interno para generar la tabla de multiplicar
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    }

    // Separador entre tablas
    console.log("------------------------");
}