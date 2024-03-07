class Device{
    constructor(marca, modelo, tipo, imei, sistemaOperativo,diagnostico){
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.imei = imei;
        this.sistemaOperativo = sistemaOperativo;
        this.diagnostico = diagnostico;
    }
}

class Diagnosis{
    constructor (id, descripcion, technician, estado){        
        this.id = id;
        this.descripcion = descripcion;
        this.technician = technician;
        this.estado = estado;
    }
}

class Person {
    constructor(nombres, apellidos, fechaNacimiento, sexo){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.direccion = direccion;
    }
}

class Technician extends Person {
    constructor (nombres, apellidos, fechaNacimiento, sexo){
        super(nombres,apellidos,fechaNacimiento, sexo, codigo);
        this.codigo = codigo;
    }    
}

class Skills {
    constructor(descripcion, nivel){
        this.descripcion = descripcion;
        this.nivel = nivel;
    }
}

let arrDevices = [];
var $tableDevice = $('#tableDevice');
$tableDevice.bootstrapTable();

function registrarDevice(){
    Swal.fire({
        title: "Registre el Dispositivo",
        html: `			
        <div class="form-group">
            <label for="marca">Marca</label>
            <div class="input-group">                
                <input type="text" class="form-control" name="marca" id="marca" placeholder="Ingrese la Marca"/>
            </div>
        </div>
        <div class="form-group">
            <label for="modelo">Modelo</label>
            <div class="input-group">                
                <input type="text" class="form-control" name="modelo" id="modelo" placeholder="Ingrese el Modelo"/>
            </div>
        </div>
        <div class="form-group">
        <label for="tipo">Tipo</label>
            <div class="input-group">
                <select name="tipo" id="tipo">
                    <option value="smartphone" selected>Smartphone</option>
                    <option value="tablet">Tablet</option>                
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="imei">Imei</label>
            <div class="input-group">                
                <input type="text" class="form-control" name="imei" id="imei"  placeholder="Ingrese el IMEI"/>
            </div>
        </div>
        <div class="form-group">
        <label for="sistemaOperativo">Sistema Operativo</label>
            <div class="input-group">
                <select name="sistemaOperativo" id="sistemaOperativo">
                    <option value="android" selected>Android</option>
                    <option value="ios">iOS</option>                
                </select>
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
            let marca  = document.getElementById("marca").value;
            console.log("marca" + marca);
            let modelo  = document.getElementById("modelo").value;
            let tipo  = document.getElementById("tipo").value;
            let imei  = document.getElementById("imei").value;
            let sistemaOperativo  = document.getElementById("sistemaOperativo").value;      
            let diagnostico = '<button type="button" class="btn btn-primary" onclick="registrarDiagnosis()">' + marca + ' - ' + modelo + '</button>';
            console.log("diagnostico" + diagnostico);
            let objDevice = new Device(marca, modelo, tipo, imei, sistemaOperativo, diagnostico);
            arrDevices.push(objDevice);
            console.log(arrDevices);                
            $tableDevice.bootstrapTable('load', arrDevices)
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
}

let arrDiagnosis = [];
var $tableDiagnosis = $('#tableDiagnosis');
$tableDiagnosis.bootstrapTable();

function registrarDiagnosis(){
    Swal.fire({
        title: "Registre el Diagnostico",
        html: `			
        <div class="form-group">
            <label for="id">Id</label>
            <div class="input-group">                
                <input type="text" class="form-control" name="id" id="id"/>
            </div>
        </div>
        <div class="form-group">
            <label for="marca">Descripcion</label>
            <div class="input-group">                
                <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="Ingrese la Descripcion"/>
            </div>
        </div>
        <div class="form-group">
            <label for="modelo">Técnico asignado</label>
            <div class="input-group">                
                <select name="technician" id="technician">
                    <option value="1">Mario Vargas</option>
                    <option value="2">Gabriel Garcia</option>                
                    <option value="3">Blanca Varela</option>                
                </select>
            </div>
        </div>
        <div class="form-group">
        <label for="tipo">Estado</label>
            <div class="input-group">
                <select name="estado" id="estado">
                    <option value="registrado" selected>Registrado</option>
                    <option value="rechazado">Rechazado</option>          
                    <option value="enReparacion">En reparación</option>          
                    <option value="entregado">Entregado</option>               
                </select>
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
            let id  = document.getElementById("id").value;
            let descripcion  = document.getElementById("descripcion").value;
            let technician  = document.getElementById("technician").value;
            let estado  = document.getElementById("estado").value;
    
            let objDiagnosis = new Diagnosis(id, descripcion, technician, estado);
            arrDiagnosis.push(objDiagnosis);
            console.log(arrDiagnosis);                
            $tableDiagnosis.bootstrapTable('load', arrDiagnosis)
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
}