function ejercicio21(){
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
function ejercicio22(){
    let n = parseInt(prompt("Ingrese un número:"));
    if (n < 0) {
       alert("Por favor, ingrese un número no negativo.");
    } else {
        let suma = (n * (n + 1)) / 2;
       alert(`La suma de los primeros ${n} números es: ${suma}`);
    }
}
function ejercicio23(){
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
function ejercicio24(){
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    
    alert("La suma de todos los números pares hasta 1000 es: " + suma);  
}
function ejercicio25(){
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
function ejercicio26(){
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
function ejercicio27(){
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
function ejercicio28(){
    let suma = 0;
    let i = 1;

while (i <= 100) {
    suma += i;
    i++;
}

alert("La suma de los primeros cien números es: " + suma);
}
function ejercicio29(){
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert("La suma de los primeros cien números es: " + suma);
}
function ejercicio30(){
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert("La suma de los primeros cien números es: " + suma);
}
function ejercicio31(){}
function ejercicio32(){}
function ejercicio33(){}
function ejercicio34(){}
function ejercicio35(){}
function ejercicio36(){}
function ejercicio37(){}
function ejercicio38(){}
function ejercicio39(){}
function ejercicio40(){}