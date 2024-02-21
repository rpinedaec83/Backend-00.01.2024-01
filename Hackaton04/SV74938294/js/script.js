function problema1(){
    var num1 = parseFloat(prompt("Ingrese 1 número: "));
    var num2 = parseFloat(prompt("Ingrese el segundo número: "));
    var resul = suma(num1,num2);
    console.log("La suma de ambos número es: " + resul);
}
function problema2(){
    var num1 = parseFloat(prompt("Ingrese la base: "));
    var num2 = parseFloat(prompt("Ingrese la potencia: "));
    var resul = potencia(num1,num2);
    console.log("La potencia de " + num1 +" a la " + num2 +  " es: " + resul);
}
function problema3(){
    var num1 = parseFloat(prompt("Ingrese 1 número: "));
    var num2 = parseFloat(prompt("Ingrese el segundo número: "));
    var num3 = parseFloat(prompt("Ingrese el tercer número: "));
    var resul = sumaDeCubos(num1,num2,num3);
    console.log("La suma de cubos es: " + resul);

}
function problema4(){
    var base = parseFloat(prompt("Ingrese la base: "));
    var altura = parseFloat(prompt("Ingrese la altura: "));
    var resul = areaTri(base,altura);
    console.log("El área del triángulo es: " + resul + " m2");
}
function problema5(){
    var num1 = parseFloat(prompt("Ingrese 1 número: "));
    var ope = prompt("Ingrese una operación matemática (+,-,/,x,%)")
    var num2 = parseFloat(prompt("Ingrese el segundo número: "));
    var resul = calcu(num1,ope,num2);
}
function concepto1(){
    alert("Una función se puede definir como una máquina que al ercibir los parámetros correctos hará una secuencia de pasos y siempre obtendrá el mismo resultado si se ingresa el mismo valor. Puede fallar si se ingresan parámetros que no estén contemplados en el algoritmo.");
}
function concepto2(){
    alert("Personalmente, uso entre 1 a 5 parámetros. Aunque no he extendido en el uso de más parámetros, considero que funciones con muchos parámetros serían muy específicas y perderían escalabilidad con el tiempo.");
}
function suma(num1,num2){
    var sum = num1 + num2;
    return sum;
}
function potencia(base,potencia){
    var pow = 1;
    for(i=0;i<potencia;i++){
        var pow = pow * base;
    }

    return pow;
}
function sumaDeCubos(num1,num2,num3){
    var suma = potencia(num1,3) + potencia(num2,3) + potencia(num3,3);
    return suma;
}
function areaTri(base,altura){
    var area = (base * altura) / 2;
    return area;
}
function calcu(num1,ope,num2){
    var resul = 0;
    if(ope === "+"){
        resul = num1 + num2;
        console.log("El resultado es: " + resul)
    }else if(ope === "-"){
        resul = num1 - num2;
        console.log("El resultado es: " + resul)
    }else if(ope==="/"){
        resul = num1/num2;
        console.log("El resultado es: " + resul)
    }else if(ope==="x"){
        resul = num1 * num2;
        console.log("El resultado es: " + resul)
    }else if(ope==="%"){
        resul = num1%num2;
        console.log("El resultado es: " + resul)
    }else{
        console.log("No se reconoe la operación seleccionada")
    }
}

//
const concat = (nom,ape,edad) => "Hola mi nombre es " + nom + " " + ape + " y mi edad " + edad;
function problema2_1(){
    var nom = prompt("Ingrese su nombre: ");
    var ape = prompt("Ingrese su apellido ");
    var edad = prompt("Ingrese su edad ");
    console.log(concat(nom,ape,edad));
}
function problema2_2(){
    problema3();
}
function problema2_3(){
    var x = 24;
console.log(typeof x);

var y = "Hola, soy Deyvid!!!";
console.log(typeof y);

var z = true;
console.log(typeof z);

var w = { nombre: "Deyvid", edad: 24 };
console.log(typeof w);

var a = [6, 18, 30];
console.log(typeof a);

var b = function() {};
console.log(typeof b);

var c = null;
console.log(typeof c);

var d;
console.log(typeof d);

}
function problema2_4(){
    console.log(sumaRest(1,2,3,4,5,6,7,8,9));
}
function sumaRest(...numeros){
    var total = 0;
    for(var num of numeros){
        total = total + num;
    }
    return total;
}
function problema2_5(){
    var array = [1,"Hola",,"Soy",456,"Deyvid"];
    console.log(array);
    for(i=0;i<array.length;i++){
        if(typeof array[i] != "string"){
            array.splice(i,1);
        }
    }
    console.log(array);
}
function problema2_6(){
    var min=0;
    var max =0;
    array = [123,458,75,1,45,789,13];
    console.log("El array es: " + array);
    for(i=0;i<array.length;i++){
        if(i == 1){
            min = array[i];
            max = array[i];
        }else if(array[i]<min){
            min = array[i];
        }else if(array[i>max]){
            max = array[i];
        }
    }
    console.log("["+min+","+max+"]");
}
function problema2_7(){
    var array = ["+",5,1,9,4,1,4,5,6,2,6,0];
    for(i=1;i<array.length;i++){
        array[i]= array[i].toString();
    }
    console.log("("+array[0]+array[1]+array[2]+")"+" "+array[3]+array[4]+array[5]+"-"+array[6]+array[7]+array[8]+array[9]);
}
function problema2_8(){
    var array = [[1,2,3],[4,5,6],[7,8,9]];
    var max = [];
    for(i=0;i<array.length;i++){
        var maxSubArray = array[i][0];
        for (var j = 1; j < array[i].length; j++) {
            if (array[i][j] > maxSubArray) {
                maxSubArray = array[i][j]; 
            }
        }
        max.push(maxSubArray);
    }
    console.log(max);
}
function problema2_9(){
    var cadena = "hello";
    charIndex(cadena,"l");

}
function charIndex(cadena,char){
    cont = 0;
    var inicio=0;
    var final =0;
    for(i=0;i<cadena.length;i++){
        if(cadena[i]===char){
            if(cont==0){
                inicio = i;
                cont++;
            }else{
                final=i;
                cont++;
            }
        }
    }
    var array =[inicio,final]
    console.log(array);
}
function problema2_10(){
    var data ={
        a:1,
        b:2,
    }
 var entradas = Object.entries(data);
 var array =[];
 for(i=0;i<entradas.length;i++){
    array[i] = entradas[i];
 }
 console.log(array);
}
function problema2_11(){
    var pJohn ={
        nombre: "John",
        edad: 21,
        pre: 23000
    }
    var pSteve ={
        nombre : "Steve",
        edad: 32,
        pre: 40000
    }
    var pMartin={
        nombre: "Martin",
        edad: 21,
        pre: 2700
    }
    var array = [pJohn,pSteve,pMartin];
    var presT =0;
    for(i=0;i<array.length;i++){
        presT = presT + array[i].pre;
    }
    console.log("El presupuesto total es de: " + presT);
}
function problema2_12(){
    var aDeyvid={name:"Deyvid"}
    var aIngri={name:"Ingri"}
    var aIrenne={name:"Irenne"}
    var array =[aDeyvid,aIngri,aIrenne];
    var arrayT = [];
    for(i=0;i<array.length;i++){
        arrayT[i] = array[i].name;
    }
    console.log(arrayT);
}
function problema2_13(){
        var data ={
            likes:2,
            dislikes:3,
            followers:10
        }
     var entradas = Object.entries(data);
     var array =[];
     for(i=0;i<entradas.length;i++){
        array[i] = entradas[i];
     }
     console.log(array);
}
function problema2_14(){
    var num = prompt("ingrese un número");
    console.log(num);
    var suma = 0;
    for(j=1;j<=num;j++){
        console.log(j);
        suma = suma + potencia(j,2);
        console.log(suma);
    }
    console.log("La suma total es: "+ suma);
}
function potencia(base,potencia){
    var pow = 1;
    for(i=0;i<potencia;i++){
        var pow = pow * base;
    }

    return pow;
}
function problema2_15(){
    var array =[1,2,3,4];
    var multi =1;
    for(i=0;i<array.length;i++){
        multi = multi*array[i];
    }

    console.log("La respuesta es: " + multi)

}
function problema2_16(){
    var num = parseInt(prompt("Ingrese un número:"));
    var aux =num;
    var array = [];
    for(i=0;i<=num;i++){
        array[i] = aux;
        aux--;
    }
    console.log(array);
}
function problema2_17(){
    var array = [10, 4, 1, 4, -10, -50, 32, 21];
    var max = array[1];
    var min = array[1];
    for(i=0;i<array.length;i++){
        if(array[i]<min){
            min = array[i];
        }else if(array[i]>max){
            max = array[i];
        }
    }
    console.log("La diferencia entre el max y min es: " + (max-min));
}
function problema2_18(){
    var array = [1,2,3,"x","y",10];
    for(i = array.length-1;i>=0;i--){
        console.log(typeof array[i]);
        if(typeof array[i] != "number"){
            array.splice(i,1);
        }
    }
    console.log(array);
}
function problema2_19(){
    var num = parseInt(prompt("ingrese un número: "));
    var rep = parseInt(prompt("cuámtas veces se va a repetir"));
    var array=[];
    for(i=0;i<rep;i++){
        array[i] = num;
    }
    console.log(array);
}
function problema2_20(){
    var cadena = prompt("Escriba una cadena: ");
    var char = prompt("Elija una vocal");
    console.log(cadena);
    console.log("La cadena modificada es: " + vreplace(cadena,char));
}
function vreplace(string, char) {
    var cadenaAux = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            cadenaAux = cadenaAux + char;
        } else {
            cadenaAux = cadenaAux + string[i];
        }
    }
    return cadenaAux;
}
function problema2_21(){
    var cadena = "I am finding Nemo !";
    var arrayS = cadena.split(" ");
    for(i=0;i<arrayS.length;i++){
        if(arrayS[i]=="Nemo"){
            console.log("Encontré a Nemo en " + (i+1));
            return 0;
        }
    }
}
function problema2_22(){
    var cadena = "hello";
    console.log(lreplace(cadena));
}
function lreplace(string) {
    var cadenaAux = "";
    for (var i = 0; i < string.length; i++) {
        if (i==string.length-1) {
            cadenaAux = cadenaAux + string[i].toUpperCase();
        } else {
            cadenaAux = cadenaAux + string[i];
        }
    }
    return cadenaAux;
}