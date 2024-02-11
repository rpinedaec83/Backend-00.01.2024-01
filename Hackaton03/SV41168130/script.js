// 1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar 
// si tiene tres digitos

function ejercicio1(){
    let numero = prompt("Escriba su número");
    let nroCaracteres = numero.length;

    if(nroCaracteres == 3)  {
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

//Obtiene el Promedio
function Promedio(arreglo, cantidad){
    let prom = 0;
    let suma = 0;
    for (let index = 1; index <= cantidad; index++){
        suma += arreglo[index]; 
    }
    prom = suma / cantidad;
    return prom;
}

function ejercicio8(){
    let cant = 3;
    let lista = [];
    let promedio = 0;

    for (index = 0; index < cant; index++){
        lista[index] = prompt("Ingrese la nota " + index + 1 + " del estudiante :");
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
