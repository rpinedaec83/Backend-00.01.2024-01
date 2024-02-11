function centimetrosAPulgadas(centimetros) {
    const pulgadas = centimetros / 2.54;
    return pulgadas.toFixed(2);
}

function librasAKilogramos(libras) {
    const kilogramos = libras * 0.453592;
    return kilogramos.toFixed(2);
}


const centimetros = 50;
console.log(`${centimetros} centímetros son ${centimetrosAPulgadas(centimetros)} pulgadas.`);

const libras = 100;
console.log(`${libras} libras son ${librasAKilogramos(libras)} kilogramos.`);
