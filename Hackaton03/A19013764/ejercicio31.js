function calcularMediaParesImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        if (numero % 2 === 0) {
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    const mediaPares = contadorPares !== 0 ? sumaPares / contadorPares : 0;
    const mediaImpares = contadorImpares !== 0 ? sumaImpares / contadorImpares : 0;

    return `La media de los números pares es: ${mediaPares}\nLa media de los números impares es: ${mediaImpares}`;
}

console.log(calcularMediaParesImpares());
