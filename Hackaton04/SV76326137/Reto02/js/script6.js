const encontrarMinMax = () => {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        const [minimo, maximo] = encontrarMinimoMaximo(numero1, numero2, numero3);
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `Mínimo: ${minimo}, Máximo: ${maximo}`;
    } else {
        alert("Por favor, ingrese tres números válidos.");
    }
};

const encontrarMinimoMaximo = (numero1, numero2, numero3) => {
    const minimo = Math.min(numero1, numero2, numero3);
    const maximo = Math.max(numero1, numero2, numero3);
    return [minimo, maximo];
};
