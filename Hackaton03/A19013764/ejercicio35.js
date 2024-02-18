function encontrarMayorYMenor() {
    let mayor = -Infinity;
    let menor = Infinity;

    for (let i = 0; i < 20; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        if (!isNaN(numero)) {
            if (numero > mayor) {
                mayor = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        } else {
            console.log("Ingrese un número válido.");
            i--; // Restar uno al contador para repetir la iteración y solicitar nuevamente el número.
        }
    }

    return { mayor, menor };
}

const resultado = encontrarMayorYMenor();
console.log(`El número mayor es: ${resultado.mayor}`);
console.log(`El número menor es: ${resultado.menor}`);
