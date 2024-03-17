class Persona{
    constructor(nombre,apellido,nroId){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroId = nroId;
    }
};

class Cliente extends Persona{
    constructor(nombre,apellido,nroId,nroTelefono,direccion,dispositivo){
        super(nombre,apellido,nroId);
        this.nroTelefono = nroTelefono;
        this.direccion = direccion;
        this.dispositivo = dispositivo;
    }
}

class Tecnico extends Persona{
    constructor(nombre,apellido,nroId,skills){
        super(nombre,apellido,nroId);
        this.skills = skills;
    }
    agregarRepuesto(dispositivo, repuesto, precio){
        dispositivo.repuestos.push(repuesto);
        dispositivo.costoReparacion += precio;
        console.log(repuesto);
        console.log(arrClientes)
    }
}

class Administrador extends Persona{
    constructor(nombre,apellido,nroId,sucursal){
        super(nombre,apellido,nroId)
        this.sucursal = sucursal
    }
    recibirDispositivo() {
        let imei = prompt("Ingresa el IMEI");
        let nroSerie = prompt("Ingresa el numero de Serie");
        let marca = prompt("Ingrese la marca del celular.");
        let autorizacion = false;
        let objDispositivo = new Dispositivo(imei, nroSerie, marca, autorizacion);
        let nombre = prompt("Escribe el nombre del cliente");
        let apellido = prompt("Escribe el apellido del clente");
        let nroIdentificacion = prompt("Escribe el DNI del cliente");
        let nroTelefono = prompt("Escribe el numero de telefono del cliente")
        let direccion = prompt("Escribe la direccion decl cleinte");
        let cliente = new Cliente(nombre, apellido, nroIdentificacion, nroTelefono, direccion, objDispositivo);
        alert("Cliente agregado.");
        console.log(cliente);
        arrClientes.push(cliente);

    }
}

class Dispositivo{
    constructor(imei,nroSerie,marca,autorizacion){
        this.imei = imei;
        this.nroSerie = nroSerie;
        this.marca = marca;
        this.revision = false;
        this.estado = "";
        this.diagnostico = "";
        this.costoReparacion = 0;
        this.pago = 0;
        this.autorizacion = autorizacion;
        this.repuestos = [];
    }
    revisarReporteRobo() {
        return Math.random() > 0.5 ? true : false;
    }
    confirmarRobo(){
        if (confirm(`Desea modificar el estado del dispositivo ${this.imei}?`)) {
            if (this.revisarReporteRobo()) {
                alert("El dispositivo esta reportado como robado.\nPor ello, no se puede realizar el servicio.")
                return;
            } else {
                console.log("No esta robado. Procediendo...")
                return true;
            }
        }
    }
    abonarPago(precio){
        this.estado = "Abonado."
        this.autorizacion = true;
        this.pago += (precio/2)
    }
}

const recibirDispositivo = () =>{
    admin.recibirDispositivo()
    guardarData("clientes",arrClientes)
    arrClientes.forEach(element => {
        arrDispositivos.push(element.dispositivo);
    });
}

const guardarData = (nombre,data) => {
    localStorage.setItem(nombre,JSON.stringify(data))
}

const borrarData = () =>{
    if(confirm("Seguro que desea borrar toda la data?")){
        guardarData("clientes", null);
        arrClientes = [];
        arrDispositivos = []; 
        alert("La data ha sido borrada.")
    }

}

const init = () =>{
    let jsonCliente = null;
    let localData = localStorage.getItem("clientes");
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
        let objDispositivo = new Dispositivo(arrJsonDispositivo.imei, arrJsonDispositivo.nroSerie, arrJsonDispositivo.marca, arrJsonDispositivo.autorizacion)
        objDispositivo.revision = arrJsonDispositivo.revision
        objDispositivo.diagnostico = arrJsonDispositivo.diagnostico
        objDispositivo.pago = arrJsonDispositivo.pago
        objDispositivo.costoReparacion = arrJsonDispositivo.costoReparacion
        objDispositivo.repuestos = arrJsonDispositivo.repuestos
        objDispositivo.estado = arrJsonDispositivo.estado
        arrClientes.push(new Cliente(
            element.nombre,
            element.apellido,
            element.nroIdentificacion,
            element.nroTelefono,
            element.direccion,
            objDispositivo))
    });


    arrClientes.forEach(element => {
        arrDispositivos.push(element.dispositivo)
    });
    console.log(arrClientes)
    console.log(arrDispositivos)
}

const iniciarDiagnostico = () => {
    const nuevoDispositivo = prompt("Por favor ingrese el imei de su celular.")
    arrClientes.forEach ( element =>{
        console.log(element)
        if (element.dispositivo.imei == nuevoDispositivo){
            let nuevoCliente = element
            console.log(`Bienvenido, ${nuevoCliente.nombre} ${nuevoCliente.apellido}, su numero sera revisado en caso este robado.`)
            if (nuevoCliente.dispositivo.confirmarRobo() == true){
                let precioInicial = 0;
                if (element.dispositivo.estado == "") {
                    element.dispositivo.estado = "Diagnosticando..."
                    console.log(element.dispositivo.estado)
                    let diagnosed = prompt("Ingresar el diagnostico.")
                    element.dispositivo.diagnostico = diagnosed
                    element.dispositivo.estado = "Diagnosticado."
                    precioInicial = parseInt(prompt("Por favor ingresar el valor de la reparacion."))
                    element.dispositivo.costoReparacion = precioInicial
                } else if (element.dispositivo.estado == "Finalizado."){
                    alert("Ya se ha finalizado este ticket! Por favor realize uno nuevo.")
                    }
                if (element.dispositivo.estado == "Diagnosticado."){
                    if (confirm("Para continuar, sera necesario confirmar y abonar el 50% del pago de antemano.\nDesea continuar? El precio total será de " + element.dispositivo.costoReparacion + " (sin contar posibles repuestos necesarios).")) {
                        element.dispositivo.abonarPago(element.dispositivo.costoReparacion)
                        console.log("El pago ha sido confirmado.")
                    } else {
                        console.log("NO SE CONFIRMA EL PAGO.")
                    }
                } else {
                    alert("El dispositivo ya avanzo de fase! Por favor proceder.")
                }
            }
        }
        guardarData("clientes",arrClientes)
        console.log("Data guardada!")
    });
    if (arrDispositivos.length = 0){
        console.log("No se encuentran celulares en la base de datos!");
    }

}

const agregarRepuesto = (imei) => {
    imei = prompt("Ingresar el imei del celular para finalizar.")
    arrClientes.forEach ( element =>{
        console.log(element)
        if (element.dispositivo.imei == imei){
            let nuevoCliente = element
            console.log(nuevoCliente)
            if (nuevoCliente.dispositivo.autorizacion == true){
                console.log("Autorizado.")
                let continuar = false;
                do {
                    let repuesto = prompt("Ingresa el tipo de repuesto.")
                    let precio = parseInt(prompt("Ingresa el precio del repuesto."))
                    tecnico.agregarRepuesto(element.dispositivo,repuesto,precio)
                    guardarData("clientes",arrClientes)
                    console.log("Data guardada!")
                    continuar = confirm("Desea agregar otro repuesto?")
                } while (continuar == true);
            } else {console.log("Nop. No hay autorizacion.")}
        }
    });
}

const finalizarReparacion = (imei) => {
    imei = prompt("Ingresar el imei del celular para agregar un repuesto.")
    arrClientes.forEach ( element =>{
        console.log(element)
        if (element.dispositivo.imei == imei){
            let cliente = element
            console.log(cliente)
            if (confirm(`Desea dar por finalizada la reparacion del celular ${cliente.dispositivo.marca} con imei ${cliente.dispositivo.imei}?`)){
                console.log("Se da por terminada la reparacion del celular.")
                cliente.dispositivo.pago += (cliente.dispositivo.costoReparacion - cliente.dispositivo.pago)
                cliente.dispositivo.estado = "Finalizado."
                guardarData("clientes",arrClientes)
                console.log("Data guardada!")
            } else {
                console.log("Se continua la reparacion.")
            }
        }
    });
}

document.getElementById("recibirDispositivo").addEventListener("click", recibirDispositivo);
document.getElementById("borrarData").addEventListener("click", borrarData);
document.getElementById("iniciarDiagnostico").addEventListener("click", iniciarDiagnostico);
document.getElementById("agregarRepuesto").addEventListener("click", agregarRepuesto);
document.getElementById("finalizarReparacion").addEventListener("click", finalizarReparacion);

document.addEventListener("DOMContentLoaded", (event) =>{
    init();
})

let arrAdministradores = [];
let arrDispositivos = [];
let arrClientes = [];


let admin = new Administrador("Amon", "Gus", "DNI 940398392", "Lince")
let admin2 = new Administrador("Susmo","Gus","DNI 948562374", "La Molina")
let tecnico = new Tecnico("The","Person","DNI 104939495",["Motorola","Samsung"])

