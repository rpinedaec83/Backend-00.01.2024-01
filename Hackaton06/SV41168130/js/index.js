console.log("Inicio del Programa")

class Location{
    constructor(id, name, state, province, district) {
        this.id = uuid();
        this.name = name;
        this.state = state;
        this.province = province;
        this.district = district;
    }
}

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Manager extends Person{
    constructor(firstName, lastName, id, location){
        super(firstName, lastName);
        this.id = id;
        this.location = location;
    }
}

class Technician extends Person{
    constructor(firstName, lastName, id, location, skills){
        super(firstName, lastName);
        this.id = id;
        this.location = location;
        this.skills = skills;
    }

    addClient(){        
        let id = uuid();
        let firstName = prompt("Ingrese el Nombre");
        let lastName = prompt("Ingrese el Apellido");
        let dni = prompt("Ingrese el DNI");
        let phone = prompt("Ingrese el # móvil"); 

        let client = new Client(id, firstName, lastName, dni, phone, this.location);
        arrClient.push(client);
    }   

    addDevice(idClient){
        let id = uuid();
        let imei = prompt('Ingrese el Imei');
        let brand = prompt('Ingrese la Marca');
        let model = prompt('Ingrese el Modelo');
        let paymentStatus = 'Pendiente';
        let deviceStatus = 'Registrado';
        let diagnosis = [];
        let authorize = false;
        let spareParts = [];
        if (reviewReport()){
            deviceStatus = 'Reportado';
            diagnosis = 'Reportado como robado';
        }
        let device = new Device(id, idClient, imei, brand, model, paymentStatus, deviceStatus, diagnosis, authorize, spareParts);                
        arrDevice.push(device);
    }    
    
    addDiagnosis(device){
        let diag = prompt('Ingrese el Diagnostico');
        let pos = arrDevice.findIndex(({id}) => id === device.id);
        arrDevice[pos].diagnosis = diag;
        deviceDatabase.saveAllElements(arrDevice);
    }

    getDevices(idClient){        
        arrDeviceClient = [];
        let localDataDevices = localStorage.getItem("device");

        if (localDataDevices !== null && localDataDevices !== "null") {
            arrDevice = JSON.parse(localDataDevices);

            for (let index = 0; index < arrDevice.length; index++) {
                const element = arrDevice[index];

                if (element.idClient === idClient) {
                    arrDeviceClient.push(arrDevice[index]);
                }
            }
        }       
    }
}

class Client extends Person{
    constructor(id, firstName, lastName, dni, phone, location){
        super(firstName, lastName);
        this.id = id;
        this.dni = dni;
        this.phone = phone;
        this.location = location;
    }

    authorize(){
        this.authorize = true;
    }

    Payment(imei, type){
        let objDispositivo = findDevice(imei);
        if (objDispositivo.reviewReport()) {
            alert("El dispositivo esta reportado como robado")
        } else {
            console.log("No esta robado")
            objDispositivo.paymentStatus = type;
        }
    }
}


class Device{

    constructor(id, idClient, imei, brand, model, paymentStatus, deviceStatus, diagnosis, authorize, spareParts){
        this.id = id;
        this.idClient = idClient;
        this.imei = imei;
        this.brand = brand;
        this.model = model;
        this.paymentStatus = paymentStatus;
        this.deviceStatus = deviceStatus;
        this.diagnosis = diagnosis;
        this.authorize = authorize;
        this.spareParts = spareParts;
    }        
}

class SpareParts{
    constructor(id, description, price){
        this.id = uuid();
        this.description = description;
        this.price = price;
    }    
}

class Database {       
    constructor(keyElement){
      this.keyElement=keyElement;
    }

    oneElement(keyId) {
        let element = localStorage.getItem(this.keyPhone);
        element = JSON.parse(element);
     
        const existElement = element.find((e) => (e.keyId = keyId));
        return existPhone;
      }
    
    allElements() {
        const elements = localStorage.getItem(this.keyPhone);
        return JSON.parse(elements);
    }
    
    saveOneElement(element) {
        let elements = localStorage.getItem(this.keyPhone);
        elements = JSON.parse(elements);
        elements.push(element);
     
        localStorage.setItem(this.keyPhone, JSON.stringify(elements));
      }
   
    saveAllElements(arrElement) {
        localStorage.setItem(this.keyElement, JSON.stringify(arrElement));
    }
  }

function reviewReport(){
    return Math.random() > 0.5 ? true : false;
}

function uuid(){       
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function findDevice(imei) {
    for (let index = 0; index < arrDevices.length; index++) {
        const element = arrDevices[index];
        if (element.iMei === imei) {
            return element;
        }

    }
}

function addClient(){
    technician.addClient();
    clientDatabase.saveAllElements(arrClient);
    $tableClients.bootstrapTable('load', arrClient);
}

function addDevice(){
    if (var_idClient !== '') {
        technician.addDevice(var_idClient);
        deviceDatabase.saveAllElements(arrDevice);
        $tableDevices.bootstrapTable('load', arrDevice);
    } else {
        alert('Seleccione un cliente para ingresar un Dispositivo');
    }

    technician.getDevices(var_idClient);
    $tableDevices.bootstrapTable('load', arrDeviceClient);
}

// evento cuando se termina de cargar la pagina web
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    init();
});

var $tableClients = $('#tblClients');
var $tableDevices = $('#tblDevices');

// inicializar los objetos desde la informacion que esta en el localstorage
function init() {    
    let localData = localStorage.getItem("client");
    if (localData !== null && localData !== "null") {
        arrClient = JSON.parse(localData);
    } else {
        //set data dummy
        arrClient = [
            {
                'id' : 'ltc59kx51vp46pdtywl',
                "firstName": "Fernando",
                "lastName": "Alvarado",
                "dni": "41189652",
                "phone": "991065823",
                "location": "Lima - Surco"
            },
            {
                'id' : 'lqc83kx40vr49pdtphy',
                "firstName": "Claudia",
                "lastName": "Morales",
                "dni": "45635281",
                "phone": "926535842",
                "location": "Lima - Surco"
            },
            {
                'id' : 'per51we84vp63wqgynk',
                "firstName": "Angel",
                "lastName": "Cartagena",
                "dni": "47856320",
                "phone": "975236599",
                "location": "Lima - Surco"
            }
        ]
        console.log('load data dummy');
    }

    let localDataDevice = localStorage.getItem("device");

    if (localDataDevice !== null && localDataDevice !== "null") {
        arrDevice = JSON.parse(localDataDevice);
    } else {
        //set data dummy
        arrDevice = [
            {
                'id' : 'ltc6abkdtnoyizmspr',
                'idClient' : 'ltc59kx51vp46pdtywl',
                'imei': '10101010',
                'brand': "Samsung",
                'model': 'S22',
                'paymentStatus': 'Pendiente',
                'deviceStatus': 'Registrado',
                'diagnosis' : [],
                'authorize' : false,
                'spareParts' : []
            },
            {
                'id' : 'pde8abkrgnoyawmsuk',
                'idClient' : 'lqc83kx40vr49pdtphy',
                'imei': '20202020',
                'brand': 'Xiaomi',
                'model': 'P3',
                'paymentStatus': 'Pendiente',
                'deviceStatus': 'Reportado',
                'diagnosis' : 'Reportado como robado',
                'authorize' : false,
                'spareParts' : []
            },
            {
                'id' : 'eva4weqrgnbplwmsku',
                'idClient' : 'per51we84vp63wqgynk',
                'imei': '30303030',
                'brand': 'iPhone',
                'model': '13 Pro',
                'paymentStatus': 'Pendiente',
                'deviceStatus': 'Registrado',
                'diagnosis' : [],
                'authorize' : false,
                'spareParts' : []
            }
        ]
    }
    clientDatabase.saveAllElements(arrClient);
    deviceDatabase.saveAllElements(arrDevice);

    $tableClients.bootstrapTable({ data: arrClient });
    $tableDevices.bootstrapTable({ data: [] });
}

//evento cuando hacemos click en una fila de la tabla Client
$tableClients.on('click-row.bs.table', function (row, $element, field) {
    var_idClient = $element.id;
    technician.getDevices($element.id);    
    $tableDevices.bootstrapTable('load', arrDeviceClient);
})

//evento cuando hacemos click en una fila de la tabla Devices
$tableDevices.on('click-row.bs.table', function (row, $element, field) {
    if($element.deviceStatus !== 'Reportado'){
        if (confirm(`Desea agregar un Diagnostico para el ${$element.brand} ${$element.model}?`)) {
            technician.addDiagnosis($element);
            console.log($element.idClient);
            technician.getDevices($element.idClient); 
            $tableDevices.bootstrapTable('load', arrDeviceClient);
        }
    } else {
        alert('Dispositivo reportado');
    }

    // var_idDevice = $element.id;
    // technician.getDevices($element.id);    
    // $tableDevices.bootstrapTable('load', arrDeviceClient);
})

let arrClient = [];
let arrDevice = [];
let arrDeviceClient = [];
let var_idClient = '';
let technician = new Technician("Fernando", "Paredes", "LIM001", "Lima - Surco", []);
let clientDatabase = new Database('client');
let deviceDatabase = new Database('device');

// eventos de los botones
document.getElementById("btn-addClient").addEventListener("click", addClient);
document.getElementById("btn-addDevice").addEventListener("click", addDevice);