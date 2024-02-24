function generarNumeroSerie() {
    const numeroSerie = generateRandomString(4) + '-' + generateRandomString(4) + '-' + generateRandomString(4);
    document.getElementById('numeroSerie').value = numeroSerie;
}

function generarIMEI() {
    const imei = generateRandomNumericString(12);
    document.getElementById('imei').value = imei;
}

function validarIngreso() {
    const numeroSerie = document.getElementById('numeroSerie').value.trim();
    const imei = document.getElementById('imei').value.trim();
    const autorizacion = document.getElementById('autorizacion').checked;
    const abono = document.getElementById('abono').checked;

    if (numeroSerie === '' || imei === '' || !autorizacion || !abono) {
        alert('Por favor, complete todos los campos y cumpla con los requisitos antes de validar.');
        return;
    }

    const probabilidadReportado = Math.random() <= 0.3;

    if (probabilidadReportado) {
        alert('El IMEI está reportado como robado. Gracias por la visita.');
    } else {
        alert('¡Bienvenido al sistema!');
        mostrarTablaFlotante(numeroSerie, imei);
    }
}

function cancelarIngreso() {
    document.getElementById('numeroSerie').value = '';
    document.getElementById('imei').value = '';
    document.getElementById('autorizacion').checked = false;
    document.getElementById('abono').checked = false;
}

function mostrarTablaFlotante(numeroSerie, imei) {
    document.getElementById('tablaNumeroSerie').innerText = numeroSerie;
    document.getElementById('tablaIMEI').innerText = imei;

    // Mostrar la tabla flotante
    document.getElementById('tablaFlotante').style.display = 'block';
}

function mostrarCuadroDialogo() {
    // Mostrar el fondo oscurecido
    document.getElementById('fondoOscurecido').style.display = 'block';

    // Mostrar el cuadro de diálogo
    document.getElementById('cuadroDialogo').style.display = 'block';
}

function guardarDiagnostico() {
    const numeroSerie = document.getElementById('tablaNumeroSerie').innerText;
    const imei = document.getElementById('tablaIMEI').innerText;
    const diagnostico = document.getElementById('diagnostico').value.trim();
    const repuestos = document.getElementById('repuestos').value.trim();
    const estadoEquipo = document.getElementById('estadoEquipo').value;

    // Validar si el diagnóstico está presente antes de agregar a la tabla principal
    if (diagnostico !== '') {
        const fechaHoraFormateada = obtenerFechaHoraFormateada();

        const tablaPrincipal = document.getElementById('tablaPrincipal');
        const cuerpoTablaPrincipal = document.getElementById('cuerpoTablaPrincipal');

        const nuevaFila = cuerpoTablaPrincipal.insertRow();

        const celdaNumeroSerie = nuevaFila.insertCell(0);
        celdaNumeroSerie.innerText = numeroSerie;

        const celdaIMEI = nuevaFila.insertCell(1);
        celdaIMEI.innerText = imei;

        const celdaDiagnostico = nuevaFila.insertCell(2);
        celdaDiagnostico.innerText = diagnostico;

        const celdaFechaHora = nuevaFila.insertCell(3);
        celdaFechaHora.innerText = fechaHoraFormateada;

        const celdaRepuestos = nuevaFila.insertCell(4);
        celdaRepuestos.innerText = repuestos;

        const celdaEstadoEquipo = nuevaFila.insertCell(5);
        celdaEstadoEquipo.innerText = estadoEquipo;

        // Limpiar el cuadro de diálogo
        document.getElementById('diagnostico').value = '';
        document.getElementById('repuestos').value = '';
        document.getElementById('estadoEquipo').value = 'En Reparación';

        // Cerrar el cuadro de diálogo
        cerrarCuadroDialogo();

        // Volver al formulario de validación
        mostrarFormularioValidacion();
    } else {
        alert('Por favor, ingrese un diagnóstico antes de guardar.');
    }
}

function mostrarFormularioValidacion() {
    // Ocultar la tabla flotante y mostrar el formulario de validación
    document.getElementById('tablaFlotante').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
}

function cerrarTablaFlotante() {
    // Ocultar la tabla flotante
    document.getElementById('tablaFlotante').style.display = 'none';

    // Volver al formulario de validación
    mostrarFormularioValidacion();
}

function cerrarCuadroDialogo() {
    // Ocultar el fondo oscurecido
    document.getElementById('fondoOscurecido').style.display = 'none';

    // Ocultar el cuadro de diálogo
    document.getElementById('cuadroDialogo').style.display = 'none';
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomNumericString(length) {
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
}

function obtenerFechaHoraFormateada() {
    const fechaHoraActual = new Date();
    const formatoFechaHora = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return fechaHoraActual.toLocaleDateString('es-ES', formatoFechaHora);
}
