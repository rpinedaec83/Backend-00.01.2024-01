
class Telefono {
    constructor(numeroSerie, imei, marca, reportado) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.reportado = reportado;
        this.diagnostico = null;
    }

    asignarDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
    }
}

class Diagnostico {
    constructor(descripcion) {
        this.descripcion = descripcion;
    }
}

function agregarTelefono() {
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const marca = document.getElementById("marca").value;
    const reportado = document.getElementById("reportado").value === "si";

    const telefono = new Telefono(numeroSerie, imei, marca, reportado);
    actualizarEstadoEquipo(telefono);
}

function actualizarEstadoEquipo(telefono) {
    const estadoEquipoBody = document.getElementById("estadoEquipoBody");
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${telefono.numeroSerie}</td>
        <td>${telefono.imei}</td>
        <td>${telefono.marca}</td>
        <td>${telefono.reportado ? 'Sí' : 'No'}</td>
        <td>${telefono.diagnostico ? telefono.diagnostico.descripcion : 'Pendiente'}</td>
    `;
    estadoEquipoBody.appendChild(fila);
}

function agregarTelefono() {
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const marca = document.getElementById("marca").value;
    const reportado = document.getElementById("reportado").value === "si";
    const diagnosticoDescripcion = document.getElementById("diagnostico").value; // Obtener descripción del diagnóstico


    const telefono = new Telefono(numeroSerie, imei, marca, reportado);

    if (diagnosticoDescripcion.trim() !== "") {
        const diagnostico = new Diagnostico(diagnosticoDescripcion);
        telefono.asignarDiagnostico(diagnostico);
    }


    const estadoEquipoBody = document.getElementById("estadoEquipoBody");
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${telefono.numeroSerie}</td>
        <td>${telefono.imei}</td>
        <td>${telefono.marca}</td>
        <td>${telefono.reportado ? 'Sí' : 'No'}</td>
        <td>${telefono.diagnostico ? telefono.diagnostico.descripcion : 'Pendiente'}</td>
    `;
    estadoEquipoBody.appendChild(fila);
}

function agregarTelefono() {
    
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const marca = document.getElementById("marca").value;
    const reportado = document.getElementById("reportado").value === "si";
    const diagnosticoDescripcion = document.getElementById("diagnostico").value;
    const telefono = new Telefono(numeroSerie, imei, marca, reportado);

    if (telefono.reportado) {
        alert("¡Atención! Este teléfono está reportado. Se llamará a la policía.");
      
    }

    if (diagnosticoDescripcion.trim() !== "") {
        const diagnostico = new Diagnostico(diagnosticoDescripcion);
        telefono.asignarDiagnostico(diagnostico);
    }

    const estadoEquipoBody = document.getElementById("estadoEquipoBody");
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${telefono.numeroSerie}</td>
        <td>${telefono.imei}</td>
        <td>${telefono.marca}</td>
        <td>${telefono.reportado ? 'Sí' : 'No'}</td>
        <td>${telefono.diagnostico ? telefono.diagnostico.descripcion : 'Pendiente'}</td>
    `;
    estadoEquipoBody.appendChild(fila);
}

function agregarTelefono() {
    
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const marca = document.getElementById("marca").value;
    const reportado = document.getElementById("reportado").value === "si";
    const diagnosticoDescripcion = document.getElementById("diagnostico").value; 

   
    const telefono = new Telefono(numeroSerie, imei, marca, reportado);
    if (telefono.reportado) {
        alert("¡Atención! Este teléfono está reportado. Se llamará a la policía.");
        return; 
    }
   
    if (diagnosticoDescripcion.trim() !== "") {
        const diagnostico = new Diagnostico(diagnosticoDescripcion);
        telefono.asignarDiagnostico(diagnostico);
    }

    const estadoEquipoBody = document.getElementById("estadoEquipoBody");
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${telefono.numeroSerie}</td>
        <td>${telefono.imei}</td>
        <td>${telefono.marca}</td>
        <td>${telefono.reportado ? 'Sí' : 'No'}</td>
        <td>${telefono.diagnostico ? telefono.diagnostico.descripcion : 'Pendiente'}</td>
    `;
    estadoEquipoBody.appendChild(fila);
}
