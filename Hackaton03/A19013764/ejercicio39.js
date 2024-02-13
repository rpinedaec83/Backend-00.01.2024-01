function calcularPiGregoryLeibniz(terminos) {
    let pi = 0;
    let denominador = 1;
    let signo = 1;

    for (let i = 0; i < terminos; i++) {
        pi += (4 / denominador) * signo;
        denominador += 2;
        signo *= -1;
    }

    return pi;
}

const terminos = parseInt(prompt("Ingrese la cantidad de términos para calcular la aproximación de pi:"));
console.log(`La aproximación de pi con ${terminos} términos es: ${calcularPiGregoryLeibniz(terminos)}`);
