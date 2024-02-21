/*
cliente
proveedor
armario
celular
aspiradora
helado
maquina registradora
*/

switch (tipo_cli) {
  case 1:
    "Recurrente";
    break;
  case 2:
    "VIP";
    break;
  case 3:
    "Nuevo";
}

let cliente = {
  id_cli: C001,
  tipo_cli: 2,
  nombre: "Marcos",
  apellido: "Mendoza",
  fecha_nac: Date("1975-05-21"),
  sexo: "M",
};

switch (tipo_prov) {
  case 1:
    "Armarios";
    break;
  case 2:
    "Helados";
    break;
  case 3:
    "Celulares";
    break;
  case 4:
    "Aspiradoras";
    break;
}

let proveedor = [
  {
    id_prov: P001,
    tipo_prov: 3,
    nombre: "Honores",
    apellido: "Prada",
    sexo: "M",
    marca: "Samsung",
  },
  {
    id_prov: P003,
    tipo_prov: 1,
    nombre: "Wilson",
    apellido: "Sanchez",
    sexo: "M",
    marca: "IKEA",
  },
  {
    id_prov: P004,
    tipo_prov: 2,
    nombre: "Jhosh",
    apellido: "Del Mar",
    sexo: "M",
    marca: "D'Onofrio",
  },
  {
    id_prov: P002,
    tipo_prov: 4,
    nombre: "María",
    apellido: "Ormendez",
    sexo: "M",
    marca: "Bosh",
  },
];

let armario = {
  altura: "200 cm",
  ancho: "120 cm",
  nro_cajones: 4,
  material: "Madera",
  color: "Marrón",
  cod_prod: "ARM123",
};

let celular = {
  modelo: "Galaxy S20",
  cargador: "USB-C",
  camara: "64 MP",
  memoria: "128 GB",
  color: "Negro",
  precio: 799.99,
  cod_prod: "CEL456",
};

let helado = {
  f_venc: "2024-06-30",
  f_adq: "2024-02-12",
  sabor: "Chocolate",
  precio: 3.99,
  cod_prod: "HEL789",
};

let aspiradora = {
  niveles: 5,
  bateria: "Ion-Litio",
  precio: 199.99,
  material: "Plástico",
  color: "Blanco",
  cod_prod: "ASP012",
};

function maquinaRegistradora() {
  let sum = 0;
  let opcion = prompt("Que desea adquirir: 1->Armario, 2->Celular, 3->Aspiradora, 4->Helado");
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
