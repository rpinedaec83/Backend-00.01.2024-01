function ejercicio_01(){
    let num = prompt("Ingrese un numero");
    if (num > 99 && num < 1000){
        alert("Tiene 3 digitos");
    }
    else{
        alert("No tiene 3 digitos");
    }
}

function ejercicio_02(){
   let num = prompt("Ingrese un numero");
   num < 0 ? alert("Es negativo") : alert("No es negativo");
}

function ejercicio_03(){
   let num = prompt("Ingrese un numero");
   num % 10 == 4 ? alert("Termina en 4") : alert("No termina en 4");
}

function ejercicio_04(){
    let num1 = parseInt(prompt("Ingrese un numero"));
    let num2 = parseInt(prompt("Ingrese un numero"));
    let num3 = parseInt(prompt("Ingrese un numero"));

    lista = [num1,num2,num3];
    lista.sort((a,b) => a - b)

    for (n of lista){
        console.log(n);
    }
}

function ejercicio_05(){
    let cantidad = prompt("Ingrese cantidad de zapatos a comprar : ");
    const precio = 80;
    let total = precio * cantidad;

    if (cantidad >= 10 && cantidad < 20){
        total = total - 0.1 * total;
    }
    else if(cantidad >=20 && cantidad < 30)
    {
        total = total - 0.2 * total;   
    }
    else if(cantidad >= 30){
        total = total - 0.3 * total;
    }

    console.log("El costo total de " + cantidad + " zapatos es de " + total);

}

function ejercicio_06(){
    let horas = prompt("Cuantas horas trabajo?");
    horas < 40 ? console.log("Se le pagara " + 20 * horas) : console.log("Se le pagara " + (40*20 + (horas%40)*25));
}

function ejercicio_07(){
    let membresia = prompt("Ingrese membresia");
    switch(membresia.toUpperCase()){
        case 'A':
            console.log("Tiene un 10% de descuento");
            break;
        case 'B':
            console.log("Tiene un 15% de descuento");
            break;
        case 'C':
            console.log("Tiene un 20% de descuento");
            break;
        default:
            console.log("Membresia no valida");
            break;
    }
}

function ejercicio_08(){


    let num1 = parseFloat(prompt("Ingrese nota 1"));
    let num2 = parseFloat(prompt("Ingrese nota 2"));
    let num3 = parseFloat(prompt("Ingrese nota 3"));

    let promedio = (num1 + num2 + num3)/3
    console.log(promedio);
    promedio >= 10.5 ? console.log("APROBO") : console.log("DESAPROBADO");
}

function ejercicio_09(){
    let salario = prompt("Ingrese salario actual del trabajador : ");
    salario > 2000 ? console.log("Su nuevo salario sera de : " + salario * 1.05) : console.log("Su nuevo salario sera de : " + salario * 1.1);
}

function ejercicio_10(){
    let num = prompt("Ingrese numero");
    num % 2 == 0 ? alert("Es PAR") : alert("Es IMPAR");

}

function ejercicio_11(){
    let num1 = parseInt(prompt("Ingrese numero 1 "));
    let num2 = parseInt(prompt("Ingrese numero 2 "));
    let num3 = parseInt(prompt("Ingrese numero 3 "));
    if(num1 > num2 && num1 > num3){
        alert("Numero mayor : " + num1);
    }
    else if(num2 > num3 && num2 > num1)
    {
        alert("Numero mayor : " + num2);
    }
    else{
        alert("Numero mayor : " + num3);
    }
}

function ejercicio_12(){
    let num1 = parseInt(prompt("Ingrese numero 1 "));
    let num2 = parseInt(prompt("Ingrese numero 2 "));
    num1 > num2 ? alert(num1 + " es el mayor") : alert(num2 + " es el mayor");
}

function ejercicio_13(){
    let letra = prompt("Ingrese una letra");
    letra = letra.toUpperCase();
    let vocales = ['A', 'E', 'I', 'O' , 'U'];

    if (vocales.includes(letra)){
        alert("ES VOCAL");
    }
    else{
        alert("NO ES VOCAL");
    }
}

function ejercicio_14(){
    let numero = parseInt(prompt("Ingrese un numero del 1 al 10"));
    let contador = 0;

    for(let i = 0; i < numero/2; i++){
        if(numero%i == 0){
            contador += 1;
        }
    }

    contador > 2 ? alert("NO ES PRIMO") : alert("ES PRIMO");
}

function ejercicio_15(){
    let cm = prompt("Ingrese longitud en centimetros: ");
    pulgadas = cm / 2.54;
    alert("La longitud en pulgadas es: " + pulgadas);
        
    let peso = prompt("Ingrese peso en libras: ");
    kg = peso * 0.453592
    alert("El peso en kilogramos es: " + kg);      
}

function ejercicio_16(){
    let numero = parseInt(prompt("Ingrese numero del 1 al 7"));
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    alert("Hoy es " + dias[numero - 1]);
}

function ejercicio_17(){
    alert("Ejercicio_17");
}

function ejercicio_18(){
    let cantidad = parseInt(prompt("Ingrese cantidad de discos a comprar "));
    let costo;
    if (cantidad < 10){
        costo = cantidad * 10;
    }
    else if(cantidad >= 10 && cantidad < 100){
        costo = cantidad * 8;
    }
    else if(cantidad >= 100 && cantidad < 500){
        costo = cantidad * 7;
    }
    else{
        costo = cantidad * 6;
    }

    let ganancia = costo * 8.25 / 100;

    alert("Costo total de discos : " + costo + "\nGanancia del vendedor : " + ganancia);
}

function ejercicio_19(){
    const puestos = ["Cajero", "Servidor", "Preparador", "Mantenimiento"];
    let tipoempleado = parseInt(prompt("Ingrese codigo de empleado 1 - 4 : "));
    let dias = prompt("Ingrese cantidad de dias trabajados : ");

    switch(tipoempleado){
        case 1:
            alert("El " + puestos[tipoempleado-1] + " recibira un salario de " + 56 * dias);
            break;
        case 2:
            alert("El " + puestos[tipoempleado-1] + " recibira un salario de " + 64 * dias);
            break;
        case 3:
            alert("El " + puestos[tipoempleado-1] + " recibira un salario de " + 80 * dias);
            break;
        case 4:
            alert("El " + puestos[tipoempleado-1] + " recibira un salario de " + 48 * dias);
            break;
    }
}

function ejercicio_20(){
    let num1 = parseInt(prompt("Ingrese numero 1 "));
    let num2 = parseInt(prompt("Ingrese numero 2 "));
    let num3 = parseInt(prompt("Ingrese numero 3 "));
    let num4 = parseInt(prompt("Ingrese numero 4 "));

    let pares = 0;
    
    if (num1%2 == 0) { pares += 1}
    if (num2%2 == 0) { pares += 1}
    if (num3%2 == 0) { pares += 1}
    if (num4%2 == 0) { pares += 1}

    let lista = [num1, num2, num3, num4];
    lista.sort((a,b) => a - b);
    alert("Hay "  + pares + " pares\n" + 
    "El numero mayor es " + lista[lista.length - 1]);

    if(num3%2 == 0){
        alert(num2**2);
    }

    if(num1 < num4){
        alert("La media de los numeros es " + (num1 + num2 + num3 + num4)/4);
    }

    if(num2 > num3){
        if(num3 > 50 && num3 < 700){
            alert("La suma de los 4 numeros es " + (num1 + num2 + num3 + num4));
        }
    }
}

function ejercicio_21(){
    let numero = parseInt(prompt("Ingrese numero a calcular factorial"));
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial = factorial * i;
    }
    alert("El factorial de " + numero + " es " + factorial);
}

function ejercicio_22(){
    let numeros = parseInt(prompt("Ingrese cantidad de n numeros a sumar "));

    let suma = 0;

    for(let i = 1; i <= numeros; i++){
        suma = suma + i;
    }
    alert("La suma de los " + numeros + " primeros numeros es " + suma);
}

function ejercicio_23(){
    let numero = parseInt(prompt("Ingrese numero"));
    let suma = 0;

    for(let i = 1; i <=numero; i++){
        if(i%2==1){
            suma = suma + i;
        }
    }
    alert("La suma de los numero impares menores a " + numero + " es " + suma );

}

function ejercicio_24(){
    let suma = 0;

    for(let i = 0; i <=1000; i++){
        if(i%2 == 0){
            suma += i;
        }
    }
    alert("La suma de numeros pares menores a 1000 es " + suma);
}

function ejercicio_25(){
    alert("Ejercicio 25");
}

function ejercicio_26(){
    let dividendo = parseInt(prompt("Ingrese dividendo"));
    let divisor = parseInt(prompt("Ingrese divisor"));

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    alert("Cociente : " + cociente + "\nResto : " + resto);

}

function ejercicio_27(){
    let numero = parseInt(prompt("Ingrese un numero"));
    if(numero >= 0){
        ejercicio_27();
    }
    else{
        alert("FIN");
    }
}

function ejercicio_28()
{
    let n = 0;
    let suma = 0;
    do{
        suma = suma + n;
        n += 1;
    }while(n <= 100);
    alert("La suma de los 100 primeros numero usando ciclo repetir es : " + suma);
}

function ejercicio_29(){
    let n = 0;
    let suma = 0;
    while(n<= 100){
        suma += n;
        n += 1;
    }
    alert("La suma de los 100 primeros numero usando ciclo mientras es : " + suma);
}

function ejercicio_30(){
    let suma = 0;
    for(let i = 0; i <= 100; i++){
        suma += i;
    }
    alert("La suma de los 100 primeros numero usando ciclo para es : " + suma);
}

function ejercicio_31(){
    let pares = [];
    let impares = []
    for(let i = 0; i < 10; i++){
        let num = parseInt(prompt("Ingrese numero " + (i+1)))
        num % 2 == 0 ? pares.push(num) : impares.push(num);
    }

    let sumpares = 0;
    let sumimpares = 0;

    for(par of pares){
        sumpares += par;
    }
    for(impar of impares){
        sumimpares += impar;
    }


    alert("La media de los numeros pares es : " + (sumpares/pares.length) + "\nLa media de los impares es : " + sumimpares/impares.length);
}

function ejercicio_32(){
    alert("EJERCICIO 32");
}

function ejercicio_33(){
    let u = prompt("DESEA CONTINUAR (S/N)");
    if(u.toUpperCase() == 'S')
    {
        ejercicio_33();
    }
    else{
        alert("FIN");
    }
}

function ejercicio_34(){
    for(let i = 1; i < 10; i++){
        console.log("Tabla Multiplicar del " + i);
        for(let n = 1; n < 10; n++){
            console.log(i*n);
        }
    }
}

function ejercicio_35(){
    let mayor = 0;
    let menor = 999;
    for(let i = 0; i< 20; i++){
        let numero = parseInt(prompt("Ingrese Numero " + (i+1)));

        if(numero > mayor){
            mayor = numero;
        }
        if(numero < menor){
            menor = numero;
        }
    }

    alert("El numero mayor es : " + mayor + "\nEl numero menor es : " + menor);
}

function ejercicio_36(){
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let n = parseInt(prompt("Ingrese n para serie de fibonacci : "));

    for(let i = 2; i < n; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    alert(fibonacci);
}

function ejercicio_37(){
    let a = parseInt(prompt("Ingrese primer numero :"));
    let b = parseInt(prompt("Ingrese segundo numero :"));
    let mcd = 0;
    let num1 = a;
    let num2 = b;

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    mcd = num1;

    alert("El MCD de " + a + " y " + b + " es " + mcd);

}

function ejercicio_38(){
    let numero = parseInt(prompt("Ingrese numero :"));

    if (numero <= 1) {
        console.log(numero +  " no es un número perfecto");
    } else {
        let sumaDivisores = 1;

        for (let i = 2; i * i <= numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;

                if (i !== numero / i) {
                    sumaDivisores += numero / i;
                }
            }
        }

    if (sumaDivisores == numero) {
        alert(numero +  " es un numero perfecto");
    } else {
        alert(numero + " no es un numero perfecto");
    }
    }
}

function ejercicio_39(){
    let n = prompt("Ingrese n");
    n = parseInt(n);
    let pi = 0;
    for (let i = 0; i < n; i++) {
        let der = 2 * i + 1;
    if (i % 2 === 0) {
      pi += 4 / der;
    } else {
      pi -= 4 / der;
    }
  }
  alert("El valor aproximado de pi con la serie de Gregory-Leibniz es : " + pi);
}

function ejercicio_40(){
    let suma = 3;
    let signo = 1;
    let fin = parseInt(prompt("Ingrese cantidad de valores : "));
    const iteraciones = 1000; 

    for (let n = 1; n <= fin; n++) {
        let termino = (4 * signo) / (2 * n * (2 * n + 1) * (2 * n + 2));
        suma += termino;
        signo *= -1;
    }

    alert("El valor aproximado de pi con la serie de Nilakantha es :" + suma);
}