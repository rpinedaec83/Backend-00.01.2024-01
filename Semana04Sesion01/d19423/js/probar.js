class Telefono {
    constructor(numeroSerie, IMEI, reportado) {
      this.numeroSerie = numeroSerie;
      this.IMEI = IMEI;
      this.reportado = reportado;
    }
  }
  
  class Usuario {
    constructor(autorizacionEscrita, abono) {
      this.autorizacionEscrita = autorizacionEscrita;
      this.abono = abono;
    }
  }
  
  class Diagnostico {
    constructor(descripcion) {
      this.descripcion = descripcion;
    }
  }
  
  class Tecnico {
    constructor(nombre, habilidades) {
      this.nombre = nombre;
      this.habilidades = habilidades;
    }
  }
  
  class Repuesto {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  class Reparacion {
    constructor(telefono, usuario, diagnostico, tecnico, repuestos) {
      this.telefono = telefono;
      this.usuario = usuario;
      this.diagnostico = diagnostico;
      this.tecnico = tecnico;
      this.repuestos = repuestos;
      this.estado = 'En revisión'; // Estado inicial
    }
  
    realizarPrimeraRevision() {
      if (!this.telefono.reportado) {
        this.estado = 'Primera revisión realizada';
        this.guardarDiagnostico('Diagnóstico inicial');
      } else {
        this.estado = 'Teléfono reportado, no se puede continuar';
      }
    }
  
    guardarDiagnostico(descripcion) {
      this.diagnostico = new Diagnostico(descripcion);
    }
  
    solicitarServicio() {
      if (this.usuario.autorizacionEscrita && this.usuario.abono >= 0.5) {
        this.estado = 'Servicio autorizado';
      } else {
        this.estado = 'Falta autorización o abono insuficiente';
      }
    }
  }
  
  class EstacionTrabajo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    mostrarEstado(reparacion) {
      console.log(`Estado en ${this.nombre}: ${reparacion.estado}`);
    }
  }
  
  // Ejemplo de uso
  const telefono = new Telefono('123', '456789', false);
  const usuario = new Usuario(true, 0.6);
  const tecnico = new Tecnico('Juan', ['MarcaA', 'MarcaB']);
  const repuesto = new Repuesto('Pantalla');
  
  const reparacion = new Reparacion(telefono, usuario, null, tecnico, [repuesto]);
  const estacionTrabajo = new EstacionTrabajo('Estación 1');
  
  reparacion.realizarPrimeraRevision();
  reparacion.solicitarServicio();
  
  estacionTrabajo.mostrarEstado(reparacion);