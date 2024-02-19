const botonClickMe = document.querySelector("button");
botonClickMe.addEventListener("click", () => {
    resolucion();
});

//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
// const resolucion = () => {
//     const numero = prompt("Ingresa un número");
//     if (numero.length === 3) {
//         console.log("El número tiene 3 dígitos!!!");
//     }
// }

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
// const resolucion = () => {
//     const numero = prompt("Ingresa un número");
//     if (parseInt(numero) < 0) {
//         console.log("El número es negativo!!!");
//     }
// }

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
// const resolucion = () => {
//     const numero = prompt("Ingresa un número");
//     const arrayLetras = numero.split("");
//     if (arrayLetras[arrayLetras.length - 1] == "4") {
//         console.log("El número termina en 4!!!");
//     }
// }

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
// const resolucion = () => {
//     let arregloNumeros = [];
//     const numero1 = prompt("Ingresa un número");
//     arregloNumeros.push(numero1);
//     const numero2 = prompt("Ingresa un número");
//     arregloNumeros.push(numero2);
//     const numero3 = prompt("Ingresa un número");
//     arregloNumeros.push(numero3);
//     let numeroMayor = 0;
//     arregloNumeros.forEach(numero => {
//         if (numero > numeroMayor) {
//             numeroMayor = numero;
//         }
//     });
//     console.log(`El numero mayor de los tres ingresados es : ${numeroMayor}`);
// }

// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
// const resolucion = () => {
//     const numero = prompt("¿Cuantos zapatos desea?");
//     const precio_zapato = 80;
//     let descuento = 0;
//     if (numero > 10) descuento = 0.1;
//     if (numero > 20 && numero < 30) descuento = 0.2;
//     if (numero > 30) descuento = 0.4;
//     console.log(`Al cliente se le otorga un ${descuento*100}% de desc. y debe pagar ${(1-descuento)*precio_zapato*numero}`);
// }

//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
// const resolucion = () => {
//     const horas = prompt("Ingrese las horas extras trabajadas");
//     let costo_x_hora = 0;
//     if (parseInt(horas) > 0) costo_x_hora = 20;
//     if (parseInt(horas) > 40) costo_x_hora = 25;
//     console.log(`Se le pagará ${costo_x_hora * horas}, adicional a su sueldo!!!`);
// }

// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//    Tipo A 10% de descuento
//    Tipo B 15% de descuento
//    Tipo C 20% de descuento
// const resolucion = () => {
//     const clientes = [
//         { cliente: "Marco", tipo: "A" },
//         { cliente: "Antonio", tipo: "C" }
//     ]
//     const tipos = [
//         { tipo: "A", descuento: 0.1 },
//         { tipo: "B", descuento: 0.15 },
//         { tipo: "C", descuento: 0.2 }
//     ]
//     const nombrecliente = prompt("Ingrese su nombre");
//     let validacion = false;
//     for (const cliente of clientes) {
//         if (cliente.cliente === nombrecliente) {
//             for (const tipo of tipos) {
//                 if (tipo.tipo == cliente.tipo) {
//                     console.log(`Nuestro cliente: ${nombrecliente}, se le debe otorgar un ${tipo.descuento*100}% descuento!!!`);
//                     validacion = true;
//                     return;
//                 }
//             }
//             return;
//         }
//     }
//     if (validacion == false) {
//         console.log("Nombre ingresado aún no es nuestro cliente!!!");
//     }
// }

//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
// const resolucion = () => {
//     const cant_notas_pedir = 3;
//     let arregloNotas = [];
//     for (let index = 1; index <= cant_notas_pedir; index++) {
//         const nota = prompt(`Ingresa la nota${index}`)
//         arregloNotas.push(parseInt(nota));
//     }
//     let notasacumuladas = 0;
//     arregloNotas.forEach(nota => {
//         notasacumuladas += nota;
//     });
//     const resultado = notasacumuladas / cant_notas_pedir;
//     if (resultado > 10) {
//         console.log(`El estudiante aprobó con promedio : ${Math.ceil(resultado)}`);
//     } else {
//         console.log(`El estudiante desaprobó con promedio : ${Math.ceil(resultado)}`);
//     }
// }

// 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
// const resolucion = () => {
//     const sueldo = prompt("Ingrese el sueldo");
//     let nuevoSueldo = 0;
//     if (sueldo > 2000) {
//         nuevoSueldo = sueldo * 1.05;
//     } else {
//         nuevoSueldo = sueldo * 1.1;
//     }
//     console.log(`El nuevo sueldo del trabajador será : ${nuevoSueldo}`);
// }

// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
const resolucion = () => {
    const numero = prompt("Ingrese un numero");
    if (numero % 2 == 0) {
        console.log(`El número ${numero} es par!!!`);
    } else {
        console.log(`El número ${numero} es impar!!!`);
    }
}