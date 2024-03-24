debugger;

console.log("Inicio de la clase");

function saludar(nombre) {
  console.log("Hola " + nombre);
}

let msg = saludar("Roberto");
console.log(msg);

function despedir() {
  return "chao";
}

let mensaje = despedir();



console.log(mensaje)
function antencionAlCliente(){
    let option = promtp("Que deseas: 1 -> Cafe, 2 -> Postre")
    switch (option) {
    
        case 1:
            let azucar = prompt("Deseas Azucar");
            let tipoCafe = prompt("Que tipo de ")
    }

}
const promedio = (... args) => {
    let sum = 0;


}


console.log(mensaje);

function prepararCafe(azucar = true, tipoCafe, tamaño, leche) {
  let producto = "";
  let agua;
  let cafe;

  switch (tamaño) {
    case "pequeño":
      agua = 300;
      console.log(`Hirviendo ${agua}ml de agua`);
      producto += `Cafe ${tamaño} `;
      break;
    case "mediano":
      agua = 400;
      producto += `Cafe ${tamaño} `;
      console.log(`Hirviendo ${agua}ml de agua`);
      break;

    case "grande":
      producto += `Cafe ${tamaño} `;
      agua = 500;
      console.log(`Hirviendo ${agua}ml de agua`);
      break;

    default:
      break;
  }

  if (tipoCafe == "descafeinado") {
    cafe = "descafeinado";
  } else {
    producto += ` ${tipoCafe}`;
    cafe = "normal";
  }

  if (leche !== null) {
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
    producto += ` con Azucar`;
    console.log("Agregando azucar");
  }

  return producto;
}

function atencionCliente() {
  let opcion = prompt("Que necesitas: 1->Cafe, 2->Postre");
  switch (opcion) {
    case "1":
      let azucar = prompt("Desea Azucar");
      let tipoCafe = prompt("Que tipo de cafe quieres");
      let tamaño = prompt("En que tamaño");
      let leche = prompt("que tipo de leche");
      let producto = prepararCafe(azucar, tipoCafe, tamaño, leche);
      console.log(producto);
      break;
  }
}

const suma = function (a, b) {
  return a + b;
};

console.log(suma(22, 33));

const x = (x, y) => {
  return x * y;
};

console.log(x(2, 4));

const promedio = (...args) => {
  let sum = 0;
  for (let arg of args) sum += arg;
  let cant = args.length;
  return sum / cant;
};

console.log(promedio(2, 3, 4, 5, 77, 88, 99));

const  = (x, y) => x * y;
console.log(x(2, 4));

let obj = {
  nombre: "Roberto",
  apellido: "Pineda",
  edad: 40,
};

let tv = {
  marca: "LG",
  tamaño: 55,
  pantalla: "4K",
  SO: "webtv",
  tipo: "SmartTV",
  enceder() {
    console.log("La tv se esta prendiendo");
  },
  apagar() {
    console.log("la tv se esta apagando");
  },
  cambiarCanal(canal) {
    console.log("Se esta cambiando el canal al " + canal);
  },
};

console.log(tv.marca);
tv.enceder();

let taza = {

  material: "ceramica",
  color: "negro",
  capacidad: "400 ml",
  marca: "generica",
  resistencia: "200C",
  costo: 200,
  precio: 300,
  vender() {
    console.log("se esta veindiendo esta taza");
  },
  comprar() {
    console.log("se esta comprando esta taza");
  },
};


for (const propiedad in taza) {
  const element = taza[propiedad];
  console.log(element);
}

console.log(taza["resistencia"]);

/*
cliente
proveedor
armario
celular
aspiradora
helado
maquina registradora
*/

let cliente = {
  numeroIdentificacion: "001575291",
  tipoIdentificacion: "CE",
  nombre: "Roberto",
  apellido: "Pineda",
  fechaNacimiento: Date("1983-08-28"),
  sexo: "Masculino",

  comprar(taza) {
    console.log(
      `El cliente ${this.nombre} esta comprando una taza de ${taza.capacidad}`
    );
  },
  devolver() {},
};

for (const key in cliente) {
  const element = cliente[key];
  console.log(`${key} ---> ${element}`);
}


cliente.comprar(taza);

