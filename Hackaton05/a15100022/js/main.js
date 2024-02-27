function generarNumeroSerie() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var serialNumber = 't';
    for (var i = 0; i < 11; i++) {
        serialNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Format serial number into groups of 4 characters separated by hyphens
    var formattedSerialNumber = serialNumber.match(/.{1,4}/g).join('-');
    document.getElementById('numeroSerieEquipo').value = formattedSerialNumber;
}

function generarIMEI() {
    var imei = '';
    for (var i = 0; i < 12; i++) {
        imei += Math.floor(Math.random() * 10);
    }
    document.getElementById('IMEI').value = imei;
}

function validar() {
    var imeiToCheck = document.getElementById('IMEI').value;

    // Verificar si el campo IMEI está vacío
    if (imeiToCheck.trim() === '') {
        alert('Por favor, ingrese un número IMEI antes de continuar.');
        return; // Detener la validación si el campo está vacío
    }

    // Simular la situación donde el IMEI está reportado como robado con una probabilidad del 30%
    var isStolen = Math.random() < 0.3;

    if (isStolen) {
        alert('El dispositivo con IMEI ' + imeiToCheck + ' se reporta como robado.');
        limpiarFormulario();
    } else {
        alert('El dispositivo no se reporta como robado: El usuario se registra para ser atendido');
       
       alert ("Se ha asignado correctamente al usuario" );
       
        // Registra al nuevo cliente y muestra la información en la tabla
        registrarNuevoCliente();
    }
}

function limpiarFormulario() {
    // Limpiar todos los campos del formulario
    document.getElementById('nombreCliente').value = '';
    document.getElementById('Modelo').value = '';
    document.getElementById('numeroSerieEquipo').value = '';
    document.getElementById('IMEI').value = '';
}

function registrarNuevoCliente() {
    var nombreCliente = document.getElementById('nombreCliente').value;
    var modelo = document.getElementById('Modelo').value;
    var numeroSerie = document.getElementById('numeroSerieEquipo').value;

    // Crear una nueva fila en la tabla y mostrar los datos registrados
    var table = document.getElementById('registroTable');
    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4); // Fecha y Hora
    var cell6 = newRow.insertCell(5); // Autorizacion
    var cell7 = newRow.insertCell(6); // Abono el 50%
    var cell8 = newRow.insertCell(7); // Diagnostico
    var cell9 = newRow.insertCell(8); // Estado

    cell1.innerHTML = nombreCliente;
    cell2.innerHTML = modelo;
    cell3.innerHTML = numeroSerie;
    cell4.innerHTML = document.getElementById('IMEI').value;
    cell5.innerHTML = actualizarFechaHora();

    // Agregar checkbox para Autorizacion
    var checkboxAutorizacion = document.createElement('input');
    checkboxAutorizacion.type = 'checkbox';
    cell6.appendChild(checkboxAutorizacion);

    // Agregar checkbox para Abono el 50%
    var checkboxAbono = document.createElement('input');
    checkboxAbono.type = 'checkbox';
    cell7.appendChild(checkboxAbono);

    // Agregar botón de ver Diagnóstico
    var btnVerDiagnostico = document.createElement('button');
    btnVerDiagnostico.innerHTML = 'Ver';
    // Agregar evento onClick para el botón
    btnVerDiagnostico.onclick = function () {
        // Mostrar el formulario flotante al hacer clic en "Ver Diagnóstico"
        document.getElementById('formularioFlotante').style.display = 'block';
    };
    cell8.appendChild(btnVerDiagnostico);

    // Agregar botón de ver para Estado
    var btnVerEstado = document.createElement('button');

    btnVerEstado.innerHTML = 'Ver';
    // Agregar evento onClick para el botón
    btnVerEstado.onclick = function () {
        document.getElementById('formularioFlotante').style.display = 'block';
        // Puedes agregar tu propia lógica aquí
        
    };
    cell9.appendChild(btnVerEstado);
}

function actualizarFechaHora() {
    var fechaHoraActual = new Date();
    var fechaHoraFormato = fechaHoraActual.toLocaleString();
    return fechaHoraFormato;
}
//************************************************************************************************ */
function guardarDiagnostico() {
    var diagnostico = document.getElementById("diagnostico").value;
    var tecnico = document.getElementById("tecnico").value;
    var estadoEquipo = document.getElementById("estadoEquipo").value;

    if (diagnostico.trim() === "") {
        alert("Por favor, ingresa un diagnóstico antes de guardar.");
        return;
    }

    var tabla = document.getElementById("registroTable");
    var fila = tabla.insertRow(-1);

    var celdaDiagnostico = fila.insertCell(7);
    celdaDiagnostico.innerHTML = diagnostico;

    document.getElementById("diagnostico").value = "";
    document.getElementById("tecnico").value = "";
    document.getElementById("estadoEquipo").value = "";

    document.getElementById('formularioFlotante').style.display = 'none';

    mostrarMensaje('Diagnóstico guardado correctamente.');
}


function cancelarFormulario() {
            document.getElementById("diagnostico").value = "";
            document.getElementById("tecnico").value = "";
            document.getElementById("estadoEquipo").value = "";
            document.getElementById('formularioFlotante').style.display = 'none';
        }
function mostrarMensaje(mensaje) {
    var notificacion = document.createElement('div');
    notificacion.className = 'mensaje-notificacion';
    notificacion.innerHTML = mensaje;

    document.body.appendChild(notificacion);

    setTimeout(function () {
        notificacion.style.opacity = '0';
        setTimeout(function () {
            notificacion.parentNode.removeChild(notificacion);
        }, 1000);
    }, 3000);
}

// Función para el botón Ver

