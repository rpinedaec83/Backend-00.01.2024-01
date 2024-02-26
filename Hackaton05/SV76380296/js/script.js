class Phone{
    constructor(emei, marca, modelo, repuestos){
        this.emei = emei;
        this.marca = marca;
        this.modelo = modelo;
        this.repuestos = repuestos;
    }
}
class Client {
    constructor(firstName,lastName,dni,sucursal){
        this.firstName = firstName
        this.lastName = lastName
        this.dni = dni
        this.sucursal = sucursal
    }
}
class Ticket{
    constructor(state,description,phone,payment,paymentPercentage,client,sucursal,empleado){
        this.state = state;
        this.description = description;
        this.phone = phone;
        this.payment = payment;
        this.paymentPercentage = paymentPercentage ;       
        this.client = client;
        this.sucursal = sucursal;
        this.empleado = empleado;
    }
}
class Sucursal{
    constructor(direccion,empleados,caja,id){
        this.direccion = direccion;
        this.empleados = empleados;
        this.caja = caja;
        this.id = id;
    }
}
class Employee{
    constructor(firstName,lastName,dni,expertise){
        this.firstName = firstName
        this.lastName = lastName
        this.dni = dni
        this.expertise = expertise
    }
};
class Repuesto{
    constructor(tipo,precio){
        this.tipo = tipo
        this.precio = precio
    }
}


class Company {
    phoneReported = [];
    tickets = [];
    clientes = [];
    arrSucursales = [];
    arrRepuestos = [];

    constructor(nombre){
        this.nombre = nombre;
    }

    addedPhoneReported(phone) {
        let existsPhone;
        
        for (let i = 0; i < this.phoneReported.length; i++) {
            if (this.phoneReported[i].emei == phone.emei){
                existsPhone = this.addedPhoneReported[i];
            }
        }

        if (!existsPhone) {
            this.phoneReported.push(phone);
            console.log("Nuevo celular agregado!");
        }
        
        return phone;

    }
    
    findOnePhoneReported(emei){
        return this.phoneReported.find((e) => e.emei == emei)
    }
    
    addedClient(firstName, lastName, dni, sucursal) {
        const result = this.findOneClient(dni);
        if(result){
           return result; 
        }
        
        const newClient = new Client(firstName,lastName,dni,sucursal)

        this.clientes.push(newClient)
        return newClient
    }

    findOneClient(dni) {
        return this.clientes.find((client) => client.dni == dni)
    }

    crearDiagnostico(client,phone,description,sucursal){
        const existsPhoneReported = this.findOnePhoneReported(phone.emei);
        
        if(existsPhoneReported){
            console.log("Servicion't");
            console.log(`No se puede brindar este servicio, llamando a la policia...`);
        }

        const existsClient = this.findOneClient(client.dni);
        if(!existsClient){
            this.addedClient(client.firstName, client.lastName, client.dni, client.sucursal);
        }

        const data = {
            client: client,
            phone: phone,
            description, //description: description
            state: "diagnostico",
            payment: 0,
            paymentPercentage: 0,
            sucursal: client.sucursal
        };

        const newTicket = new Ticket(
            data.state,
            data.description,
            data.phone,
            data.payment,
            data.paymentPercentage,
            data.client,
            data.sucursal
        );

        if(!existsPhoneReported){
            const ticketTecnico = this.revisarDisponibilidad(newTicket)
            if (ticketTecnico != -1){
                this.tickets.push(ticketTecnico)
                console.log(this.tickets)
                console.log("Se ha generado el ticket #" + this.tickets.length)
                console.log(`Para proceder, es necesario su aprobacion.`)
                return this.tickets.length;
            } else {
                console.log("Lo sentimos, no tenemos un tecnico disponible en su sucursal.")
                return -1;
            }
        } else {
            return -1;
        }
        
    }

    añadirSucursal(direccion,empleados,caja,id){
        const sucursal = new Sucursal(direccion,empleados,caja,id)
        this.arrSucursales.push(sucursal)
    }

    añadirEmpleado(nombre,apellido,dni,expertise,sucursalId){
        const empleado = new Employee(nombre,apellido,dni,expertise)

        for (let i = 0; i < this.arrSucursales.length; i++) {
            if (this.arrSucursales[i].id == sucursalId){
                this.arrSucursales[i].empleados.push(empleado)
            }
            
        }
    }

    añadirRepuesto(tipo,precio){
        const repuesto = new Repuesto(tipo,precio)
        this.arrRepuestos.push(repuesto)
        console.log(`El siguiente repuesto: "${repuesto.tipo}" se encuentra en el lugar ${this.arrRepuestos.length}, con un precio de ${precio}.`)
    }
    
    revisarDisponibilidad(ticket){
        for (let i = 0; i < this.arrSucursales.length; i++) {
            console.log("Buscando Sucursal...")

            if (this.arrSucursales[i].direccion == ticket.sucursal) {
                console.log(`Sucursal hallada: ${ticket.sucursal}.`);
                ticket.sucursal = this.arrSucursales[i];
                for (let i2 = 0; i2 < this.arrSucursales[i].empleados.length; i2++) {
                    let empleadoBuscar = this.arrSucursales[i].empleados[i2];
                    console.log("Buscando empleado valido...")
                    let empleadoValido = empleadoBuscar.expertise.find((e) => e == ticket.phone.marca)
                    
    
                    if(empleadoValido){
                        console.log("HALLADO")
                        console.log(empleadoBuscar)
                        ticket.empleado = empleadoBuscar;
                        return ticket;
                    };
                    
                }
            }
            
        }

        return -1;
    }

    servicioAceptar(ticket,confirmacion,precio,tipoCambio){
        console.log(ticket)
        if (confirmacion == "SI"){
            const theTicket = this.tickets[ticket-1]
            console.log("TICKET CONFIRMADO.")
            console.log(this.tickets[ticket-1])
            console.log(confirmacion)
            theTicket.payment += (precio/2);
            if (tipoCambio = "voucher" ){
                theTicket.sucursal.caja.voucher += theTicket.payment;
                theTicket.paymentPercentage = 50;
            } else if (tipoCambio = "efectivo"){
                theTicket.sucursal.caja.efectivo += theTicket.payment;
                theTicket.paymentPercentage = 50;
            }
            console.log(theTicket.sucursal.caja)
            console.log(theTicket.payment)
        } else {
            console.log("Se ha cancelado el servicio.")
        }
        return confirmacion;
    }

    agregarRepuestos(ticket,repuestoId){
        const theTicket = this.tickets[ticket-1]
        theTicket.phone.repuestos.push(this.arrRepuestos[repuestoId-1])
        theTicket.payment += this.arrRepuestos[repuestoId-1].precio;
        console.log("Repuesto agregado!")
        console.log(theTicket.phone)
        console.log(theTicket.payment)
    }


    pagoTotal(ticket,tipoCambio){
        const theTicket = this.tickets[ticket-1]
        if (tipoCambio = "voucher" ){
            theTicket.sucursal.caja.voucher += theTicket.payment;
            theTicket.paymentPercentage = 100;
        } else if (tipoCambio = "efectivo"){
            theTicket.sucursal.caja.efectivo += theTicket.payment;
            theTicket.paymentPercentage = 100;
        }
        console.log(theTicket)

        console.log("Terminado. Gracias por su preferencia!")

    }
}

const company = new Company("amongUs")





company.añadirSucursal("Lince",[],{voucher: 100, efectivo: 100},1)
company.añadirSucursal("La Molina",[],{},2)

company.añadirEmpleado("Among","Tecnico",948382743,["Apple","Motorola"],1)
company.añadirEmpleado("Pedro", "Seuss",948247382,["Motorola"],1)

company.añadirEmpleado("asdjsijdiejd","The",493493488,["Samsung"],2)
company.añadirEmpleado("asdjsijdiejd","The",493493488,["Apple","Xiaomi"],2)

company.añadirRepuesto("Bateria",140)

const phoneReported = new Phone("47gh324", "xiomi", "redmi note 10");
const phoneReported2 = new Phone("47ah324", "xiom3", "redmi note 10");
const phoneReported3 = new Phone("47ah324", "xiom3", "redmi note 10");


company.addedPhoneReported(phoneReported);
company.addedPhoneReported(phoneReported2);
company.addedPhoneReported(phoneReported3);
console.log(company.phoneReported);

const añadirNumero = (emei,marca,modelo) => {
    emei = prompt("Ingrese el imei del celular.")
    marca = prompt("Ingrese la marca del telefono.\nMarcas: \"Motorola\", \"Apple\", \"Samsung\", \"Xiaomi\"")
    modelo = prompt("Ingrese el modelo del celular.")
    const newerPhone = new Phone(emei,marca,modelo,[])
    console.log(newerPhone)
    return newerPhone;
}

const añadirCliente = (firstName, lastName, dni, sucursal) => {
    firstName = prompt("Ingrese su primer nombre")
    lastName = prompt("Ingrese su apellido.")
    dni = parseInt(prompt("Ingrese su DNI."))
    sucursal = prompt("Ingrese su sucursal.\nSucursales disponibles: \"Lince\", \"La Molina\" ")
    const newerClient = new Client(firstName,lastName,dni,sucursal)
    console.log(newerClient)
    return newerClient;

}

const diagnostico = () =>{
    problema = prompt("Diganos cual es el problema.")
    const cliente = añadirCliente()
    const numero = añadirNumero()
    const newerTicket = company.crearDiagnostico(cliente,numero,problema);
    if (newerTicket != -1){
        const confirmar = prompt("Acepta? escriba \"SI\" para confirmar.")
        console.log(confirmar)
        const confirmacion = company.servicioAceptar(newerTicket,confirmar,400,"efectivo");
        console.log(confirmacion)
        if (confirmacion == "SI"){
            company.agregarRepuestos(newerTicket,1)
            company.pagoTotal(newerTicket,"efectivo")
        }
    } else {
        console.log("Servicio cancelado.")
    }
}


const newClient = new Client("Pedro","Silva",398293,"Lince")
const newPhone = new Phone("r342f34fg","Motorola","g20",[])

const newTicket1 = company.crearDiagnostico(newClient,newPhone,"No puedo llamar");
company.servicioAceptar(newTicket1,"SI",400,"efectivo")
company.agregarRepuestos(newTicket1,1)
company.pagoTotal(newTicket1,"efectivo")

const newClient2 = new Client("AMONG","US",304293,"Polus")
const newPhone2 = new Phone("r342r34fg","Motorola","g40",[])

const newTicket2 = company.crearDiagnostico(newClient2,newPhone2,"AMONGUS");

const newClient3 = new Client("AMONG","US",304293,"La Molina")
const newPhone3 = new Phone("47gh324", "Xiaomi", "redmi note 10",[])

company.crearDiagnostico(newClient3,newPhone3,"Aa");

console.log("Realize un nuevo pedido de servicio.")




//console.log(company.tickets)
//console.log(company.clientes)
//console.log(company.arrSucursales)