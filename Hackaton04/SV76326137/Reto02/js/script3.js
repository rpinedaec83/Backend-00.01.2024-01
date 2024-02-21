const obtenerTipo = () => {
    const valor = document.getElementById("valor").value;

    if (valor.trim() !== "") {
        const tipoDeValor = typeof valor;
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `El tipo de valor ingresado es: ${tipoDeValor}`;
    } else {
        alert("Por favor, ingrese un valor antes de obtener el tipo.");
    }
};
