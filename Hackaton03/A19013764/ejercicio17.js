function calcularHoraUnSegundoDespues(hora) {
    
    const partesHora = hora.split(":");
    const horas = parseInt(partesHora[0]);
    const minutos = parseInt(partesHora[1]);
    const segundos = parseInt(partesHora[2]);


    let nuevaHora, nuevosMinutos, nuevosSegundos;

    if (segundos < 59) {
        nuevosSegundos = segundos + 1;
        nuevaHora = horas;
        nuevosMinutos = minutos;
    } else {
        nuevosSegundos = 0;
        if (minutos < 59) {
            nuevosMinutos = minutos + 1;
            nuevaHora = horas;
        } else {
            nuevosMinutos = 0;
            if (horas < 23) {
                nuevaHora = horas + 1;
            } else {
                nuevaHora = 0;
            }
        }
    }

   
    return `${nuevaHora < 10 ? "0" + nuevaHora : nuevaHora}:${nuevosMinutos < 10 ? "0" + nuevosMinutos : nuevosMinutos}:${nuevosSegundos < 10 ? "0" + nuevosSegundos : nuevosSegundos}`;
}


const hora = prompt("Ingrese la hora en formato HH:MM:SS:");
console.log("La hora un segundo después es:", calcularHoraUnSegundoDespues(hora));
