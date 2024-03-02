// Clase Cliente
class Cliente {
    constructor(nombre, telefono, autorizacion, abono) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.autorizacion = autorizacion;
      this.abono = abono;
    }
  }
  
  // Clase Telefono
  class Telefono {
    constructor(numeroSerie, imei, reportado) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.reportado = reportado;
    }
  
    verificarTelefono() {
      // Lógica para verificar si el teléfono está reportado
      // Devuelve true si no está reportado, false si lo está
    }
  }
  
  // Clase Tecnico
  class Tecnico {
    constructor(nombre, habilidades, disponibilidad) {
      this.nombre = nombre;
      this.habilidades = habilidades;
      this.disponibilidad = disponibilidad;
    }
  }
  
  // Clase Reparacion
  class Reparacion {
    constructor(estado, diagnostico, repuestos, costoTotal) {
      this.estado = estado;
      this.diagnostico = diagnostico;
      this.repuestos = repuestos;
      this.costoTotal = costoTotal;
    }
  }
  

  const cliente1 = new Cliente("Juan", "987654321", true, 100);
  const telefono1 = new Telefono("123456789", "IMEI123", false);
  const tecnico1 = new Tecnico("Pedro", ["Samsung", "Apple"], true);
  const reparacion1 = new Reparacion("En proceso", "Pantalla rota", ["Pantalla nueva", "Batería"], 200);
  