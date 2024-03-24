const calcularSumaDeCubos = () => {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);

    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
        const sumaCubos = Math.pow(numero1, 3) + Math.pow(numero2, 3) + Math.pow(numero3, 3);
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `La suma de los cubos es: ${sumaCubos}`;
    } else {
        alert("Por favor, ingrese números válidos en todos los campos.");
    }
};

