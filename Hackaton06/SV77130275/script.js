//creamos la clase de telefono
class Telefono {
    constructor(numeroSerie, imei, marca, modelo, estado, diagnostico, reparacion) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
      this.estado = estado;
      this.diagnostico = diagnostico;
      this.reparacion = reparacion;
    }
  }


  //creamos la funcion para recibir datos
function llenarDatosTelefono() {

  let numeroSerie = document.getElementById('numeroSerie').value;
  let imei = document.getElementById('imei').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let estado = document.getElementById('estado').value;
  let diagnostico = document.getElementById('diagnostico').value;
  let reparacion = document.getElementById('reparacion').value;

  let telefono = new Telefono(numeroSerie, imei, marca, modelo, estado, diagnostico, reparacion);

  document.getElementById('numeroSerie').value = "";
  document.getElementById('imei').value = "";
  document.getElementById('marca').value = "";
  document.getElementById('modelo').value = "";
  document.getElementById('estado').value = "";
  document.getElementById('diagnostico').value = "";
  document.getElementById('reparacion').value = "";

  mostrarDatosTelefono(telefono);
}

//creamos la funcion para mostrar datos

function mostrarDatosTelefono(telefono) {

  let tabla = document.getElementById('tablaTelefono');
  let fila = tabla.insertRow();

  let celdaNumeroSerie = fila.insertCell();
  celdaNumeroSerie.innerHTML = telefono.numeroSerie;

  let celdaImei = fila.insertCell();
  celdaImei.innerHTML = telefono.imei;

  let celdaMarca = fila.insertCell();
  celdaMarca.innerHTML = telefono.marca;

  let celdaModelo = fila.insertCell();
  celdaModelo.innerHTML = telefono.modelo;

  let celdaEstado = fila.insertCell();
  celdaEstado.innerHTML = telefono.estado;

  let celdaDiagnostico = fila.insertCell();
  celdaDiagnostico.innerHTML = telefono.diagnostico;

  let celdaReparacion = fila.insertCell();
  celdaReparacion.innerHTML = telefono.reparacion;
}