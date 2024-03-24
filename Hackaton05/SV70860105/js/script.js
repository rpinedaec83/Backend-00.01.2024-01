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

    guardarEnWebStorage() {
        // Convertir el objeto a una cadena JSON y almacenarlo en el Web Storage (sessionStorage)
        sessionStorage.setItem(this.numeroSerie, JSON.stringify(this));
    }

    static cargarDesdeWebStorage(numeroSerie) {
        // Obtener el objeto almacenado en el Web Storage y convertirlo de nuevo a un objeto
        const storedTelefono = sessionStorage.getItem(numeroSerie);
        if (storedTelefono) {
            const telefonoObj = JSON.parse(storedTelefono);
            const telefono = new Telefono(
                telefonoObj.numeroSerie,
                telefonoObj.imei,
                telefonoObj.marca,
                telefonoObj.reportado
            );
            // Restaurar el resto de las propiedades
            telefono.diagnostico = telefonoObj.diagnostico;
            telefono.autorizacion = telefonoObj.autorizacion;
            telefono.abono = telefonoObj.abono;
            telefono.reparacion = telefonoObj.reparacion;
            return telefono;
        }
        return null;
    }
}

function agregarTelefono() {
    const numeroSerie = document.getElementById("numeroSerie").value;
    const telefonoExistente = Telefono.cargarDesdeWebStorage(numeroSerie);

    if (telefonoExistente) {
        alert("¡Atención! Este teléfono ya está registrado.");
        return;
    }

    const imei = document.getElementById("imei").value;
    const marca = document.getElementById("marca").value;
    const reportado = document.getElementById("reportado").value === "si";

    const telefono = new Telefono(numeroSerie, imei, marca, reportado);

    if (telefono.reportado) {
        alert("¡Atención! Este teléfono está reportado. Se llamará a la policía.");
        return;
    }

    // Resto del código sin cambios

    // Guardar el teléfono en el Web Storage (sessionStorage)
    telefono.guardarEnWebStorage();
}