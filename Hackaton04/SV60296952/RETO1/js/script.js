function ejercicio1() {
     function sumarNumeros(num1, num2) {
        return num1 + num2;
    }
    
    function mostrarResultado() {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
        const resultado = sumarNumeros(num1, num2);
        alert("La suma de los dos números es: " + resultado);
    }
    mostrarResultado();  
}
//----------------------------------------------------------------------------------------
function ejercicio2() {
    function potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    
    function mostrarResultado() {
        const base = parseFloat(prompt("Ingrese la base:"));
        const exponente = parseFloat(prompt("Ingrese el exponente:"));
    
        const resultado = potencia(base, exponente);
        alert("El resultado de " + base + " elevado a la " + exponente + " es: " + resultado);
        console.log("El resultado de " + base + " elevado a la " + exponente + " es: " + resultado);
    }
    
    mostrarResultado();
}
//-------------------------------------------------------------------------------------------
// Ejercicio 3
function ejercicio3() {
    const sumOfCubes = (...numeros) => {
        let sumaCubos = 0;
        for (let i = 0; i < numeros.length; i++) {
            sumaCubos += Math.pow(numeros[i], 3);
        }
        return sumaCubos;
    };
    const resultado = sumOfCubes(1, 5, 9);
    console.log("La suma de los cubos es: " + resultado);
    alert("La suma de los cubos es: " + resultado);  
}
//-------------------------------------------------------------------------------------------
//EJERCICIO 4
function ejercicio4() {
    const triArea = (base, altura) => (base * altura) / 2;
    const area = triArea(3, 2);
    console.log(area); // Imprimirá 3
    alert("El area del triangulo es: " + area);
}
//---------------------------------------------------------------------------------------
//EJERCICIO 5
function ejercicio5() {
    function calculator() {
        // Solicitar al usuario que ingrese la operación y los números
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));
        const operacion = prompt("Ingrese la operación matemática (+, -, /, x, %):");
        let resultado;
        switch (operacion) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
            case 'x':
                resultado = num1 * num2;
                break;
            case '%':
                resultado = num1 % num2;
                break;
            default:
                alert("El parámetro no es reconocido");
                console.log("El parámetro no es reconocido");
                return;
        }
        alert("El resultado de la operación es: " + resultado);
        console.log("El resultado de la operación es: " + resultado);
    }
    calculator(); 
}

