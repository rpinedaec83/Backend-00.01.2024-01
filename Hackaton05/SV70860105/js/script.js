
class empleado{
    constructor(nombre, skills){
        this.nombre = nombre;
        this.skills = skills;
    }

    skill(marca){
        return this.skills.includes(marca);
    }
}

class celular{
    constructor(imei, sistemaoperativo, marca, serie){
        this.imei = imei;
        this.sistemaoperativo = sistemaoperativo;
        this.marca = marca;
        this.abono = 0;
        this.autorizacion = false;
        this.descripcion = "";
        this.reparacion = 0;
        this.estado = "En Espera";
        this.serie = serie;
        this.costoRepuestos = 0;
        this.costoFinal = 0;
        this.repuestos = [];
    }
    
    primerdiagnostico(descripcion, costoreparacion){
        this.descripcion = descripcion;
        this.reparacion = costoreparacion;
        this.abono = this.reparacion/2;
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



let arrEmpleados = [];
let arrRepuestos = [];
let arrTelefonos = [];
let arrDiagnosticos = [];
let arrTelefonosReparados = [];

var $tableEmpleado = $('#tableEmpleado');
$tableEmpleado.bootstrapTable()
function agregarEmpleado(){ 
    Swal.fire({
        title: "Agregar Empleado",
        html: `			
        <div class="form-group">
            <label for="name">Nombres</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="nombre"  placeholder="Ingresa Nombre del Empleado"/>
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
            let nombre  = document.getElementById("nombre").value;
            let skills = document.getElementById("skills").value.split("-");
            let emp = new empleado(nombre, skills);
            arrEmpleados.push(emp);
            console.log(arrEmpleados)
            
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
            console.log(newrepuesto);
            arrRepuestos.push(newrepuesto);
            
            $tableRepuesto.bootstrapTable('load', arrRepuestos)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}


var $tableDiagnostico = $('#tableDiagnostico');
$tableDiagnostico.bootstrapTable()


function agregarTelefono(){
    Swal.fire({
        title: "Agregar Telofono",
        html: `			
        <div class="form-group">
            <label for="name">Imei</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="imei"  placeholder="Ingresa Imei del Telefono"/>
            </div>
        </div>

        <div class="form-group">
            <label for="name">Modelo</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="modelo"  placeholder="Ingresa Modelo del Telefono"/>
            </div>
        </div>
        <div class="form-group">
            <label for="name">Marca</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="marca"  placeholder="Ingresa Marca del Telefono"/>
            </div>
        </div>

        <div class="form-group">
            <label for="email">Sistema Operativo</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="sistemaope" name="descripcion" placeholder="Ingrese Sistema Operativo"/>
            </div>
        </div>


        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let imei = document.getElementById("imei").value;
            let serie  = document.getElementById("modelo").value;
            let marca  = document.getElementById("marca").value;
            let sistemaope  = document.getElementById("sistemaope").value;
            let telefono = new celular(imei, sistemaope, marca, serie);

            for(let index = 0; index < arrTelefonos.length; index++){
                if(imei == arrTelefonos[index].imei){
                    return alert("TELEFONO BLOQUEADO");
                }
            }
            
            arrTelefonos.push(telefono);

            telefono.primerdiagnostico("No enciende la pantalla", 100);
            arrDiagnosticos.push(telefono);

            
            $tableDiagnostico.bootstrapTable('load', arrDiagnosticos);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

var $tableTelefonoReparado = $('#tableTelefonoReparado');
$tableTelefonoReparado.bootstrapTable()

function repararTelefono(){
    let telefono = arrDiagnosticos.shift();
    let abono = parseInt(prompt("Deposite el Abono Inicial : "));

    if(telefono.abonado(abono)){
    Swal.fire({
        title: "Reparacion",
        html: `			
        <div class="form-group">
            <label for="name">Repuesto</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="repuesto"  placeholder="Ingresa Nombre del Repuesto a Utilizar"/>
            </div>
        </div>

        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Salir`
      }).then((result) => {
        
        if (result.isConfirmed) {
            let rpto  = arrRepuestos.find((r) => r.descripcion === document.getElementById("repuesto").value);
            telefono.ponerRepuesto(rpto);
            telefono.cambiarEstado("Cambio de " + rpto.descripcion);
            telefono.precioRepuestos();
            telefono.precioFinal();


            console.log(arrRepuestos);
            console.log(rpto);
            arrTelefonosReparados.push(telefono);   

            $tableTelefonoReparado.bootstrapTable('load', arrTelefonosReparados);
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
    else{
        arrDiagnosticos.unshift(telefono);
        alert("NO SE ABONO EL MONTO CORRESPONDIENTE");
    }
}


