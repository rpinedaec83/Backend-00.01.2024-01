var hora, minuto, segundo;

// Solicitar al usuario que ingrese la hora, los minutos y los segundos
console.log("Ingrese la hora (formato 24h):");
hora = parseInt(prompt("Hora:")); // Leer la hora ingresada por el usuario
console.log("Ingrese los minutos:");
minuto = parseInt(prompt("Minutos:")); // Leer los minutos ingresados por el usuario
console.log("Ingrese los segundos:");
segundo = parseInt(prompt("Segundos:")); // Leer los segundos ingresados por el usuario

// Verificar si los valores ingresados son válidos
if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
    // Incrementar los segundos
    segundo++;

    // Verificar si los segundos alcanzaron el valor de 60
    if (segundo === 60) {
        segundo = 0;
        minuto++;

        // Verificar si los minutos alcanzaron el valor de 60
        if (minuto === 60) {
            minuto = 0;
            hora++;

            // Verificar si la hora alcanzó el valor de 24
            if (hora === 24) {
                hora = 0;
            }
        }
    }

    // Mostrar la hora un segundo después
    console.log("La hora un segundo después es: " + hora + ":" + minuto + ":" + segundo);
} else {
    console.log("Los valores ingresados no son válidos. Verifique la hora, los minutos y los segundos.");
}