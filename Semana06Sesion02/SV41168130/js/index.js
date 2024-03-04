class Location{
    constructor(id, name, state, province, district) {
        this.id = id;
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
    constructor(firstName, lastName, id, Location){
        super(firstName, lastName);
        this.id = id;
        this.Location = Location;
    }

    addTechnician(location){

    }

    editTechnician(technician){

    }

    deleteTechnician(technician){

    }
}

class Technician extends Person{
    constructor(firstName, lastName, id, location, skills){
        super(firstName, lastName);
        this.id = id;
        this.location = location;
        this.skills = skills;
    }

    addClient(location){

    }
        
    editClient(client){
        
    }
        
    deleteClient(client){
        
    }    

    addDevice(client){

    }

    editDevice(client){

    }

    deleteDevice(client){

    }
    
    getDevices(client){

    }

    findDevice(device){

    }

    setTechnician(technician){

    }

    addDiagnosis(device){

    }

    editDeviceStatus(device){

    }

    addSpareParts(device){

    }

    editSpareParts(spareParts){

    }

    deleteSpareParts(spareParts){

    }
}

class Client extends Person{
    constructor(firstName, lastName, dni, phone){
        super(firstName, lastName);
        this.dni = dni;
        this.phone = phone;
    }

    authorize(){
        this.authorize = true;
    }

    Payment(device, type){

    }
}

class Device{

    constructor(id, imei, brand, model, paymentStatus, deviceStatus, objDiagnosis, authorize, spareParts){
        this.id = id;
        this.imei = imei;
        this.brand = brand;
        this.model = model;
        this.paymentStatus = paymentStatus;
        this.deviceStatus = deviceStatus;
        this.objDiagnosis = objDiagnosis;
        this.authorize = authorize;
        this.spareParts = spareParts;
    }    
}

class SpareParts{
    constructor(id, description, price){
        this.id = id;
        this.description = description;
        this.price = price;
    }    
}

function uuid(){
    let  uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    console.log(uid())
}

uuid();