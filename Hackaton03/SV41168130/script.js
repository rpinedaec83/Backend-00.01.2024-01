// 1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar 
// si tiene tres digitos

function ejercicio1(){
    let numero = prompt("Escriba un número");
    
    if(numero > 99 && numero <1000)  {
        console.log("El número tiene 3 dígitos");
        alert("El número tiene 3 dígitos");
    }
    else {
        console.log("El número no tiene 3 dígitos");
        alert("El número no tiene 3 dígitos");
    }
}



// 2. Hacer un algoritmo en Javascript que lea un número entero por el teclado y 
// determinar si es negativo

function ejercicio2(){
    let numero = prompt("Escriba un número");
    num_ispar = parseInt(numero);

    if (num_ispar >= 0) {
        console.log("El número es positivo");
        alert("El número es positivo");
    } else {
        console.log("El número es negativo")
        alert("El número es negativo");
    }
}

// 3. Hacer un algoritmo en Javascript que lea un número y determinar si termina en 4.

function ejercicio3(){
    let n = prompt("Ingrese un número");
    n = Math.trunc(Math.abs(n));
    
    let cont = 0;
    let aux = n;
    let digito = 0;

    // Contamos cuantos digitos tiene el número
    while (aux > 0 ) {
        cont += 1;
        aux = Math.trunc(aux/10);
    }

    // luego, mostrarlos uno por uno 
    aux = n;
    for (let index = 1; index <=  cont; index++) {
        pot = Math.pow(10,(cont - index));
        digito = Math.trunc(aux / pot);
        aux = aux - digito * pot;
    }

    if (digito == 4){
        console.log("El número " + n + " termina en " + digito);
        alert("El número " + n + " termina en " + digito);
    } else {
        console.log("El número " + n + " NO termina en 4");
        alert("El número " + n + " NO termina en 4");
    }
}

//4. Hacer un algoritmo en Javascript que lea tres números enteros y los muestre de menor a mayor.

function ejercicio4(){
    let cant = 3;
    let lista = [];    
    alert("Ingrese 3 números");
    for(let index = 0; index < cant; index++){
        lista[index] = prompt("Ingrese un número");
    }

    //Buscar el número menor
    for(index = 0; index < cant-1; index++){
        let pos_menor = index;
        for (j = index + 1; j <= cant; j++){
            if (lista[j] < lista[pos_menor]){
                pos_menor = j;
            }
        }

        let aux = lista[index];
        lista[index] = lista[pos_menor];
        lista[pos_menor] = aux;
    }

    console.log("La lista ordenada de menor a mayor es: " + lista.toString());
    alert("La lista ordenada de menor a mayor es: " + lista.toString());
}

//5. Hacer un algoritmo en Javascript para una tienda de zapatos que tiene una promoción 
//de descuento para vender al mayor, esta dependerá del número de zapatos que se compren.
//	Si son más de 10, se les dará un 10% de descuento sobre el total de la compra;
//	si el número de zapatos es mayor de 20 pero menor de 30,
//	se le otorga un 20% de descuento; y si son más 30 zapatos se otorgará un 40% de descuento.
//El precio de cada zapato es de $80.

function ejercicio5(){
    let totalPagar;
    let descuento = 0;
    let precioZapato = 80;
    let cantidad = prompt("Digite la cantidad de zapatos comprados");
    totalPagar = cantidad * precioZapato;
    
    if (cantidad > 10  && cantidad <= 20){
        totalPagar = cantidad * precioZapato - (cantidad * precioZapato * 0.10);
        descuento = 10;
    } else {
        if (cantidad > 20 && cantidad <= 30){
            totalPagar = cantidad * precioZapato - (cantidad * precioZapato * 0.20);
            descuento = 20;
        } else {
            if (cantidad > 30){
                totalPagar = cantidad * precioZapato - (cantidad * precioZapato * 0.40);
                descuento = 40;
            }
        }
    }

    let precioTotal = (cantidad * precioZapato).toLocaleString("en-US", {style:"currency", currency:"USD"});
    totalPagar = (totalPagar).toLocaleString("en-US", {style:"currency", currency:"USD"});

    console.log("precio total " + precioTotal);
    console.log("descuento: " + descuento + "%");
    console.log("total a pagar " + totalPagar);

    alert ("Precio total " + precioTotal + ", descuento: " + descuento + "%, total a pagar " + totalPagar);
}

//6. Hacer un algoritmo en Javascript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.

function ejercicio6(){
    let sueldo_semanal = 0;
    let horas_regulares = 40;
    let horas_extras = 0;

    let horas_trabajadas = prompt("Ingrese las horas trabajadas por semana");
    horas_trabajadas = parseInt(horas_trabajadas);

    if (horas_trabajadas > 0 && horas_trabajadas <= horas_regulares){
        sueldo_semanal = horas_trabajadas * 20;
    } else {
        if (horas_trabajadas > horas_regulares){
            horas_extras = horas_trabajadas - horas_regulares;
            sueldo_semanal = (horas_regulares * 20) + (horas_extras * 25);
        }
    }
    console.log("Boleta de pago semanal");
    console.log("Horas trabajadas: " + horas_trabajadas);
	console.log("Horas extras: " + horas_extras);
    console.log("Sueldo semanal $" + sueldo_semanal);
    alert("Horas trabajadas: " + horas_trabajadas + ". Horas extras: " + horas_extras + ". Sueldo semanal $" + sueldo_semanal);
}

//7. Hacer un algoritmo en Javascript para una tienda de helado que da un descuento por compra a sus clientes con membresía 
//dependiendo de su tipo, solo existen tres tipos de membresías, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
function ejercicio7 (){
    let descuento_membresia = "0%";
    let monto_descuento = 0;
    let monto_final = 0;

    let tipo_membresia = prompt("Ingrese el tipo de membresia");
    tipo_membresia = tipo_membresia.toLocaleUpperCase();
    
    let monto_compra = prompt("Ingrese el monto de la compra");
    monto_compra = parseInt(monto_compra);

    if (monto_compra > 0 ){
        switch (tipo_membresia) {
            case "A":
                descuento_membresia = "10%";
				monto_descuento = monto_compra * 0.10;
                break;
            case "B":
                descuento_membresia = "15%";
				monto_descuento = monto_compra * 0.15;
                break;
            case "C":
                descuento_membresia = "20%";
				monto_descuento = monto_compra * 0.20;
                break;
            default:
                monto_descuento = 0;
        }

        monto_final =  monto_compra - monto_descuento;

        console.log("Detalle la compra");
	    console.log("El tipo de membresia es: " + tipo_membresia + ", accede a " + descuento_membresia + " de descuento");
	    console.log("El monto de la compra es: $" + monto_compra);
	    console.log("El descuento es: $" + monto_descuento);
	    console.log("El monto total a pagar es: $" + monto_final);
        alert("El tipo de membresia es: " + tipo_membresia + ", accede a " + descuento_membresia + " de descuento. El monto de la compra es: $" + monto_compra + ". El descuento es: $" + monto_descuento + ". El monto total a pagar es: $" + monto_final);

    } else {
        console.log("El monto ingresado debe ser mayor a cero");
        alert("El monto ingresado debe ser mayor a cero");
    };
}

//8. Hacer un algoritmo en Javascript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

function ejercicio8(){
    let cant = 3;
    let lista = [];
    let promedio = 0;

    for (index = 0; index < cant; index++){
        lista[index] = parseFloat(prompt("Ingrese la nota " + (index + 1) + " del estudiante :"));
    }

    promedio = Promedio(lista,cant);
    
    if(promedio > 10){
        console.log("El promedio del estudiantes es: " + promedio + ". El estudiante aprobó");
        alert("El promedio del estudiantes es: " + promedio + ". El estudiante aprobó");        
    } else {
        console.log("El promedio del estudiantes es: " + promedio + ". El estudiante NO aprobó");
        alert("El promedio del estudiantes es: " + promedio + ". El estudiante NO aprobó");
    }
}

//9. Hacer un algoritmo en Javascript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 
//tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

function ejercicio9(){
    let aumento = 0;
    let salario_final = 0;

    let salario_base = prompt("Ingrese el salario base: $");
    salario_base = parseFloat(salario_base);

    if (salario_base > 0 && salario_base <= 2000){
        aumento =  salario_base * 0.1;
    } else {
        if (salario_base > 2000){
            aumento = salario_base * 0.05;
        } else {
            salario_base = 0;
        }
    }


    salario_final = salario_base + aumento;
    console.log("El salario base es $" + salario_base + ". El aumento es $" + aumento + ". El salario final es $" + salario_final);
    alert("El salario base es $" + salario_base + ". El aumento es $" + aumento + ". El salario final es $" + salario_final);

}

//10. Hacer un algoritmo en Javascript que diga si un número es par o impar.

function ejercicio10(){
    let resto = 0;
    let numero_base = prompt("Ingrese un número");

    resto = numero_base % 2;
    
    if (resto == 0){
        console.log("El número " + numero_base + " es par");
        alert("El número " + numero_base + " es par");
    } else {
        console.log("El número " + numero_base + " no es par");
        alert("El número " + numero_base + " no es par");
    }
}

//11. Hacer un algoritmo en Javascript que lea tres números y diga cuál es el mayor.

function ejercicio11(){
    let cant = 3;
    let arreglo = [];
    let pos_mayor = 0;

    for (let index = 0; index < cant; index++){
        arreglo[index] = prompt("Ingrese el número [" + (index + 1) + "]:");
        arreglo[index] = parseFloat(arreglo[index]);
        for (j = 1; j < cant; j ++){
            if (arreglo[j] > arreglo[pos_mayor]){
                pos_mayor = j;
            }
        }
    }
    console.log("El número mayor es: " + arreglo[pos_mayor]);
    alert("El número mayor es: " + arreglo[pos_mayor]);
}

//12. Hacer un algoritmo en Javascript que lea dos números y diga cuál es el mayor.

function ejercicio12(){
    let cant = 2;
    let arreglo = [];
    let pos_mayor = 0;

    for (let index = 0; index < cant; index++){
        arreglo[index] = prompt("Ingrese el número [" + (index + 1) + "]:");
        arreglo[index] = parseFloat(arreglo[index]);
        for (j = 1; j < cant; j ++){
            if (arreglo[j] > arreglo[pos_mayor]){
                pos_mayor = j;
            }
        }
    }
    console.log("El número mayor es: " + arreglo[pos_mayor]);
    alert("El número mayor es: " + arreglo[pos_mayor]);
}

//13. Hacer un algoritmo en Javascript que lea una letra y diga si es una vocal.

function ejercicio13(){
    let letra = prompt("Ingrese una letra");
    letra = letra.toLocaleUpperCase();
    console.log(letra);
    const vocales = ["A","E","I","O","U"];

    if (vocales.includes(letra)){
        console.log("La letra ingresada es una vocal");
        alert("La letra ingresada es una vocal");
    } else {
        console.log("La letra ingresada no es una vocal");
        alert("La letra ingresada no es una vocal");
    }
}

//14. Hacer un algoritmo en Javascript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

function ejercicio14(){
    let numeroIngresado = prompt("Ingrese un número entero del 1 al 10");
    numeroIngresado = parseInt(numeroIngresado);

    if(numeroIngresado >= 0 && numeroIngresado <= 10){
        let iteracion = 1;
        let divisionResiduoCero = 0;

        while(iteracion <= numeroIngresado){
            if(numeroIngresado % iteracion == 0){
                divisionResiduoCero += 1;
            }
            iteracion++
        }

        if(divisionResiduoCero == 2){
            console.log("El número " + numeroIngresado + " es un número primo");
            alert("El número " + numeroIngresado + " es un número primo");
        }else{
            console.log("El número" + numeroIngresado + " no es un número primo");
            alert("El número " + numeroIngresado + " no es un número primo");
        }
    } else {
        console.log("Debe ingresar un número entero entre 1 y 10");
        alert("Debe ingresar un número entero entre 1 y 10");
    }

}

//15. Hacer un algoritmo en Javascript que convierta centímetros a pulgadas y libras a kilogramos.

function ejercicio15(){
    let centimetros = prompt("Ingrese la longitud en centímetros");
    let libras = prompt("Ingrese el peso en libras");

    centimetros = parseFloat(centimetros);
    libras = parseFloat(libras);

    let pulgadas = centimetros / 2.54;
    let kilogramos = libras / 2.205;

    console.log(centimetros + " centímetros equivale a " + pulgadas.toPrecision(3) + " pulgadas");
    alert(centimetros + " centímetros equivale a " + pulgadas.toPrecision(3) + " pulgadas");

    console.log(libras + " libras equivale a " + kilogramos.toPrecision(3) + " kilogramos");
    alert(libras + " libras equivale a " + kilogramos.toPrecision(3) + " kilogramos");

}

//16. Hacer un algoritmo en Javascript que lea un número y según ese número, indique el día que corresponde.

function ejercicio16(){
    let dia = "";
    let numero_de_la_semana = prompt("Ingrese un número para determinar el día de la semana que corresponde:");
    numero_de_la_semana = parseInt(numero_de_la_semana);

    switch(numero_de_la_semana){
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "No válido";
            break;
    }

    console.log("El número " + numero_de_la_semana + " equivale al día " + dia);
    alert("El número " + numero_de_la_semana + " equivale al día " + dia);
}

//17. Hacer un algoritmo en Javascript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

function ejercicio17(){
    let hora = prompt("Ingrese la hora (0-23)");
    let minutos = prompt("Ingrese los minutos (0-50)");
    let seg = prompt("Ingrese los segundos (0-50)");
 
    const actual = new Date();
    const nuevoActual = new Date();
    actual.setHours(parseInt(hora), parseInt(minutos), parseInt(seg));
    nuevoActual.setHours(parseInt(hora), parseInt(minutos), parseInt(seg)+1);

    console.log("La hora ingresada fue: " + actual + ". La nueva hora es: "+ nuevoActual);
    alert("La hora ingresada fue: \n" + actual + ".\nLa nueva hora es: \n"+ nuevoActual);
}

//18. Hacer un algoritmo en Javascript para una empresa se encarga de la venta y distribución de CDs. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender 
//calcule el precio total para el cliente y la ganancia para el vendedor.

function ejercicio18(){
    let precio = 0;
    let precio_total = 0;
    let ganancia = 8.25;
    let cantidad_compra = prompt("Ingrese la cantidad de productos a comprar");

    if(cantidad_compra > 0 && cantidad_compra <= 9){
        precio = 10;
    } else {
        if(cantidad_compra >= 10 && cantidad_compra <= 99){
            precio = 8;
        } else {
            if(cantidad_compra >= 100 && cantidad_compra <= 499){
                precio = 7;
            } else {
                if(cantidad_compra >= 500){
                    precio = 6;
                } else {
                    alert("El valor ingresado no es válido");
                    cantidad_compra = 0;
                }
            }
        }
    }

    console.log("Precio total para el cliente $: " + cantidad_compra * precio);
	console.log("La ganancia del vendedor es $: " + parseFloat((cantidad_compra * precio) * (ganancia/100)).toPrecision(3));
    alert("Precio total para el cliente $: " + cantidad_compra * precio + "\nLa ganancia del vendedor es $: " + parseFloat((cantidad_compra * precio) * (ganancia/100)).toPrecision(3));
}

//19. Hacer un algoritmo en Javascript, se tienen 4 tipos de empleados ordenados con su número identificador y salario diario correspondiente: Cajero (56$/día), Servidor (64$/día), Preparador de mezclas (80$/día), Mantenimiento (48$/día). Ingrese dos números enteros que representen el identificador y la cantidad de díaas que trabajó en la semana (6 días máximos). Mostrar por pantalla la cantidad de dinero a pagar al empleado.

function ejercicio19(){
    let cantidad = 0;
    let id_empleado_validador = "Correcto";

    let id_empleado = parseInt(prompt("Ingrese el identificador del empleado\n[1] Cajero [2] Servidor [3] Preparador de mezclas [4] Mantenimiento"));
    let dias_laborados = parseInt(prompt("Ingrese los días trabajados"));

    if (dias_laborados >= 6){
        dias_laborados = 6;
    }

    switch (id_empleado){
        case 1:
                cantidad = dias_laborados * 56;
                break;
        case 2:
                cantidad = dias_laborados * 64;
                break;
        case 3:
                cantidad = dias_laborados * 80;
                break;
        case 4:
                cantidad = dias_laborados * 48;
                break;
        default:
                cantidad = 0;
                id_empleado_validador = "Incorrecto";
                break;
    }

    console.log("El identificador del empleado es " + id_empleado_validador);
    console.log("La cantidad a pagar al empleado es: $" + cantidad);
    alert("El identificador del empleado es " + id_empleado_validador + "\nLa cantidad a pagar al empleado es: $" + cantidad);

}


//20. Hacer un algoritmo en Javascript que que lea 4 números enteros positivos y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

function ejercicio20(){
    let cant = 4;
	let pos_mayor = 1;
	let cant_pares;
	let variable;
	let lista = [];
	
    for (index = 0; index < 4; index++){
        lista[index] = parseFloat(prompt("Ingrese el [" + (index + 1) + "] número:"));
    }
    
    //¿Cuántos números son Pares?
    console.log("¿Cuántos números son Pares?")
	console.log("La cantidad de números pares es: " + obtenerPares(lista,cant));
	alert("¿Cuántos números son Pares?\nLa cantidad de números pares es: " + obtenerPares(lista,cant));
	
	//¿Cuál es el mayor de todos?
	pos_mayor = obtenerMayor(lista, cant);
    console.log("¿Cuál es el mayor de todos?");    
	console.log("El número mayor es " + lista[pos_mayor]);
    alert("¿Cuál es el mayor de todos?\nEl número mayor es " + lista[pos_mayor]);

    //Si el tercero es par, calcular el cuadrado del segundo.
    let tercero_par = terceroPar(lista,2);
    console.log("Si el tercero es par, calcular el cuadrado del segundo");
    
    switch(tercero_par){
        case -1:
            console.log("El tercer número ingresado " + lista[2] + " es par");
            console.log("El segundo número ingresado " + lista[1] + " es negativo, no es posible obtener su raíz cuadrada");
            alert("Si el tercero es par, calcular el cuadrado del segundo\nEl tercer número ingresado " + lista[2] + " es par\nEl segundo número ingresado " + lista[1] + " es negativo, no es posible obtener su raíz cuadrada");
            break;
        case -2:
            console.log("El tercer número ingresado " + lista[2] + " no es par");
            alert("Si el tercero es par, calcular el cuadrado del segundo\nEl tercer número ingresado " + lista[2] + " no es par");
            break;
        default:
            console.log("El tercer número ingresado " + lista[2] + " es par");
            console.log("El cuadrado del segundo número " + lista[1] + " es " + tercero_par);
            alert("Si el tercero es par, calcular el cuadrado del segundo\nEl tercer número ingresado " + lista[2] + " es par\nEl cuadrado del segundo número " + lista[1] + " es " + tercero_par);
            break;
    }
    
    //Si el primero es menor que el cuarto, calcular la media de los 4 números
	console.log("Si el primero es menor que el cuarto, calcular la media de los 4 números");

    if(lista[0] < lista[3]){        
        let promedio = primeroMenorCuarto(lista, 4, 0, 3);
        console.log("El primer número " + lista[0] + " es menor que el cuarto número " + lista[3]);
        console.log("El promedio de los " + cant + " números es: " + promedio);
        alert("Si el primero es menor que el cuarto, calcular la media de los 4 números\nEl primer número " + lista[0] + " es menor que el cuarto número " + lista[3] + "\nEl promedio de los " + cant + " números es: " + promedio);
    } else {
        console.log("El primer número " + lista[0] + " no es menor que el cuarto número " + lista[3]);
        alert("Si el primero es menor que el cuarto, calcular la media de los 4 números\nEl primer número " + lista[0] + " no es menor que el cuarto número " + lista[3])
    }

    //Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    console.log("Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700, calcular la suma de los 4 números");	
    alert("Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700, calcular la suma de los 4 números");	
    let suma = 0;

    if(lista[1] > lista[2]){
        console.log("El segundo número " + lista[1] + " es mayor que el tercer número " + lista[2]);
        if(lista[2] >= 50 && lista[2] <= 700){
            suma =  lista.reduce((partialSum, a) => partialSum + a, 0);
            console.log("El tercer número " + lista[2] + " se encuentra entre 50 y 700");         
            console.log("La suma de los " + cant + " números es: " + suma);
            alert("El tercer número " + lista[2] + " se encuentra entre 50 y 700\nLa suma de los " + cant + " números es: " + suma);
        } else {
            console.log("El tercer número " + lista[2] + " NO se encuentra entre 50 y 700");         
            alert("El tercer número " + lista[2] + " NO se encuentra entre 50 y 700");
        }
    } else {
        console.log("El segundo número " + lista[1] + " no es mayor que el tercer número " + lista[2]);         
        alert("El segundo número " + lista[1] + " no es mayor que el tercer número " + lista[2]);
    }    
}

//21. Hacer un algoritmo en Javascript que permita calcular el factorial de un número.

function ejercicio21(){
    let factorial = 1;
    let num = parseInt(prompt("Por favor digite un número entero"));
    if(num > 0){
        for (let contador = 1; contador <= num; contador++){
            factorial *= contador;
        }
        console.log("El factorial de " + num + " es: " + factorial);
        alert("El factorial de " + num + " es: " + factorial);
    } else {
        console.log("Alerta, factorial solo definido para números naturales");
        alert("Alerta, factorial solo definido para números naturales");
    }
}

//22. Hacer un algoritmo en Javascript para calcular la suma de los n primeros números.

function ejercicio22(){
    let n = parseInt(prompt("Ingrese el valor de n (número positivo): "));
    let suma = sumaRecursiva(n);

    if( n > 0){
        console.log("La suma de los " + n + " primeros números es: " + suma);
        alert("La suma de los " + n + " primeros números es: " + suma);
    } else {
        console.log("Alerta, Ingrese un número mayor a cero");
        alert("Alerta, Ingrese un número mayor a cero");
    }

}


//23. Hacer un algoritmo en Javascript para calcular la suma de los números impares menores o iguales a n.

function ejercicio23(){
    let n = parseInt(prompt("Ingrese el valor de n:"));
    let suma_impares = 0;
    
    if(n <= 0){
        console.log("Ingrese un número mayor a cero");
        alert("Ingrese un número mayor a cero");
    } else {
        for (let index = 1; index <= n; index += 2 ){
            if(index % 2 != 0){
                suma_impares += index;
            }
        }
        
        console.log("La suma de impares menores o iguales a " + n + " es: " + suma_impares);
        alert("La suma de impares menores o iguales a " + n + " es: " + suma_impares);
    }
}

//24. Hacer un algoritmo en Javascript para realizar la suma de todos los números pares hasta el 1000.

function ejercicio24(){
    let n = 1000;
    let suma_pares = 0;

    for (index = 2; index <= n; index += 2){
            suma_pares += index;
            console.log(index + " - " + suma_pares);
    }

    console.log("La suma de los números pares hasta " + n + " es: " + suma_pares);
    alert("La suma de los números pares hasta " + n + " es: " + suma_pares);
}

// 25. Hacer un algoritmo en Javascript para calcular el factorial de un número de una forma distinta.
function ejercicio25(){
    let n = parseInt(prompt("Ingrese el valor de n"));
    let f = factorial(n);

    if( f != -1){
        console.log("El factorial de " + n + " es: " + f);
        alert("El factorial de " + n + " es: " + f)
    }else{
        console.log("Alerta, factorial solo definido para número naturales");
        alert("Alerta, factorial solo definido para número naturales");
    }
}

//26. Hacer un algoritmo en Javascript para calcular el resto y cociente por medio de restas sucesivas.

function ejercicio26(){
    let numero1 = parseInt(prompt("Ingrese el primer número :"));
    let numero2 = parseInt(prompt("Ingrese el segundo número :"));
    let new_numero = numero1;
    let cociente = 0;

    while(new_numero >= numero2){
        new_numero -= numero2;
        cociente += 1;
    }

    console.log("El cociente es: " + cociente);
    console.log("El resto es: " + new_numero);
    alert("El cociente es: " + cociente + "\nEl resto es: " + new_numero);
}

//27. Hacer un algoritmo en Javascript para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.

function ejercicio27(){
    let flag = true;
    let i = 0;
    let lista = [];
    let num = 0;
    let suma = 0;

    alert("Ingrese una lista de números positivos, si desea terminar debe ingresar un número negativo");
    do {
        num = parseInt(prompt("Ingrese un número positivo"));
        if(num >= 0){
            lista[i] = num;
            i += 1;            
        }else{
            flag = false;
        }
    } while (flag == true);

    if (i > 0){
        for (let j = 0; j < i; j++){
            suma += lista[j];
        }
        let promedio = suma / (i);
        console.log("El promedio es " + promedio);
        alert("El promedio es " + promedio);
    } else {
        console.log("El número ingresado es negativo");
        alert("El número ingresado es negativo");
    }
}

//28. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo repetir.

function ejercicio28(){
    let num = 100;
    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i += 1;
    } while(i <= num)

    console.log("La Suma de los primeros " + num + " números es: " + sum);
    alert("La Suma de los primeros " + num + " números es: " + sum);
}

//29. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo mientras.

function ejercicio29(){
    let num = 100;
    let sum = 0;
    let i = 1;

    while(i <= num){
        sum += i;
        i += 1;
    }

    console.log("La Suma de los primeros " + num + " números es: " + sum);
    alert("La Suma de los primeros " + num + " números es: " + sum);
}

//30. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo para.

function ejercicio30(){
    let num = 100;
    let sum = 0;
    
    for(let i = 1; i<= num; i++){
        sum += i;
    }

    console.log("La Suma de los primeros " + num + " números es: " + sum);
    alert("La Suma de los primeros " + num + " números es: " + sum);
}

//31. Hacer un algoritmo en Javascript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

function ejercicio31(){
    let cant = 10;
    let suma_par = 0;
    let suma_impar = 0;
    let cant_par = 0;
    let cant_impar = 0;
    let i = 1;

    while (i <= cant){
        num = parseInt(prompt("Ingrese el valor del núimero [" + i + "] : "));
        if (num != 0){
            if (num % 2 == 0){
                suma_par += num;
                cant_par += 1;
            } else {
                suma_impar += num;
                cant_impar += 1;
            }
        }
        i += 1;
    }

    if (cant_par >= 0 && suma_par != 0){
        console.log("La media de los números pares es: " + suma_par / cant_par);
        alert("La media de los números pares es: " + suma_par / cant_par);
    } else {
        console.log("No es posible obtener la media de los números pares");
        alert("No es posible obtener la media de los números pares");
    }

    if (cant_impar >= 0 && suma_impar != 0){
        console.log("La media de los número impares es: " + suma_impar / cant_impar);
        alert("La media de los números impares es: " + suma_impar / cant_impar);
    } else {
        console.log("No es posible obtener la media de los números impares");
        alert("No es posible obtener la media de los números impares");
    }
}

//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades,
//hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

function ejercicio32(){
    let poblacionMaxima = 0;
    let maxCiudad = 0;
    let maxProvincia = 0;

    for (let provincia = 1; provincia <= 3; provincia++){
        for(let ciudad  = 1; ciudad <= 11; ciudad++){
            poblacion = Math.floor(Math.random() * 10000) + 500;
            console.log("La población de la ciudad [" + ciudad + "] - provincia [" + provincia + "] es: " + poblacion);
        
            if(poblacion > poblacionMaxima){
                poblacionMaxima = poblacion;
                maxCiudad = ciudad;
                maxProvincia = provincia;
            }
        }    
    }

    console.log("La ciudad [" + maxCiudad + "] - provincia [" + maxProvincia + "] cuenta con la población con mas personas: " + poblacionMaxima);
    alert("La ciudad [" + maxCiudad + "] - provincia [" + maxProvincia + "] cuenta con la población con mas personas: " + poblacionMaxima);
}

//33. Hacer un algoritmo en Javascript que permita al usuario continuar con el programa.

function ejercicio33(){
    let continuar = "S";
    while(continuar == "S"){
        continuar = prompt("Para continuar presione la tecla [S]");
        continuar = continuar.toLocaleUpperCase();
    }
    console.log("Sesión terminada");
    alert("Sesión terminada");
}

//34. Hacer un algoritmo en Javascript que imprima la tabla de multiplicar de los números del uno hasta el nueve.

function ejercicio34(){
    let num_inicial = 1;
    let num_final = 9
    let result = "";

    for (let i=num_inicial; i <= num_final; i++){
        console.log(num_final + " x " + i + " = " + (i * num_final));        
        result += num_final + " x " + i + " = " + (i * num_final) + "\n";
    }

    alert(result);
}

//35. Hacer un algoritmo en Javascript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

function ejercicio35(){
    let cant = 20;
    num = parseFloat(prompt("Ingrese el [1] número"));
    num_mayor = num;
    num_menor = num;

    for (let i = 2; i<= cant; i++){
        num = parseFloat(prompt("Ingrese el [" + i + "] número: "));
        if (num > num_mayor){
            num_mayor = num;
        }

        if (num < num_menor){
            num_menor = num;
        }
    }

    console.log("El número mayor es: " + num_mayor);
    console.log("El número menor es: " + num_menor);
    alert("El número mayor es: " + num_mayor +"\nEl número menor es: " + num_menor);
}

//36. Hacer un algoritmo en Javascript para calcular la serie de Fibonacci.

function ejercicio36(){
    let n = prompt("Ingrese la cantidad de números de la serie Fibonacci que desea visualizar");
    let a = 0;
    let b = 1;
    let result = "";

    for(i = 1; i <= n; i++){
        result += a + "\n";
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
    alert (result);
}

//37. Hacer un algoritmo en Javascript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

function ejercicio37(){
    let a = parseInt(prompt("Ingrese el primer número"));
    let b = parseInt(prompt("Ingrese el segundo número"));
    let num1 = a;
    let num2 = b;
    let temporal = 0;
    let resto = 0;

    //1- Hacer que el valor a sea el mayor
    if(a < b){
        temporal = a;
        a = b;
        b = temporal;
    }

    //2- Si el resto es igual a 0 termina el algoritmo
    while(b != 0){
        resto = a % b;
        a = b;
        b = resto;        
    }

    console.log("El M.C.D de [" + num1 + "] y [" + num2 + "] es: " + a);
    alert("El M.C.D de [" + num1 + "] y [" + num2 + "] es: " + a);
}

//38. Hacer un algoritmo en Javascript que nos permita saber si un número es un número perfecto.

function ejercicio38(){
    let n = parseInt(prompt("Ingrese el número"));
    let c = 1;
    let a = 0;
    let r = 0;

    do{
        r = n % c;
        if (r == 0){
            console.log(c);
            a += c;
        }
        c += 1;
    }
    while( c != n)

    if(a == n){
        console.log("El número " + n + " es perfecto");
        alert("El número " + n + " es perfecto");
    } else {
        console.log("El número " + n + " no es perfecto");
        alert("El número " + n + " no es perfecto");
    }
}

//39. Hacer un algoritmo en Javascript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

function ejercicio39(){
    let npi = 0;
    let n = parseInt(prompt("Ingrese el valor de n: "));
    let operador = 1;

    for(let i = 1; i <= n; i++){
        npi += (operador * 4.0 / (i * 2 - 1));
        operador = operador * (-1);
    }
    console.log("La aproximación a PI con " + n + " pasos es: " + npi);
    alert("La aproximación a PI con " + n + " pasos es: " + npi);
}

//40. Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Nilakantha. 
//La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

function ejercicio40(){
    let num = parseInt(prompt("Ingrese el número de aproximaciones de la serie de Nilakantha"));
    let pipi = 0;
    let signo = 1;
    let n = 2;

    for(i = 1; i <= num; i++){
        pipi += (signo * 4 / (n * (n + 1) * (n + 2)));
        n += 2;
        signo *= -1;
    }

    console.log("La aproximación a PI con " + num + " pasos es: " + (3 + pipi));
    alert("La aproximación a PI con " + num + " pasos es: " + (3 + pipi));
}
