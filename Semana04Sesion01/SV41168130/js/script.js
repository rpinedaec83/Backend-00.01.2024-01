console.log("Inicio de la clase");

function saludar(nombre){
    console.log("Hola "+ nombre);
}

function despedir(){
    return "chao";
}

let msg = saludar("Roberto");
console.log(msg)
let mensaje = despedir();

console.log(mensaje);


function prepararCafe(azucar=true, tipoCafe, tamaño, leche){

    let producto="";
    let agua;
    let cafe;

    switch (tamaño) {
        case "pequeño":
            agua = 300;
            console.log(`Hirviendo ${agua}ml de agua`);
            producto+=`Cafe ${tamaño} `; 
            break;
        case "mediano":
            agua = 400;
            producto+=`Cafe ${tamaño} `; 
            console.log(`Hirviendo ${agua}ml de agua`);
        break;

        case "grande":
            producto+=`Cafe ${tamaño} `; 
            agua = 500;
            console.log(`Hirviendo ${agua}ml de agua`);
        break;
    
        default:
            break;
    }

    if(tipoCafe== "descafeinado"){
        cafe="descafeinado";
    }else{
        producto+=` ${tipoCafe}`;
        cafe="normal";
    }

    if(leche!==null){
        switch (leche) {
            case "deslactosada":
                
                break;
            case "almendras":

            break;
            default:
                break;
        }
    }
    if(azucar){
        producto += `con Azucar`;
        console.log("Agregando azucar")
    }

    return producto;
}

function atencionCliente(){
    let opcion = prompt("Que necesitas: 1->Cafe, 2->Postre")
    switch (opcion){
        case "1":
            let azucar = prompt("Desea Azucar");
            let tipoCafe = prompt("Que tipo de cafe quieres");
            let tamaño = prompt("En que tamaño")
            let leche = prompt("que tipo de leche")
            let producto =  prepararCafe(azucar,tipoCafe,tamaño,leche);
            console.log(producto)
        break;
    }
}

const suma = function(a, b){return a + b};

console.log(suma(22,33));

const x = (x, y) => { return x * y };

console.log(x(2,4));

const promedio = (...args)=>{
    let sum =0;
    for (let arg of args) sum += arg;
    let cant = args.length
  return sum/cant;
}

console.log(promedio(2,3,4,5,77,88,99))

const w = (x, y) => x * y;
console.log(x(2, 4));

debugger

const client = {
    name: "Helmut",
    lastname: "Pacheco",
    id: 41168133,
    date: Date("1981/05/12"),
    talla: "M",
    registrar(fecha, tipoAfiliacion){

    },
    pagar(moneda,monto){

    },
    devolver(idpago){

    }
};

for (const key in client) {
    const element = client[key];
    console.log(`${key} ---> ${element}`)
}
