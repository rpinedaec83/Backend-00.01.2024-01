const mostrarResultado = () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;

    if (nombre && apellido && edad) {
        const resultado = `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
        const resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = resultado;
    } 
};