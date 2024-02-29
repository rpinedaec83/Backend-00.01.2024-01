const company = require("./company");
const Client = require("./client");
const Phone = require("./phone");
const Technician = require("./technician");

console.log(company.phoneReported);
const phoneReported = new Phone("47gh324", "xiomi", "redmi note 10");

company.addedPhoneReported(phoneReported);
// console.log(company.phoneReported)
const newClient = new Client("pedro", "silva", 398293);

const newPhone = new Phone("r342f34fg", "Moto", "g20");

const newTechinician = new Technician("Marcos", "MOTOROLA", 5)

company.generateDiagnosis(newClient, newPhone, "no puedo llamar");

console.log(company.tickets);
console.log(company.clients);

const newClient2 = new Client("juan", "escuadra", 3232);

const newPhone2 = new Phone("47gh324", "xiomi", "redmi note 10");


company.generateDiagnosis(newClient2, newPhone2, "no enciende");

console.log(company.tickets);
console.log(company.clients);
