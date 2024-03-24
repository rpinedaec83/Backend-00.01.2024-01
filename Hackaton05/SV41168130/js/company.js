const Phone = require ("./phone");
const Client = require("./client");
const Ticket = require("./ticket");

class Company {
    phoneReported  = [];
    tickets = [];
    clients = [];
    constructor (name) {
        this.name = name;
    }

    addedPhoneReported(phone){
        const existsPhone = this.phoneReported.find((e)=>e.imei == phone.imei);
        if (existsPhone){
            this.phoneReported.push(existsPhone);
        }
        return phone;
    }

    findOnePhoneReported(imei){
        return this.phoneReported.find((e)=>e.imei == imei);
    }

    addedClient(firstName, lastName, id){
        const result = this.findOneClient(id);
        if(result){
            return result;
        }        
        const newClient = new Client(firstName, lastName, id);

        this.clients.push(newClient);
        return newClient;
    }

    findOneClient(id){        
        return this.clients.find((client)=>client.id == id);
    }

    generateDiagnosis(client, phone, description){

        const existsPhoneReported = this.findOnePhoneReported(phone.imei);
        if(existsPhoneReported){
            return new Error(
                "No se puede brindar este servicio, llamando a la policia"
            );
        }

        const existsClient = this.findOneClient(client.id);
        if(!existsClient){
            this.addedClient(client.firstName, client.lastName, client.id);
        }

        const data = {
            client: client,
            phone: phone,
            description: description,
            state: 'diagnosis',
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
    }
}

const newCompany = new Company("Sede Central");
module.exports = newCompany;