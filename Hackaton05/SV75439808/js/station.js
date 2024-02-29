const Phone = require("./phone");
const Client = require("./client");
const Ticket = require("./ticket");
const Technician = require("./technician");

class Station {
  phoneReported = []; //celulares reportados
  tickets = []; //tickets
  clients = []; //clientes

  constructor(name) {
    this.name = name; //se agrega el valor nombre  a la propiedad this.nombre
  }

  //agregar celulares reportados
  addedPhoneReported(phone) {
    let existsPhone;

    for (let i = 0; i < this.phoneReported.length; i++) {
      if (this.addedPhoneReported[i].imei == phone.imei) {
        existsPhone == this.addedPhoneReported[i];
      }
    }

    if (!existsPhone) {
      this.phoneReported.push(phone);
    }

    return phone;
  }

  //buscar celular reportado
  findOnePhoneReported(imei) {
    return this.phoneReported.find((e) => e.imei == imei);
  }

  //agregar técnicos
  addedTechnician(name, skills, station) {
    const result = this.findOneTechnician(station);
    if (result) {
      return result;
    }

    const newTechinician = new Technician(name, skills, station);

    this.technicians.push(newTechinician);
    return newTechinician;
  }

  //buscar técnicos
  findOneTechnician(skills) {
    this.technicians.fing((technician) => technician.skills == skills);
  }

  //agregar clientes
  addedClient(fistName, lastName, dni) {
    const result = this.findOneClient(dni);
    if (result) {
      return result;
    }

    const newClient = new Client(fistName, lastName, dni);

    this.clients.push(newClient);
    return newClient;
  }

  //buscar clientes
  findOneClient(dni) {
    return this.clients.find((client) => client.dni == dni);
  }

  generateDiagnosis(client, phone, description) {
    const existsPhoneReported = this.findOnePhoneReported(phone.imei); // revisa si esta reportado

    if (existsPhoneReported) {
      console.log("no puede acceder al servicio");
      throw new Error(
        `No se puede brindar este servicio, llamando a la policia...`
      );
    }

    const existsClient = this.findOneClient(client.dni); //consulta si existe el cliente

    if (!existsClient) {
      this.addedClient(client.firstName, client.lastName, client.dni); //registra un cliente
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

const newStation = new Station("techNew");

module.exports = newStation;
