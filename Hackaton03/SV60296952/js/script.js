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