
//debugger

console.log("Inicio de la clase.")

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
};

function despedir() {
    return "Chao!";
};

let msg = saludar("Amongus");
console.log(msg);

saludar();

let mensaje = despedir();

console.log(mensaje);

function prepararCafe(azucar=true, tipoCafe, tamaño, leche) {
    
    let agua;
    let cafe;
    let producto = ""
    
    switch (tamaño) {
        case "pequeño":
            agua = 300;
            console.log(`Hirviendo ${agua}ml de agua`)
            producto += `Cafe ${tamaño}`
        break;
        case "mediano":
            agua = 400;
            console.log(`Hirviendo ${agua}ml de agua`)
            producto += `Cafe ${tamaño}`
        break;
        case "grande":
            agua = 500;
            console.log(`Hirviendo ${agua}ml de agua`)
            producto += `Cafe ${tamaño}`
        break;
        default:

        break;
    }

    if(tipoCafe == "descafeinado"){
        cafe = "descafeinado"
    } else {
        producto += ` ${tipoCafe}`
        cafe = "normal"
    }

    if (leche !== null){
        switch (leche) {
            case "deslactosada":
                
            break;
            case "almendras":
                
            break;
            default:
                
            break;
        }
    }

    if (azucar) {
        console.log("Agregando azucar!")
        producto += ` con Azucar`
    } else {
        producto += ` sin Azucar`
    }

    return producto
};

function atencionCliente() {
    let opcion = prompt("Que necesitas: 1 -> Cafe, 2 -> Postre")
    switch (opcion) {
        case "1":
            let azucar = prompt ("Desea Azucar?");
            let tipoCafe = prompt ("Eliga el tipo de cafe.\nTenemos: Granos de Amongus, Mocha, Latte, Normal")
            let tamaño = prompt ("Que tamaño desea?")
            let leche = prompt ("Desea algun tipo de leche?")
            let producto = prepararCafe(azucar,tipoCafe,tamaño,leche)
            console.log(producto)
        break;
        default:

        break;
    }
}

let producto = prepararCafe(true,"Granos de Amongus","mediano",null)

console.log(producto)

const suma = function(a,b) {return a + b}

console.log(suma(22,33))

const resta = (x,y) => {return x - y};

console.log(resta(100,30.4))

const promedio = (...args) =>{
    let sum = 0;
    for (let arg of args) sum+= arg;
    let cant = args.length
    return sum/cant
}


console.log(promedio(2,3,4,5,10,203,40))



//objetos

let obj={
    nombre:"AMONGUS",
    apellido:"AMONGUSSUS",
    edad: 40
}

let tv = {
    marca: "LG",
    tamaño: 55,
    pantalla: "4K",
    SO: "webtv",
    tipo: "SmartTv",
    encender(){
        console.log("La TV se esta prendiendo.")
    },
    apagar(){
        console.log("La TV se esta apagando.")
    },
    cambiarCanal(canal){
        console.log("Se esta cambiando el canal al canal " + canal + ".")
    }

};

console.log(tv.marca)

let taza={
    material: "ceramica",
    color: "negro",
    capacidad: "400 ml",
    marca: "generica",
    resistencia: "200C",
    precio: 200,
    precio: 300,
    vender(){
        console.log("Se esta vendiendo esta taza.")
    },
    comprar(){
        console.log("Se esta comprando esta taza.")
    }

}

for(const propiedad in taza) {
    if (Object.hasOwnProperty.call(taza, propiedad)){
        const element = taza[propiedad]
        console.log(element)
    }

};

console.log(taza["resistencia"])
console.log(taza.resistencia)

/*
Caracteristicss y funciones de:
cliente
proveedor

armario
celular

aspiradora

helado

maquina registradora

*/

let cliente = {
    numeroID: "96340196",
    tipoID: "DNI",
    nombre: "Among",
    apellido: "Sus",
    fechaNacimiento: Date("1987-03-03"),
    sexo: "Masculino",
    dinero: 100,

    comprar(taza){
        console.log(`El cliente ${this.nombre} ${this.apellido} esta comprando una taza de ${taza.capacidad}`)
    },
    devolver(){
        console.log("Va a devolver un producto.")
    }
}

let proveedor = {
    nombre: "Empresa",
    RUC: "93049283",
    producto: "Taza",
    direccion: "Direccion",
    precio: 3,
    lotes: 40,
    vender(){
        console.log("Va a realizar una venta.")
    }
}

let armario = {
    articuloRopa: "Polos",
    espaciosDisponibles: 40,
    largo: "200 cm",
    ancho: "150 cm",
    
    guardar(){
        console.log("Va a guardar ropa.")
    },
    Sacar(){
        console.log("Va a sacar ropa.")
    }

}

let celular = {
    modelo: "Samsung Galaxy A50",
    precio: 1000,
    tamañoAlmacenamiento: "512 GB",
    memoriaRAM: "128 GB",
    ancho: "25 cm",
    largo: " 15 cm"
}

for(const propiedad in cliente) {
    if (Object.hasOwnProperty.call(cliente, propiedad)){
        const element = cliente[propiedad]
        console.log(element)
    }

};