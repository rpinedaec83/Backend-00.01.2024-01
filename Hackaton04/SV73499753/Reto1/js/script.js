//Crea una función que retorne la suma de dos números

function sumar() {
    let n1 = parseInt(prompt("Primer Numero"))
    let n2 = parseInt(prompt("Segundo Numero"))
    let sumar = n1 + n2
    alert("La suma del\n  N° 1: " + n1 + "\n  N° 2: " + n2 + "\n  es : " + sumar)

}
//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar
function potencia() {
    let base = parseInt(prompt("Primer Numero"))
    let expo = parseInt(prompt("Segundo Numero"))
    let pot = Math.pow(base, expo)
    alert("La base es: " + base + "\nEl exponente es: " + expo + "\nLa Potencia es: " + pot)
}

//Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 85
//// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 85
function sumaDeCubos(a, b, c) {
    let cub1 = Math.pow(a, 3)
    let cub2 = Math.pow(b, 3)
    let cub3 = Math.pow(c, 3)
    return cub1 + cub2 + cub3
}
function calcularSumaDeCubos() {
    // Obtener los valores de los campos de entrada
    let a = parseFloat(document.getElementById("valorA").value);
    let b = parseFloat(document.getElementById("valorB").value);
    let c = parseFloat(document.getElementById("valorC").value);

    // Verificar si los valores son números
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

        let resultado = sumaDeCubos(a, b, c);
        alert("La suma de los cubos es: " + resultado);
    } else {
        alert("Ingresa valores numéricos válidos en todos los campos.");
    }
}

//Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 
function areaTria(b, h) {
    return (b * h) / 2
}
function calcularAreaTri() {
    // Obtener los valores de los campos de entrada
    let b = parseFloat(document.getElementById("b").value);
    let h = parseFloat(document.getElementById("h").value);
    // Verificar si los valores son números
    if (!isNaN(b) && !isNaN(h)) {
        let resultado = areaTria(b, h);
        alert("El area del triangulo es: " + resultado);
    } else {
        alert("Ingresa valores numéricos válidos en todos los campos.");
    }
}
//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), .
//y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
function calculator(n1, op, n2) {
    switch (op) {
        case '+':
            return alert ("La suma es: "+n1 + n2)
        case '-':
            return n1 - n2
        case '/':
            if (n2 !== 0) {
                return alert ("La division es: " + n1 / n2)
            } else {
                return alert("No se puede dividir por Cero")
            }
        case 'X' :
        case 'x':
            return alert( "La multplicacion es: " + n1 * n2)
        case '%':
            return alert("La division es: "+ n1 % n2)
        default:
            return alert("El parametro no es reconocido")
    }
}
function calcularOperacion() {
    // Obtener los valores de los campos de entrada
    let n1 = parseFloat(document.getElementById("n1").value);
    let op = document.getElementById("op").value;
    let n2 = parseFloat(document.getElementById("n2").value);
    // Verificar si los valores son números
    if (!isNaN(n1) && !isNaN(n2)) {
        calculator(n1,op ,n2);
    } else {
        alert("Ingresa valores numéricos válidos en todos los campos.");
    }
}