function ejecicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}

function ejecicio2(){
    let numero = prompt("Escriba su numero");
    if(numero>0){
        alert("El nùmero es positivo")
    }
    else{
        alert("El nùmero es negativo");
    }
}

function ejecicio3(){
    let numero = prompt("Escriba su numero");
    if(numero%10===4){
        alert("El nùmero termina en 4")
    }
    else{
        alert("El nùmero no termina en 4");
    }
}

function ejecicio4(){
    let numero1 = prompt("Escriba el primer numero");
    let numero2 = prompt("Escriba el segundo numero");
    let numero3 = prompt("Escriba el tercer numero");
    numeros = [numero1, numero2, numero3].sort((a, b) => a - b);

    alert('Números de menor a mayor: ' +numeros.join(' , '));
}

function ejecicio5(){
    let Cantzap = prompt("Ingrese la cantidad de zapatos que desea comprar");
    precioUnitario = 80;
    total= Cantzap*precioUnitario;
    if(Cantzap > 30){
        descuento=0.4;
    }    else if(Cantzap > 20){
        descuento=0.2;
    }    else if(Cantzap > 10){
        descuento=0.1;
    }
    const montoFinal = total*(1-descuento);
    alert('Se debe pagar: '  +montoFinal);
}

function ejecicio6(){
    let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas en la semana");
    tarifanormal = 20;
    tarifaExtra = 25;
    
    if(horasTrabajadas <= 40) {
        sueldoSemana = horasTrabajadas * tarifanormal;
    } else {
        const horasNormales = 40;
        const horasExtras = horasTrabajadas - horasNormales;
        sueldoSemana = (horasNormales * tarifanormal) + (horasExtras * tarifaExtra);
      }

    alert('El sueldo es: '  +sueldoSemana);
}

function ejecicio7(){
let tipocliente = prompt("Ingrese el tipo de membresìa (A,B o C)");
let monto= prompt("Ingrese el tipo de la compra");
if(tipocliente==='A'){
    totalpagar=0.9*monto;
}    else if(tipocliente==='B'){
    totalpagar=0.85*monto;
}    else if(tipocliente==='C'){
    totalpagar=0.8*monto;
}
alert('Total a pagar:' +totalpagar);
}

function ejecicio8(){
    let nota1 = prompt("Ingrese la primera nota");
    let nota2 = prompt("Ingrese la segunda nota");
    let nota3 = prompt("Ingrese la tercera nota");
    notapromedio=(nota1/3+nota2/3+nota3/3)
    if(notapromedio>=12){
        alert('El estudiante aprobò con: ' +notapromedio);
    }    else{
        alert('El estudiante desaprobò con: ' +notapromedio);
    } 
    }

function ejecicio9(){
    let sueldo = prompt("Ingrese su sueldo actual en $");
    porcentaje1=0.05;
    porcentaje2=0.10;
    if(sueldo>2000){
        alert('Su aumento serà de ' +sueldo*porcentaje1);
    }    else{
        alert('Su aumento serà de ' +sueldo*porcentaje2);
    } 
    }

function ejecicio10(){
    let numero = prompt("Escriba su numero");
    if(numero%2===0){
        alert("El nùmero ingresado es par")
    }
    else{
        alert("El nùmero ingresado es impar");
    }
}

function ejecicio11(){
    let numero1 = prompt("Ingrese el primer nùmero");
    let numero2 = prompt("Ingrese el segundo nùmero");
    let numero3 = prompt("Ingrese el tercer nùmero");
    let mayor;
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else if (numero3 >= numero1 && numero3 >= numero2){
        mayor = numero3;
    }
    alert("El mayor nùmero es: " +mayor);
}

function ejecicio12(){
    let numero1 = prompt("Ingrese el primer nùmero");
    let numero2 = prompt("Ingrese el segundo nùmero");
    let mayor;
    if (numero1 >= numero2) {
        mayor = numero1;
    } else {
        mayor = numero2;
    }
    alert("El mayor nùmero es: " +mayor);
}

function ejecicio13(){
    let letra = prompt("Ingrese una letra en minùscula");
    if (letra === 'a'||letra === 'e'||letra === 'i'||letra === 'o'||letra === 'u') {
        alert("El caracter es una vocal");
    } else {
        alert("El caracter es una consonante");
    }

}

function ejecicio14(){
    let numero = prompt("Ingrese un nùmero entero del 1 al 10");
    if(10>=numero){
    if (numero === '2'||numero === '3'||numero === '5'||numero === '7') {
        alert("El nùmero es primo");
    } else{
        alert("El nùmero no es primo");
    }
    }
    else {
        alert("El nùmero es mayor a 10, ingrese un nùmero entero menor a 10")
    }
}

function ejecicio15(){
    let centi = prompt("Ingrese una longitud en centimetros: ");
    centi2= centi/2.54;
    alert("La longitud en pulgadas es: " +centi2);
    
    let peso = prompt("Ingrese el peso en libras: ");
    peso2= peso*0.453592
    alert("El peso en kilogramos es: " +peso2);
}

function ejecicio16(){
    let numero = prompt("Ingrese un nùmero del 1 al 7: ");
   switch(numero){
    case '1':
    alert("El dìa es lunes");
    break;

    case '2':
    alert("El dìa es martes");
    break;

    case '3':
    alert("El dìa es miercoles");
    break;

    case '4':
    alert("El dìa es jueves");
    break;

    case '5':
    alert("El dìa es viernes");
    break;

    case '6':
    alert("El dìa es sabado");
    break;

    case '7':
    alert("El dìa es domingo");
    break;

    default :
    alert("Ingrese un nùmero del 1 al 7");
    }
}


function ejecicio17(){

let horaIngresada = prompt("Ingrese la hora en formato HH:mm:ss");

// Validar si la hora ingresada tiene un formato válido (opcional)
let formatoValido = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(horaIngresada);

if (formatoValido) {
  let nuevaHora = calcularSiguienteSegundo(horaIngresada);
  alert(`La hora dentro de un segundo será: ${nuevaHora}`);
} else {
  alert("Formato de hora inválido. Por favor, ingrese en el formato HH:mm:ss.");
}
}