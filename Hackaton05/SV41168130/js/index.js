const company = require("./company");
const Client = require("./client");
const Phone = require("./phone");

const newClient = new Client("Renato", "Cisneros", "asdf123");
const newPhone = new Phone("20304050", "Google", "Pixel 8");
company.generateDiagnosis(newClient, newPhone, "No puedo llamar");

// console.log(newClient);
// console.log(newPhone);

const newClient2 = new Client("Silvia", "Rodrguez", "zxcv456");
const newPhone2 = new Phone("30405060", "Apple", "iPhone 14");
company.generateDiagnosis(newClient2, newPhone2, "No enciende");

console.log(company.tickets);
console.log(company.clients);