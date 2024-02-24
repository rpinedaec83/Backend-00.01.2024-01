
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
    constructor(sistemaoperativo, marca, serie){
        this.sistemaoperativo = sistemaoperativo;
        this.marca = marca;
        this.abono = 0;
        this.autorizacion = false;
        this.diagnostico = "";
        this.reparacion = 0;
        this.estado = "En Espera";
        this.serie = serie;
    }
    
    imei(){
        let i = Math.floor(Math.random() * 5) + 1
        console.log(i);
        if(i == 5){
            return false;
        }
        else{
            return true;
        }
    }

    primerdiagnostico(descripcion, costoreparacion){
        console.log("Se realizo el primer diagnostico");
        this.diagnostico = descripcion;
        this.reparacion = costoreparacion;
    }

    abonado(abono){
        if(abono>= this.reparacion/2){
            return true;
        }
        else{
            return false;
        }
    }
    

    cambiarestado(estado){
        this.estado = estado;
    }
}

class repuesto{
    constructor(descripcion, precio){
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class reparacion{
    constructor(telefono){
        this.telefono = telefono;
        this.repuestos = [];
    }
    
    repuesto(repuesto){
        this.repuestos.push(repuesto);
        console.log("Se puso el repuesto " + repuesto.descripcion);
    }

    costo(){
        let costo = 0;
        for(let index = 0; index < this.repuestos.length; index++){
            costo += this.repuestos[index].precio;
        }
        return costo;
    }
}

let arrEmpleados = [];
let arrRepuestos = [];
let arrTelefonos = [];

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
            let rpto  = document.getElementById("repuesto").value;
            let precio = parseFloat(document.getElementById("precio").value);
            let rep = new repuesto(rpto, precio);
            arrRepuestos.push(rep);
            console.log(arrRepuestos);
            
            $tableRepuesto.bootstrapTable('load', arrRepuestos)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

var $tableTelefono = $('#tableTelefono');
$tableTelefono.bootstrapTable()
function agregarTelefono(){
    Swal.fire({
        title: "Agregar Telofono",
        html: `			
        <div class="form-group">
            <label for="name">Serie</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="serie"  placeholder="Ingresa Serie del Telefono"/>
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
            let serie  = document.getElementById("serie").value;
            let marca  = document.getElementById("marca").value;
            let sistemaope  = document.getElementById("sistemaope").value;
            let telefono = new celular(sistemaope, marca, serie);
            arrTelefonos.push(telefono);
            console.log(arrTelefonos)
            
            $tableTelefono.bootstrapTable('load', arrTelefonos)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}

/*let empleado_1= new empleado("Alvaro", ["Android", "Apple"]);
let celular_1 = new celular("Android", "Samsumg");
let rep_pantalla = new repuesto("Nueva Pantalla", 50);
let rep_bateria = new repuesto("Nueva Bateria", 50);
let rep_celular_1 = new reparacion(celular_1);

if(celular_1.imei()){
    console.log("REPARANDO");
    if(empleado_1.skill(celular_1.sistemaoperativo)){
        celular_1.primerdiagnostico("Pantalla Fallando", 100);
        if(celular_1.abonado(50)){
            console.log(celular_1.reparacion);
            console.log("Se abono y procedera a reparar");
            rep_celular_1.repuesto(rep_pantalla);
            let costofinal = celular_1.reparacion + rep_celular_1.costo();
            console.log(costofinal);
        }
        else{
            console.log("No se abono la cantidad necesaria");
        }
    }
    else{
        console.log("Llamaremos a otro empleado");
    }
}
else{
    console.log("IMIE BLOQUEADO");
}*/