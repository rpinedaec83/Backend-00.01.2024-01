// calculadora

/*let numero1 =0;
let numero2 =0;
let opcion =0;


numero1 = prompt("Ingrese el primer numero")
numero2 = prompt ("Escribe el segundo nuemro")
opcion = prompt  ("Escribe las peraciones:  1 Suma, 2 Resta, 3 Multiplicación, 4 División")

console.log (numero1)
console.log(numero2)
console.log(opcion)

//let respuesta = numero1+numero2;


/*
if (opcion==1) {
    repuesta = numero1+numero2;
} else if(opcion==2){
    respuesta = numero1-numero2;
} else if (opcion==3){
    respuesta = numero1*numero2;
} else if (opción==4){
    respuesta = numero1/numero2;
}

*/

let numero1 = 0;
let numero2 = 0;
let opcion = 0;

numero1 = prompt("Ingrese el primer número");
numero2 = prompt("Escribe el segundo número");
opcion = prompt("Escribe la operación: 1 Suma, 2 Resta, 3 Multiplicación, 4 División");

console.log(numero1);
console.log(numero2);
console.log(opcion);

switch (parseInt(opcion)) {
    case 1:
        respuesta = parseInt(numero1) + parseInt(numero2);
        break;
    case 2:
        respuesta = parseInt(numero1) - parseInt(numero2);
        break;
    case 3:
        respuesta = parseInt(numero1) * parseInt(numero2);
        break;
    case 4:
        respuesta = parseInt(numero1) / parseInt(numero2);
        break;
    default:
        alert("Opción no válida");
        break;
}

console.log(respuesta);