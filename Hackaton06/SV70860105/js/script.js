class cliente{
    constructor(nombre, apellido, nroIdentificacion, nroTelefono, direccion, dispositivo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroIdentificacion = nroIdentificacion;
        this.nroTelefono = nroTelefono;
        this.direccion = direccion;

        this.dispositivo = dispositivo;
    }
}

class empleado{
    constructor(dni, nombre, skills){
        this.nombre = nombre;
        this.dni = dni;
        this.skills = skills;
        
    }
    skill(marca){
        return this.skills.includes(marca);
    }
}

class Administrador {
    constructor(nombre, apellido, nroIdentificacion, codTienda) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroIdentificacion = nroIdentificacion;
        this.codTienda = codTienda;
    }

    recibirDispositivo() {
        let imei = prompt("Ingresa el IMEI");
        if(Math.random() < 0.5){
            return alert("ESTE NUMERO DE IMEI ESTA REPORTADO");
        }
        else{
            let sistemaoperativo = prompt("Ingresa el Sistema Operativo");
            let marca = prompt("Ingrese marca del Dispositivo");
            let descripcion = prompt("En que esta fallando el Dispositivo?")
            let objCelular = new celular(imei, sistemaoperativo, marca, descripcion);
            let nombre = prompt("Escribe el nombre del cliente");
            let apellido = prompt("Escribe el apellido del clente");
            let nroIdentificacion = prompt("Escribe el DNI del cliente");
            let nroTelefono = prompt("Escribe el numero de telefono del cliente")
            let direccion = prompt("Escribe la direccion del cleinte");
            let objCliente = new cliente(nombre, apellido, nroIdentificacion, nroTelefono, direccion, objCelular);
            arrClientes.push(objCliente);
        }
    }
}

class celular{
    constructor(imei, sistemaoperativo, marca, descripcion){
        this.imei = imei;
        this.sistemaoperativo = sistemaoperativo;
        this.marca = marca;
        this.abono = 0;
        this.descripcion = descripcion;
        this.diagnostico = "";
        this.reparacion = 0;
        this.estado = "En Espera";
        this.costoRepuestos = 0;
        this.costoFinal = 0;
        this.repuestos = [];
    }
    
    iniciarDiagnostico(){
        this.diagnostico = prompt("Cual es el diagnostico del dispositivo");
        this.estado = "En Diagnostico";
    }

    abonado(abono){
        if(abono>= this.reparacion/2){
            this.autorizacion = true;
            return true;
        }
        else{
            return false;
        }
    }
    
    cambiarEstado(estado){
        this.estado = estado;
    }

    ponerRepuesto(repuesto){
        this.repuestos.push(repuesto);
    }

    precioRepuestos(){
        let costo = 0;
        for(let index = 0; index < this.repuestos.length; index++){
            costo += this.repuestos[index].precio;
        }
        this.costoRepuestos = costo;
    }

    precioFinal(){
        this.costoFinal = this.costoRepuestos + this.reparacion;
    }
}

class repuesto{
    constructor(descripcion, precio){
        this.descripcion = descripcion;
        this.precio = precio;
    }
}


let arrClientes = [];
let arrEmpleados = [];
let arrRepuestos = [];
let arrTelefonos = [];




//Hecho
var $tableEmpleado = $('#tableEmpleado');
$tableEmpleado.bootstrapTable()
function agregarEmpleado(){ 
    Swal.fire({
        title: "Agregar Empleado",
        html: `			
        <div class="form-group">
            <label for="name">DNI</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="dni"  placeholder="Ingresa DNI del Empleado"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Nombre</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="nombre"  placeholder="Ingrese nombre del empleado"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Skills</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="skills"  placeholder="Ingresa Skills(-)"/>
            </div>
        </div>


        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        
        if (result.isConfirmed) {
            let dni  = document.getElementById("dni").value;
            let nombre  = document.getElementById("nombre").value;
            let skills = document.getElementById("skills").value.split("-");
            let emp = new empleado(dni, nombre, skills);
            arrEmpleados.push(emp);
            
            guardarData("empleados", arrEmpleados);

            $tableEmpleado.bootstrapTable('load', arrEmpleados)

            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

var $tableRepuesto = $('#tableRepuesto');
$tableRepuesto.bootstrapTable()
function crearRepuesto(){
    Swal.fire({
        title: "Crear Repuesto",
        html: `			
        <div class="form-group">
            <label for="name">Descripcion</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="repuesto"  placeholder="Ingresa Nombre del Repuesto"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Precio</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="precio"  placeholder="Ingresar Precio"/>
            </div>
        </div>

        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        
        if (result.isConfirmed) {
            let descripcion  = document.getElementById("repuesto").value;
            let precio = parseFloat(document.getElementById("precio").value);
            let newrepuesto = new repuesto(descripcion, precio)
            
            arrRepuestos.push(newrepuesto);

            guardarData("repuestos", arrRepuestos);
            
            $tableRepuesto.bootstrapTable('load', arrRepuestos)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
//Hecho



var $tableTelefono = $('#tableTelefono');
$tableTelefono.bootstrapTable()
function agregarTelefono(){
    adm01.recibirDispositivo();
    guardarData("clientes", arrClientes);
    arrTelefonos = [];
    arrClientes.forEach(element => {
        arrTelefonos.push(element.dispositivo);
    });
    
    $tableTelefono.bootstrapTable('load', arrTelefonos);

}








function init() {
    let jsonEmpleados = null;
    let localDataEmp = localStorage.getItem("empleados");
    if (localDataEmp !== null && localDataEmp !== "null") {
        jsonEmpleados = JSON.parse(localDataEmp);
    }
    else {
        jsonEmpleados = [];
    }
    jsonEmpleados.forEach(element => {
        arrEmpleados.push(new empleado(
            element.dni,
            element.nombre,
            element.skills
            ))
    });
    $tableEmpleado.bootstrapTable('load', arrEmpleados);

    let jsonRepuestos = null;
    let localDataRep = localStorage.getItem("repuestos");
    if (localDataRep !== null && localDataRep !== "null") {
        jsonRepuestos = JSON.parse(localDataRep);
    }
    else {
        jsonRepuestos = [];
    }
    jsonRepuestos.forEach(element => {
        arrRepuestos.push(new repuesto(
            element.descripcion,
            element.precio
        ));
    });   

    $tableRepuesto.bootstrapTable('load', arrRepuestos);

    let jsonClientes = null;
    let localDataClientes = localStorage.getItem("clientes");
    if (localDataClientes!== null && localDataClientes !== "null") {
        jsonClientes = JSON.parse(localDataClientes);
    }
    else {
        jsonClientes = [];
    }
    jsonClientes.forEach(element => {
        arrClientes.push(element);
        arrTelefonos.push(element.dispositivo
        );
    });   

    $tableTelefono.bootstrapTable('load', arrTelefonos);
    
}

// evento cuando se termina de cargar la pagina web
document.addEventListener("DOMContentLoaded", (event) => {
    init();
});

function guardarData(nombre, data){
    localStorage.setItem(nombre, JSON.stringify(data));
}

$tableTelefono.on('click-row.bs.table', function (row, $element, field) {

    alert("Click");
    /*console.log($element);
    if (confirm(`Desea modificar el estado del dispositivo ${$element.iMei}???`)) {

        let objDispositivo = buscarDispositivo($element.iMei);
        if (objDispositivo.revisarReporteRobo()) {
            alert("El dispositivo esta reportado como robado")
        } else {
            console.log("No esta robado")
            objDispositivo.recibirPago();
            objDispositivo.iniciarDiagnostico()

        }
    }
    $table.bootstrapTable('load', arrDispositivos)*/
})

let adm01 = new Administrador("Adrian", "Prado", 70860105, "T1");