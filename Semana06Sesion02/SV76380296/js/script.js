console.log("AMONG")

class Dispositivo{
    constructor(iMei,nroSerie){
        this.iMei = iMei;
        this.nroSerie = nroSerie;
        this.diagnostico = "";
        this.pago = false;
        this.valorReparacion = 0;
        this.autorizacion = false;
        this.repuestos = null;
        this.estado = "";
    }
    toJson(){
        return JSON.stringify({iMei: this.iMei, nroSerie: this.nroSerie})
    }
    reivsarReporteRobo(){
        return Math.random() > 0.5 ? true: false
    }
    iniciarDiagnostico(){
        if(this.autorizacion && this.pago){
            this.diagnostico = prompt("Diganos el problema.")
            this.estado = "En diagnostico"
        } else {
            alert("Nuh uh. No autorizacion o no pago.")
        }
    }
    recibirPago(){
        this.pago = true;
    }
}

class Persona{
    constructor(nombre,apellido,nroIdentificacion){
        this.nombre = nombre
        this.apellido = apellido
        this.nroIdentificacion = nroIdentificacion
    }
}

class Cliente extends Persona{
    constructor(nombre,apellido,nroIdentificacion,nroTelefono,direccion,dispositivo){
        super(nombre,apellido,nroIdentificacion);
        this.nroTelefono = nroTelefono;
        this.direccion = direccion;
        
        this.dispositivo = dispositivo;
    }
    toJson(){
        return JSON.stringify({
            nombre: this.nombre, 
            apellido: this.apellido,
            nroIdentificacion: this.nroIdentificacion,
            nroTelefono: this.nroTelefono,
            direccion: this.direccion
        })
    }
    autorizar(telefono){
        telefono.autorizacion = confirm("Autoriza la reparacion del telefono?")
    }
}

class Tecnico extends Persona{
    constructor(nombre,apellido,nroIdentificacion,skills){
        super(nombre,apellido,nroIdentificacion);
        this.skills = skills;
    }
    toJson(){
        return JSON.stringify({
            nombre: this.nombre, 
            apellido: this.apellido,
            nroIdentificacion: this.nroIdentificacion,
            skills: this.skills
        })
    }
}

class Administrador extends Persona{
    constructor(nombre,apellido,nroIdentificacion,tienda){
        super(nombre,apellido,nroIdentificacion);
        this.tienda = tienda;
    }
    toJson(){
        return JSON.stringify({
            nombre: this.nombre, 
            apellido: this.apellido,
            nroIdentificacion: this.nroIdentificacion,
            tienda: this.tienda
        })
    }
    recibirDispositivo(){
        let iMei = prompt("Indique el IMEI.")
        let nroSerie = prompt("Escriba el numero de serie.")
        let objDispositivo = new Dispositivo(iMei,nroSerie)
        let nombre = prompt("Escribe el nombre del cliente.")
        let apellido = prompt("Escibe el apellido del cliente.")
        let nroIdentificacion = prompt("Escribe el DNI del cliente.")
        let nroTelefono = prompt("Escribe el numero de telefono del cliente")
        let direccion = prompt("Escribe la direccion del cliente.")
        let cliente = new Cliente(nombre,apellido,nroIdentificacion,nroTelefono,direccion,objDispositivo)
        arrCliente.push(cliente)
    }
}

let arrDispositivos = []
let arrCliente = []

let admin = new Administrador("Mini","Kloon","039582834","Principal")

document.getElementById("recibirDispositivo").addEventListener("click",recibirDispositivo);
document.getElementById("borrarData").addEventListener("click",borrarData);

function recibirDispositivo(){
    admin.recibirDispositivo();
    guardarData("cliente",arrCliente)
    console.log(arrCliente);
    arrCliente.forEach(element =>{
        arrDispositivos.push(element.dispositivo)
    });

    //$table.bootstrapTable({data:arrDispositivos})
}

function guardarData(nombre,data){
    localStorage.setItem(nombre,JSON.stringify(data));
}

function borrarData() {
    guardarData("cliente","")
    arrCliente = []
    arrDispositivos = []
    console.log("Data borrada!")

    //$table.bootstrapTable('load', arrDispositivos)
}

function init(){
    let jsonCliente = null;
    let localData = localStorage.getItem("cliente")
    console.log(localData) 
    if(localData !== null && localData !== "null"){
        jsonCliente = JSON.parse(localData);
    } else {
        jsonCliente = [];
    }

    jsonCliente.forEach(element =>{
        let arrJsonDispositivo = element.dispositivo;
        
        arrCliente.push(new Cliente(
            element.nombre,
            element.apellido,
            element.nroIdentificacion,
            element.nroTelefono,
            element.direccion,
            element.objDispositivo))
    });
}

document.addEventListener("DOMContentLoaded",(event) =>{
    console.log("AMONG INIT")
    init();
})

//$table.on('click-row.bs.table',function (row, $element, field){
    //if confirm(`Desea modificar el estado del dispositivo ${$element}`){
        //$element.iMei;
        //let objDispositivo=
    //}
//})

function buscarDispositivo(imei){
    let
}