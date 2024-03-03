
arrClientes = []
arrDispositivos = []



/*------------CLASS PERSONA------------*/

class Persona
{
    constructor(nombre, apellido, DNI)
    {
    this.nombre = nombre
    this.apellido = apellido
    this.DNI = DNI
    }
}

/*------------CLASS CLIENTE------------*/

class Cliente extends Persona
{
    constructor(nombre, apellido, DNI, numero, dispositivo)
    {
    super(nombre, apellido, DNI)

    this.numero = numero
    this.dispositivo = dispositivo
    }
}






/* SEPARADOR */

class Dispositivo 
{
    constructor(iMei, nroSerie, revision, pago, autorizacion, problema) {
        this.iMei = iMei;
        this.nroSerie = nroSerie;
        this.revision = revision;   //aca debo solicitar si quiere revision o no
        this.diagnostico = "";      //aca debo devolver el diagnostico si es que la revision es aceptada
        this.pago = pago;          // aca es true o false
        this.valorReparacion = 0;   // aca es un numero random
        this.autorizacion = autorizacion;   // autorizar la reparacion, true o false

        this.repuestos = repuestos;      // cuando arreglemos una parte del celular, en los tecnicos, metemos lo que
                                         // hemos puesto en el celular.

        this.estado = "";           // aca se muestra el estado del dispositivo despues de un arreglo
        this.problema = problema
        this.reportado = false
        if(revision == true && pago == true && autorizacion == true)
        {
        alert("Usted puede solicitar a un técnico.")
        crearTecnico();
        }
        else
        {
        alert("Usted no puede solicitar a un técnico.")
        }
    }
    
   //la revision ya esta hecha en el agregar dispositivo
   //el pago también
}

function revisarReporteRobo() 
{ 
    return Math.random() > 0.5 ? true : false;
}




function CrearDispositivo()
{
    let imeiDispositivo = prompt("Ingrese el IMEI del dispositivo")
    let numeroSerie = prompt("Ingrese el numero de Serie del dispositivo")
    let pago = confirm("Desea confirmar el pago?")
    let revisionDispositivo = confirm("Desea una revisión?")
    let autorizacion = confirm("Desea confirmar la autorizacion para el reparo?")
    let repuestos = confirm("")
    let problema = prompt("Ingrese el problema que tiene su dispositivo")
    let reportado;
    let numeroaleatorio

    numeroaleatorio = revisarReporteRobo();

    if(numeroaleaotorio == true)
    {
        reportado = true;
        alert("Su celular está reportado como robado, no puede ser capaz de agregar su celular.")
    }

    else
    {
        reportado = false;
        let dispositivoCreado = new Dispositivo(imeiDispositivo, numeroSerie, revisionDispositivo, pago, autorizacion, problema)
        arrDispositivos.push(dispositivoCreado)
    }


}



/* objeto tecnicos */

let tecnicos = 
[
   
    {
    nombre: "Técnico Carlos",
    apellido: "Don Juan",
    DNI: "123456789",
    skills: "Arreglar pantallas rotas"
    },


    {
    nombre: "Técnica Sofia",
    apellido: "Doña Pepa",
    DNI: "987654321",
    skills: "Arreglar problemas de batería"
    }

]


//tengo que hacer una tabla para enseñar los tecnicos xd

let tablatecnicos = document.getElementById("TablaHTMLTecnicos")






/* objeto tecnicos */



// en la lista empecemos con: nombreCliente, apellidoCliente, DNIcliente, IMEI, numeroSerie, numeroTelefono





function CrearCliente()
{
  let nombreCliente = prompt("Ingrese el nombre del cliente")
  let apellidoCliente = prompt("Ingrese el apellido del cliente")
  let DNIcliente = prompt("Ingrese el DNI del cliente")
  let numeroDispositivoCliente = prompt("Ingrese el numero del telefono del cliente")
  let dispositivoCliente = prompt("Ingrese el dispositivo del cliente")
  

  let nuevoCliente = new Cliente(nombreCliente,apellidoCliente,DNIcliente,numeroDispositivoCliente,dispositivoCliente)

  arrClientes.push(nuevoCliente)
}



// en la lista empecemos con: nombreCliente, apellidoCliente, DNIcliente, IMEI, numeroSerie, numeroTelefono


document.write(arrClientes)
document.write(arrDispositivos)