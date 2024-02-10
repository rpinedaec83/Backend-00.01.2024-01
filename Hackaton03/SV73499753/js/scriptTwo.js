function ejercicio21() {
    let num = parseInt(prompt("Ingrese un número:"));
    let factorial = 1;

    if (num < 0) {
        alert("No se puede calcular el factorial de un número negativo.");
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        alert(`El factorial de ${num} es: ${factorial}`);
    }
}
function ejercicio22() {
    let n = parseInt(prompt("Ingrese un número:"));
    if (n < 0) {
        alert("Por favor, ingrese un número no negativo.");
    } else {
        let suma = (n * (n + 1)) / 2;
        alert(`La suma de los primeros ${n} números es: ${suma}`);
    }
}
function ejercicio23() {
    let n = parseInt(prompt("Ingrese un número:"));
    if (n < 0) {
        alert("El número debe ser no negativo.");
    } else {
        let suma = 0;

        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }

        alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
    }
}
function ejercicio24() {
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert("La suma de todos los números pares hasta 1000 es: " + suma);
}
function ejercicio25() {
    let num = parseInt(prompt("Escribe un numero"))
    if (num < 0) {
        alert("No se puede calcular el factorial de un número negativo.");
    } else {
        let factorial = 1;
        let i = 1;
        while (i <= num) {
            factorial *= i;
            i++;
        }

        alert(`El factorial de ${num} es: ${factorial}`);
    }
}
function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    let cociente = 0;
    let resto = dividendo;

    if (divisor === 0) {
        alert("No es posible dividir por cero.");
    } else {
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }

        alert("El cociente es: " + cociente);
        alert("El resto es: " + resto);
    }
}
function ejercicio27() {
    let num;
    let suma = 0;
    let cantidad = 0;

    alert("Ingrese números positivos para calcular la media. Ingrese un número negativo para finalizar.");

    do {

        num = parseFloat(prompt("Ingrese un número:"));

        if (num >= 0) {
            suma += num;
            cantidad++;
        } else {
            if (cantidad > 0) {
                alert("La media de los números ingresados es: " + (suma / cantidad));
            } else {
                alert("No se ingresaron números positivos.");
            }
        }
    } while (num >= 0);
}
function ejercicio28() {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert("La suma de los primeros cien números es: " + suma);
}
function ejercicio29() {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert("La suma de los primeros cien números es: " + suma);
}
function ejercicio30() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert("La suma de los primeros cien números es: " + suma);
}
function ejercicio31() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseFloat(prompt("Ingrese un número:"));

        if (num % 2 === 0) {
            sumaPares += num;
            contadorPares++;
        } else {
            sumaImpares += num;
            contadorImpares++;
        }
    }

    if (contadorPares > 0) {
        alert("La media de números pares es: " + (sumaPares / contadorPares));
    } else {
        alert("No se ingresaron números pares.");
    }

    if (contadorImpares > 0) {
        alert("La media de números impares es: " + (sumaImpares / contadorImpares));
    } else {
        alert("No se ingresaron números impares.");
    }
}
function ejercicio32() {
    let poblacionMaxima = 0;
    let maxCiudad = 0;
    let maxProvincia = 0;

    for (let provincia = 1; provincia <= 3; provincia++) {
        for (let ciudad = 1; ciudad <= 11; ciudad++) {
            let poblacion = Math.floor(Math.random() * 1000) + 1;


            if (poblacion > poblacionMaxima) {
                poblacionMaxima = poblacion;
                maxCiudad = ciudad;
                maxProvincia = provincia;
            }
        }
    }

    alert(`La ciudad con la población más alta tiene ${poblacionMaxima} habitantes.`);
    alert(`Provincia: ${maxProvincia}, Ciudad: ${maxCiudad}`);
}
function ejercicio33() {
    let continuar;

    do {
        continuar = prompt("Realizar alguna operación (S/N)?");

        if (continuar === "S" || continuar === "s") {
            alert("Operación realizada.");
        } else {
            alert("Programa finalizado.");
        }
    } while (continuar === "S" || continuar === "s");

}
function ejercicio34() {
    let nuevaVentana = window.open("", "_blank", "width=600,height=400");


    let tablaBody = nuevaVentana.document.createElement("tbody");

    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 12; j++) {
            let fila = nuevaVentana.document.createElement("tr");
            let celdaTabla = nuevaVentana.document.createElement("td");
            let celdaMultiplicador = nuevaVentana.document.createElement("td");
            let celdaTabla2 = nuevaVentana.document.createElement("td");
            let celdaIgual = nuevaVentana.document.createElement("td");
            let celdaResultado = nuevaVentana.document.createElement("td");

            celdaTabla.textContent = i;
            celdaMultiplicador.textContent = "x";
            celdaTabla2.textContent = j;
            celdaIgual.textContent = "=";
            celdaResultado.textContent = i * j;

            fila.appendChild(celdaTabla);
            fila.appendChild(celdaMultiplicador);
            fila.appendChild(celdaTabla2);
            fila.appendChild(celdaIgual);
            fila.appendChild(celdaResultado);

            tablaBody.appendChild(fila);
        }
        let filaVacia = nuevaVentana.document.createElement("tr");
        let celdaVacia = nuevaVentana.document.createElement("td");
        celdaVacia.colSpan = 5

        filaVacia.appendChild(celdaVacia);
        tablaBody.appendChild(filaVacia);
    }


    let nuevaTabla = nuevaVentana.document.createElement("table");
    nuevaTabla.appendChild(tablaBody);

    nuevaVentana.document.body.appendChild(nuevaTabla);
}
function ejercicio35() {
    const numeros = [];

    for (let i = 1; i <= 20; i++) {
        let num;
        do {
            num = parseInt(prompt(`Ingrese el número ${i}: `));
        } while (isNaN(num)); // valida que se ingrese un numero

        numeros.push(num);
    }

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    alert(`El número mayor es: ${mayor}`);
    alert(`El número menor es: ${menor}`);
}
function ejercicio36() {
    const n = parseInt(prompt("Ingrese el número de términos para la serie de Fibonacci: ")) || 0;
    let fibonacciArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }

    alert(`Serie de Fibonacci hasta el término ${n}:`);
    alert(fibonacciArray.join(', '));
}
function ejercicio37() {
   
let resto = 0;
let a = parseInt(prompt("Ingrese el primer número: "));
let b = parseInt(prompt("Ingrese el segundo número: "));

// Algoritmo de Euclides
while (b !== 0) {
    resto = a % b;
    a = b;
    b = resto;
}

alert("El M.C.D. de los dos números es: "+ a);
}
function ejercicio38() { 
let sumaDivisores = 0;
let divisor = 0;
let num = parseInt(prompt("Ingrese un número: "));
for (divisor = 1; divisor <= num / 2; divisor++) {
    if (num % divisor === 0) {
        sumaDivisores = sumaDivisores + divisor;
    }
}

if (sumaDivisores === num) {
    console.log("El número"+ num +"es un número perfecto.");
} else {
    console.log("El número"+ num + "no es un número perfecto.");
}

}
function ejercicio39() {
let termino = 0;
let pii = 0;
let signo = 1;
let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de π: "));
// Serie de Gregory-Leibniz
for (let i = 1; i <= n; i++) {
    termino = 4 / ((2 * i) - 1) * signo;
    pii = pii + termino;
    signo = signo * (-1);
}
alert("La aproximación de π con "+ n +" términos es: "+ pii);
 }
function ejercicio40() { 
let termino = 0;
let pii = 3;
let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de π: "));

// Utilizando la serie de Nilakantha
for (let i = 1; i <= n; i++) {
    termino = 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2));
     if (i % 2 === 1) {
        pii = pii + termino;
    } else {
        pii = pii - termino;
    }
}
alert("La aproximación con "+ n + " términos es: "+ pii);
}