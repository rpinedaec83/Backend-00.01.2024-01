//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres!");
    } else {
        alert("No tiene 3 caracteres.");
    };
};

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio2(){

    let numero = parseInt(prompt("Escriba su numero, se determinara si es negativo o no."));
    if (isNaN(numero)){
        alert("Error! No ha ingresado un numero correcto.")
    } else if(numero==0){
        alert("Este numero es neutro.")
    };

    if (numero<0 && !isNaN(numero)){
        alert("El numero es negativo!");
    } else if(!isNaN(numero)){
        alert("El numero es positivo.");
    };

};

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio3(){
    let numero = parseInt(prompt("Escriba su numero, se determinara si termina en 4."));

    if (isNaN(numero)){
        alert("Error! No ha ingresado un numero correcto.");
    } else {
        let numero2 = numero.toString();
        console.log(numero2);
        if(numero2[numero2.length-1] == "4"){
            console.log("El numero termina en 4!");
        } else {
            console.log("El numero no termina en 4.");
        };
    };
};

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio4(){

    const array1 = new Array(3);

    for (let i = 0; i < array1.length; i++){
        array1[i] = prompt("Escriba un numero a ordernar. " + (i+1) + " de 3.");
    };

    array1.sort();

    alert("Ordenados de menor a mayor, el resultado es: " + array1[0] + ", " + array1[1] + ", " + array1[2] + ".");
};

//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para 
//vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 
//10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de 
//treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
//El precio de cada zapato es de $80.
function ejercicio5() {
    alert("Bienvenido a la tienda de zapatos. La cantidad de zapatos que compre le dara un descuento.");
    let cantidad = parseInt(prompt("Ingrese su cantidad deseada. 11-20 = -10%, 21-30 = -20%, 31+ = 40%"));
    const precio = 80;
    let descuento;

    if (isNaN(cantidad)){
        alert("Error! No es un numero.");
    } else {
        if (cantidad <= 0) {
            alert("Por favor ingresar un numero valido.");
        } else if(cantidad > 0 && cantidad <= 10) {
            descuento = 0;
        } else if(cantidad > 10 && cantidad <= 20) {
            descuento = 10;
        } else if(cantidad > 20 && cantidad <= 30) {
            descuento = 20;
        } else {
            descuento = 40;
        };
    };

    let respuesta = cantidad*precio*(100-descuento)/100;

    if (!isNaN(cantidad)){
        alert("Su precio final es de " + respuesta + "$, aplicando un descuento del " + descuento + "%.");
    };

};

//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.
function ejercicio6() {
    const horas = prompt("Ingrese el numero de horas que ha trabajado para calcular su sueldo esta semana. El salario es de 20$ por hora, pero cada hora que trabaje por encima de las 40 value 25$.");

    if (horas <= 0) {
        alert("Por favor ingresar un numero valido."); 
    } else if(horas > 0 && horas <= 40){
        alert("Su salario final es de " + (horas*20) + "$.");
    } else {
        alert("Su salario final es de " + ((horas-40)*20+((horas-40)*25)) + "$, con " + (horas-40) + " horas extra trabajadas." );
    };
};

//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía 
//dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//      Tipo A 10% de descuento
//      Tipo B 15% de descuento
//      Tipo C 20% de descuento
function ejercicio7() {
    alert("Bienvenido a la tienda de helado.");

    let sabor = 0;
    let precio = 0;
    let bolas = 0;
    let membresia = 5;
    let descuento = 0;
    const A = "Vainilla";
    const B = "Fresa";
    const C = "Chocolate";
    const D = "Lucuma";
    
    const memA = 10;
    const memB = 15;
    const memC = 20;

    let listaSabores = [A, B, C, D];
    let listaMembresias = [memA, memB, memC];
    
    do {
        sabor = parseInt(prompt("Eliga su sabor de helado. 1 - Vainilla (5$), 2 - Fresa (6$), 3 - Chocolate (7$), 4 - Lucuma (10$)"));
        if(sabor <= 0 || sabor > 4){
            alert("Error. Por favor seleccionar una opcion valida.");
        };
    } while (sabor <= 0 || sabor > 4);
      

    switch(sabor){
        case 1:
            precio = 6;
        break;
        case 2:
            precio = 7;
        break;
        case 3:
            precio = 8;
        break;
        default:
            precio = 10;
        break;
    };

    if (sabor == 1 || sabor == 4){ 
        do {
            bolas = prompt("Eliga la cantidad de bolas. Maximo 6 para Vainilla y Lucuma, maximo 4 para Fresa y Chocolate.");
            if(bolas <= 0 || bolas > 6){
                alert("Error. Por favor seleccionar una opcion valida.");
            };
        } while (bolas <= 0 || bolas > 6);
    } else {
        do {
            bolas = prompt("Elige la cantidad de bolas. Maximo 6 para Vainilla y Lucuma, maximo 4 para Fresa y Chocolate.");
            if(bolas <= 0 || bolas > 4){
                alert("Error. Por favor seleccionar una opcion valida.");
            };
        } while (bolas <= 0 || bolas > 4);
    };

    alert("Su precio total sera de " + (precio*bolas) + "$. ¿Cuenta con una membresia?");

    do {
        membresia = parseInt(prompt("Eliga su membresia. 0 si no tiene membresia. 1 para la Membresia A (10% descuento). 2 para la Membresia B (15% descuento). 3 para la Membresia C (20% descuento)."));
        if(membresia < 0 || membresia > 3){
            alert("Error. Por favor seleccionar una opcion valida.");
        };
    } while (membresia < 0 || membresia > 3);

    switch(membresia){
        case 1:
            descuento = 10;
        break;
        case 2:
            descuento = 15;
        break;
        case 3:
            descuento = 20;
        break;
        default:
        break;
    };

    precio = precio*bolas*(100-descuento)/100;

    alert("Su precio final es de " + precio + "$, con un " + descuento + "% de descuento.");

};

//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio8() {
    const notas = new Array(3);
    let promedio = 0;

    for (let i = 0; i < notas.length; i++){
        notas[i] = parseInt(prompt("Escriba una nota para promediar. " + (i+1) + " de 3."));
    };

    promedio = (notas[0]+notas[1]+notas[2])/3;

    if (promedio > 11) {
        alert("Felicidades! Ha aprobado con una nota de " + promedio + ".");
    } else {
        alert("Su promedio final es de " + promedio + ". No ha aprobado.");
    };

};

//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se 
//debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba 
//menos de $2000 su aumento será de un 10%.
function ejercicio9(){
    
    alert("Bienvenido. Para calcular el aumento de un trabajador, ingrese su salario.");
    
    let salario = prompt("Si el trabajador gana mas de 2000, el aumento es del 5%, si gana menos, el aumento es de 10%.");
    let aumento = 0;

    do {
        if (salario >= 2000){
            aumento = 5;
        } else if (salario > 0 || salario < 2000) {
            aumento = 10;
        } else {
            alert("Error! Por favor ingrese un numero valido.");
        }
    } while (salario <= 0);

    salario = salario*(100+aumento)/100;

    alert("El nuevo salario del trabajador es de " + salario + ", con un aumento del " + aumento + "%.");
};

//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10(){
    
    let numero = prompt("Por favor, ingresa un numero para determinar si es par o impar.");

    if (numero != 0 && numero % 2 == 0) {
        alert("El numero en cuestion es par.");
    } else if (numero != 0 && numero % 2 == 1){
        alert("El numero en cuestion es impar.");
    } else {
        alert("El numero en cuestion es 0, un numero neutro.");
    };
};