function cargarDatosDesdeLocalStorage() {
    let storedClientes = localStorage.getItem('arrCliente');
    if (storedClientes) {
        arrCliente = JSON.parse(storedClientes);
        let datosClientes = arrCliente.map(cliente => ({
            nombres: cliente.nombres,
            DNI: cliente.DNI,
            tel: cliente.tel.model 
        }));
        $tableCliente.bootstrapTable('load', datosClientes);
    }
    let storedEmploys = localStorage.getItem('arrEmploy');
    if (storedEmploys) {
        arrEmploy = JSON.parse(storedEmploys);
        $tableEmploy.bootstrapTable('load', arrEmploy);
    }
    let storedTickets = localStorage.getItem('arrTicket');
    if (storedTickets) {
        arrTicket = JSON.parse(storedTickets);
        let datosTicket = arrTicket.map((ticket, index) => ({
            idTicket: ticket.idTicket,
            Cliente: ticket.cliente.nombres,
            nomemploy: ticket.employ.name,
            status: ticket.status,
            adelanto: ticket.adelanto,
            dx: ticket.dx,
            index: index
        }));
        $tableTicket.bootstrapTable('load', datosTicket);
    }
    
    

}
window.onload = function() {
    cargarDatosDesdeLocalStorage();
};
class Client {
    constructor(nombres, DNI, tel) {
        this.nombres = nombres;
        this.DNI = DNI;
        this.tel = tel;
    }
}
class Ticket{
    constructor(idTicket,cliente,employ,status,adelanto,dx){
        this.idTicket = idTicket;
        this.cliente = cliente;
        this.employ = employ;
        this.status = status;
        this.adelanto = adelanto;
        this.dx = dx;
    }
}
class Phone {
    constructor(model,sistema,IMEI,pantalla,tactil,bateria,desbloqueo) {
        this.model = model;
        this.sistema = sistema;
        this.IMEI = IMEI;
        this.pantalla = pantalla;
        this.tactil = tactil;
        this.bateria = bateria;
        this.desbloqueo = desbloqueo;
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

function crearTicket() {
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
        if (result.isConfirmed) {
            let DNI = document.getElementById("DNI").value;
            let cliente = buscarCliente(DNI);
            if (!cliente) {
                Swal.fire("Error", "Cliente no encontrado", "error");
                return;
            }
            let objTel = cliente.tel;
            if (!objTel || !objTel.sistema) {
                Swal.fire("Error", "Datos de cliente incompletos", "error");
                return;
            }
            objTel = hacerDX(objTel);
            let employ = buscarEmploy(objTel.sistema);
            if (!employ) {
                Swal.fire("Error", "Empleado no encontrado para este cliente", "error");
                return;
            }
            let adelanto = document.getElementById("adelanto").value;
            let status = definirStatus(adelanto);
            let dx = mostrarDX(objTel);
            let idTicket = crearNroID();
            let ticket = new Ticket(idTicket, cliente, employ, status, adelanto, dx);
            arrTicket.push(ticket);
            console.log(arrTicket);
            $tableTicket.bootstrapTable('append', {
                idTicket: ticket.idTicket,
                Cliente: ticket.cliente.nombres,
                nomemploy: ticket.employ.name,
                status: ticket.status,
                adelanto: ticket.adelanto,
                dx: ticket.dx
            });
            Swal.fire("Guardado!", "", "success");
            localStorage.setItem('arrTicket', JSON.stringify(arrTicket));
        } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardaron", "", "info");
        }
    }).catch((error) => {
        console.error("Error al crear el ticket:", error);
        Swal.fire("Error", "Hubo un error al crear el ticket", "error");
    });
}

function mostrarDX(objTel) {
    let resumen = "";

    if (objTel.pantalla) {
        resumen += "Pantalla, ";
    }
    if (objTel.tactil) {
        resumen += "Táctil, ";
    }
    if (objTel.bateria) {
        resumen += "Batería, ";
    }
    if (objTel.desbloqueo) {
        resumen += "Desbloqueo, ";
    }

    // Eliminar la coma y el espacio extra al final
    resumen = resumen.slice(0, -2);

    return resumen;
}
function hacerDX(objTel){
    var numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.25) {
        objTel.pantalla = true;
    } else {
        objTel.pantalla = false;
    }

    var numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.75) {
        objTel.tactil = true;
    } else {
        objTel.tactil = false;
    }

    var numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.15) {
        objTel.bateria = true;
    } else {
        objTel.bateria = false;
    }
    
    var numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.95) {
        objTel.desbloqueo = true;
    } else {
        objTel.desbloqueo = false;
    }
    return objTel;
}
function rechazarIMEI(){
        const numeroAleatorio = Math.random();
    
        if (numeroAleatorio < 0.25) {
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
        <label for="sistema">S.O.</label>
            <div class="input-group">
               
                <input type="text" class="form-control" id="sistema" name="sistema" placeholder="Ingrese el Sistema operativo del equipo"/>
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
            let sistema = document.getElementById("sistema").value;
            let objTel = new Phone(tel,sistema,IMEI);
            let objClient = new Client(nombres,DNI,objTel);
            arrCliente.push(objClient);
            console.log(arrCliente);
            
            $tableCliente.bootstrapTable('append', {
                nombres: nombres,
                DNI: DNI,
                tel: tel
            });
          Swal.fire("Saved!", "", "success");
          localStorage.setItem('arrCliente', JSON.stringify(arrCliente));
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
            
            console.log(arrEmploy);
            
        $tableEmploy.bootstrapTable('append', objEmploy)
          Swal.fire("Saved!", "", "success");
          arrEmploy.push(objEmploy);
          localStorage.setItem('arrEmploy', JSON.stringify(arrEmploy));
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
function eliminarEmpleados() {
    let num = prompt("Ingrese el número de empleado a eliminar ('0' para eliminar a todos)");
    if (num == "0") {
        arrEmploy.splice(0, arrEmploy.length);
    } else {
        arrEmploy.splice(num, 1);
    }
    localStorage.setItem('arrEmploy', JSON.stringify(arrEmploy));
    cargarDatosDesdeLocalStorage();
}

function eliminarClientes() {
    let num = prompt("Ingrese el número de Cliente a eliminar ('0' para eliminar a todos)");
    if (num == "0") {
        arrCliente.splice(0, arrCliente.length);
    } else {
        arrCliente.splice(num, 1);
    }
    localStorage.setItem('arrCliente', JSON.stringify(arrCliente));
    cargarDatosDesdeLocalStorage();
}

function eliminarTickets() {
    let num = prompt("Ingrese el número de Ticket a eliminar ('0' para eliminar a todos)");
    if (num == "0") {
        arrTicket.splice(0, arrTicket.length);
    } else {
        arrTicket.splice(num, 1);
    }
    localStorage.setItem('arrTicket', JSON.stringify(arrTicket));
    cargarDatosDesdeLocalStorage();
}


$(document).on('click', '#tableTicket tbody tr', function() {
    let index = $(this).data('index'); // Obtener el índice de la fila
    let ticket = arrTicket[index]; // Obtener el ticket correspondiente en arrTicket
    console.log(ticket);
    abrirModalEdicion(ticket);
});


function abrirModalEdicion(ticket) {
    let cliente = buscarCliente(ticket.cliente.DNI);
    Swal.fire({
        title: "Actualizar Estado del Ticket",
        html: `
            <p>Estado actual: ${ticket.status}</p>
            <p>Seleccione el nuevo estado basado en el estado de reparación del teléfono:</p>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="pantallaCheck" ${cliente.tel.pantalla ? '' : 'checked'}>
                <label class="form-check-label" for="pantallaCheck">Pantalla</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="tactilCheck" ${cliente.tel.tactil ? '' : 'checked'}>
                <label class="form-check-label" for="tactilCheck">Táctil</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="bateriaCheck" ${cliente.tel.bateria ? '' : 'checked'}>
                <label class="form-check-label" for="bateriaCheck">Batería</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="desbloqueoCheck" ${cliente.tel.desbloqueo ? '' : 'checked'}>
                <label class="form-check-label" for="desbloqueoCheck">Desbloqueo</label>
            </div>
        `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            cliente.tel.pantalla = !document.getElementById("pantallaCheck").checked;
            cliente.tel.tactil = !document.getElementById("tactilCheck").checked;
            cliente.tel.bateria = !document.getElementById("bateriaCheck").checked;
            cliente.tel.desbloqueo = !document.getElementById("desbloqueoCheck").checked;
            ticket.dx = mostrarDX(cliente.tel);
            ticket.status = definirEstado(cliente.tel);
            let index = arrTicket.findIndex(t => t.idTicket === ticket.idTicket);
            console.log("Este es el index " + index);
            arrTicket[index] = ticket; 
            console.log("Esta es la evaluación que buscas: " + ticket[index]); 
            $tableTicket.bootstrapTable('updateRow', {index: index, row: ticket});
            Swal.fire("Guardado!", "", "success");
            localStorage.setItem('arrTicket', JSON.stringify(arrTicket)); 
            cargarDatosDesdeLocalStorage();
        
        } else if (result.isDenied) {
            Swal.fire("Cambios cancelados", "", "info");
        }
    });
}



function definirEstado(objTel) {
    if (objTel.pantalla || objTel.tactil || objTel.bateria || objTel.desbloqueo) {
        return "En reparación";
    } else {
        return "Reparado";
    }
}
