const telefonos = [];
const empleados = [];
const asignaciones = [];
const historialPrimeraRevision = [];
const trabajosTerminados = [];

document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
});

function abrirFormulario(formId) {
    const formularios = document.getElementsByClassName('formulario');
    for (const formulario of formularios) {
        formulario.style.display = 'none';
    }

    const formularioActual = document.getElementById(formId);
    formularioActual.style.display = 'block';

    if (formId === 'asignarTelefonoForm') {
        cargarEmpleadosEnSelect();
        cargarTelefonosEnSelect();
    }
    if (formId === 'primeraRevisionForm') {
        cargarAsignacionesEnSelect();
    }
}

function registrarTelefono() {
    const numSerie = document.getElementById('numSerie').value;
    const imei = document.getElementById('imei').value;

    if (!numSerie || !imei) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const telefonoExistente = telefonos.find(tel => tel.numSerie === numSerie || tel.imei === imei);
    if (telefonoExistente) {
        alert('Este teléfono ya está registrado.');
        return;
    }

    const nuevoTelefono = { numSerie, imei };
    telefonos.push(nuevoTelefono);
    actualizarTablaTelefonos();
    guardarDatos();
    alert('Teléfono registrado con éxito.');

    limpiarCamposTelefonoForm();
}

function registrarEmpleado() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const contacto = document.getElementById('contacto').value;
    const correo = document.getElementById('correo').value;

    if (!nombre || !apellido || !direccion || !contacto || !correo) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const nuevoEmpleado = { nombre, apellido, direccion, contacto, correo };
    empleados.push(nuevoEmpleado);
    actualizarTablaEmpleados();
    guardarDatos();
    alert('Empleado registrado con éxito.');

    limpiarCamposEmpleadoForm();
}

function asignarTelefono() {
    const empleadoSelect = document.getElementById('empleadoSelect');
    const telefonoSelect = document.getElementById('telefonoSelect');

    if (empleadoSelect.value === '' || telefonoSelect.value === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const numSerieImei = telefonoSelect.value.split(' - ');
    const numSerie = numSerieImei[0];
    const imei = numSerieImei[1];

    const telefonoAAsignar = telefonos.find(tel => tel.numSerie === numSerie && tel.imei === imei);
    if (!telefonoAAsignar) {
        alert('El teléfono no está registrado.');
        return;
    }

    const nombreApellidoEmpleado = empleadoSelect.value.split(' ');
    const empleadoAsignado = empleados.find(emp => emp.nombre === nombreApellidoEmpleado[0] && emp.apellido === nombreApellidoEmpleado[1]);
    if (!empleadoAsignado) {
        alert('Seleccione un empleado válido.');
        return;
    }

    const asignacion = { empleado: `${empleadoAsignado.nombre} ${empleadoAsignado.apellido}`, numSerie, imei };
    asignaciones.push(asignacion);
    actualizarTablaAsignaciones();
    guardarDatos();
    alert(`Teléfono asignado a ${empleadoAsignado.nombre} ${empleadoAsignado.apellido}.`);

    limpiarCamposAsignarTelefonoForm();
}

function cargarEmpleadosEnSelect() {
    const empleadoSelect = document.getElementById('empleadoSelect');
    empleadoSelect.innerHTML = '';

    for (const empleado of empleados) {
        const option = document.createElement('option');
        option.value = `${empleado.nombre} ${empleado.apellido}`;
        option.text = `${empleado.nombre} ${empleado.apellido}`;
        empleadoSelect.appendChild(option);
    }
}

function cargarTelefonosEnSelect() {
    const telefonoSelect = document.getElementById('telefonoSelect');
    telefonoSelect.innerHTML = '';

    for (const telefono of telefonos) {
        const option = document.createElement('option');
        option.value = `${telefono.numSerie} - ${telefono.imei}`;
        option.text = `${telefono.numSerie} - ${telefono.imei}`;
        telefonoSelect.appendChild(option);
    }
}

function cargarAsignacionesEnSelect() {
    const asignacionPrimeraRevisionSelect = document.getElementById('asignacionSelect');
    asignacionPrimeraRevisionSelect.innerHTML = '';

    for (const asignacion of asignaciones) {
        const option = document.createElement('option');
        option.value = `${asignacion.empleado} - ${asignacion.imei}`;
        option.text = `${asignacion.empleado} - ${asignacion.imei}`;
        asignacionPrimeraRevisionSelect.appendChild(option);
    }
}

function registrarPrimeraRevision(asignacionSelect, comentario, abonoRealizado) {
    const empleadoImei = asignacionSelect.value.split(' - ');
    const empleado = empleadoImei[0];
    const imei = empleadoImei[1];

    const asignacion = asignaciones.find(asig => asig.empleado === empleado && asig.imei === imei);
    if (!asignacion) {
        alert('Seleccione una asignación válida.');
        return;
    }

    const primeraRevision = { empleado, imei, comentario, abonoRealizado };
    historialPrimeraRevision.push(primeraRevision);
    actualizarTablaHistorialPrimeraRevision();
    guardarDatos();
    alert('Primera revisión registrada con éxito.');
}

function actualizarTablaHistorialPrimeraRevision() {
    console.log('Entro a actualizarTablaHistorialPrimeraRevision');

    const historialPrimeraRevisionTable = document.getElementById('historialPrimeraRevisionTable');
    console.log('historialPrimeraRevisionTable:', historialPrimeraRevisionTable);

    if (historialPrimeraRevisionTable) {
        const tbody = historialPrimeraRevisionTable.getElementsByTagName('tbody')[0];

        if (tbody) {
            tbody.innerHTML = '';

            for (const revision of historialPrimeraRevision) {
                const row = tbody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);
                const cell5 = row.insertCell(4);

                cell1.textContent = revision.empleado;
                cell2.textContent = revision.imei;
                cell3.textContent = revision.comentario;
                cell4.textContent = revision.abonoRealizado ? 'Sí' : 'No';
                cell5.innerHTML = '<button onclick="terminarReparacion()">Terminar Reparación</button>';
            }
        } else {
            console.error('No se encontró el cuerpo de la tabla en actualizarTablaHistorialPrimeraRevision');
        }
    } else {
        console.error('No se encontró la tabla en actualizarTablaHistorialPrimeraRevision');
    }
}


function terminarReparacion(numSerie, imei) {
    const asignacionTerminada = asignaciones.find(asignacion => asignacion.numSerie === numSerie && asignacion.imei === imei);

    if (asignacionTerminada) {
        const nombreEmpleado = asignacionTerminada.empleado;

        const trabajoExistente = trabajosTerminados.find(trabajo => trabajo.numSerie === numSerie && trabajo.imei === imei);

        if (!trabajoExistente) {
            const trabajoTerminado = { empleado: nombreEmpleado, numSerie, imei, estado: 'Arreglado' };
            trabajosTerminados.push(trabajoTerminado);
            actualizarTablaTrabajosTerminados();
            alert('Reparación terminada y registrada con éxito.');
        } else {
            alert('Este trabajo ya ha sido registrado como terminado anteriormente.');
        }
    } else {
        alert('No se encontró la asignación correspondiente para terminar la reparación.');
    }
}

function actualizarTablaTelefonos() {
    const telefonosTable = document.getElementById('telefonosTable').getElementsByTagName('tbody')[0];
    telefonosTable.innerHTML = '';

    for (const telefono of telefonos) {
        const row = telefonosTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = telefono.numSerie;
        cell2.textContent = telefono.imei;
    }
}

function actualizarTablaEmpleados() {
    const empleadosTable = document.getElementById('empleadosTable').getElementsByTagName('tbody')[0];
    empleadosTable.innerHTML = '';

    for (const empleado of empleados) {
        const row = empleadosTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.textContent = empleado.nombre;
        cell2.textContent = empleado.apellido;
        cell3.textContent = empleado.direccion;
        cell4.textContent = empleado.contacto;
        cell5.textContent = empleado.correo;
    }
}

function actualizarTablaAsignaciones() {
    const asignacionesTable = document.getElementById('asignacionesTable').getElementsByTagName('tbody')[0];
    asignacionesTable.innerHTML = '';

    for (const asignacion of asignaciones) {
        const row = asignacionesTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = asignacion.empleado;
        cell2.textContent = asignacion.numSerie;
        cell3.textContent = asignacion.imei;
    }
}


function terminarReparacion() {
    const row = event.target.parentNode.parentNode;
    const empleado = row.cells[0].textContent;
    const imei = row.cells[1].textContent;

    const trabajoExistente = trabajosTerminados.find(trabajo => trabajo.empleado === empleado && trabajo.imei === imei);

    if (!trabajoExistente) {
        const trabajoTerminado = { empleado, imei, estado: 'Arreglado' };
        trabajosTerminados.push(trabajoTerminado);
        actualizarTablaTrabajosTerminados();
        guardarDatos();
        alert('Reparación terminada y registrada con éxito.');
    } else {
        alert('Este trabajo ya ha sido registrado como terminado anteriormente.');
    }
}

function actualizarTablaTrabajosTerminados() {
    const trabajosTerminadosTable = document.getElementById('trabajosTerminadosTable').getElementsByTagName('tbody')[0];
    trabajosTerminadosTable.innerHTML = '';

    for (const trabajoTerminado of trabajosTerminados) {
        const row = trabajosTerminadosTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = trabajoTerminado.empleado;
        cell2.textContent = trabajoTerminado.imei;
        cell3.textContent = trabajoTerminado.estado;
    }
}

function cargarDatos() {
    const data = localStorage.getItem('sistemaDatos');
    if (data) {
        const parsedData = JSON.parse(data);
        if (parsedData.telefonos) telefonos.push(...parsedData.telefonos);
        if (parsedData.empleados) empleados.push(...parsedData.empleados);
        if (parsedData.asignaciones) asignaciones.push(...parsedData.asignaciones);
        if (parsedData.historialPrimeraRevision) historialPrimeraRevision.push(...parsedData.historialPrimeraRevision);
        if (parsedData.trabajosTerminados) trabajosTerminados.push(...parsedData.trabajosTerminados);
    }
    // Actualizar las tablas después de cargar los datos
    actualizarTablaTelefonos();
    actualizarTablaEmpleados();
    actualizarTablaAsignaciones();
    actualizarTablaHistorialPrimeraRevision();
    actualizarTablaTrabajosTerminados();
}

function guardarDatos() {
    const sistemaDatos = {
        telefonos: telefonos,
        empleados: empleados,
        asignaciones: asignaciones,
        historialPrimeraRevision: historialPrimeraRevision,
        trabajosTerminados: trabajosTerminados
    };
    localStorage.setItem('sistemaDatos', JSON.stringify(sistemaDatos));
}

function limpiarCamposTelefonoForm() {
    document.getElementById('numSerie').value = '';
    document.getElementById('imei').value = '';
}

function limpiarCamposEmpleadoForm() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('contacto').value = '';
    document.getElementById('correo').value = '';
}

function limpiarCamposAsignarTelefonoForm() {
    document.getElementById('empleadoSelect').value = '';
    document.getElementById('telefonoSelect').value = '';
}
