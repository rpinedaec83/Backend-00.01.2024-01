

class DatosReparacion {
    constructor(nombreCliente, modelo, numeroSerieEquipo, imei,fechaHora,autorizacion,abono50,diagnostico,estado) {
        this.nombreCliente = nombreCliente;
        this.modelo = modelo;
        this.numeroSerieEquipo = numeroSerieEquipo;
        this.imei = imei;
        this.fechaHora = fechaHora;
        this.autorizacion = autorizacion;
        this.abono50 = abono50;
        this.diagnostico = diagnostico;
        this.estado = estado;
    }
}
const listaClientes = [];
// Funciones para interactuar con los datos del formulario
function generarNumeroSerie() {
    // Generar un número de serie aleatorio de 14 cifras
    const numeroSerieGenerado = Math.floor(Math.random() * 90000000000000) + 10000000000000;

    // Actualizar directamente el campo en el formulario
    document.getElementById('numeroSerieEquipo').value = numeroSerieGenerado;
}


function generarImei() {
    // Generar un número de serie aleatorio de 14 cifras
    const imeiGenerado = Math.floor(Math.random() * 90000000000000) + 10000000000000;

    // Actualizar directamente el campo en el formulario
    document.getElementById('imei').value = imeiGenerado;
}
//validadar el imei
function consultarIMEIRobado(imei) {
    // Simulamos la respuesta con un valor booleano aleatorio
    return Math.random() < 0.5; // 50% de probabilidad de estar reportado como robado
}

function validar() {
    
     // Obtener datos del formulario
     const nombreCliente = document.getElementById('nombreCliente').value;
     const modelo = document.getElementById('Modelo').value;
     const numeroSerieEquipo = document.getElementById('numeroSerieEquipo').value;
     const imei = document.getElementById('imei').value;
    
    // Crear una instancia de la clase DatosReparacion
    const datosReparacion = new DatosReparacion(nombreCliente, modelo, numeroSerieEquipo, );
/************************************* */

    // Realizar la consulta ficticia para verificar si está reportado como robado
    const estaReportado = consultarIMEIRobado(imei);

    // Mostrar un alert según el resultado de la consulta
    if (estaReportado) {
        alert('¡Alerta! Este IMEI está reportado como robado.');
        document.getElementById('nombreCliente').value = '';
        document.getElementById('Modelo').value = '';
        document.getElementById('numeroSerieEquipo').value = '';
        document.getElementById('imei').value = '';
    } else {
        alert('El IMEI no está reportado como robado. Puede proceder con la validación.');
        agregarCliente();
    }

    // Lógica de validación y manejo de datos
    // Ejemplo: if (validarDatos(datosReparacion)) { // Realizar acciones si los datos son válidos }
}

function cancelar() {
    // Lógica para cancelar la operación o reiniciar el formulario
}

/** funcionalamcena en la tabla */
function agregarCliente() {
    const nombre = document.getElementById("nombreCliente").value;
    const modelo = document.getElementById("Modelo").value;
    const numeroSerie = document.getElementById("numeroSerieEquipo").value;
    const imei = document.getElementById("imei").value;
    const fechaHora = new Date().toLocaleString(); // Captura la fecha y hora actual
    const autorizacion = prompt("Ingrese la autorización:");
    const abono50 = prompt("¿Abonó el 50%? (Sí/No):");
    const diagnostico = prompt("Ingrese el diagnóstico:");
    const estado = prompt("Ingrese el estado:");
    
    
    const tabla = document.getElementById("registroTable");
    const fila = tabla.insertRow();

    const celdas = [
        nombre, modelo, numeroSerie, imei, fechaHora, autorizacion, abono50, diagnostico, estado, crearSelectTecnico()
    ];

    celdas.forEach((valor) => {
        const celda = fila.insertCell();
        celda.innerHTML = valor;
        celda.onclick = function () {
            if (celda.cellIndex === 7 || celda.cellIndex === 8) {
                editarCampo(celda);
            }
        };
    });
    const datosReparacion = new DatosReparacion(nombre, modelo, numeroSerie, imei, fechaHora, autorizacion, abono50, diagnostico, estado);
    listaClientes.push(datosReparacion);

    // Actualizar sessionStorage con la lista actualizada
    sessionStorage.setItem('listaClientes', JSON.stringify(listaClientes));
}


function editarCampo(celda) {
    const valorActual = celda.innerHTML;
    const nuevoValor = prompt("Editar:", valorActual);

    if (nuevoValor !== null) {
        celda.innerHTML = nuevoValor;

    }

}
function crearSelectTecnico() {
    const select = document.createElement("select");
    const opciones = ["PAblo bermudez (Android)", "Manuel torres(Android/Ios)", "Flor Cervantes (Ios)", "Micahel flores (Android/Ios)"];

    opciones.forEach((opcion) => {
        const option = document.createElement("option");
        option.value = opcion;
        option.text = opcion;
        select.add(option);
    });

    return select.outerHTML; // Convertir el elemento select a HTML para mostrarlo en la celda
}

function cargarDatosDesdeSessionStorage() {
    const datosAlmacenados = sessionStorage.getItem('listaClientes');
    if (datosAlmacenados) {
        // Si hay datos almacenados, convertirlos de nuevo a objetos y agregar a la listaClientes
        const datosParseados = JSON.parse(datosAlmacenados);
        datosParseados.forEach((datos) => {
            const datosReparacion = new DatosReparacion(datos.nombreCliente, datos.modelo, datos.numeroSerieEquipo, datos.imei, datos.fechaHora, datos.autorizacion, datos.abono50, datos.diagnostico, datos.estado);
            listaClientes.push(datosReparacion);
        });
    }
}

// Llama a la función para cargar datos desde sessionStorage al iniciar la página
cargarDatosDesdeSessionStorage();



