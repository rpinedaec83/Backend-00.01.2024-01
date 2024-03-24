//creamos la clase Dispositivo
class Dispositivo {
  constructor(iMei, nroSerie) {
      this.iMei = iMei;
      this.nroSerie = nroSerie;
      this.revision = "No revisado";
      this.diagnostico = "";
      this.pago = false;
      this.valorReparacion = 0;
      this.autorizacion = true;
      this.repuestos = null;
      this.estado = "";
  }
  toJson() {
      return JSON.stringify({ iMei: this.iMei, nroSerie: this.nroSerie });
  }
  revisarReporteRobo() {
      //retorna aleatoriamente si esta robado o no
      return Math.random() > 0.5 ? true : false;
  }
  iniciarDiagnostico() {
      // si el pago y la autorizacion es correcta procede al diagnostico
      alert("Estamos realizando un diagnóstico.");
      this.estado = "En Diagnostico";
      let arrDiagnostico = ["Pantalla malograda", "Batería Malograda", "Celular sobrecalentado", "Celular Lentos"];
      let elementoDiagnostico = Math.floor(Math.random() * 4);
      this.diagnostico = arrDiagnostico[elementoDiagnostico];
      alert("El diagnóstico es el siguiente "+ this.diagnostico);
      console.log(this.diagnostico);
      console.log(elementoDiagnostico);
  }
  verificarRevision(){
    this.revision = "Revisado";
    this.estado = "Reparado"; 
  }
  reparacion(precioFinal, repuestos){
    this.valorReparacion = precioFinal;
    this.repuestos = repuestos;
  }
  anunciarRobo() {
    this.diagnostico = "Reportado";
    this.estado = "Reportado";
  }
  recibirPago() {
      let pago = prompt("¿Desea abonar el 50% para la reparación?");
      if(pago == "Si"){
        this.pago = "Pagado";
        this.autorizacion = "Autorizado";
      } else {
        this.pago = false;
        this.estado = "No reparado";
        this.revision = "Revisado";
        this.autorizacion = "No autorizado";
      }
      return this.pago;
  }
}
// definimos la clase persona
class Persona {
  constructor(nombre, apellido, nroIdentificacion) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.nroIdentificacion = nroIdentificacion;
  }
}

// definimos la clase cliente a partir de persona
class Cliente extends Persona {
  constructor(nombre, apellido, nroIdentificacion, nroTelefono, direccion, dispositivo) {
      super(nombre, apellido, nroIdentificacion);
      this.nroTelefono = nroTelefono;
      this.direccion = direccion;

      this.dispositivo = dispositivo;
  }
  toJson() {
      return JSON.stringify({
          nombre: this.nombre,
          apellido: this.apellido,
          nroIdentificacion: this.nroIdentificacion,
          nroTelefono: this.nroTelefono,
          direccion: this.direccion
      })
  }
  // no implementado aun pero confirma la autorizacion del clente para la reparacion
  autorizar(telefono) {
      telefono.autorizacion = confirm("Auroriza la reparacion del Telefono");
  }

}


// definimos la clase tecnico a partir de persona
class Tecnico extends Persona {
  constructor(nombre, apellido, nroIdentificacion, skills, precioTecnico) {
      super(nombre, apellido, nroIdentificacion);
      this.skills = skills;
      this.precioTecnico = precioTecnico;
  }
  toJson() {
      return JSON.stringify({
          nombre: this.nombre,
          apellido: this.apellido,
          nroIdentificacion: this.nroIdentificacion,
          skills: this.skills,
          precioTecnico : this.precioTecnico,
      })
  }
}



// definimos la clase administrador a partir de persona
class Administrador extends Persona {
  constructor(nombre, apellido, nroIdentificacion, tienda) {
      super(nombre, apellido, nroIdentificacion);
      this.tienda = tienda;
  }
  toJson() {
      return JSON.stringify({
          nombre: this.nombre,
          apellido: this.apellido,
          nroIdentificacion: this.nroIdentificacion,
          tienda: this.tienda
      })
  }
  // recibe el dispositivo y crea al clente
  recibirDispositivo() {
      let imei = prompt("Ingresa el IMEI");
      let nroSerie = prompt("Ingresa el numero de Serie");
      let objDispositivo = new Dispositivo(imei, nroSerie);
      let nombre = prompt("Escribe el nombre del cliente");
      let apellido = prompt("Escribe el apellido del cliente");
      let nroIdentificacion = prompt("Escribe el DNI del cliente");
      let nroTelefono = prompt("Escribe el numero de telefono del cliente");
      let direccion = prompt("Escribe la direccion del cliente");
      let cliente = new Cliente(nombre, apellido, nroIdentificacion, nroTelefono, direccion, objDispositivo);
      arrCliente.push(cliente);
  }
}

let arrDispositivos = [];
let arrCliente = [];
let arrReportados = [];
let arrTecnicos = [];

let tecnico1 = new Tecnico("Juan Francisco","Perez Maldonado","17154545","Huawei",500);
let tecnico2 = new Tecnico("Isabel Susana","Sanchez Herrera","45369846","Iphone",500);
let tecnico3 = new Tecnico("José Pablo","Prado Marquez","36134965","Xiaomi",420);
let tecnico4 = new Tecnico("Rosa Maria","Gonzales Torres","36492315","Samsung",400);
let tecnico5 = new Tecnico("Alfonso Carlos","Suarez Hernandez","84313365","Motorolla",400);

arrTecnicos.push(tecnico1, tecnico2, tecnico3, tecnico4, tecnico5);


let admin = new Administrador("Henry", "Gómez", "CE 016610291", "Principal")

// eventos de los botones
document.getElementById("recibirDispositivo").addEventListener("click", recibirDispositivo);
document.getElementById("borrarData").addEventListener("click", borrarData);


// callback del evento del boton recibirDispositivo
function recibirDispositivo() {
  admin.recibirDispositivo();
  //guarda la data en el localstorage
  guardarData("cliente", arrCliente);
  console.log(arrCliente)
  arrCliente.forEach(element => {
      arrDispositivos.push(element.dispositivo)
  });
  // cargamos la info en la tabla
  $table.bootstrapTable('load', arrDispositivos)
}

function guardarData(nombre, data) {
  //cargar la info en el localstorage
  localStorage.setItem(nombre, JSON.stringify(data));
}

function borrarData() {

  // borramos la data del localstorage
  guardarData("cliente", null);
  arrCliente = [];
  arrDispositivos = [];

  $table.bootstrapTable('load', arrDispositivos)
}

// inicializar los objetos desde la informacion que esta en el localstorage
function init() {
  if (arrCliente.length === 0 && arrDispositivos.length === 0) {
    let jsonCliente = null;
    let localData = localStorage.getItem("cliente");
    console.log(localData);
    if (localData !== null && localData !== "null") {
        jsonCliente = JSON.parse(localData);
    }
    else {
        jsonCliente = [];
    }

    jsonCliente.forEach(element => {
        let arrJsonDispositivo = element.dispositivo;
        console.log(arrJsonDispositivo)
        objDispositivo = new Dispositivo(arrJsonDispositivo.iMei, arrJsonDispositivo.nroSerie)
        arrCliente.push(new Cliente(
            element.nombre,
            element.apellido,
            element.nroIdentificacion,
            element.nroTelefono,
            element.direccion,
            objDispositivo))
    });


    arrCliente.forEach(element => {
        arrDispositivos.push(element.dispositivo)
    });
    $table.bootstrapTable({ data: arrDispositivos })
  }
}

var $table = $('#tblDispositivos');
var $table1 = $('#tblReportados');

// evento cuando se termina de cargar la pagina web
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  init();
});

//evento cuando hacemos click en una fila de la tabla
$table.on('click-row.bs.table', async function (row, $element, field) {
  // Deshabilitar el evento de clic en la fila
  $($element).off('click');

  console.log($element);
  if (confirm(`Desea modificar el estado del dispositivo ${$element.iMei}???`)) {
      let objDispositivo = buscarDispositivo($element.iMei);
      if (objDispositivo.revisarReporteRobo()) {
          objDispositivo.anunciarRobo();
          // Una función que agregue el registro a una tabla de dispositivos reportados.
          alert("El dispositivo está reportado como robado");
          
      } else {
          console.log("No está robado");
          objDispositivo.iniciarDiagnostico();
          //objDispositivo.recibirPago();
          if(objDispositivo.recibirPago()){
              const precioTecnico = await seleccionarTecnico(); // Esperamos a que la función seleccionarTecnico resuelva la promesa y obtenemos el precio del técnico
              console.log("Precio del técnico seleccionado:", precioTecnico);
              alert("Precio del técnico seleccionado:"+ precioTecnico);
              let {repuestosSeleccionados, sumaPrecios} = seleccionarRepuestos();
              alert("Se selecciono los siguientes repuestos " + repuestosSeleccionados + " cuyo precio total es de " + sumaPrecios);
              
              if (sumaPrecios > 0){
                  objDispositivo.verificarRevision();
                  objDispositivo.reparacion(sumaPrecios + precioTecnico, repuestosSeleccionados);
                  alert("El precio total de la reparación sería de "+ (sumaPrecios + precioTecnico));
              } else {
              }
          }
      }
  }
  $table.bootstrapTable('load', arrDispositivos);
});

// busca un dispositivo desde el array

function buscarDispositivo(imei) {

  for (let index = 0; index < arrDispositivos.length; index++) {
      const element = arrDispositivos[index];
      if (element.iMei === imei) {
          return element;
      }

  }
}

function repararDispositivo (){

}

let precioTecnicoSeleccionado = 0; // Variable para almacenar el precio del técnico seleccionado

function seleccionarTecnico() {
  return new Promise((resolve, reject) => { // Utilizamos una promesa para manejar la asincronía de SweetAlert2
    Swal.fire({
      title: "Seleccione el técnico de su preferencia.",
      html: `			
      <div id="container">
          <select id="ejercicioSelector">
              <option value="Juan Francisco">SELECCIONAR</option>
              <option value="Juan Francisco">Juan Francisco</option>
              <option value="Isabel Susana">Isabel Susana</option>
              <option value="José Pablo">José Pablo</option>
              <option value="Rosa Maria">Rosa Maria</option>
              <option value="Alfonso Carlos">Alfonso Carlos</option>
          </select>
      </div>
      <div id="descripcionContainer"></div>
      `,
      didOpen: () => {
        document.getElementById("ejercicioSelector").addEventListener("change", () => {
          const tecnicoSeleccionado = document.getElementById("ejercicioSelector").value;
          const precio = descripcion(tecnicoSeleccionado); // Llamar a la función descripcion y obtener el precio
          console.log("Precio del técnico seleccionado:", precio);
          resolve(precio); // Resolvemos la promesa con el precio del técnico seleccionado
        });
      }
    });
  });
}


function descripcion(tecnico) {
  let precio = 0;

  // Obtener el precio del técnico seleccionado
  switch (tecnico) {
    case "Juan Francisco":
      precio = 500;
      break;
    case "Isabel Susana":
      precio = 500;
      break;
    case "José Pablo":
      precio = 250;
      break;
    case "Rosa Maria":
      precio = 125;
      break;
    case "Alfonso Carlos":
      precio = 125;
      break;
    default:
      console.log("Seleccione un técnico válido");
  }
  
  return precio;
}

const preciosRepuestos = {
  "Pantalla": 100,
  "Batería": 50,
  "Memoria": 30,
  "Entrada": 20,
  "Flex": 40
};

// Array de repuestos
const arrRepuestos = ["Pantalla", "Batería", "Memoria", "Entrada", "Flex"];

// Función para seleccionar aleatoriamente dos repuestos y calcular la suma de sus precios
function seleccionarRepuestos() {
  // Array para almacenar los repuestos seleccionados
  const repuestosSeleccionados = [];
  // Variable para almacenar la suma de los precios
  let sumaPrecios = 0;

  // Seleccionar dos repuestos aleatoriamente
  for (let i = 0; i < 2; i++) {
    // Generar un índice aleatorio dentro del rango del array arrRepuestos
    const indiceAleatorio = Math.floor(Math.random() * arrRepuestos.length);
    // Obtener el repuesto correspondiente al índice aleatorio
    const repuestoSeleccionado = arrRepuestos.splice(indiceAleatorio, 1)[0]; // Elimina el repuesto del array original
    // Guardar el repuesto seleccionado en el array
    repuestosSeleccionados.push(repuestoSeleccionado);
    // Sumar el precio del repuesto seleccionado al total
    sumaPrecios += preciosRepuestos[repuestoSeleccionado];
}

  // Retornar los repuestos seleccionados y la suma de sus precios
  return { repuestosSeleccionados, sumaPrecios };
}