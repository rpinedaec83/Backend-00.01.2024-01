function filtrarNoString(valores) {
    return valores.filter(valor => typeof valor === 'string');
}

function filtrarValores() {
    const valores = document.getElementById("valores").value.split(',');

    const valoresFiltrados = filtrarNoString(valores);

    const resultadoElemento = document.getElementById("resultado");

    resultadoElemento.innerHTML = `Valores de tipo string: ${valoresFiltrados.join(', ')}`;
}
