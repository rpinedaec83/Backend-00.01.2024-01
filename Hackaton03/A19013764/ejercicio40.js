function calcularPiNilakantha(terminos) {
    let pi = 3;
    let denominador = 2;
    let signo = 1;

    for (let i = 0; i < terminos; i++) {
        pi += 4 / (denominador * (denominador + 1) * (denominador + 2)) * signo;
        denominador += 2;
        signo *= -1;
    }

    return pi;
}

const terminos = parseInt(prompt("Ingrese la cantidad de términos para calcular la aproximación de pi:"));
console.log(`La aproximación de pi con ${terminos} términos es: ${calcularPiNilakantha(terminos)}`);
