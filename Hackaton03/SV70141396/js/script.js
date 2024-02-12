function ejercicio1(){
    const dato = 345;

    if(dato > 99 && dato < 999) {
        console.log ("Si tiene 3 caracteres");
    } else {
        console.log ("No tiene 3 caracteres");
    }
}

ejercicio1();

function ejercicio2(){
    // Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

    const dato = -2;

    if(dato < 0 ) {
        console.log ("Su numero es negativo")
    } else {
        console.log ("SU numero no es negativo")
    }
}

ejercicio2();

function ejercicio3(){
    // Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

    const dato = 18;

    if(dato % 10 == 4) {
        console.log ("Su numero termina en 4")
    } else {
        console.log ("Su numero no termina en 4")
    }
}

ejercicio3();

function ejercicio4(){
    // Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

    const numero1 = 7;
    const numero2 = 16;
    const numero3 = 11;
    
    // Determinar el menor número
    let menor = numero1;
    if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 < menor) {
        menor = numero3;
    }

    // Determinar el mayor número
    let mayor = numero1;
    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }

    // Determinar el número intermedio
    let intermedio;
    if (numero1 !== menor && numero1 !== mayor) {
        intermedio = numero1;
    }
    if (numero2 !== menor && numero2 !== mayor) {
        intermedio = numero2;
    }
    if (numero3 !== menor && numero3 !== mayor) {
        intermedio = numero3;
    }
    console.log( "Los números ordenados de menor a mayor son:", menor + ", " + intermedio + ", " + mayor);
}

ejercicio4();

function ejercicio5(){
    // Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
    // esta dependerá del número de zapatos que se compren.
    // Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta,
    // se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento.
    // El precio de cada zapato es de $80.

    let cantidad = 11;
    
    if (cantidad > 10 && cantidad <= 20) {
        total = cantidad * 80 - ( cantidad * 80 * 0.10)
    }
    if (cantidad > 20 && cantidad <= 30) {
        total = cantidad * 80 - ( cantidad * 80 * 0.20)
    }
    if (cantidad > 30 ) {
        total = cantidad * 80 - ( cantidad * 80 * 0.40)
    }

    console.log("El total a pagar es " +total );
}

ejercicio5();

function ejercicio6(){
    // Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal,
    // se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora,
    // pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

    let horas = 41;

    if ( horas <= 40 ) {
        sueldosemanal = horas * 20
    } else {
        sueldosemanal = horas * 25
    }
    console.log ( " Su sueldo semanal es " +sueldosemanal );
}

ejercicio6();

function ejercicio7(){
    // Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
    // sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    // Tipo A 10% de descuento
    // Tipo B 15% de descuento
    // Tipo C 20% de descuento

    const descuentoTipoA = 10;
    const descuentoTipoB = 15;
    const descuentoTipoC = 20;
    const membresia = 'B';

    let descuento = 0;
    

    // Calcular el descuento según el tipo de membresía
    switch (membresia) {
        case 'A':
            descuento = descuentoTipoA;
            break;
        case 'B':
            descuento = descuentoTipoB;
            break;
        case 'C':
            descuento = descuentoTipoC;
            break;
        default:
            console.log("Tipo de membresía no válido");
    }
    console.log("El descuento para el cliente es: " + descuento,"%" );
}
ejercicio7();

function ejercicio8(){
    // Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

    let nota1 = 11;
    let nota2 = 12;
    let nota3 = 13;

    promedio = (nota1 + nota2 + nota3) / 3

    if (promedio < 11) {
        console.log( "Desaprobó! su promedio es: " +promedio )
    } else {
        console.log( "Aprobó! su promedio es: " +promedio )
    }

}
ejercicio8();

function ejercicio9(){
    // Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    // se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    // si generaba menos de $2000 su aumento será de un 10%.

    let sueldo = 2300;

    if (sueldo < 2000) {
        aumento = sueldo * 0.10
    } else {
        aumento = sueldo * 0.05
    }
    console.log( " Su aumento es " +aumento);
}
ejercicio9();

function ejercicio10(){
    // Hacer un algoritmo en JavaScript que diga si un número es par o impar.

    let numero = 3;

    if (numero % 2 === 0) {
        console.log( "El número es par.");
    } else {
        console.log( "El número es impar.");
    }
}
ejercicio10();

function ejercicio11(){
    // Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

    let numero1 = 7;
    let numero2 = 11;
    let numero3 = 16;

    if (numero1 > numero2 && numero1 > numero3) {
        console.log ( " El numero mayor es " +numero1 )
    }
    if (numero2 > numero1 && numero2 > numero3) {
        console.log ( " El numero mayor es " +numero2 )
    }
    if (numero3 > numero1 && numero3 > numero2) {
        console.log ( " El numero mayor es " +numero3 )
    }
}
ejercicio11();

function ejercicio12(){
    // Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

    let numero3 = 23;
    let numero4 = 20;

    if (numero3 > numero4) {
        console.log ( " El numero mayor es " +numero3 )
    }
    if (numero4 > numero3) {
        console.log ( " El numero mayor es " +numero4 )
    }
}
ejercicio12();

function ejercicio13 (){
    // Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

    const letra = "i";

    switch (letra) {
        case 'a':
            console.log( " Es una vocal ")
            break;
        case 'e':
            console.log( " Es una vocal ")
            break;
        case 'i':
            console.log( " Es una vocal ")
            break;
        case 'o':
            console.log( " Es una vocal ")
            break;
        case 'u':
            console.log( " Es una vocal ")
            break;
        default:
            console.log(" no es una vocal ");
    }
}
ejercicio13();

function ejercicio14(){
    // Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

    let numero = 6;

    if (numero >= 1 && numero <= 10 && numero !==9 ) {
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) 
                console.log( " No es número primo "); // Si es divisible por algún número distinto de 1 y sí mismo, no es primo
        }
    } else {
        console.log( " Si es número primo ");
    }
}
ejercicio14();

function ejercicio15(){
    // Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

    let centimetros = 20
    let libras = 23

    pulgadas = centimetros / 2.54 
    kilogramos = libras * 0.453592

    console.log( " Son " +pulgadas.toFixed(3), " pulgadas y " +kilogramos.toFixed(4), " kilogramos ")
}
ejercicio15();

function ejercicio16(){
    // Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

    const numero = "3";

    switch (numero) {
        case '1':
            console.log( " Es lunes ")
            break;
        case '2':
            console.log( " Es martes ")
            break;
        case '3':
            console.log( " Es miercoles ")
            break;
        case '4':
            console.log( " Es jueves ")
            break;
        case '5':
            console.log( " Es viernes ")
            break;
        case '6':
            console.log( " Es sabado ")
            break;
        case '7':
            console.log( " Es domingo ")
        default:
            console.log(" no es una vocal ");
    }
}
ejercicio16();

function ejercicio17(){
    // Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

    let horas = 23;
    let minutos = 20;
    let segundos = 16;

    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
            minutos = 0;
            horas++;
            if (horas >= 24) {
                horas = 0;
            }
        }
    }
        console.log( " La hora siguiente es: "+horas++,":" +minutos++,":" +segundos++)
}
ejercicio17();

function ejercicio18 (){
    // Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes.
    // Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad.
    // Los precios son:
    // $10. Si se compran unidades separadas hasta 9.
    // $8. Si se compran entre 10 unidades hasta 99.
    // $7. Entre 100 y 499 unidades.
    // $6. Para mas de 500 unidades.
    // La ganancia para el vendedor es de 8,25 % de la venta.
    // Realizar un algoritmo en JavaScript que dado un número de CDs a 
    // vender calcule el precio total para el cliente y la ganancia para el vendedor.

    let numeroCD = 11
    let precioCliente = 0;

    if(numeroCD<9){
        precioCliente = numeroCD * 10;
    }

    if(numeroCD>=10 && numeroCD <= 99) {
        precioCliente = numeroCD * 8;
    }

    if(numeroCD>=100 && numeroCD <= 499) {
        precioCliente = numeroCD * 7;
    }

    if(numeroCD >= 500) {
        precioCliente = numeroCD * 6;
    }

    gananciaVendedor = precioCliente *0.0825;
    console.log( " El precio de Cliente es: " +precioCliente," la ganancia del Vendedor: " +gananciaVendedor.toFixed(2))
}
ejercicio18();

function ejercicio19(){
    // Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador 
    // y salario diario correspondiente:
    // Cajero (56$/día).
    // Servidor (64$/día).
    // Preparador de mezclas (80$/día).
    // Mantenimiento (48$/día).
    // El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y
    // la cantidad de días que trabajó en la semana (6 días máximos).
    //  el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    let numeroIdentificador = 3;
    let salarioDiario;

    // Determinar el salario diario según el número identificador
    switch (numeroIdentificador) {
        case 1:
            salarioDiario = 56;
            break;
        case 2:
            salarioDiario = 64;
            break;
        case 3:
            salarioDiario = 80;
            break;
        case 4:
            salarioDiario = 48;
            break;
        default:
            console.log("Número de identificador de empleado no válido.");
            return null;
    }
}
    let diasTrabajados = 4;
    let numeroIdentificador;
    
    // Verificar si los días trabajados están dentro del rango permitido
    if (diasTrabajados >= 1 && diasTrabajados <= 6) {
        salarioTotal = numeroIdentificador * diasTrabajados
            console.log("El salario total a pagar al empleado es: $" +salarioTotal);
    } else {
            console.log("La cantidad de días trabajados no es válida.");
}
ejercicio19();

//function ejercicio20(){
    // Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
    // ¿Cuántos números son Pares?
    // ¿Cuál es el mayor de todos?
    // Si el tercero es par, calcular el cuadrado del segundo.
    // Si el primero es menor que el cuarto, calcular la media de los 4 números.
    // Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
    // Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

   // function esPar(numero) {
        //return numero % 2 === 0;
    //}
    
    // Función para calcular el cuadrado de un número
    //functi/on calcularCuadrado(numero) {
        //return numero * numero;
    //}
    
    // Función para calcular la media de 4 números
    //function calcularMedia(a, b, c, d) {
        //return (a + b + c + d) / 4;
    //}
    
    // Función para calcular la suma de 4 números
    //function calcularSuma(a, b, c, d) {
        //return a + b + c + d;
    //}
    
    // Leer 4 números enteros positivos
    //var numero1 = parseInt(prompt("Ingrese el primer número:"));
    //var numero2 = parseInt(prompt("Ingrese el segundo número:"));
    //var numero3 = parseInt(prompt("Ingrese el tercer número:"));
    //var numero4 = parseInt(prompt("Ingrese el cuarto número:"));
    
    // Verificar cuántos números son pares
    //var cantidadPares = 0;
    //if (esPar(numero1)) cantidadPares++;
    //if (esPar(numero2)) cantidadPares++;
    //if (esPar(numero3)) cantidadPares++;
    //if (esPar(numero4)) cantidadPares++;
    
    // Encontrar el mayor de los 4 números
    //var mayor = Math.max(numero1, numero2, numero3, numero4);
    
    // Realizar las operaciones adicionales
    //var resultadoOperaciones = "";
    
    //if (esPar(numero3)) {
        //resultadoOperaciones += "El tercer número es par, el cuadrado del segundo es: " + calcularCuadrado(numero2) + "\n";
    //}
    
    //if (numero1 < numero4) {
        //resultadoOperaciones += "El primer número es menor que el cuarto, la media de los 4 números es: " + calcularMedia(numero1, numero2, numero3, numero4) + "\n";
    //}
    
    //if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
      //  resultadoOperaciones += "El segundo número es mayor que el tercero y este está comprendido entre 50 y 700, la suma de los 4 números es: " + calcularSuma(numero1, numero2, numero3, numero4) + "\n";
    //}
    
    // Mostrar resultados
    //console.log("Cantidad de números pares: " + cantidadPares);
    //console.log("El mayor de los números es: " + mayor);
    //console.log(resultadoOperaciones);

    function ejercicio21(){
        // Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

        let numero = 4

        if (numero < 0) {
            console.log ( "El factorial no está definido para números negativos" );
        }
        
        // Inicializar el factorial como 1
        let factorial = 1;
    
        // Calcular el factorial
        for ( let i = 2; i <= numero; i++) {
            factorial *= i;
        }
    
        console.log( " El factorial de " +numero, " es " +factorial );
    }
    ejercicio21();

    function ejercicio22(){
        // Hacer un algoritmo en JavaScript para calcular la suma de los n primeros número.

        const n = 5;
        // Verificar si n es un número entero positivo
        if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
            console.log( "Por favor, introduce un número entero positivo." );
        }

        // Inicializar la suma
        let suma = 0;

        // Calcular la suma de los primeros n números
        for (let i = 1; i <= n; i++) {
            suma += i;
        }

        console.log( " La suma de los " +n, " primeros numeros es: " +suma);
    }
    ejercicio22();

    function ejercicio23(){
        // Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

        let n = 4;

        // Verificar si n es un número entero positivo
        if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
            return "Por favor, introduce un número entero positivo.";
        }

        // Inicializar la suma
        let suma = 0;

        // Calcular la suma de los números impares menores o iguales a n
        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }
            console.log( " La suma de los números impares menores a " +n, " es igual a: " +suma);
    }
    ejercicio23();

    function ejercicio24(){
        // Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

        let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    console.log("La suma de todos los números pares hasta 1000 es:", +suma );
    }
    ejercicio24();

    function ejercicio25(){
        // Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.

        const numero = 3;

        // Caso base: factorial de 0 o 1 es 1
        if (numero === 0 || numero === 1) {
            console.log( " El factorial es " +1);
        }
        // Caso recursivo: factorial de n es n * factorial(n - 1)
         resultado = numero * (numero - 1);
        console.log( "El factorial de " +numero, " es: " +resultado );
    }
    ejercicio25();

    function ejercicio26(){
        // Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

        const dividendo = 20;
        const divisor = 3;

        if (divisor === 0) {
            console.log( "Error: no se puede dividir por cero." );
        }
    
        let cociente = 0;
        let resto = dividendo;
    
        // Restas sucesivas para calcular el cociente y el resto
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
        console.log( " El cociente de " +dividendo, " dividido por " +divisor, " es " +cociente, " con resto " +resto );
    }
    ejercicio26();

    function ejercicio28(){
        // Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

        let suma = 0;
        let contador = 1;

        // Usar un ciclo repetir para sumar los primeros cien números
        do {
            suma += contador;
            contador++;
        } while (contador <= 100);

        console.log("La suma de los primeros cien números es:", suma);
    }    
    ejercicio28();

    function ejercicio29(){
        // Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

        let suma = 0;
        let contador = 1;

        // Usar un ciclo while para sumar los primeros cien números
        while (contador <= 100) {
        suma += contador;
        contador++;
        }

        console.log( " La suma de los primeros cien números es: " +suma);
    }
    ejercicio29();

    function ejercicio30(){
        // Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

        let suma = 0;

        // Usar un bucle for para sumar los primeros cien números
        for (let i = 1; i <= 100; i++) {
        suma += i;
        }

        console.log( " La suma de los primeros cien números es: " +suma);
    }
    ejercicio30();

    function ejercicio32(){
        // Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades,
        // hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)


        const ciudades = {
            "Provincia A": {
                "Ciudad 1": 100000,
                "Ciudad 2": 150000,
                "Ciudad 3": 120000
            },
            "Provincia B": {
                "Ciudad 4": 80000,
                "Ciudad 5": 110000,
                "Ciudad 6": 90000
            },
            "Provincia C": {
                "Ciudad 7": 200000,
                "Ciudad 8": 180000,
                "Ciudad 9": 160000,
                "Ciudad 10": 220000,
                "Ciudad 11": 190000
            }
        };
        
        // Función para encontrar la ciudad con la población más alta
        function ciudadConMasPoblacion(ciudades) {
            let ciudadMasPoblada = "";
            let maxPoblacion = 0;
        
            // Iterar sobre el objeto de ciudades
            for (let provincia in ciudades) {
                for (let ciudad in ciudades[provincia]) {
                    if (ciudades[provincia][ciudad] > maxPoblacion) {
                        maxPoblacion = ciudades[provincia][ciudad];
                        ciudadMasPoblada = ciudad + " (" + provincia + ")";
                    }
                }
            }
            console.log("La ciudad con la población más alta es:", ciudadMasPoblada);
        }
}
ejercicio32();

function ejercicio33(){
    // 

    do {
        
        var continuar = 1;
    
    } while (continuar === 's');
}
ejercicio33();

function ejercicio34(){
    // Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.

    for (let i = 1; i <= 9; i++) {
        console.log( " Tabla de multiplicar del " +i );
        
        // Bucle interno para la tabla de multiplicar de cada número del 1 al 9
        for (let j = 1; j <= 10; j++) {
            console.log( +i, "x" +j,  "=" +i * j);
        }
    
        console.log(); // Agregar una línea en blanco entre cada tabla de multiplicar
    }
}
ejercicio34();