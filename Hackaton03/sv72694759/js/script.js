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
if(tipocliente=A){
    totalpagar=0.9*monto;
}    else if(tipocliente=B){
    totalpagar=0.85*monto;
}    else if(tipocliente=C){
    totalpagar=0.8*monto;
}
alert('Total a pagar:' +totalpagar);
}