// Clase para representar un teléfono
class Telefono {
  constructor(numeroSerie, IMEI, marca) {
    this.numeroSerie = numeroSerie;
    this.IMEI = IMEI;
    this.marca = marca;
    this.reportado = false;
  }

  marcarComoReportado() {
    this.reportado = true;
  }
}

// Clase para representar un diagnóstico
class Diagnostico {
  constructor(descripcion) {
    this.descripcion = descripcion;
  }
}

// Clase para representar un técnico
class Tecnico {
  constructor(nombre, skills) {
    this.nombre = nombre;
    this.skills = skills;
  }
}

// Clase para representar una reparación
class Reparacion {
  constructor(telefono, usuarioAutorizacion, abono) {
    this.telefono = telefono;
    this.usuarioAutorizacion = usuarioAutorizacion;
    this.abono = abono;
    this.diagnostico = null;
    this.tecnicoAsignado = null;
    this.repuestos = [];
    this.estado = "En espera de revisión";
  }

  pasarPorRevision(diagnostico) {
    if (!this.telefono.reportado && this.abono >= 0.5) {
      this.diagnostico = diagnostico;
      this.estado = "En revisión";
    } else {
      this.estado = "Rechazado";
    }
  }

  asignarTecnico(tecnico) {
    if (tecnico.skills.includes(this.telefono.marca)) {
      this.tecnicoAsignado = tecnico;
      this.estado = "En reparación";
    } else {
      this.estado = "Esperando técnico con las habilidades necesarias";
    }
  }

  agregarRepuesto(repuesto) {
    this.repuestos.push(repuesto);
  }

  finalizarReparacion() {
    this.estado = "Reparación completada";
  }
}

// Clase para representar un repuesto
class Repuesto {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Ejemplo de uso
const telefono1 = new Telefono("123", "456789", "Samsung");
const diagnostico1 = new Diagnostico("Pantalla rota");

const tecnico1 = new Tecnico("Juan", ["Samsung", "Apple"]);
const reparacion1 = new Reparacion(telefono1, "Autorización", 0.7);

reparacion1.pasarPorRevision(diagnostico1);
reparacion1.asignarTecnico(tecnico1);
reparacion1.agregarRepuesto(new Repuesto("Pantalla nueva"));
reparacion1.finalizarReparacion();

// Guardar en WebStorage
//const reparacionData = JSON.stringify(reparacion1);//
localStorage.setItem("reparacion", reparacionData);