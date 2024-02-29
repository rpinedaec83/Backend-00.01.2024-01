console.log("Inicio del Programa")

class Dispositivo {
    constructor(iMei, nroSerie) {
        this.iMei = iMei;
        this.nroSerie = nroSerie;
        this.revision = false;
        this.diagnostico = "";
        this.pago = false;
        this.valorReparacion = 0;
        this.autorizacion = false;
        this.repuestos = null;
        this.estado = "";
    }
    toJson() {
        return JSON.stringify({ iMei: this.iMei, nroSerie: this.nroSerie });
    }
    revisarReporteRobo(){
        return  Math.random() > 0.5 ? true : false;
    }
    iniciarDiagnostico(){
        if(this.autorizacion && this.pago){
            this.diagnostico = prompt("Escribe el Diagnostico");
            this.estado = "En Diagnostico";
        }
        else{
            alert("La autorizacion o el pago no esta realizado")
        }
    }
    recibirPago(){
        this.pago = true;
    }

}

class Persona {
    constructor(nombre, apellido, nroIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroIdentificacion = nroIdentificacion;
    }
}

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
    autorizar(telefono){
        telefono.autorizacion = confirm("Auroriza la reparacion del Telefono");
    }
    
}

class Tecnico extends Persona {
    constructor(nombre, apellido, nroIdentificacion, skills) {
        super(nombre, apellido, nroIdentificacion);
        this.skills = skills;
    }
    toJson() {
        return JSON.stringify({
            nombre: this.nombre,
            apellido: this.apellido,
            nroIdentificacion: this.nroIdentificacion,
            skills: this.skills
        })
    }
}

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
    recibirDispositivo(){
        let imei = prompt("Ingresa el IMEI");
        let nroSerie = prompt("Ingresa el numero de Serie");
        let objDispositivo = new Dispositivo(imei, nroSerie);
        let nombre = prompt("Escribe el nombre del cliente");
        let apellido = prompt("Escribe el apellido del clente");
        let nroIdentificacion = prompt("Escribe el DNI del cliente");
        let nroTelefono = prompt("Escribe el numero de telefono del cliente")
        let direccion = prompt("Escribe la direccion decl cleinte");
        let cliente = new Cliente(nombre,apellido,nroIdentificacion,nroTelefono, direccion,objDispositivo);
        arrCliente.push(cliente);
    }
}

let arrDispositivos = [];
let arrCliente = [];


let admin = new Administrador("Roberto", "Pineda", "CE 001575291","Principal")

document.getElementById("recibirDispositivo").addEventListener("click", recibirDispositivo);

function recibirDispositivo(){
    admin.recibirDispositivo();
    guardarData("cliente", arrCliente);
    console.log(arrCliente)
}

function guardarData(nombre,data){
    localStorage.setItem(nombre,JSON.stringify(data));
}

function init(){
    let localData = localStorage.getItem("cliente");
    console.log(localData);
    if(localData !== null){
        arrCliente = JSON.parse(localData);
    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    init();
  });