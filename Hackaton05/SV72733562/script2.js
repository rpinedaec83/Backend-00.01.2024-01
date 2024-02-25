class Cliente {
    constructor(firstName, lastName, dni) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
    }
}


class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills;
    }
}


class Telefono {
    constructor(numeroSerie, imei, marca, problema) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.problema = problema;
        this.reportado = false;
        this.reparado = false;
        this.autorizacion = false;
        this.abono = false;
        this.repuestos = [];
    }

    reportarTelefono() {
        this.reportado = true;
        document.getElementById("resultados").innerHTML += `<p>El teléfono con Número de Serie ${this.numeroSerie} y IMEI ${this.imei} ha sido reportado.</p>`;
    }

    autorizarReparo() {
        if (!this.reportado) {
            this.autorizacion = true;
            document.getElementById("resultados").innerHTML += `<p>Reparo autorizado.</p>`;
        }
    }

    abonarReparo() {
        if (!this.reportado) {
            this.abono = true;
            document.getElementById("resultados").innerHTML += `<p>Abono hecho.</p>`;
        }
    }

    repararTelefono() {
        if (this.autorizacion && this.abono && !this.reportado) {
            this.reparado = true;
            document.getElementById("resultados").innerHTML += `<p>El teléfono ha sido reparado con éxito.</p>`;
        }
    }
}


const clientes = [];
const tecnicos = [];
const telefonos = [];


function agregarCliente(event) {
    event.preventDefault(); 

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dni = document.getElementById("dni").value;

    
    const nuevoCliente = new Cliente(firstName, lastName, dni);
    clientes.push(nuevoCliente);

  
    Resultados();
}


function agregarTecnico(event) {
    event.preventDefault(); 

    const nombreTecnico = document.getElementById("nombreTecnico").value;
    const skillsTecnico = document.getElementById("skillsTecnico").value;

    
    const nuevoTecnico = new Tecnico(nombreTecnico, skillsTecnico);
    tecnicos.push(nuevoTecnico);

   
    Resultados();
}


function agregarTelefono(event) {
    event.preventDefault(); 

    const numeroSerieTelefono = document.getElementById("numeroSerieTelefono").value;
    const imeiTelefono = document.getElementById("imeiTelefono").value;
    const marcaTelefono = document.getElementById("marcaTelefono").value;
    const problemaTelefono = document.getElementById("problemaTelefono").value;

   
    const nuevoTelefono = new Telefono(numeroSerieTelefono, imeiTelefono, marcaTelefono, problemaTelefono);
    telefonos.push(nuevoTelefono);


    Resultados();
}


function Resultados() {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 

 
    resultadosDiv.innerHTML += "<h2>Clientes:</h2>";
    clientes.forEach(cliente => {
        resultadosDiv.innerHTML += `<p>${cliente.firstName} ${cliente.lastName}, DNI: ${cliente.dni}</p>`;
    });

    
    resultadosDiv.innerHTML += "<h2>Técnicos:</h2>";
    tecnicos.forEach(tecnico => {
        resultadosDiv.innerHTML += `<p>${tecnico.nombre}, Skills: ${tecnico.skills}</p>`;
    });

   
    resultadosDiv.innerHTML += "<h2>Teléfonos:</h2>";
    telefonos.forEach(telefono => {
        resultadosDiv.innerHTML += `<p>Número de Serie: ${telefono.numeroSerie}, IMEI: ${telefono.imei}, Marca: ${telefono.marca}, Problema: ${telefono.problema}</p>`;
    });
}

function reportarTelefono() {
    telefonos.forEach(telefono => {
        telefono.reportarTelefono();
    });
}

function autorizarReparo() {
    telefonos.forEach(telefono => {
        telefono.autorizarReparo();
    });
}

function abonarReparo() {
    telefonos.forEach(telefono => {
        telefono.abonarReparo();
    });
}

function repararTelefono() {
    telefonos.forEach(telefono => {
        telefono.repararTelefono();
    });
}