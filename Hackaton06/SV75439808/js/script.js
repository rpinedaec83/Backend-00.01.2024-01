console.log("Iniciado sistema de reparación de celulares ...⌛");

// Clase Persona
class Person {
  constructor(name, lastname, dni) {
    this.name = name;
    this.lastname = lastname;
    this.dni = dni;
  }
}

// Clase Cliente
class Client extends Person {
  constructor() {
    super();
    this.loadClients();
  }

  loadClients() {
    let clients = JSON.parse(localStorage.getItem("clientList")) || [];
    this.displayClients(clients);
  }

  addClient(name, lastname, dni, nroPhone, address) {
    let clients = JSON.parse(localStorage.getItem("clientList")) || [];
    clients.push({ name, lastname, dni, nroPhone, address });
    localStorage.setItem("clientList", JSON.stringify(clients));
    console.log("Se ha registrado un nuevo cliente...\nLa lista de clientes ha sido actualizada:");
    console.log(clients);
    this.displayClients(clients);
  }

  displayClients(clients) {
    let tbody = document.querySelector("#tableClient tbody");
    tbody.innerHTML = "";
    clients.forEach(client => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${client.name}</td><td>${client.lastname}</td><td>${client.dni}</td><td>${client.nroPhone}</td><td>${client.address}</td>`;
      tbody.appendChild(row);
    });
  }
}

class Technician extends Person {
  constructor() {
    super();
  }

  loadTechnicians() {
    let technicians = JSON.parse(localStorage.getItem("technicianList")) || [];
    return technicians;
  }

  displayTechnicians() {
    let technicians = this.loadTechnicians();
    console.log("Mostrar técnicos:", technicians);
  }

  addTechnician(name, lastname, dni, skills) {
    let technicians = this.loadTechnicians();
    let newTechnician = { name, lastname, dni, skills };
    technicians.push(newTechnician);
    localStorage.setItem("technicianList", JSON.stringify(technicians));
    console.log("Se ha registrado un nuevo técnico...\nLa lista de técnicos ha sido actualizada:");
    console.log(technicians);
  }
}

// Clase Teléfono Reportado
class PhoneReported {
  constructor() {
    this.loadPhoneReported();
  }

  loadPhoneReported() {
    let pr = JSON.parse(localStorage.getItem("listPhoneReported")) || [];
    this.displayPhoneReported(pr);
  }

  addPhoneReported(nroSerial, imei, brand) {
    let pr = JSON.parse(localStorage.getItem("listPhoneReported")) || [];
    pr.push({ nroSerial, imei, brand });
    localStorage.setItem("listPhoneReported", JSON.stringify(pr));
    console.log("Se ha agregado un nuevo teléfono reportado...\nLa lista ha sido actualizada:");
    console.log(pr);
    this.displayPhoneReported(pr);
  }

  displayPhoneReported(pr) {
    let tbody = document.getElementById("phoneReportedTable");
    tbody.innerHTML = "";
    pr.forEach(element => {
      let row = document.createElement("tr");
      row.innerHTML = `<td class="center">${element.nroSerial}</td><td class="center">${element.imei}</td><td class="center">${element.brand}</td>`;
      tbody.appendChild(row);
    });
  }
}

// Agregar Cliente
function addClient(name, lastname, dni, nroPhone, address) {
  let clientManager = new Client(name, lastname, dni);
  clientManager.addClient(name, lastname, dni, nroPhone, address);
}

// Agregar Teléfono Reportado
function addPhoneReported() {
  let nroSerial = document.getElementById("nroSerial").value;
  let imei = document.getElementById("imei").value;
  let brand = document.getElementById("brand").value;

  let phoneReported = new PhoneReported();
  phoneReported.addPhoneReported(nroSerial, imei, brand);
}

// Verificar Cliente
function verifyClient(dni) {
  let clients = JSON.parse(localStorage.getItem("clientList")) || [];
  let client = clients.find(c => c.dni === dni);
  if (client) {
    alert("Cliente verificado: " + client.name + " " + client.lastname);
  } else {
    alert("Cliente no encontrado");
  }
}

// Event listeners
document.getElementById("btnRegisterClient").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let dni = document.getElementById("dni").value;
  let nroPhone = document.getElementById("nroPhone").value;
  let address = document.getElementById("address").value;
  addClient(name, lastname, dni, nroPhone, address);
});

document.getElementById("btnAddPhone").addEventListener("click", function (event) {
  event.preventDefault();
  addPhoneReported();
});

document.getElementById("btnVerifyClient").addEventListener("click", function () {
  let dni = document.getElementById("dni").value;
  verifyClient(dni);
});

document.getElementById("btnAddTechnician").addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let dni = document.getElementById("dni").value;
  let skills = document.getElementById("skills").value;
  addTechnician(name, lastname, dni, skills);
});

// Inicialización al cargar la página
window.onload = function () {
  new Client();
  new PhoneReported();
  new Technician();
};

// Obtener el año actual
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;
