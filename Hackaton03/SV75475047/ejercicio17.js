function ejercicio17(params) {
    function calcularHoraSiguiente(hora) {
        let partesHora = hora.split(":");
        let horas = parseInt(partesHora[0]);
        let minutos = parseInt(partesHora[1]);
        let segundos = parseInt(partesHora[2]);

        segundos++;
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
            if (minutos >= 60) {
                minutos = 0;
                horas++;
                if (horas >= 24) {
                    horas = 0;
                }
            }
        }

        let nuevaHora = horas.toString().padStart(2, "0") + ":" +
            minutos.toString().padStart(2, "0") + ":" +
            segundos.toString().padStart(2, "0");

        return nuevaHora;
    }

    let horaActual = prompt("Ingrese la hora en formato HH:MM:SS:");
    let horaSiguiente = calcularHoraSiguiente(horaActual);
    console.log("La hora un segundo después es: " + horaSiguiente);

}