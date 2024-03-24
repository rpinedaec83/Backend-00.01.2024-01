class Phone {
  constructor(imei, marca, modelo) {
    this.imei = imei;
    this.marca = marca;
    this.modelo = modelo;
  }
}
class Client {
  constructor(firstName, lastName, dni) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
  }
}
class Ticket {
  constructor(state, description, phone, payment, paymentPercentage, client) {
    this.state = state;
    this.description = description;
    this.phone = phone;
    this.payment = payment;
    this.paymentPercentage = paymentPercentage;
    this.client = client;
  }
}
class Company {
  phoneReported = [];
  tickets = [];
  clients = [];
  phone = [];
  constructor(name) {
    this.name = name;
  }


  addedPhoneReported(phone) {
    let existsPhone;

    for (let i = 0; i < this.phoneReported.length; i++) {
      if (this.phoneReported[i].imei == phone.imei) {
        existsPhone == this.phoneReported[i];
      }
    }

    if (!existsPhone) {
      this.phoneReported.push(phone);
    }

    return phone;
  }

  findOnePhoneReported(imei) {
    return this.phoneReported.find((e) => e.imei == imei);
  }

  addedClient(fistName, lastName, dni) {
    const result = this.findOneClient(dni);
    if (result) {
      return result;
    }
    const newClient = new Client(fistName, lastName, dni);

    this.clients.push(newClient);
    return newClient;
  }

  findOneClient(dni) {
    return this.clients.find((client) => client.dni == dni);
  }

  addedPhone(imei, marca, modelo) {
    const result = this.findOnePhone(imei);
    if (result) {
      return result;
    }
    const newPhone6 = new Phone(imei, marca, modelo);

    this.phone.push(newPhone6);
    return newPhone6;
  }
  findOnePhone(imei) {
    return this.phone.find((phone) => phone.imei == imei);
  }

  generateDiagnosis(client, phone, description) {
    const existsPhoneReported = this.findOnePhoneReported(phone.imei); 
    if (existsPhoneReported) {
      console.log("El dispositivo se encuentra REPORTADO");
      return 1;
    }

    const existsClient = this.findOneClient(client.dni);
    if (!existsClient) {
      this.addedClient(client.firstName, client.lastName, client.dni); 
    }

    const existsPhone = this.findOnePhone(phone.imei);
    if (!existsPhone) {
      this.addedPhone(phone.imei, phone.marca, phone.modelo);
    } else {
      alert("El dispositivo ya esta ingresado.");
      return;
    }

    const data = {
      client: client,
      phone: phone,
      description: description,
      state: "diagnosis",
      payment: 0,
      paymentPercentage: 0,
    };

    const newTicket = new Ticket(
      data.state,
      data.description,
      data.phone,
      data.payment,
      data.paymentPercentage,
      data.client
    );

    this.tickets.push(newTicket);
  }
}

let btnLlenardatos = document.getElementById("btnLlenarDatos");
btnLlenardatos.disabled = true;
let txtNombre = document.getElementById("nombreR");
txtNombre.disabled = true;
let txtApellido = document.getElementById("apellidoR");
txtApellido.disabled = true;
let btnRegistrarCliente = document.getElementById("btnRegistrarCliente");
btnRegistrarCliente.disabled = true;
let txtMarcaRt = document.getElementById("marcaRt");
txtMarcaRt.disabled = true;
let txtModeloRt = document.getElementById("modeloRt");
txtModeloRt.disabled = true;
let txtDniRt = document.getElementById("dniRT");
txtDniRt.disabled = true;
let txtNombreRt = document.getElementById("nombreRT");
txtNombreRt.disabled = true;
let txtApellidoRt = document.getElementById("apellidoRT");
txtApellidoRt.disabled = true;
let txtDiagnosticoRt = document.getElementById("diagnosticoRT");
txtDiagnosticoRt.disabled = true;
let txtImeiRt = document.getElementById("imeiRt");
let btnVerificarClienteRt = document.getElementById("btnVerificarClienteRt");
btnVerificarClienteRt.disabled = true;

const company = new Company("techNew");
/*
console.log(company.phoneReported);
const phoneReported = new Phone("1233", "xiomi", "redmi note 10");
const phoneReported2 = new Phone("321", "samsung", "A7");

company.addedPhoneReported(phoneReported);
company.addedPhoneReported(phoneReported2);

console.log(company.phoneReported);
//console.log(company.phoneReported2);

const newClient = new Client("pedro", "silva", 398293);

const newPhone = new Phone("3211", "Moto", "g20");

company.generateDiagnosis(newClient, newPhone, "no puedo llamar");

console.log(company.tickets);
console.log(company.clients);

const newCliente2 = new Client("juan", "escuadra", 398293);

const newPhone2 = new Phone("123", "xiomi", "redmi note 10");

company.generateDiagnosis(newCliente2, newPhone2, "no enciende");

console.log(company.tickets);
console.log(company.clients);
*/
function verificarReparacionTelefono() {
  let imei = txtImeiRt.value;
  const existsPhone = company.findOnePhone(imei);
  if (existsPhone) {
    alert("El dispositivo ya esta ingresado");
    const ticket = company.tickets.find((ticket) => ticket.phone.imei === imei);
    if (ticket) {
      txtDniRt.value = ticket.client.dni;
      txtNombreRt.value = ticket.client.firstName;
      txtApellidoRt.value = ticket.client.lastName;
      txtMarcaRt.value = ticket.phone.marca;
      txtModeloRt.value = ticket.phone.modelo;
      txtDiagnosticoRt.value = ticket.description;
      txtDniRt.disabled = true;
      txtNombreRt.disabled = true;
      txtApellidoRt.disabled = true;
      txtMarcaRt.disabled = true;
      txtModeloRt.disabled = true;
      txtDiagnosticoRt.disabled = true;
      btnLlenardatos.disabled = true;
      btnVerificarClienteRt.disabled = true;
      return;
    }
  } else {
    alert(
      "El dispositivo NO esta ingresado, complete la información para ingresarlo."
    );
    txtDniRt.value = "";
    txtNombreRt.value = "";
    txtApellidoRt.value = "";
    txtMarcaRt.value = "";
    txtModeloRt.value = "";
    txtDiagnosticoRt.value = "";
    txtDniRt.disabled = false;
    txtNombreRt.disabled = false;
    txtApellidoRt.disabled = false;
    txtMarcaRt.disabled = false;
    txtModeloRt.disabled = false;
    txtDiagnosticoRt.disabled = false;
    btnLlenardatos.disabled = false;
    btnVerificarClienteRt.disabled = false;
  }
}

function ingresarTelefono(){
  let imei = txtImeiRt.value;
  let marca = txtMarcaRt.value;
  let modelo = txtModeloRt.value;
  let dni = txtDniRt.value;
  let nombre = txtNombreRt.value;
  let apellido = txtApellidoRt.value;
  let diagnostico = txtDiagnosticoRt.value;

  const existsPhone = company.findOnePhone(imei);
  if (existsPhone) {
    alert("El dispositivo ya está ingresado");
    txtDniRt.value = "";
    txtNombreRt.value = "";
    txtApellidoRt.value = "";
    txtMarcaRt.value = "";
    txtModeloRt.value = "";
    txtDiagnosticoRt.value = "";
    txtDniRt.disabled = false;
    txtNombreRt.disabled = false;
    txtApellidoRt.disabled = false;
    txtMarcaRt.disabled = false;
    txtModeloRt.disabled = false;
    txtDiagnosticoRt.disabled = false;
    btnLlenardatos.disabled = false;
    btnVerificarClienteRt.disabled = false;
    return;
  }
  
  const newClient6 = new Client(nombre, apellido, dni);
  const newPhone6 = new Phone(imei, marca, modelo);
  company.generateDiagnosis(newClient6, newPhone6, diagnostico);

  mostrarLlenarDatos(newPhone6, newClient6, diagnostico)
}

function mostrarLlenarDatos(phone, client, diagnostico) {
  let tabla = document.getElementById("tableLlenarDatos");
  let fila = tabla.insertRow();
  
    let celdaIMEI = fila.insertCell();
    celdaIMEI.innerHTML = phone.imei;

    let celdaMarca = fila.insertCell();
    celdaMarca.innerHTML = phone.marca;

    let celdaModelo = fila.insertCell();
    celdaModelo.innerHTML = phone.modelo;

    let celdaDNI = fila.insertCell();
    celdaDNI.innerHTML = client.dni;

    let celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = client.firstName;

    let celdaApellido = fila.insertCell();
    celdaApellido.innerHTML = client.lastName;

    let celdaDiagnostico = fila.insertCell();
    celdaDiagnostico.innerHTML = diagnostico;

    
}
function verificarEstadoImei() {
  let imeiV = txtImeiRt.value;
  console.log(imeiV)
  const existsPhoneReportedV = company.findOnePhoneReported(imeiV); 
  if (existsPhoneReportedV) {
    alert("El dispositivo se encuentra REPORTADO");
    txtMarcaRt.value = existsPhoneReportedV.marca;
    txtModeloRt.value = existsPhoneReportedV.modelo;
    txtMarcaRt.disabled = true;
    txtModeloRt.disabled = true;
    txtDniRt.disabled = true;
    txtNombreRt.disabled = true;
    txtApellidoRt.disabled = true;
    txtDiagnosticoRt.disabled = true;
  } else {
    verificarReparacionTelefono();
  }
}

function llenarDatosTelefonoReported() {
  let imeiR = document.getElementById("imeiR").value;
  let marcaR = document.getElementById("marcaR").value;
  let modeloR = document.getElementById("modeloR").value;

  const newPhoneReported = new Phone(imeiR, marcaR, modeloR);
  company.addedPhoneReported(newPhoneReported);
  company.phoneReported.push(newPhoneReported);

  document.getElementById("imeiR").value = "";
  document.getElementById("marcaR").value = "";
  document.getElementById("modeloR").value = "";

  showDataPhoneReported(newPhoneReported);
}

function showDataPhoneReported(phone) {
  let tabla = document.getElementById("tablePhoneReported");
  let fila = tabla.insertRow();

  let celdaImei = fila.insertCell();
  celdaImei.innerHTML = phone.imei;

  let celdaMarca = fila.insertCell();
  celdaMarca.innerHTML = phone.marca;

  let celdaModelo = fila.insertCell();
  celdaModelo.innerHTML = phone.modelo;
}

function verificarClienteRegistrado(txtDniVar, txtNombreVar, txtApellidoVar) {
  const existsClient = company.findOneClient(txtDniVar.value);

  if (existsClient) {
    
    txtNombreVar.value = existsClient.firstName;
    txtApellidoVar.value = existsClient.lastName;
    alert("El cliente ya se encuentra registrado");
  } else {
    
    btnVerificarClienteRt.disabled = false;
    btnRegistrarCliente.disabled = false;
    txtNombreVar.disabled = false;
    txtApellidoVar.disabled = false;
    txtNombreVar.value = "";
    txtApellidoVar.value = "";
    alert(
      "El cliente NO se encuentra registrado, completar los campos para registrarlo."
    );
    if (txtNombreVar.value != "") {
      registrarCliente();
    }
  }
}

function registrarCliente() {
  let nombreR = document.getElementById("nombreR").value;
  let apellidoR = document.getElementById("apellidoR").value;
  let dniR = document.getElementById("dniR").value;
  console.log(apellidoR);
  console.log(nombreR);
  const newClient4 = new Client(nombreR, apellidoR, dniR);
  company.clients.push(newClient4);

  document.getElementById("nombreR").value = "";
  document.getElementById("apellidoR").value = "";
  document.getElementById("dniR").value = "";
  btnRegistrarCliente.disabled = true;
  //btnRegistrarClienteRt.disabled = true;
  btnVerificarClienteRt.disabled = true;
  showDataClient(newClient4);
}

function showDataClient(client) {
  let tabla = document.getElementById("tableClient");
  let fila = tabla.insertRow();

  let celdaDNI = fila.insertCell();
  celdaDNI.innerHTML = client.dni;

  let celdaNombre = fila.insertCell();
  celdaNombre.innerHTML = client.firstName;

  let celdaApellido = fila.insertCell();
  celdaApellido.innerHTML = client.lastName;
}
