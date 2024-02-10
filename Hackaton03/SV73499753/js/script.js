function ejercicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}

function ejercicio2(){
     
     let numero = parseInt(prompt("Escriba un numero entero"));
     if (numero < 0) {
        alert("El número es Negativo");
    } else if (numero > 0) {
        alert("El número no es Negativo");
    } else {
        alert("El número es cero");
    }
}

function ejercicio3(){
    let numero =prompt("Escribe un numero")
    if(numero%10 ==4){
        alert("El número termina en 4");
    }else {
        alert("El número no termina en 4");
    }
}
function ejercicio4(){
    let numero1 = parseInt(prompt("Escriba el primer numero entero"));
    let numero2 = parseInt(prompt("Escriba el segundo numero entero"));
    let numero3 = parseInt(prompt("Escriba el tercer numero entero"));
    let numeros = [numero1, numero2, numero3];
    numeros.sort(function(a, b) {
        return a - b;
    });
    alert("El Ordenamiento: " + numeros[0] + ", " + numeros[1] + ", " + numeros[2]);
}
function ejercicio5(){
    const precioZ = 80;
    let cantZap = parseInt(prompt("Ingrese cantidad de Zapatos a Comprar"));
    let preCompra = cantZap * precioZ;
    let desc = 0;
    let precioTotal = 0;
    if (cantZap <= 10) {
        alert("Precio total de compra: $" + preCompra);
    } else if (cantZap <= 20) {
        desc = preCompra * 0.1;
    } else if (cantZap <= 30) {
        desc = preCompra * 0.2;
    } else {
        desc = preCompra * 0.4;
    }
    precioTotal = preCompra - desc;
    alert("Sub Total: $" + preCompra);
    alert(`Tiene un descuento de ${desc * 100 / preCompra}%, el descuento es: $${desc}`);
    alert("Precio Total a pagar: $" + precioTotal);

}
function ejercicio6(){
    const horas = 40
    let hrCuar = 20
    let hrEx = 25
    let pagoFinal = 0
    let temp = 0
    let hrasTra = prompt("Ingresar numero de horas de trabajo");
    if (hrasTra > horas) {
        temp = hrasTra - horas
        pagoFinal = (hrasTra * hrCuar) + (temp * hrEx)
        
    }else {
        pagoFinal = hrasTra * hrCuar
        }
        alert ("Su sueldo semanal sera de : " +pagoFinal+"$")
    }

function ejercicio7(){
    let membresia = prompt("Escriba tipo de Membresia").toUpperCase(); 

    switch (membresia) {
        case "A":
            alert("Tiene un descuento del 10%");
            break;
        case "B":
            alert("Tiene un descuento del 15%");
            break;
        case "C":
            alert("Tiene un descuento del 20%");
            break;
        default:
            alert("No tiene descuento alguno");
    }
}
function ejercicio8(){
    // CONSIDERO QUE LA NOTA PARA APROBAR ES DE 12 
    let promedio = 0
    let nota1 = parseInt(prompt("Ingrese la Nota N° 1 "));  
    let nota2 = parseInt(prompt("Ingrese la Nota N° 2 "));  
    let nota3 = parseInt(prompt("Ingrese la Nota N° 3 ")); 
    promedio = Math.round((nota1 + nota2 + nota3) / 3);
    if (promedio >= 12) {
        alert("Aprobado");
        alert("Su nota final es: " + promedio);
    } else {
        alert("Desaprobado");
        alert("Su nota final es: " + promedio);
    }
}
function ejercicio9(){
   let aumento = 0
    let sueldo = parseInt(prompt("Ingrese su sueldo"));
    if (sueldo > 2000){
        aumento = sueldo * 1.05
        alert("Su nuevo salario con aumento del 5% es: " + aumento)
    }else{
        aumento = sueldo * 1.1
        alert("Su nuevo salario con aumento del 10% es: " + aumento)
    }
}
function ejercicio10(){
    let num = parseInt(prompt("Ingrese un número"));

    let mensaje = (num % 2 === 0) ? "El número es Par" : 
    "El número es Impar";

    alert(mensaje);
}