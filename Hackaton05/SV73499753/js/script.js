class Telefono {
    constructor( imei, marca,modelo) {
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
      this.reportado = false;
    }
    marcarComoReportado() {
        this.reportado = true;
      }
    }

 // Clase para representar un Usuario
class Usuario {
    constructor(nombre, autorizacionEscrita, abono) {
      this.nombre = nombre;
      this.autorizacionEscrita = autorizacionEscrita;
      this.abono = abono;
    }
  }
  // Clase para representar un Técnico
class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    puedeReparar(telefono) {
      return this.skills.includes(telefono.marca);
    }
  }
  // Clase para representar una Estación de Trabajo
  class EstacionTrabajo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    realizarTrabajo(reparacion) {
      console.log(`[${this.nombre}] Realizando trabajo en la reparación...`);
      // Simulación de trabajo en la estación de trabajo
      // Puedes agregar lógica específica para cada estación aquí
      console.log(`[${this.nombre}] Trabajo completado.`);
    }
  }
 // Clase para representar una Reparación
class Reparacion {
    constructor(telefono, usuario, diagnosticoInicial) {
      this.telefono = telefono;
      this.usuario = usuario;
      this.diagnosticoInicial = diagnosticoInicial;
      this.autorizacion = false;
      this.repuestos = [];
      this.estacionesTrabajo = [
        new EstacionTrabajo("Primera Revisión"),
        new EstacionTrabajo("Asignación de Técnico"),
        new EstacionTrabajo("Autorización"),
        new EstacionTrabajo("Reparación"),
      ];
      this.estado = "En revisión";
      this.tecnicoAsignado = null;
    }
    pasarPorRevision() {
        if (this.telefono.reportado) {
          console.log("El teléfono está reportado. No se puede continuar con la reparación.");
          return;
        }
    
        this.estacionesTrabajo[0].realizarTrabajo(this);
        this.estado = "Primera revisión completada";
        console.log("Primera revisión completada. Diagnóstico inicial:", this.diagnosticoInicial);
      }
    asignarTecnico(tecnico) {
        if (tecnico.puedeReparar(this.telefono)) {
          this.tecnicoAsignado = tecnico;
          this.estacionesTrabajo[1].realizarTrabajo(this);
          console.log(`Técnico ${tecnico.nombre} asignado a la reparación.`);
        } else {
          console.log("No hay técnicos disponibles para la marca del teléfono.");
          this.estado = "Asignación de técnico fallida";
        }
      }
    
      pasarPorEstaciones() {
        this.estacionesTrabajo.forEach((estacion) => {
          estacion.realizarTrabajo(this);
        });
        this.estado = "Reparación completada";
      }
    
      
    
      obtenerAutorizacion() {
        if (this.usuario.autorizacionEscrita && this.usuario.abono >= 0.5) {
          this.estacionesTrabajo[2].realizarTrabajo(this);
          this.autorizacion = true;
          this.estado = "Autorizado para reparación";
          console.log("Autorización y abono verificados. Puede continuar con la reparación.");
        } else {
          console.log("Autorización o abono insuficiente. No se puede continuar con la reparación.");
        }
      }
    
      agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
        console.log("Repuesto agregado:", repuesto);
      }
    
      mostrarEstado() {
        console.log("Estado del equipo:", this.estado);
      }
  }
const telefono = new Telefono( "ABCDEF", "Samsung","galaxy7");
const usuario = new Usuario("Usuario1", true, 0.4);
const diagnosticoInicial = "Problema en la pantalla";

const reparacion = new Reparacion(telefono, usuario, diagnosticoInicial);

const tecnico = new Tecnico("Tecnico1", ["Samsung"]);

reparacion.pasarPorRevision();
reparacion.obtenerAutorizacion();
reparacion.asignarTecnico(tecnico);
reparacion.agregarRepuesto("Pantalla nueva");
reparacion.pasarPorEstaciones();

reparacion.mostrarEstado();