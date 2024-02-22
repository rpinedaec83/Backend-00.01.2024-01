function sumar(...args) {
    return args.reduce((total, valor) => total + valor, 0);
}

function sumarValores() {
    const valores = document.getElementById("valores").value.split('.');

    if (valores.length > 0) {
        const numeros = valores.map(valor => parseFloat(valor.trim()));

        if (numeros.every(numero => !isNaN(numero))) {
            const resultado = sumar(...numeros);
            const resultadoElemento = document.getElementById("resultado");
            resultadoElemento.innerHTML = `La suma de los valores es: ${resultado}`;
        } else {
            alert("Por favor, ingrese valores numéricos válidos.");
        }
    } else {
        alert("Por favor, ingrese al menos un valor antes de sumar.");
    }
}
