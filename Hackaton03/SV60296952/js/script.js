//EJERCICIO 1
function ejercicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}

//EJERCICIO 2
function ejercicio2(){
    let numero = prompt("Escriba su numero");
    
    // Definir una función para determinar el signo de un número ingresado por el usuario
function determinarSigno() {
    if (numero === 0) {
        alert("El número " + numero + " es neutro.");
    } else if (numero > 0) {
        alert("El número " + numero + " es positivo.");
    } else {
        alert("El número " + numero + " es negativo.");
    }
}
determinarSigno();
}

//EJERCICIO 3
function ejercicio3(){
function terminaEnCuatro(numero) {
    if (numero % 10 === 4) {
        return true;
    } else {
        return false;
    }
}
function main() {
    
    var n = parseInt(prompt("Escriba un número:"));

    if (terminaEnCuatro(n)) {
        alert("El número " + n + " termina en 4.");
    } else {
        alert("El número " + n + " no termina en 4.");
    }
}
main();
}

//EJERCICIO 4
function ejercicio4(){
// Función principal para ordenar tres números en orden ascendente
function ordenarNumeros() {
    // Leer los tres números ingresados por el usuario
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var num3 = parseFloat(prompt("Ingrese el tercer número:"));

    // Verificar el orden de los números y mostrar el resultado utilizando alertas
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            alert(num3 + " < " + num2 + " < " + num1);
        } else {
            alert(num2 + " < " + num3 + " < " + num1);
        }
    } else {
        if (num2 > num1 && num2 > num3) {
            if (num1 > num3) {
                alert(num3 + " < " + num1 + " < " + num2);
            } else {
                alert(num1 + " < " + num3 + " < " + num2);
            }
        } else {
            if (num1 > num2) {
                alert(num2 + " < " + num1 + " < " + num3);
            } else {
                alert(num1 + " < " + num2 + " < " + num3);
            }
        }
    }
}

ordenarNumeros();
}
//EJERCICIO 5 
function ejercicio5(){ 
function calcularPrecioTotal() {
    var numero_de_zapatos = parseInt(prompt("Ingresa el numero de zapatos:"));


    var subtotal = numero_de_zapatos * 80;


    var descuento = 0;

    if (numero_de_zapatos > 10 && numero_de_zapatos <= 20) {
        descuento = subtotal * 0.1;
    }

    if (numero_de_zapatos > 20 && numero_de_zapatos <= 30) {
        descuento = subtotal * 0.2;
    }

    if (numero_de_zapatos > 30) {
        descuento = subtotal * 0.4;
    }
    var total = subtotal - descuento;

    alert("Precio total sin descuento: " + subtotal);
    alert("Descuento: " + descuento);
    alert("Total a pagar: " + total);
}

calcularPrecioTotal();
}

//EJERCICIO 6 
function ejercicio6(){

function calcularSueldo() {
    var xx, sueldo, bono;
    bono = 0;
    sueldo = 0;

    var xx = parseInt(prompt("Ingrese las horas trabajadas:"));

    if (xx < 40) {
        sueldo = xx * 20;
        alert("Su sueldo esta semana es de: " + sueldo);
    } else {
        bono = xx - 40;
        sueldo = (xx - bono) * 20;
        alert("Su sueldo esta semana es de: " + sueldo);
    }
}

calcularSueldo();
} 
 //EJERCICIO 7
 function ejercicio7(){
 // Función principal para calcular el precio del helado con descuento
function calcularPrecioHelado() {
    // Declarar variables
    var precio, descuento, tipo;

    // Solicitar al usuario el precio del helado
    var precio = parseFloat(prompt("¿Cuál es el precio del helado?"));

    // Solicitar al usuario el tipo de helado
    var tipo = prompt("¿Qué tipo de helado es? (Tipo A, B o C)").toLowerCase();

    // Calcular el descuento y el precio final del helado según el tipo
    switch (tipo) {
        case "a":
            descuento = (precio * 10) / 100;
            precio -= descuento;
            break;
        case "b":
            descuento = (precio * 15) / 100;
            precio -= descuento;
            break;
        case "c":
            descuento = (precio * 20) / 100;
            precio -= descuento;
            break;
        default:
            alert("Tipo de helado inválido.");
            return;
    }

    // Mostrar el precio final del helado con descuento
    alert("El precio es " + precio.toFixed(2) + " soles");
}

// Llamar a la función principal para calcular el precio del helado
calcularPrecioHelado();
 }


 //EJERCICIO 8
function ejercicio8(){
    // Función principal para calcular el promedio de notas
function calcularPromedio() {
    // Declarar variables
    var nota1, nota2, nota3, suma, promedio;

    // Solicitar al usuario que ingrese las notas
    var nota1 = parseFloat(prompt("Ingrese la nota 1: "));
    var nota2 = parseFloat(prompt("Ingrese la nota 2: "));
    var nota3 = parseFloat(prompt("Ingrese la nota 3: "));

    // Calcular la suma de las notas
    var suma = nota1 + nota2 + nota3;

    // Calcular el promedio
    var promedio = suma / 3;

    // Mostrar el promedio
    alert("El promedio es: " + promedio.toFixed(2));

    // Verificar si el promedio es menor o igual a 10 para determinar si el estudiante está desaprobado o aprobado
    if (promedio <= 10) {
        alert("Desaprobado");
    } else {
        alert("Aprobado");
    }
}
calcularPromedio();
}

//EJERCICIO 9
function ejercicio9(){
function calcularSueldoFinal() {
    var aumento, sueldo, sueldo_final;
    var sueldo = parseFloat(prompt("¿Cuál es el sueldo del trabajador?"));

    if (sueldo <= 2000) {
        alert("Su aumento será de 10%.");
        aumento = sueldo * 0.10;
    } else {
        alert("Su aumento será del 5%.");
        aumento = sueldo * 0.05;
    }
    sueldo_final = aumento + sueldo;
    alert("El sueldo final que recibe el trabajador es: " + sueldo_final.toFixed(2));
}

// Llamar a la función principal para calcular el sueldo final
calcularSueldoFinal();
}

//EJERCICIO 10
function ejercicio10(){
function determinarParidad() {
    var a = parseInt(prompt("Ingrese el número a consultar:"));
    if (a % 2 === 0) {
        alert(a + " es un número par.");
    } else {
        alert(a + " es un número impar.");
    }
}
// Llamar a la función principal para determinar la paridad del número ingresado
determinarParidad();
}


// EJERCICIO 11
function ejercicio11() {
function determinarMayor() {
    var a, b, c;
    var a = parseInt(prompt("Escriba el primer número:"));
    var b = parseInt(prompt("Escriba el segundo número:"));
    var c = parseInt(prompt("Escriba el tercer número:"));

    if (a > b) {
        if (a > c) {
            alert("El número " + a + " es el mayor de los tres.");
        } else {
            alert("El número " + c + " es el mayor de los tres.");
        }
    } else {
        if (b > c) {
            alert("El número " + b + " es el mayor de los tres.");
        } else {
            alert("El número " + c + " es el mayor de los tres.");
        }
    }
}
// Llamar a la función principal para determinar el mayor de tres números
determinarMayor();
}


//EJERCICIO 12
function ejercicio12() {
function compararNumeros() {
    var a, b;
    var a = parseInt(prompt("Ingresa el primer número:"));
    var b = parseInt(prompt("Ingresa el segundo número:"));

    if (a === b) {
        alert("Los números son iguales.");
    } else {
        if (a > b) {
            alert("El número " + a + " es mayor.");
        } else {
            alert("El número " + b + " es mayor.");
        }
    }
}
// Llamar a la función principal para comparar los números
compararNumeros();
}


//EJERCICIO 13
function ejercicio13 () {
function determinarCaracter() {
    var letra;

    var letra = prompt("Escribe un caracter:");

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        alert("El caracter es una vocal.");
    } else {
        if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
            alert("El caracter es una vocal.");
        } else {
            alert("El caracter es una consonante.");
        }
    }
}
determinarCaracter();
}

//EJERCICIO 14  
function ejercicio14 () {
function verificarNumeroPrimo() {
    var a, cont;

    var a = parseInt(prompt("Ingrese un número:"));

    var cont = 0;

    for (var i = 1; i <= a; i++) {
        if (a % i === 0) {
            cont++;
        }
    }
    if (cont === 2) {
        alert(a + " es un número primo.");
    } else {
        alert(a + " no es un número primo.");
    }
}
verificarNumeroPrimo();
}

//EJERCICIO 15
function ejercicio15 () {
function convertirMedidas() {
    var centimetros, libras, pulgadas, kilogramos;

    var centimetros = parseFloat(prompt("Ingresa el valor de centímetros:"));

    var libras = parseFloat(prompt("Ingresa el valor de libras:"));

    var pulgadas = centimetros / 2.54;
    var kilogramos = libras * 0.45359237;

    alert("Valor de pulgadas: " + pulgadas.toFixed(2));
    alert("Valor de kilogramos: " + kilogramos.toFixed(2));
}
convertirMedidas();
}

//EJERCICIO 16
function ejercicio16 () {
function determinarDia() {
    var dia;
    var dia = parseInt(prompt("Ingrese un día:"));

    if (dia === 1) {
        alert("Lunes");
    } else if (dia === 2) {
        alert("Martes");
    } else if (dia === 3) {
        alert("Miércoles");
    } else if (dia === 4) {
        alert("Jueves");
    } else if (dia === 5) {
        alert("Viernes");
    } else if (dia === 6) {
        alert("Sábado");
    } else if (dia === 7) {
        alert("Domingo");
    } else {
        alert("Día no válido.");
    }
}
determinarDia();
}

//EJERCICIO 17
function ejercicio17 () {
function incrementarTiempo() {
    var hh, mm, ss;
    var hh = parseInt(prompt("Ingresa las horas (hh):"));
    var mm = parseInt(prompt("Ingresa los minutos (mm):"));
    var ss = parseInt(prompt("Ingresa los segundos (ss):"));

    if (hh < 24 && mm < 60 && ss < 60) {
        ss++; 

        if (ss === 60) {
            ss = 0;
            mm++; 

            if (mm === 60) {
                mm = 0;
                hh++; 

                if (hh === 24) {
                    hh = 0; 
                }
            }
        }

        alert("Tiempo incrementado: " + hh + ":" + mm + ":" + ss);
    } else {
        alert("Tiempo ingresado inválido.");
    }
}
// Llamar a la función principal para incrementar el tiempo
incrementarTiempo();
}

//EJERCICIO 18
function ejercicio18 () {
function calcularPrecioYGanancia() {
    var cantidad, p, pt, gv;

    var cantidad = parseInt(prompt("¿Cuántos CDs desea comprar?"));

    if (cantidad <= 9) {
        p = 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        p = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        p = 7;
    } else {
        p = 6;
    }

    var pt = cantidad * p;

    var gv = pt * 0.0825;

    alert("El precio total para el cliente es: $" + pt);
    alert("La ganancia para el vendedor es: $" + gv.toFixed(2));
}
calcularPrecioYGanancia();
}

//EJERCICIO 19
function ejercicio19 () {
function calcularPago() {
    var num_iden, can_dias, pago;
    var num_iden = 0;
    var can_dias = 0;
    alert("1. Cajero -> $56/día");
    alert("2. Servidor -> $64/día");
    alert("3. Preparador de mezclas -> $80/día");
    alert("4. Mantenimiento -> $48/día");
    while (num_iden < 1 || num_iden > 4) {
        num_iden = parseInt(prompt("Ingrese número identificador:"));
    }
    while (can_dias < 1 || can_dias > 6) {
        can_dias = parseInt(prompt("Ingrese la cantidad de días que trabajó:"));
    }
    switch (num_iden) {
        case 1:
            pago = can_dias * 56;
            break;
        case 2:
            pago = can_dias * 64;
            break;
        case 3:
            pago = can_dias * 80;
            break;
        case 4:
            pago = can_dias * 48;
            break;
    }
    alert("El pago será de: $" + pago);
}
// Llamar a la función principal para calcular el pago
calcularPago();
}

//EJERCICIO 20
function ejercicio20 () {
function operacionesConNumeros() {
    var num1, num2, num3, num4;
    var contar_pares = 0;
    var maximo;
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var num3 = parseFloat(prompt("Ingrese el tercer número:"));
    var num4 = parseFloat(prompt("Ingrese el cuarto número:"));

    var maximo = num1;
    if (num2 > maximo) {
        maximo = num2;
    }
    if (num3 > maximo) {
        maximo = num3;
    }
    if (num4 > maximo) {
        maximo = num4;
    }
    if (num1 % 2 === 0) {
        contar_pares++;
    }
    if (num2 % 2 === 0) {
        contar_pares++;
    }
    if (num3 % 2 === 0) {
        contar_pares++;
    }
    if (num4 % 2 === 0) {
        contar_pares++;
    }
    alert("Cantidad de números pares: " + contar_pares);
    alert("El máximo es: " + maximo);
    if (num3 % 2 === 0) {
        var cuadrado_segundo = num2 * num2;
        alert("El cuadrado del segundo número es: " + cuadrado_segundo);
    }
    if (num1 < num4) {
        var media = (num1 + num2 + num3 + num4) / 4;
        alert("La media de los cuatro números es: " + media);
    }
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        var suma = num1 + num2 + num3 + num4;
        alert("La suma de los cuatro números es: " + suma);
    }
}
operacionesConNumeros();
}
