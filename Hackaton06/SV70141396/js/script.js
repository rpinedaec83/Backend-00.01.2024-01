// Definir la clase Cliente
class Cliente {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}

// Definir la clase Telefono
class Telefono {
  constructor(numeroSerie, IMEI, marca, modelo, estado, reparacion) {
    this.numeroSerie = numeroSerie;
    this.IMEI = IMEI;
    this.marca = marca;
    this.modelo = modelo;
    this.estado = estado; // Estado actual del teléfono
    this.reparacion = reparacion; // Información de reparación (si aplica)
  }

  // Método para actualizar el estado del teléfono
  actualizarEstado(estado) {
    this.estado = estado;
  }
}

// Definir la clase Reparacion
class Reparacion {
  constructor(diagnostico, autorizacion, abono, repuestos) {
    this.diagnostico = diagnostico;
    this.autorizacion = autorizacion;
    this.abono = abono;
    this.repuestos = repuestos;
  }
}

// Función para guardar datos en localStorage
function guardarDatos(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Función para obtener datos de localStorage
function obtenerDatos(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Ejemplo de uso:

// Crear un nuevo cliente
const nuevoCliente = new Cliente("Junior Escate", "70141396", "Calle rv 1604");

// Crear un nuevo teléfono
const nuevoTelefono = new Telefono("123456", "987654321", "nj", "d15", "En revisión", null);

// Crear una reparación para el teléfono
const nuevaReparacion = new Reparacion("Pantalla rota", true, 0.5, ["Pantalla nueva"]);

// Asignar la reparación al teléfono
nuevoTelefono.reparacion = nuevaReparacion;

// Guardar el cliente y el teléfono en localStorage
guardarDatos("cliente", nuevoCliente);
guardarDatos("telefono", nuevoTelefono);

// Obtener los datos del cliente y el teléfono desde localStorage
const clienteGuardado = obtenerDatos("cliente");
const telefonoGuardado = obtenerDatos("telefono");

console.log("Cliente guardado:", clienteGuardado);
console.log("Teléfono guardado:", telefonoGuardado);