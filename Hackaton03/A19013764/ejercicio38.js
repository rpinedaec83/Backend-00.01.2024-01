function esNumeroPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

const numero = parseInt(prompt("Ingrese un número para verificar si es un número perfecto:"));
console.log(esNumeroPerfecto(numero) ? `${numero} es un número perfecto.` : `${numero} no es un número perfecto.`);
