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
        } else if (salario > 0 && salario < 2000) {
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

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11(){

    const array1 = new Array(3);

    for (let i = 0; i < array1.length; i++){
        array1[i] = prompt("Escriba un numero (" + (i+1) + " de 3) para determinar cual de los 3 es mayor.");
    };

    array1.sort();
    array1.reverse();

    alert("El numero mayor es: " + array1[0] + ".");
};

//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el menor.
function ejercicio12(){

    const array1 = new Array(3);

    for (let i = 0; i < array1.length; i++){
        array1[i] = prompt("Escriba un numero (" + (i+1) + " de 3) para determinar cual de los 3 es menor.");
    };

    array1.sort();

    alert("El numero menor es: " + array1[0] + ".");
};

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13(){
    let letra;

    letra = prompt("Ingrese una letra para determinar si es una vocal.");
    console.log(letra);

    console.log(parseInt(letra.length));

    if (isNaN(parseInt(letra)) && letra.length == 1){
        switch (letra) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                alert(letra + " es una vocal.");
            break;
            default:
                alert(letra + " es una consonante.");
            break;
        }
    } else{
        alert("Por favor ingrese una opcion valida.");
    }
};

//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.
function ejercicio14() {    
    let numero = 0;
    numero = prompt("Ingrese un numero entre el 1 y el 10 para determinar si es primo o no.");
    let divisible = false;

    console.log(numero);
    if(numero > 0 && numero <= 10){
        for (let i = 2; i <= numero/2; i++) {
            if (numero % i == 0){
                divisible = true;
                console.log("Numero divisble hallado! Es " + i + ".");
            };
        };
    
        if (divisible == false && numero > 0){
            alert("El numero " + numero + " es un numero primo.");
        } else {
            alert("El numero " + numero + " no es un numero primo.");
        };
    } else {
        alert("Por favor eliga un numero valido entre el 1 y el 10.");
    };
    
};

//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15() {
    let operacion;
    let numero1 = 0;
    let respuesta = 0;

    do {
        operacion = prompt("Ingrese un numero para realizar una conversion: 1 (centimetros a pulgadas), 2 (pulgadas a centimetros), 3 (libras a kilogramos), 4 (kilogramos a libras)");
        if(operacion <= 0 || operacion > 4){
            alert("Eliga una opcion valida.");
        };
    } while (operacion <= 0 || operacion > 4); 

    switch (operacion.toString()) {
        case "1":
            numero1 = prompt("Ingrese los CENTIMETROS a convertir:");
            respuesta = numero1/2.54;
            alert(numero1 + "cm -> " + respuesta + "in.");
        break;
        case "2":
            numero1 = prompt("Ingrese las PULGADAS a convertir:");
            respuesta = numero1*2.54;
            alert(numero1 + "in -> " + respuesta + "cm.");
        break;
        case "3":
            numero1 = prompt("Ingrese las LIBRAS a convertir:");
            respuesta = numero1/2.20462;
            alert(numero1 + "lb -> " + respuesta + "kg.");
        break;
        default:
            numero1 = prompt("Ingrese los KILOGRAMOS a convertir:");
            respuesta = numero1*2.20462;
            alert(numero1 + "kg -> " + respuesta + "lb.");
        break;
    }
};

//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16(){
    let numero = prompt("Escriba un numero positivo.");
    const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

    if (numero > 0){
        console.log(dias[(numero -1) % 7]);
        alert("El dia de la semana es " + dias[(numero -1) % 7] + ".");
    } else {
        alert("Ingrese un numero valido.");
    };
};

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17() {
    const fecha = new Date("2000-01-01T00:00:00");
    console.log(fecha);
    fecha.setHours(prompt("Ingresar la hora."));
    fecha.setMinutes(prompt("Ingresar los minutos."));
    fecha.setSeconds(prompt("Ingresar los segundos."));

    console.log(fecha);

    fecha.setSeconds(fecha.getSeconds()+1);
    
    let textoFecha = fecha.toString();
    let nuevaHora = textoFecha.substring(16,18);
    let nuevoMinuto = textoFecha.substring(19,21);
    let nuevoSegundo = textoFecha.substring(22,24);

    console.log(textoFecha);

    alert("Dentro de un segundo, su nueva hora sera " + nuevaHora + ":" + nuevoMinuto + ":" + nuevoSegundo + ".");
};

//18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
    //$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
    //$7. Entre 100 y 499 unidades.
    //$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de 
//CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
function ejercicio18(){
    alert("Bienvenido. A continuacion, ingrese la cantidad de articulos a comprar.");
    let unidades;
    let precio;
    let preciofinal;

    do {
        unidades = prompt("10$ si se compra menos de 10 unidades. 8$ de 10 - 99 unidades. 7$ de 100 - 499 unidades. 6$ de 500 a mas.");
        if (unidades >= 500){
            precio = 6;
        } else if (unidades >= 100 && unidades < 500){
            precio = 7;
        } else if (unidades >= 10 && unidades < 100){
            precio = 8;
        } else if (unidades > 0 && unidades < 10) {
            precio = 10;
        } else {
            alert("Error! Por favor ingrese un numero valido.");
        }
    } while (unidades <= 0);

    preciofinal = precio*unidades;

    alert("El precio final de la venta es de " + preciofinal + "$. La ganacia para el vendedor es de " + (preciofinal*8.25/100) + "$.");
};

//19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la 
//siguiente forma con su número identificador y salario diario correspondiente:
    //Cajero (56$/día).
    //Servidor (64$/día).
    //Preparador de mezclas (80$/día).
    //Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen 
//al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
function ejercicio19(){
    const empleados = ["Cajero","Servidor","Preparador de Mezclas","Mantenimiento"];
    const salario = [56, 64, 80, 48];
    let empleadotipo; let dias;
    
    alert("Bienvenido a la calculadora de salarios.");

    do{
        empleadotipo = parseInt(prompt("Por favor ingresar el numero de identificacion del empleado.\n1 - Cajero (56$/dia)\n2 - Servidor (64$/dia)\n3 - Preparador de mezclas(80$/dia)\n4 - Mantenimiento (48$/dia)"));        
        if(empleadotipo < 1 || empleadotipo > 4){
            alert("Por favor ingresar un numero valido.");
        }
    } while(empleadotipo < 1 || empleadotipo > 4);

    do{
        dias = parseInt(prompt("Ha elegido el tipo #" + empleadotipo + " - " + empleados[empleadotipo] + ".\nPor favor elegir la cantidad de dias que ha trabajado esta semana (maximo 6 dias)."));
        if(dias < 1 || dias > 6){
            alert("Por favor ingresar un numero valido de dias.");
        }
    } while(dias < 1 || dias > 6);
    
    alert("El salario de esta semana para el empleado '" + empleados[empleadotipo] + "' es de " + salario[empleadotipo]*dias + "$.");

};

//20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
    //¿Cuántos números son Pares?
    //¿Cuál es el mayor de todos?
    //Si el tercero es par, calcular el cuadrado del segundo.
    //Si el primero es menor que el cuarto, calcular la media de los 4 números.
    //Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
    //entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
function ejercicio20(){

    alert("Bienvenido al algoritmo multifuncion.");
    let numero = new Array(4);
    let numeromayor;
    let cantidadpares = 0;

    for (let i = 0; i < 4; i++){
        numero[i] = parseInt(prompt("Eliga un numero. " + (i+1) + " de 4."));  
        console.log(numero[i]);

        if(isNaN(numero[i])){
            alert("Por favor eliga un valor valido.");
            numero[i] = undefined;
            i--
        };

        if(i == 0){
            numeromayor = numero[0];
        };
        if(numero[i] % 2 == 0){
            cantidadpares++;
        };
        if(numero[i] > numeromayor){
            numeromayor = numero[i];
            console.log(numeromayor);
        };
    };  

    alert("El numero mayor es " + numeromayor + ".");
    alert("Esta serie de numeros tiene " + cantidadpares + " numeros pares.");

    if(numero[2] % 2 == 0){
        alert("El numero " + numero[1] + " al cuadrado es " + (numero[1]**2) + ".");
    };
    if(numero[0] < numero[3]){
        alert("La media de los cuatro numeros es de: " + ((numero[0]+numero[1]+numero[2]+numero[3])/4) + ".");
    };
    if(numero[1] > numero[2] && numero[2] > 50 && numero[2] <= 700){
        alert("La suma entre los cuatro numeros es de: " + (numero[0]+numero[1]+numero[2]+numero[3]) + ".");
    };
};    

//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21(){
    let numero = 1;
    let factorial = 1;

    do {
        numero = prompt("Por favor ingresar un numero para calcular su factorial.");
        if(numero <= 0){
            alert("Error! Eliga un numero valido.");
        };
    } while (numero <= 0);
    
    for (let i = 1; i <= numero; i++) {
        factorial = factorial*i;  
    };

    alert("El factorial de " + numero + " es " + factorial + ".");
};

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22(){
    let numero = 0;
    let suma = 0;

    do {
        numero = prompt("Por favor ingresar un numero para sumar todos los numeros consecutivos.");
        if(numero <= 0){
            alert("Error! Eliga un numero valido.");
        };
    } while (numero <= 0);
    
    for (let i = 1; i <= numero; i++) {
        suma += i;
    };

    alert("La suma de los valores consecutivos de " + numero + " es " + suma + ".");
};

//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23(){
    let numero = 0;
    let suma = 0;

    do {
        numero = prompt("Por favor ingresar un numero para sumar todos los numeros consecutivos impares.");
        if(numero <= 0){
            alert("Error! Eliga un numero valido.");
        };
    } while (numero <= 0);
    
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            suma += i;
        }
    };

    alert("La suma de los valores impares consecutivos de " + numero + " es " + suma + ".");

};

//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24() {
    let suma = 0;

    alert("Este algoritmo suma todos los numeros pares hasta el 1000.");

    for (let i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            suma += i;
        }
    };

    alert("La suma de los valores pares consecutivos hasta de 1000 es " + suma + ".");
};

//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25(){
    let numero = 0;
    let factorial = 1;
    let i = 1;

    do {
        numero = parseInt(prompt("Por favor ingresar un numero para calcular su factorial."));
        if(numero <= 0){
            alert("Error! Eliga un numero valido.");
        };
    } while (numero <= 0);

    console.log(i);

    do {
        factorial = factorial*i;
        console.log(i);
        i ++;
    } while (i < numero+1);

    alert("El factorial de " + numero + " es " + factorial + ".");
};

//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {
    let dividendo = 0;
    let divisor = 0;
    let cociente = 0;

    alert("Bienvenido al algoritmo de division.");

    do {
        dividendo = parseInt(prompt("Ingresa el dividendo:"));
        if (dividendo <= 0) {
            alert("Por favor ingresa un numero valido.")
        };
    } while (dividendo <= 0);

    do {
        divisor = parseInt(prompt("Ingresa el divisor (el dividendo es " + dividendo + "):"));
        if (divisor <= 0) {
            alert("Por favor ingresa un numero valido.");
        } else if (divisor > dividendo){
            alert("Por favor ingresa un numero menor que el dividendo.");
        };
    } while (divisor <= 0 || divisor > dividendo);

    let resto = dividendo;

    do {
        resto -= divisor;
        cociente ++;
    } while(resto >= divisor);

    alert("El cociente es " + cociente + " y el resto es " + resto + ".");
};

//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.
function ejercicio27() {
    let numeronuevo = 0;
    let numeroacumulado = 0;
    let cantidad = 0;

    do{
        numeronuevo = parseInt(prompt("Escriba un numero para añadir al promedio. \nIngrese un numero negativo para terminar."));
        cantidad ++;
        numeroacumulado += numeronuevo;
        
        console.log(numeroacumulado);
        console.log(numeronuevo);
        console.log(cantidad);

    } while (numeronuevo >= 0);
};

//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28(){
    let numero = 1;
    let sumafinal = 0;
    
    alert("Algoritmo para sumar los primeros cien numeros usando un ciclo de repeticion.");

    function repetir(){
        if (numero <= 100) {
            sumafinal += numero;
            console.log(numero);
            numero ++;
            repetir();
        }
    }

    repetir();

    alert("La suma de los cien numeros es " + sumafinal + " (Ciclo Repetir).");
};

//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29(){
    let numero = 1;
    let sumafinal = 0;
    
    alert("Algoritmo para sumar los primeros cien numeros usando un ciclo mientras.");

    do {
        sumafinal += numero;
        console.log(numero);
        numero ++;
    } while (numero <= 100);

    alert("La suma de los cien numeros es " + sumafinal + " (Ciclo Mientras).");
};

//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30() {
    let sumafinal = 0;

    alert("Algoritmo para sumar los primeros cien numeros usando un ciclo para.");

    for (let i = 1; i <= 100; i++) {
        sumafinal += i;
        console.log(i);
        
    }

    alert("La suma de los cien numeros es " + sumafinal + " (Ciclo Para).");
};

//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31() {
    let numeros = new Array(10);
    let impares = 0, pares = 0, sumaimpares = 0, sumapares = 0;

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(prompt("Eliga 10 numeros. El sistema promediara los pares e impares por separado.\n " + (i+1) + " de 10."));
        if(numeros[i] % 2 == 0 && !isNaN(numeros[i])){
            pares ++;
            sumapares += numeros[i]
        } else if (numeros[i] % 2 == 1 && !isNaN(numeros[i])){
            sumaimpares += numeros[i]
            impares ++;
        } else {
            alert("Por favor ingrese un numero valido.");
            numeros[i] = undefined;
            i--;
        };
    };

    alert("El promedio de los " + impares + " numeros impares es de " + (sumaimpares/impares) + ".");
    alert("El promedio de los " + pares + " numeros pares es de " + (sumapares/pares) + ".");
};

//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias 
//y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
function ejercicio32() {
    let poblacion = 0, poblacionMaxima = 0, provinciaMayor = 1, ciudadMayor = 1;
    let provinciaArray = new Array(3), ciudadArray = new Array(11);

    for (let provincia = 0; provincia < provinciaArray.length; provincia++) {
        console.log(provincia)
        for (let ciudad = 0; ciudad < ciudadArray.length; ciudad++) {

            console.log(ciudad)
            do {
                poblacion = prompt("Poblacion sussy baka. " + (provincia+1) + " " + (ciudad+1) + "." );
                if (poblacion < 0 || isNaN(poblacion)) {
                    alert("Por favor ingrese un valor valido.");
                };
            } while (poblacion < 0 || isNaN(poblacion));

            if (poblacion > poblacionMaxima) {
                poblacionMaxima = poblacion;
                provinciaMayor = provincia+1;
                ciudadMayor = ciudad+1;
            };

        };
        
    };

    alert("La mayor poblacion se encuentra en la ciudad " + ciudadMayor + " de la provincia " + provinciaMayor + ", con " + poblacionMaxima + " de poblacion.");
};

//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {
    let procede = "SI";

    do {
        procede = prompt("Desea continuar con el programa?\nEliga SI o NO").toUpperCase();

        if (procede == "NO") {
            break;
        } else if (procede == "SI"){
            alert("Se continua el programa.");
        } else {
            alert("Elija una opcion valida.")
        };

    } while (procede == "SI" || procede != "NO");

    alert("Se ha acabado el programa.")
};

//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
function ejercicio34(){
    alert("Algoritmo de tabla de multiplicar de 9.");


    for (let numero1 = 1; numero1 <= 9; numero1++){
        for (let numero2 = 1; numero2 <= 9; numero2++){
            alert(numero1 + " multiplicado por " + numero2 + " es igual a " + numero1*numero2 + ".");
        };
    };
};

//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function ejercicio35(){
    let numeromayor = -Infinity, numeromenor = Infinity, numeronuevo = 0;

    alert("Bienvenido, este algoritmo te permitira ingresar 20 numeros para determinar el menor y el mayor.")

    for (let i = 0; i < 20; i++){
        numeronuevo = parseInt(prompt("Ingrese un nuevo numero para la lista. " + (i+1) + " de 20."));
        if(isNaN(numeronuevo)){
            alert("Escriba un numero valido.");
            i--;
        } else {
            if (numeronuevo > numeromayor){
                console.log("Numeromayor")
                numeromayor = numeronuevo;
                if (i == 0) {
                    numeromenor = numeronuevo;
                }
            } else if (numeronuevo < numeromenor){
                console.log("Numeromenor")
                numeromenor = numeronuevo;
                if (i == 0) {
                    numeromayor = numeronuevo;
                }
            };
        };
    };

    alert("El numero mayor es " + numeromayor + ".\nEl numero menor es " + numeromenor + ".");
};

//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36() {
    let numero1 = 0, numero2 = 1, numeronuevo, repeticiones = 0, repeticioncant = 0;

    do {
        repeticiones = parseInt(prompt("Bienvenido al algoritmo de la serie de Fibonacci.\n ¿Cuantas repeticiones desea realizar?\nIngresa un numero positivo (0 para terminar)."));
        if (repeticiones < 0 || isNaN(repeticiones)) {
            alert("Por favor ingrese un numero valido.")
        };
    } while (repeticiones < 0 || isNaN(repeticiones));

    do {
        console.log(repeticiones)
        console.log("Numero 1: " + numero1 + ". Numero 2: " + numero2 + ". Numero Nuevo: " + (numero1+numero2) + ".")
        numeronuevo = numero1+numero2;
        numero1 = numeronuevo-numero1;
        numero2 = numeronuevo;
        repeticiones--;
        repeticioncant++;

        if(repeticiones==0){
            do {
                repeticiones = prompt("Los dos numeros actualmente en la series son " + numero1 + " y " + numero2 + ".\nDesea realizar mas repeticiones?\nIngresa un numero positivo (0 para terminar).");
                if (repeticiones < 0 || isNaN(repeticiones)) {
                    alert("Por favor ingrese un numero valido.")
                }
            } while (repeticiones < 0 || isNaN(repeticiones));
        };

    } while (repeticiones > 0);
  
    console.log(repeticioncant + " repeticiones.")

    if (repeticioncant == 1 || isNaN(repeticioncant)) {
        alert("Luego de 1 repeticion, los numeros en la serie son " + numero1 + " y " + numero2 + ".\nFin del proceso.")
    } else {
        alert("Luego de " + repeticioncant + " repeticiones, los numeros en la serie son " + numero1 + " y " + numero2 + ".\nFin del proceso.") 
    }
};

//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37() {
    let repetir = true;
    let numero1 = 0, numero2 = 0, nmayor, nmenor, residuo, cociente = 0;

    alert("Bienvenido a la calculadora de M.C.D. en base al algoritmo de Euclides.")
    
    do {
        numero1 = parseInt(prompt("Eliga el primer numero para el calculo."))
    } while (numero1 <= 0 || isNaN(numero1));
    do {
        numero2 = parseInt(prompt("Eliga el segundo numero para el calculo."))
    } while (numero2 <= 0 || isNaN(numero2));

    if (numero1 > numero2) {
        nmayor = numero1;
        nmenor = numero2;
    } else {
        nmayor = numero2;
        nmenor = numero1;
    }

    do {
        residuo = nmayor
        do {
            residuo -= nmenor
            cociente += 1
        } while (residuo >= nmenor);

        console.log("Resultado:\nResiduo: " + residuo + ". Cociente: " + cociente + ".")

        if (nmayor % nmenor == 0) {
            console.log("Ya no se puede dividir mas.")
            repetir = false;
        } else {
            cociente = 0;
            console.log("Mas division es posible.")
            nmayor = nmenor
            nmenor = residuo
        }
    } while (repetir == true);

    alert("El MCD de " + numero1 + " y " + numero2 + " es " + nmenor + ".")
};

//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38(){
    let numero = 0, sumadivisores = 0;

    alert("Este algoritmo demostrara si el numero ingresado es perfecto o no.\nUn numero perfecto esta compuesto por la suma de sus divisores.")

    do {
        numero = parseInt(prompt("Eliga el numero a probar."))
        if (numero < 0 || isNaN(numero)) {
            alert("Por favor ingrese un numero valido.")
        }
    } while (numero < 0 || isNaN(numero));

    for (let i = 1; i <= numero/2; i++) {
        if (numero % i == 0){
            sumadivisores += i
            console.log("Numero divisble hallado! Es " + i + ".");
        };
    };

    if (sumadivisores == numero) {
        alert("El numero " + numero + " es perfecto!")
    } else {
        alert("El numero " + numero + " no es perfecto. La suma de sus divisores resulta en " + sumadivisores + ".")
    }
};

//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//La formula que se debe aplicar es:
    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio39(){
    let valorpi = 0, division = 0, operaciones = 0;

    alert("Bienvenido. Este algoritmo usara la series de Gregory-Leibniz para aproximarse al valor de pi.")

    do {
        operaciones = parseInt(prompt("Eliga la cantidad de repeticiones a realizar."))
        if (operaciones < 0 || isNaN(operaciones)) {
            alert("Por favor ingrese una cantidad valida.")
        }
    } while (operaciones < 0 || isNaN(operaciones));

    for (let i = 0; i < operaciones ; i++) {
        division = 4/(1 + 2 * i);

        if (i % 2 == 0) {
            console.log((i+1) + " valor suma")
            valorpi += division
        } else if (i % 2 == 1) {
            console.log((i+1) + " valor resta")
            valorpi -= division
        }
    }

    alert("La aproximacion de pi con la serie de Gregory-Leibniz a lo largo de " + operaciones + " repeticiones es de " + valorpi + ".")
}


//40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. 
//La formula que se debe aplicar es:
    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
function ejercicio40(){
    let valorpi = 3, division1 = 0, division2 = 2, operaciones = 0;

    alert("Bienvenido. Este algoritmo usara la series de Nilakantha para aproximarse al valor de pi.")

    do {
        operaciones = parseInt(prompt("Eliga la cantidad de repeticiones a realizar."))
        if (operaciones < 0 || isNaN(operaciones)) {
            alert("Por favor ingrese una cantidad valida.")
        }
    } while (operaciones < 0 || isNaN(operaciones));

    for (let i = 1; i <= operaciones ; i++) {
        division1 = 4/(division2*(division2+1)*(division2+2));

        if (i % 2 == 1) {
            console.log(i + " valor suma")
            valorpi += division1
        } else if (i % 2 == 0) {
            console.log(i + " valor resta")
            valorpi -= division1
        }

        division2 += 2;
    }
    
    alert("La aproximacion de pi con la serie de Nilakantha a lo largo de " + operaciones + " repeticiones es de " + valorpi + ".")
}