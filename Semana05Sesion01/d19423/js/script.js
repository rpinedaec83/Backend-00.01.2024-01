

/*vehiculo
color
modelo
marca
año
--tipoTrasmicion
precio


acelerar
frenar
girar

encender
apagar
*/
class Vehiculo{
    constructor(color,modelo,marca,año,precio){
        this.color= color;
        this.modelo=modelo;
        this.marca=marca;
        this.año = año;
        this.precio = precio;
    }

    acelerar(){
        console.log(`El vehiculo ${this.modelo } esta acelerando`)
    }
    frenar(){
        console.log("El vehiculo esta frenando")
    }
    girar(direccion){
        console.log("El vehiculo esta girando a la "+direccion)
    }
    encender(){
        console.log(`El vehiculo se esta encendiendo`)
    }
    apagar(){
        console.log(`El vehiculo se esta apagando`)
    }
}

let vehiculo1 = new Vehiculo("rojo","M3","BMW",1999,24000);

console.log(vehiculo1.precio)

let vehiculo2 = new Vehiculo("azul","A4", "Audi", 2005, 30000);

console.log(vehiculo2.marca)

vehiculo1.encender();

let vehiculo3 = {
    color:"verde",
    modelo:"E3",
    marca:"MErce3des",año:2009,precio:40000,
    encender(){
        console.log("Encender")
    }
}

vehiculo3.encender()

let arrVehiculos = [vehiculo1,vehiculo2];
arrVehiculos[0].año
vehiculo1.acelerar();
vehiculo1.girar("derecha");

class Auto extends Vehiculo{
    
    constructor(color,modelo,marca,año,precio,llantas, combustible){
        super(color,modelo,marca,año,precio);
        this.llantas = llantas;
        this.combustible = combustible;
    }
    cargarCombustible(galones){
        console.log(`El vehiculo ${this.modelo}  esta cargando ${galones} galones de ${this.combustible}`)
    }
    encender(keycode){
        console.log(`conectando al servidor de llaves`)
        console.log(`validando keycode ${keycode}`)
        console.log(`confirmando keycode ${keycode}`)
        console.log(`El vehiculo se esta encendiendo`)
    }
}

let auto1 = new Auto("Rojo", "318i", "BMW", 2023, 50000,4,"gasolina");
auto1.cargarCombustible(20)
console.log(auto1.modelo)

vehiculo1.encender()
auto1.encender("1234567890")