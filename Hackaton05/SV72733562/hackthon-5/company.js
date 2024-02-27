const Phone = require("./phone");
const Client = require("./client");
const Ticket = require("./ticket");
class Company {
  phoneReported = []; //celulares reportados
  tickets = [];
  clients = [];
  constructor(name) {
    this.name = name;
  }

  //agregar celulares reportados
  addedPhoneReported(phone) {
    let existsPhone;

    for (let i = 0; i < this.phoneReported.length; i++) {
      if (this.addedPhoneReported[i].emei == phone.emei) {
        existsPhone == this.addedPhoneReported[i];
      }
    }

    if (!existsPhone) {
      this.phoneReported.push(phone);
    }

    return phone;
  }
  //buscar celular reportado
  findOnePhoneReported(emei) {
    
    return this.phoneReported.find((e) => e.emei == emei);
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
  //budcar clientes
  findOneClient(dni) {
    return this.clients.find((client) => client.dni == dni);
  }

  generateDiagnosis(client, phone, description) {
    const existsPhoneReported = this.findOnePhoneReported(phone.emei); // revisa si esta reportado

    if (existsPhoneReported) {
      console.log("no puede acceder al servicio")
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

const newCompany = new Company("techNew");

module.exports = newCompany;
