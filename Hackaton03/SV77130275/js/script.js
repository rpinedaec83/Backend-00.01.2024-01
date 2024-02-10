function ejercicio1(){

    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        console.log("Si tiene 3 caracteres");
    }
    else{
        console.log("No tiene 3 caracteres");
    }
}
function ejercicio2(){


let numero = parseInt(prompt("Escriba el número entero: "));

if (numero < 0) {

    console.log("El número ingresado es negativo.");

} else {
    console.log("El número ingresado no es negativo.");
}
}
function ejercicio3(){

	let numero1 = parseInt(prompt("Escriba un numero "));
 
    if(numero1 % 10 == 4){
        console.log("El numero ingresado termina en 4");
    }
    else {
        console.log("El numero ingresado no termina en 4");
    }
    }

function ejercicio4(){

	let numero1 = parseInt(prompt("Escriba el primer numero "));
    let numero2 = parseInt(prompt("Escriba el segundo numero "));
    let numero3 = parseInt(prompt("Escriba el tercer numero "));
    
    if(numero1 > numero2){

        temp = numero1
        numero1 = numero2
        numero2 = temp
    }
    
    if(numero2 > numero3){
        temp = numero2
        numero2 = numero3
        numero3 = temp
    }
    
    if(numero1 > numero2){
        temp = numero1
        numero1 = numero2
        numero2 = temp
        console.log("De menor a mayor: ", numero1, ",", numero2, ",", numero3)
    }
}

function ejercicio5() {

    let cantidadZapatos = parseInt(prompt("Escribe la cantidad de zapatos que desea comprar "));

        const precioPorZapato = 80;
        let descuento = 0;

        let precioTotal = cantidadZapatos * precioPorZapato;

    
        if (cantidadZapatos > 30) {
            descuento = 0.4; // 40% de descuento
            console.log("El descuento aplicado es del 40%");
        } else if (cantidadZapatos > 20) {
            descuento = 0.2; // 20% de descuento
            console.log("El descuento aplicado es del 20%");
        } else if (cantidadZapatos > 10) {
            descuento = 0.1; // 10% de descuento
            console.log("El descuento aplicado es del 10%");
        }
    
        precioTotal -= precioTotal * descuento;
    
        console.log("El precio total es: ", precioTotal);
    }
    
    function ejercicio6() {
        
    let horasTrabajadas = parseInt(prompt("Escribe la cantidad de horas trabajadas "));

        const salarioHoraNormal = 20;
        const salarioHoraExtra = 25;
        const horasNormales = 40;
    
        let salarioSemana = 0;
    
        if (horasTrabajadas <= horasNormales) {

            salarioSemana = horasTrabajadas * salarioHoraNormal;
            console.log("El sueldo semanal es de: ",salarioSemana);
        } else {
            const horasExtras = horasTrabajadas - horasNormales;
            salarioSemana = horasNormales * salarioHoraNormal + horasExtras * salarioHoraExtra;
       console.log("El sueldo semanal es de: ", salarioSemana);
        }
    
      
    }
    function ejercicio7() {
        
        let tipoMembresia = prompt("Elija el tipo de membresia: A, B o C")
        
        
        switch (tipoMembresia) {

            case 'A':
                console.log("El precio con descuento es del 10% ")
                break;
            case 'B':
                console.log("El precio con descuento es del 15% ")
                break;
            case 'C':
                console.log("El precio con descuento es del 20% ")
                break;
            default:
                descuento = 0; 
                console.log("El precio con descuento es del 0%")
            }
    }

    function ejercicio8() {
       
    let nota1 = parseInt(prompt("escriba la primera nota"));
    let nota2 = parseInt(prompt("escriba la segunda nota"));
    let nota3 = parseInt(prompt("escriba la tercera nota"));
    
    let promedio = ((nota1 + nota2 + nota3)/ 3)

        console.log("El promedio es: ", promedio);
     
        if (promedio < 10) {

            console.log("Usted ha desaprobado")
        }
        if (promedio > 11)
        console.log("Usted ha aprobadado")
    }
    /*Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
    si generaba menos de $2000 su aumento será de un 10%./** */

    function ejercicio9() {

        let sueldoActual = parseInt(prompt("Escriba su sueldo actual"));
        console.log("sualseldoActual")
        
        if (sueldoActual < 2000){
            console.log("Usted tiene un aumento del 10%")
            console.log(sueldoActual + (sueldoActual * 0.10))
        }
            else if (sueldoActual > 2000)

            console.log ("Usted tiene un aumento del 5%")
            console.log(sueldoActual + (sueldoActual * 0.05))
    }
/*Hacer un algoritmo en JavaScript que diga si un número es par o impar./** */
 function ejercicio10() {

        let numero = parseInt(prompt("Escriba un numero"));

        if (numero % 2 == 0) {
            console.log("El numero es par")
        } else {
            console.log("El numero es impar")
        }
    }
  // Hacer un algoritmo en JavaScript que diga si un número es par o impar.

function ejercicio11(){
    
}