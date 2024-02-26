class Client {
    constructor(nombres, DNI, tel,IMEI) {
        this.nombres = nombres;
        this.DNI = DNI;
        this.tel = tel;
        this.IMEI = IMEI;
    }
}
class Ticket{
    constructor(idTicket,cliente,employ,status,adelanto){
        this.idTicket = idTicket;
        this.cliente = cliente;
        this.employ = employ;
        this.status = status;
        this.adelanto = adelanto;
    }
}
class Phone {
    constructor(model, IMEI) {
        this.model = model;
        this.IMEI = IMEI;
    }
}
class Employ{
    constructor(name,skills){
        this.name = name;
        this.skills = skills;
    }
}
class Company {
    constructor(name, email) {
        this.name = name;
    }
}

let arrEmploy = [];
let arrCliente = [];
let arrTelefono = [];
let arrTicket = [];


var $tableCliente = $('#tableCliente');
$tableCliente.bootstrapTable()

var $tableTicket = $('#tableTicket');
$tableTicket.bootstrapTable()

var $tableEmploy = $('#tableEmploy');
$tableEmploy.bootstrapTable()

function crearTicket(){
    console.log(arrCliente);
    console.log(arrEmploy);
    Swal.fire({
        title: "Agregar Ticket",
        html: `			
        <div class="form-group">
            <label for="DNI">DNI del cliente</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="DNI" id="DNI"  placeholder="Ingresa el DNI del cliente"/>
            </div>
        </div>  
        <div class="form-group">
        <label for="adelanto">Adelanto</label>
            <div class="input-group">
            
            <input type="text" class="form-control" name="adelanto" id="adelanto"  placeholder="Ingresa Si/No"/>
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
            let idTicket = crearNroID();
            let DNI = document.getElementById("DNI").value;
            let cliente = buscarCliente(DNI);
            let nomclie = cliente ? cliente.nombres : "Cliente no encontrado";
            let employ = cliente ? buscarEmploy(cliente.tel) : null;
            let nomemploy = employ ? employ.name : "Empleado no encontrado";
            let adelanto = document.getElementById("adelanto").value;
            let status = definirStatus(adelanto);
            let objTicket = new Ticket(idTicket, nomclie, nomemploy, status, adelanto);
            arrTicket.push(objTicket);
            console.log(arrTicket);
            $tableTicket.bootstrapTable('append', objTicket);
            Swal.fire("Guardado!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardaron", "", "info");
        }
        
      });
}
function rechazarIMEI(){
        const numeroAleatorio = Math.random();
    
        if (numeroAleatorio < 0.5) {
            return "Sí";
        } else {
            return "No";
        }
}
function definirStatus(adelanto){
    if(rechazarIMEI()=="No"){
    if(adelanto== "Si"){
        return "Programado";
    }else{
        return "RECHAZADO";
    }
    }else{
        return "RECHAZADO POR IMEI ROBADO"
    }
}
function buscarEmploy(sistema){
    for(let i=0;i<arrEmploy.length;i++){
        if (sistema === arrEmploy[i].skills){
            return arrEmploy[i];
        }
    }
}
function buscarCliente(DNI){
    console.log("Buscando cliente con DNI:", DNI);
    for(let i = 0; i < arrCliente.length; i++){
        console.log("Comparando con DNI en arrCliente:", arrCliente[i].DNI);
        if (DNI === arrCliente[i].DNI){
            console.log("Cliente encontrado:", arrCliente[i]);
            return arrCliente[i];
        }
    }
    console.log("Cliente no encontrado");
    return null;
}
function crearNroID(){
        const id = Math.floor(10000 + Math.random() * 90000);
    
    
        return id.toString();
}
function crearCliente(){
    Swal.fire({
        title: "Agregar Cliente",
        html: `			
        <div class="form-group">
            <label for="nombres">Nombre y Apellido</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="nombres" id="nombres"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>
        <div class="form-group">
            <label for="DNI">DNI</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="DNI" id="DNI"  placeholder="Ingresa el DNI"/>
            </div>
        </div>

        <div class="form-group">
            <label for="username">tel</label>
                <div class="input-group">
                   
                    <input type="text" class="form-control" id="tel" name="tel" placeholder="Ingrese la marca del teléfono"/>
            </div>
        </div>

        <div class="form-group">
        <label for="IMEI">IMEI</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="IMEI" name="IMEI" placeholder="Ingrese el IMEI del equipo"/>
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
            let nombres  = document.getElementById("nombres").value;
            let DNI  = document.getElementById("DNI").value;
            let tel  = document.getElementById("tel").value;
            let IMEI  = document.getElementById("IMEI").value;
            let objTel = new Phone(tel,IMEI);
            let objClient = new Client(nombres,DNI,objTel.model,objTel.IMEI);
            arrCliente.push(objClient);
            console.log(arrCliente);
            
            $tableCliente.bootstrapTable('append', objClient)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
function crearEmpleado(){
    Swal.fire({
        title: "Agregar Empleado",
        html: `			
        <div class="form-group">
            <label for="name">Nombre y Apellido</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="name" id="name"  placeholder="Ingresa los Nombres"/>
            </div>
        </div>
        <div class="form-group">
            <label for="skills">Skills</label>
                <div class="input-group">
                
                <input type="text" class="form-control" name="skills" id="skills"  placeholder="Ingresa su especialidad"/>
            </div>
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
            let name  = document.getElementById("name").value;
            let skills  = document.getElementById("skills").value;
            let objEmploy = new Employ(name,skills);
            arrEmploy.push(objEmploy);
            console.log(arrEmploy);
            
            $tableEmploy.bootstrapTable('append', objEmploy)
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
