// Variables
let hora, minutos, segundos;

// Entrada de datos
hora = parseInt(prompt("Ingrese la hora (formato de 24 horas):"));
minutos = parseInt(prompt("Ingrese los minutos:"));
segundos = parseInt(prompt("Ingrese los segundos:"));

// Verificar que la hora, minutos y segundos están dentro de los rangos válidos
if (hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {
    // Calcular la hora dentro de un segundo
    segundos = segundos + 1;

    // Ajustar los minutos y segundos si es necesario
    if (segundos === 60) {
        segundos = 0;
        minutos = minutos + 1;

        // Ajustar la hora si es necesario
        if (minutos === 60) {
            minutos = 0;
            hora = hora + 1;

            // Ajustar la hora a medianoche si es necesario
            if (hora === 24) {
                hora = 0;
            }
        }
    }

    // Mostrar la nueva hora
    console.log("La hora después de un segundo es:", hora + ":" + minutos + ":" + segundos);
} else {
    console.log("Hora, minutos o segundos ingresados no válidos.");
}