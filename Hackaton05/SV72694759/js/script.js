// Definición de la clase Telefono
class Telefono {
    constructor(numeroSerie, imei, marca) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.reportado = false;
    }
  
    marcarComoReportado() {
      this.reportado = true;
    }
  }
  
  // Definición de la clase Reparacion
  class Reparacion {
    constructor(telefono, diagnostico, autorizacion, abono) {
      this.telefono = telefono;
      this.diagnostico = diagnostico;
      this.autorizacion = autorizacion;
      this.abono = abono;
      this.estado = 'En espera'; // Estado inicial
      this.repuestos = [];
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    cambiarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  }
  
  // Definición de la clase Tecnico
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }
  
  // Ejemplo de uso
  const telefono1 = new Telefono('123456', 'IMEI123', 'Samsung');
  const telefono2 = new Telefono('654321', 'IMEI456', 'iPhone');
  
  const reparacion1 = new Reparacion(telefono1, 'Pantalla rota', true, 0.5);
  const reparacion2 = new Reparacion(telefono2, 'Batería defectuosa', true, 0.5);
  
  const tecnico1 = new Tecnico('Juan', ['Samsung']);
  const tecnico2 = new Tecnico('Pedro', ['iPhone']);
  
  reparacion1.cambiarEstado('En reparación');
  reparacion2.cambiarEstado('En reparación');
  
  console.log(reparacion1);
  console.log(reparacion2);
  