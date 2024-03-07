
class Telefono {
    constructor(numeroSerie, imei, marca, reportado) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.reportado = reportado;
        this.diagnostico = null;
        this.autorizacion = false;
        this.abono = 0;
        this.reparacion = {
            repuestos: [],
            estado: 'En revisión',
            estacionTrabajo: 'Estación de revisión'
        };
    }

    asignarDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
    }

    darAutorizacion(abono) {
        const mensajes = document.getElementById("mensajes");

        if (this.autorizacion) {
            mensajes.textContent = "El usuario ya ha dado autorización.";
            return;
        }

        if (abono >= 0.5 * this.reparacionCosto()) {
            this.abono = abono;
            this.autorizacion = true;
            mensajes.textContent = "Autorización recibida. El servicio puede continuar.";
        } else {
            mensajes.textContent = "El abono no cumple con el 50% requerido.";
        }
    }

    reparacionCosto() {
        // Lógica para calcular el costo de la reparación basado en diagnósticos, repuestos, etc.
        // Retorna el costo total estimado de la reparación.
        return 100; // Ejemplo: costo fijo de $100
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

    if (telefono.reportado) {
        alert("¡Atención! Este teléfono está reportado. Se llamará a la policía.");
        return;
    }

    // Realizar la primera revisión y guardar el primer diagnóstico
    const primerDiagnosticoDescripcion = document.getElementById("primerDiagnostico").value;
    const tecnicoNombre = document.getElementById("tecnico").value;
    const abono = parseFloat(document.getElementById("abono").value);

    const primerDiagnostico = new Diagnostico(primerDiagnosticoDescripcion);

    telefono.asignarDiagnostico(primerDiagnostico);
    telefono.darAutorizacion(abono);

    // Mostrar el estado del equipo en la estación de revisión
    mostrarEstadoEquipo(telefono);

    // Agregar al historial de reparaciones
    agregarAlHistorial(telefono);
}

function mostrarEstadoEquipo(telefono) {
    const estadoEquipoResultado = document.getElementById("estadoEquipoResultado");
    estadoEquipoResultado.innerHTML = `
        <strong>Número de Serie:</strong> ${telefono.numeroSerie}<br>
        <strong>IMEI:</strong> ${telefono.imei}<br>
        <strong>Marca:</strong> ${telefono.marca}<br>
        <strong>Diagnóstico:</strong> ${telefono.diagnostico ? telefono.diagnostico.descripcion : 'Pendiente'}<br>
        <strong>Estado de Reparación:</strong> ${telefono.reparacion.estado}<br>
        <strong>Abono:</strong> ${telefono.abono}<br>
    `;
}
function agregarAlHistorial(telefono) {
    const historialReparacionesBody = document.getElementById("historialReparacionesBody");
    const fila = document.createElement("tr");
    fila.innerHTML = `
                <td>${telefono.numeroSerie}</td>
                <td>${telefono.imei}</td>
                <td>${telefono.marca}</td>
                <td>${telefono.diagnostico ? telefono.diagnostico.descripcion : 'Pendiente'}</td>
                <td>${telefono.reparacion.estado}</td>
                <td>${telefono.abono}</td>
            `;
    historialReparacionesBody.appendChild(fila);
}
