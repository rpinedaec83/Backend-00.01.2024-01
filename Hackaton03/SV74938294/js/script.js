function ejercicio1(){
    var numero = prompt("Ingrese un número: ");
    var ident = numero%100;
    if (ident>=1 || ident<10){
        alert("Es un número de 3 cifras");
    }else{

        alert("No es un número de 3 cifras");
    }
}
function ejercicio2(){
    var numero = prompt("Ingrese un numero: ");
    if(numero<0){
        alert("El número es NEGATIVO");
    }else{
        alert("El número es POSITIVO");
    }
}
function ejercicio3(){
    var numero = prompt("Escriba un número: ");
    if (numero%10 == 4){
        alert("El número termina en 4");
    }else{
        alert("El número NO termina en 4");
    }
}
function ejercicio4(){
    var datos=[0,0,0];
    for(i=0;i<3;i++){
        datos[i]= prompt("Ingrese el número " + (i+1) + ":")
    }
    datos.sort();
    datos.reverse();
        console.log("Los número ordenados descendentemente son: " + datos[0] +", "+ datos[1]+", "+ datos[2]);

}
function ejercicio5(){
    var cant = prompt("Bienvenido a la tienda de zapatos. ¿Cuántos desea comprar?: ");
    var precio = 0;
    if(cant >= 10 && cant <20){
        precio = cant*80*0.9;
    }else if(cant>=20 && cant <30){
        precio = cant*80*0.8;
    }else if(cant >=30){
            precio =cant*80*0.6;
    }else{
        precio = cant * 80;
    }
    console.log("El costo total es de : "+precio+" dólares americanos");
}
function ejercicio6(){
    var horas = prompt("Cuántas horas ha trabajado?: ")
    if (horas<=40){
        var pago = horas * 20;
    }else{
        var pago = horas*25;
    }
    console.log("Su pago será de: " + pago + " dólares americanos");
}
function ejercicio7(){ 
    var memb = prompt("Ingrese su membresía: (A,B o C")
    if(memb === "A"){
        alert("Recibirá und descuento del 10%");
    }else if(memb ==="B"){
        alert("Recibirá un descuento del 20%");
    }else if(memb==="C"){
        alert("Recibirá un descuento del 30%");
    }
}
function ejercicio8(){
    var datos;
    var suma = 0;
    for (i=0;i<3;i++){
        datos[i] = prompt("Inrgese la nota " + (i+1))
        suma = suma + datos[i];
    } 
    var prom = suma/3
    if(prom>=10.445){
        alert("GENIAL! APROBASTE!!!!");
    }
}
function ejercicio9(){
    var sueldo = prompt("Ingrese su sueldo:");
    if (sueldo<2000){
        sueldo = sueldo *1.1;
    }else{
        sueldo = sueldo*1.05;
    }
    alert("Su nuevo sueldo es de: " + sueldo + "dólares americanos");
}
function ejercicio10(){
    var num = prompt("Ingrese un número");
    if (num%2 == 0){
        alert("El número es par");
    }else{
        alert("El número es impar")
    }
}
function ejercicio11(){
    var mayor = 0;
    for(i=0;i<3;i++){
        var num = prompt("Ingrese el número "+ (i+1));
        if (num >= mayor){
            mayor = num;
        }
    }
    alert("el número mayor es: " + mayor);
}
function ejercicio12(){
    var mayor = 0;
    for(i=0;i<2;i++){
        var num = prompt("Ingrese el número "+ (i+1));
        if (num >= mayor){
            mayor = num;
        }
    }
    alert("el número mayor entre los 2 es: " + mayor);
}
function ejercicio13(){
    var letra = prompt("Ingrese un caracter");
    if (letra ==="a"||letra ==="e"||letra ==="i"||letra ==="o"||letra ==="u"){
        alert("Es una vocal");
    }else{
        alert("Lástima NO ES UNA VOCAL");
    }
}
function ejercicio14(){
    while(num>10||num<1){
        var num = prompt("Ingrese un número: ");
    }
    if (num === 2 || num === 3 ||num === 5 ||num === 7){
        alert("ES UN NÚMERO PRIMO");
    }else{
        alert("NO ES UN NÚMERO PRIMO");
    }   
}
function ejercicio15(){
    var med = prompt("Ingrese una medida en cm");
    med = med /2.54;
    alert("La medida en pulgadas es: " + med + "pulagdas");
    var peso = prompt("Ingrese una peso en kg");
    peso = peso * 2.20462;
    alert("La peso en libras es: " + peso + "libras");
}
function ejercicio16(){
    var num = prompt("Ingrese un número");
    var resto = num%7;
    if(resto == 1){
        alert("El día es LUNES");
    }else if(resto == 2){
        alert("El día es MARTES");
    }else if(resto == 3){
        alert("El día es MIÉRCOLES");
    }else if(resto == 4){
        alert("El día es JUEVES");
    }else if(resto == 5){
        alert("El día es VIERNES");
    }else if (resto == 6){
        alert("El día es SÁBADO");
    }else{
        alert("El día es DOMINGO");
    }
}
function ejercicio17(){
    var hora = prompt("ingrese la hora en fortmato *HH:MM:SS* ");
    var horaDate = new Date(hora);
    horaDate.setSeconds(horaDate.getSeconds()+1);
    alert("La hora mas 1 segundo es: " + horaDate);
}
function ejercicio18(){
    var num = prompt("Ingrese la cantidad de CD que quiere comprar");
    var costo = 0;
    if(num<10){
        costo = num * 10;
    }else if (num >= 10 || num<100){
        costo = num * 8;
    }else if (num >=100||num <500){
        costo = num * 7;
    }else if(num >=500){
        costo = num * 6;
    }
    console.log("El costo total del cliente es : " + costo);
    console.log("La ganancia del vendedor es de: " + (costo*0.0825));
}
function ejercicio19(){
    do{
        var opcion = prompt("Ingrese un número del empleado:")
    }while(opcion<0 || opcion>=4)

    do{
    var dias = prompt("Ingrese el número de días que trabajó");
    }while(dias<0 || dias>6)

    if(opcion==1){
    console.log("El sueldo del cajero es:" + (dias*56) + " dólares americanos" );
    }else if(opcion ==2){
    console.log("El sueldo del servidor es:" + (dias*64) + " dólares americanos" );
    }else if(opcion ==3){
    console.log("El sueldo del preparador de mezcla es:" + (dias*80) + " dólares americanos" );
    }else if(opcion ==4){
        console.log("El sueldo del mantenimiento es:" + (dias*48) + " dólares americanos" );
    }
}
function ejercicio20(){
    var datos;
    var contP = 0;
    for(i=0;i<4;i++){
        datos[i] = prompt("Ingresa el número " + (i+1)+":");
    }
    for (i=0;i<4;i++){
        if(datos[i]%2==0){
            contP++;
        }
    }
    var mayor = 0;
    for(i=0;i<4;i++){
        if (datos[i]>=mayor){
            mayor = datos[i];
        }
    }
    console.log("Hay " + contP + "números pares");
    console.log("El mayo números es :" + mayor);
    if(datos[2]%2==0){
        console.log("El cuadrado del segundo es: " + (datos[1]*datos[1]));
    }else{
        console.log("El tercero no es par");
    }
    var sumaT = 0;
    if(datos[1]>datos[2]){
        if(datos[1]>=50 && datos[1]<=700){
            for(i=0;i<4;i++){
                sumaT=sumaT + datos[i];
            }
            console.log("la suma de los 4 números es: " + sumaT);
        }else{
            console.log("No se cumple la segunda condición");
        }
    }
function ejercicio21(){
    var num = prompt("Ingrese un número")
    var fact = 1;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    console.log("El factorial del número ingresado es: " + fact);
}
function ejercicio22(){
    var num = prompt("Ingrese un número: ");
    var suma = 0;
    for (i=0;i<=num;i++){
        suma = suma + i; 
    }
    console.log("La suma de los " + num + " números es: " + suma);
}
function ejercicio23(){
    var num = prompt("Inrgesa un número");
    var suma = 0
    for(i=0;i<=num;i++){
    if (num%2!=0){
        suma = suma + i;
    }
}
}
console.log("La suma de los numeros impares hasta " + num + "es: "+suma);
}
function ejercicio24(){
    for(i=0;i<=1000;i++){
    if (num%2==0){
        suma = suma + i;
    }
}
console.log("La suma de los número pares hasta el 1000 es: " + suma);
}
function ejercicio25(){
    var num = prompt("ingrese un número: ");
    var cont=1;
    var mult = 1;
    while(cont<=num){
        mult = mult * i;
        i++;
    }
    console.log("El factorial del número ingresado es: " + mult);
}
function ejercicio26(){
    var div = prompt("ingrese un número");
    var q = prompt("Entre cuánto lo dividimos?");
    var mod = div;
    var cont = 0;
    do{
        mod = mod - q;
        cont++;
    }while(mod>=q)
    console.log("el cociente es: " + cont  + " y el resto es: " + mod);
}
function ejercicio27(){
    var datos =[];
    var cont = 0;
    do{
        datos[cont] = parseInt(prompt("Ingrese un número: "));
        if (datos[cont]<0){
            break;
        }else{
            cont++;
        }
    }while(true);
    var prom = 0;
    var suma = 0;
    for(i=0;i<cont;i++){
        suma = suma + datos[i];
    }
    console.log(suma + " " + cont);
    prom = suma / cont;
    console.log("El promedio de todos los número ingresados es: " + prom);
}
function ejercicio30(){
    var suma = 0;
    for(i=1;i<=100;i++){
        suma = suma +i;
    }
    console.log("la suma de todos los 100 números es: " + suma);
}
function ejercicio29(){
    var suma= 0;
    cont = 1;
    while(cont<=100){
        suma = suma + cont;
        cont++;
    }
    console.log("La suma de los 100 primeros numeros es: " + suma);
}
function ejercicio28(){
    var suma= 0;
    cont = 1;
    do{
        suma = suma + cont;
        cont++;
    }while(cont<=100)
    console.log("La suma de los 100 primeros numeros es: " + suma);
}
function ejercicio31(){
    var sumap = 0;
    var contp = 0;
    var sumai = 0;
    var conti = 0;
    var datos = [];
    for (i=0;i<10;i++){
        datos[i] = parseInt(prompt("Ingrese un número"));
        if(datos[i]%2==0){
            sumap = sumap + datos[i];
            contp++;
        }else{
            sumai= sumasi + datos[i];
            conti++;
        }
        console.log("El promedio de los números pares es: " (sumap/contp) +" Y de los número impares es: " + (suma/conti));
    }
}
function ejercicio32(){
    var ciudad = [];
    var poblacion= [];
    ciudad[1] = ["Chimbote"]
	ciudad[2] = ["Pucallpa"]
	ciudad[3] = ["Iquitos"]
	ciudad[4] = ["Cuzco"]
	ciudad[5] = ["Huancayo"]
	ciudad[6] = ["Piura"]
	ciudad[7] = ["Chiclayo"]
	ciudad[8] = ["Trujillo"]
	ciudad[9] = ["Arequipa"]
	ciudad[10] = ["Callao"]
	ciudad[11] = ["Lima"]
	
	poblacion[1] = 354300
	poblacion[2] = 327600
	poblacion[3] = 377609
	poblacion[4] = 428450
	poblacion[5] = 456250
	poblacion[6] = 473000
	poblacion[7] = 552500
	poblacion[8] = 919900
	poblacion[9] = 1008290
	poblacion[10] = 994494
	poblacion[11] = 8574974

    var mayor = 0;
    var indi= 0;
    for(i=1;i<=11;i++){
        if(poblacion[i]>=mayor){
            mayor = datos[i];
            indi = i;
        }
    }
    console.log("La ciudad con más habitantes es: " + ciudad[indi] + " y su población es: " + poblacion[indi]);
}
function ejercicio33(){
    do{
        var num = prompt("Quiere continuar cone l programa? Sí: 1 , No : cualquier cosa")
    }while(num == 1)
    console.log("Terminó el programa");
}
function ejercicio34(){
    for(i=1;i<=9;i++){
        for(j=1;j<=9;j++){
            console.log(i+"x"+j+"="+(i*j)+"\n");
        }
    }
}
function ejercicio35(){
    var datos= [];
    for (i=0;i<20;i++){
        datos[i]=parseInt(prompt("Ingrese un número: "));
    }
    datos.sort();
    console.log("El menor es: " + datos[0]+ "y el mayo es:  " + datos[19]);
}
function ejercicio36(){
    var num = prompt("Ingresa un número");
    var v1 = 0;
    var v2 = 1;
    var aux;
    for(i=1;i<=(num-2);i++){
        console.log(v1 + " ")
        aux = v1;
        v1= v2;
        v2 = aux + v2;
    }
}
function ejercicio37(){
    var num1 = parseInt(prompt("Ingrese el primer numero: "));
    var num2 = parseInt(prompt("Ingrese el segundo numero: "));
    var r;
    var q;
    do{
        q=Math.floor(num1/num2);
        r = num1%num2;
        if(r==0){
            break;
        }
        num1 = num2;
        num2 = r;
    }while(r!=0)
    console.log("El MCD de ambos números es: " + num2);
}
function ejercicio38(){
    var num = parseInt(prompt("Ingrese un número"));
    var suma = 0;
    for(i=1;i<num;i++){
        if(num%i == 0 ){
            suma = suma + i;
        }
    }
    if(suma == num){
        console.log("ES UN NÚMERO PERFECTO");
    }else{
        console.log("NO ES UN NÚMERO PERFECTO");
    }
}
function ejercicio39(){
    var  val_pi;
	val_pi = 0
	for(i = 0;i<=9999;i++){
		if (i%2 == 0){
			val_pi = val_pi + (4/((2*i)+1))
        }else{
			val_pi = val_pi - (4/((2*i)+1))
        }
		
    }
	var  diferencia;
	diferencia = Math.PI - val_pi;
	console.log("Entonces el valor aproximado de PI seg�n LEIBNIZ es: " + val_pi + " pero seg�n valor almacenado de la variable es: " +  Math.PI + " dando como diferencia  a la aproximaci�n el valor de: " + diferencia);
}
function ejercicio40(){
    var  val_pi;
    val_pi = 3
    for (i = 1;i<=1750;i++){
        if(i%2 == 0){
            val_pi = val_pi - (4/((2*i)*((2*i)+1)*((2*i)+2)))
        }else{
            val_pi = val_pi + (4/((2*i)*((2*i)+1)*((2*i)+2)))
        }
        
    }
    var  diferencia;
    diferencia = Math.PI - val_pi;
    console.log("Entonces el valor aproximado de PI seg� NILAKHANTA es: " + val_pi + " pero seg�n valor almacenado de la variable es: " +  Math.PI + " dando como diferencia  a la aproximaci�n el valor de: " +  diferencia);
}