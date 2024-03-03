
arrClientes = [];
arrDispositivos = [];
let dispositivoCreado;


/*------------CLASS PERSONA------------*/

class Persona {
    constructor(nombre, apellido, DNI) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
    }
}

/*------------CLASS CLIENTE------------*/

class Cliente extends Persona {
    constructor(nombre, apellido, DNI, numero, dispositivo) {
        super(nombre, apellido, DNI);
        this.numero = numero;
        this.dispositivo = dispositivo;
    }
}

//----------SEPARADOR - CLASS DISPOSITIVO----------//

class Dispositivo {
    constructor(iMei, nroSerie, revision, pago, autorizacion, problema) {
        this.iMei = iMei;
        this.nroSerie = nroSerie;
        this.revision = revision;   
        this.diagnostico = "";     
        this.pago = pago;          
        this.valorReparacion = 0;   
        this.autorizacion = autorizacion;   

        this.repuestos = "";      
        this.estado = "";           
        this.problema = problema;
        this.reportado = false;
    }
       
}

function reportarRobo() 
{ 
    return Math.random() > 0.5 ? true : false;
}

//----------SEPARADOR - CREAR DISPOSITIVO----------//

function CrearDispositivo() 
{
    let imeiDispositivo = prompt("Ingrese el IMEI del dispositivo");
    let numeroSerie = prompt("Ingrese el numero de Serie del dispositivo");
    let pago = confirm("Desea confirmar el pago?");
    let revisionDispositivo = confirm("Desea una revisión?");
    let autorizacion = confirm("Desea confirmar la autorizacion para el reparo?");
    let problema = prompt("Ingrese el problema que tiene su dispositivo");
    let reportado;
    let numeroAleatorio;

    numeroAleatorio = reportarRobo();

    if (numeroAleatorio) {
        reportado = true;
        alert("Su celular está reportado como robado, no puede ser capaz de agregar su celular.");
    } else {
        reportado = false;
        dispositivoCreado = new Dispositivo(imeiDispositivo, numeroSerie, revisionDispositivo, pago, autorizacion, problema);
        arrDispositivos.push(dispositivoCreado);
    }



}

//----------SEPARADOR - TECNICOS----------//

let tecnicos = [
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
];


//----------SEPARADOR - SELECCIONAR TECNICO----------//


function seleccionarTecnico() 
{
    let dispositivo = arrDispositivos[arrDispositivos.length - 1];

    if (dispositivo.revision && dispositivo.pago && dispositivo.autorizacion) 
    {
        alert("Usted puede solicitar a un técnico.");
        
    } 
    else 
    {
        alert("Usted no puede solicitar a un técnico.");
        return;
    }



    if (arrDispositivos.length === 0) 
    {
        alert("No hay dispositivos para seleccionar un técnico.");
        return;
    }

    let seleccion = prompt("A cual de los 2 desea seleccionar? escriba 1 o 2");
    

    if (seleccion == 1) 
    {
        if (dispositivo.problema.includes("pantalla rota")) 
        {
            dispositivo.diagnostico = "Su dispositivo tiene la pantalla rota, será reemplazada";
            alert("Su pantalla está rota");
            dispositivo.repuestos = "Pantalla Nueva";
            dispositivo.estado = "Telefono con nueva pantalla"
        } 

        else 
        {
            alert("Usted no tiene la pantalla rota");
            dispositivo.diagnostico = "Su dispositivo no tenía fallos en la pantalla";
            dispositivo.repuestos = "No necesitó repuestos";
            dispositivo.estado = "Telefono normal"
        }
    } 

    else 
    {
        if (dispositivo.problema.includes("bateria")) 
        {
            dispositivo.diagnostico = "Su dispositivo tiene la batería dañada, será reemplazada";
            alert("Su dispositivo tiene su batería dañada");
            dispositivo.repuestos = "Bateria Nueva";
            dispositivo.estado = "Telefono con nueva batería"
        } 
        
        else 
        {
            alert("Usted no tiene la batería dañada.");
            dispositivo.diagnostico = "Su dispositivo no tenía fallos en la bateria";
            dispositivo.repuestos = "No necesitó repuestos";
            dispositivo.estado = "Telefono normal"
        }
    }
}


//----------SEPARADOR - CREAR CLIENTE----------//


function CrearCliente() 
{
    let nombreCliente = prompt("Ingrese el nombre del cliente");
    let apellidoCliente = prompt("Ingrese el apellido del cliente");
    let DNIcliente = prompt("Ingrese el DNI del cliente");
    let numeroDispositivoCliente = prompt("Ingrese el numero del telefono del cliente");
    let dispositivoCliente = prompt("Ingrese el dispositivo del cliente");
  
    let nuevoCliente = new Cliente(nombreCliente, apellidoCliente, DNIcliente, numeroDispositivoCliente, dispositivoCliente);
    arrClientes.push(nuevoCliente);


}

let tablatecnicos = document.getElementById("TablaHTMLTecnicos")


tablatecnicos.innerHTML = "";

tecnicos.forEach(tecnico => {
    tablatecnicos.innerHTML += "<tr>";
    tablatecnicos.innerHTML = tablatecnicos.innerHTML + "<td>" + tecnico.nombre + "</td>";
    tablatecnicos.innerHTML += "<td>" + tecnico.apellido + "</td>";
    tablatecnicos.innerHTML += "<td>" + tecnico.DNI + "</td>";
    tablatecnicos.innerHTML += "<td>" + tecnico.skills + "</td>";
    tablatecnicos.innerHTML += "</tr>";
    
});
                  
function CrearTabla() 
{
    
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "2");

    
    let encabezado = tabla.createTHead();
    let filaEncabezado = encabezado.insertRow();
    filaEncabezado.innerHTML = `
        <th>Nombre del cliente</th>
        <th>Apellido del cliente</th>
        <th>DNI del cliente</th>
        <th>IMEI</th>
        <th>Número de Serie</th>
        <th>Número de Teléfono</th>
        <th>Autorización de Reparo</th>
        <th>Abono Hecho</th>
        <th>Número Reportado</th>
        <th>Diagnóstico del Teléfono</th>
        <th>Repuestos</th>
        <th>Estado</th>
    `;

    
    let cuerpoTabla = tabla.createTBody();

    
    arrClientes.forEach(cliente => 
    {
        arrDispositivos.forEach(dispositivo => 
        {
            
            let fila = cuerpoTabla.insertRow();
           
            fila.innerHTML = `
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
                <td>${cliente.DNI}</td>
                <td>${dispositivo.iMei}</td>
                <td>${dispositivo.nroSerie}</td>
                <td>${cliente.numero}</td>
                <td>${dispositivo.autorizacion ? "Sí" : "No"}</td>
                <td>${dispositivo.pago ? "Sí" : "No"}</td>
                <td>${dispositivo.reportado ? "Sí" : "No"}</td>
                <td>${dispositivo.diagnostico}</td>
                <td>${dispositivo.repuestos}</td>
                <td>${dispositivo.estado}</td>
            `;
        });
    });

    
    let tablaDiv = document.getElementById("tablaDiv");

    
    tablaDiv.innerHTML = "";

    
    tablaDiv.appendChild(tabla);
}


document.addEventListener("DOMContentLoaded", (event) => {
    let storedClientes = localStorage.getItem("clientes");

    let arrClientes
    let arrDispositivos
    

    if (storedClientes !== null) 
    {
        arrClientes = JSON.parse(storedClientes);
    } 
    
    else 
    {
        arrClientes = [];
    }

    let storedDispositivos = localStorage.getItem("dispositivos");
    

    if (storedDispositivos !== null) 
    {
        arrDispositivos = JSON.parse(storedDispositivos);
    } 
    
    else 
    {
        arrDispositivos = [];
    }

    CrearTabla();
});


function guardarTabla() 
{
    
    let clientesJSON = JSON.stringify(arrClientes);
    let dispositivosJSON = JSON.stringify(arrDispositivos);

    
    localStorage.setItem('clientes', clientesJSON);
    localStorage.setItem('dispositivos', dispositivosJSON);
}

function borrarTabla() 
{
    localStorage.removeItem('clientes');
    localStorage.removeItem('dispositivos');
    document.getElementById("tablaDiv").innerHTML = "";
}

