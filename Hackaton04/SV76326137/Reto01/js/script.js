function ejercicio1(){
    var num1 = prompt("Ingrese el primer número:");
    var num2 = prompt("Ingrese el segundo número:");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var suma = num1 + num2;
    alert("La suma de los dos números es: " + suma);
}
function ejercicio2(){
    
    var base = prompt("Ingrese la base:");
    var exponente = prompt("Ingrese el exponente:");

    base = parseInt(base);
    exponente = parseInt(exponente);

    var resultado = Math.pow(base, exponente);
    alert("El resultado de elevar " + base + " a la potencia " + exponente + " es: " + resultado);
}
function ejercicio3() {
    var variable1 = prompt("Ingrese el valor para la variable 1:");
    var variable2 = prompt("Ingrese el valor para la variable 2:");
    var variable3 = prompt("Ingrese el valor para la variable 3:");

    variable1 = parseInt(variable1);
    variable2 = parseInt(variable2);
    variable3 = parseInt(variable3);

    var suma = Math.pow(variable1, 3) + Math.pow(variable2, 3) + Math.pow(variable3, 3);

    alert("La suma de los cubos es: " + suma);
}

function ejercicio4() {
    var base = prompt("Ingrese la base del triángulo:");
    var altura = prompt("Ingrese la altura del triángulo:");

    base = parseFloat(base);
    altura = parseFloat(altura);

    var area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
}

function ejercicio5() {
    var num1 = prompt("Ingrese el primer número:");
    var operacion = prompt("Ingrese la operación (+, -, *, /, %):");
    var num2 = prompt("Ingrese el segundo número:");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacion) {
        case '+':
            alert("El resultado de la suma es: " + (num1 + num2));
            break;
        case '-':
            alert("El resultado de la resta es: " + (num1 - num2));
            break;
        case '*':
        case 'x':
            alert("El resultado de la multiplicación es: " + (num1 * num2));
            break;
        case '/':
            alert("El resultado de la división es: " + (num1 / num2));
            break;
        case '%':
            alert("El resultado del módulo es: " + (num1 % num2));
            break;
        default:
            alert("El parámetro no es reconocido");
    }
}


function ejercicio6() {
    
    var mensaje = "Para nosotros definir una función, primero debemos tener un fin en concreto, para que lo estamos creando mejor dicho.<br>" +
                  "Luego lo declaramos con un nombre, también le crearemos parámetros los cuales representan una lista de variables, como nombres, datos, números, etc.<br>" +
                  "Ahora definiremos el cuerpo de la función, la cual contiene una serie de instrucciones las cuales realizan operaciones específicas.<br>" +
                  "Por último, se le coloca un valor de retorno, lo cual permite que la función comunique un resultado al código que la llamó.";

    var resultadoElemento = document.getElementById("resultado");

    resultadoElemento.innerHTML = mensaje;
}

function ejercicio7() {

    var mensaje = "En una funcion se pueden declarar cuantas variables uno quiera y necesite no esixte un limite para la declaracion de variables";

    var resultadoElemento = document.getElementById("resultado2");

    resultadoElemento.innerHTML = mensaje;
}