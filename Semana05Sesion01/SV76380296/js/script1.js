/*
class Persona{
    constructor(nombre,edad,sexo,nroDocumento){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        Object.defineProperty(this,'_nroDocumento', {value: nroDocumento, writable: false})
    }
    get nroDocumento(){
        return this._nroDocumento
    }
    set nroDocumento(newDoc){
        this._nroDocumento = newDoc
    }
}

let roberto = new Persona("Roberto",40,"M","001575291");
console.log(roberto);

roberto._nroDocumento = "0987654"

console.log(roberto)

roberto._nroDocumento = 3333
*/

/*
class Modelos{
    constructor(nombre, descripcion, escala, tipo, esArmado = false){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.escala = escala;
        this.tipo = tipo;
        this.esArmado = esArmado;
    }
    construir(){
        this.esArmado = true;
    }
    customizar(){
        this.esArmado = false;
        setTimeout(function(){
            console.log("Desarmando")
            console.log("Pintando")
            console.log("Armando")
        },5000);
        this.esArmado = true;
    } 
}

let Zaku3 = new Modelos("Zaku3","Modelo de batalla Zaku version 3", "1/144", "RG");
console.log(Zaku3);
Zaku3.construir();
console.log(Zaku3);
Zaku3.customizar();
console.log(Zaku3);

Zaku3.escala = "1/100"

console.log(Zaku3);
*/

/*
cliente
vendedor
proveedor

helado
toppings
conos

*/

class Persona{
    constructor(cod, nombre, telefono, direccion){
        this.cod = cod;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

class Cliente extends Persona{
    constructor(cod, nombre, telefono, direccion, nroDocumento){
        super(cod,nombre,telefono,direccion);
        this.nroDocumento = nroDocumento;
        this.arrProductos = []
    }
    comprar(producto){
        this.arrProductos.push(producto)
        console.log(`Se esta comprando el ${producto.nombre}.`);
    };
    devolver(producto){
        console.log(`Se esta devolviendo el ${producto.nombre}.`);
    }
};

class Vendedor extends Persona{
    constructor(cod, nombre, telefono, direccion, caja){
        super(cod,nombre,telefono,direccion);
        this.caja = caja;
        this.arrProductos = []
    }
    vender(producto){
        this.arrProductos.push(producto)
        console.log(`Se esta vendiendo el ${producto.nombre}.`);
        let formaPago = prompt("Efectivo o Tarjeta?")
        
        let valorTotal = 0;
        for (let i = 0; i < producto.toppins.length; i++) {
            const element = producto.toppins[i];
            valorTotal += element.precio
        }

        valorTotal += producto.precio

        if(formaPago==="Efectivo"){
            this.caja.efectivo += valorTotal
        } else {
            this.caja.vouchers += valorTotal
        }
    };
    recibirDevolucion(producto){
        console.log(`Se esta recibiendo la devolucion del ${producto.nombre}.`);
    };
    cuadrarCaja(){
        console.log("Cerrando caja. Valor total: " + (this.caja.efectivo+this.caja.vouchers))
    }
}

class Proveedor extends Persona{
    constructor(cod, nombre, telefono, direccion, ruc){
        super(cod,nombre,telefono,direccion);
        this.ruc = ruc;
        this.arrProductos = []
    }
    vender(producto){
        this.arrProductos.push(producto)
        console.log(`Se esta vendiendo el ${producto.nombre}.`);
    };
    enviarDevolucion(producto){
        console.log(`Se esta enviando la devolucion del ${producto.nombre}.`);
    };
}

class Productos{
    constructor(nombre,tipo,sabor,precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.sabor = sabor;
        this.precio = precio;
    }
}

class Helado extends Productos{
    constructor(nombre,tipo,sabor,precio,toppins){
        super(nombre,tipo,sabor,precio);
        this.toppins = toppins;

    }
    preparar(...ingredientes){
        console.log("Preparando el helado con los siguientes ingredientes: ");
        for (let i = 0; i < ingredientes.length; i++) {
            const element = ingredientes[i];
            console.log("Se esta agregando " + element + ".")

        }
        console.log("El helado esta listo")
    };
}

let grageas = new Productos("Grajeas","Topping","Chocolate",1)
let galleta = new Productos("Galleta","Topping","Canela",2)


let heladoFresa = new Helado("Helado de Fresa","helado","Fresa",10)
let heladoVainilla = new Helado("Helado de Vainilla", "helado","Vainilla",11)

let cliente1 = new Cliente(1,"Roberto", 916730940, "Lince", "001575291")
let cliente2 = new Vendedor(22, "David", 916730941, "Jesus Maria", {efectivo:200.50, vouchers:0})

heladoFresa.toppins = [grageas,galleta]
cliente1.comprar(heladoFresa)
cliente2.vender(heladoFresa)

console.log(cliente1)
console.log(cliente2)

cliente2.cuadrarCaja();