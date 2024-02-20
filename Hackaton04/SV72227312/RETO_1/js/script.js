// FUNCIONES 
/*

Notas:
1. Mostrar una ventana donde podamos ejecutar cada función.
2. Cuando se realice un ejercicio, al finalizarlo mantenernos en la ventana del ejercicio hasta hacer click en un botón salir
   osea que nos retorne a la ventana principal.  
*/
//------------------------------------------------------------------------
function ejercicio1() {
    let num1 = validarNumeroInput("Ingrese el 1 número: ");
    let num2 = validarNumeroInput("Ingrese el 2 número: ");
    let suma1 = suma(num1,num2);
    alert("El resultado de la suma es: "+suma1); 
}

let suma = function(a,b){
    return a+b;
}
//------------------------------------------------------------------------
function ejercicio2(){
    let base = validarNumeroInput("Ingrese la base: ");
    let exp = validarNumeroInput("Ingrese el exponente: ");
    let potencia1 = potencia(base,exp);
    alert("La potencia es: "+potencia1);
}

let potencia = function(a,b){
    return a**b;
}
//------------------------------------------------------------------------
function ejercicio3(){
    let cantidad1 = validarNumeroInput("Ingrese la cantidad de números: ");
    let args = [];
    for (let i = 0; i < cantidad1; i++){
        args[i] = validarNumeroInput("Ingrese el " + (i+1) + " valor.");
    }
    if (cantidad1 == 0){
        alert("No se ingresó ningun valor");
    }
    else {
        let result = sumaCubos(args);
        alert("La suma de cubos de los números ingresados es: " + result);
    }
}

let sumaCubos = function(args){
    let total = 0;
    for (let i = 0; i < args.length; i++){
        total += Math.pow(args[i], 3);
    }
    return total;
}
//------------------------------------------------------------------------
function ejercicio4(){
    let base = validarNumEntMayCero("Ingrese la base: ");
    let altura = validarNumEntMayCero("Ingrese la altura: ");
    let area = triArea(base,altura);
    alert("El área del triángulo es: "+area);
}

let triArea = function(a,b){
    return (a*b)/2;
}
//------------------------------------------------------------------------
let calculator = function(a,b,c){
    switch(b){
        case "+":
            return a + c;
        case "-":
            return a - c;
        case "/":
            if (c==0){
                alert("ERROR");
            }
            else{
                return a / c;
            }     
        case "x":
            return a * c;
        case "%":
            if (c==0){
                alert("ERROR");
            }
            else{
                return a / c;
            }     
        default:
            alert("El parámetro no es reconocido");
            return True; // Tratar de que con este retorno, regresemos a solicitar los parámetros. 
    }
}

function ejercicio5(){
    let num1 = validarNumeroInput("Ingrese el primer numero: ");
    let op = validarOperacion("Ingrese la operación (+;-;/;x;%): ");
    let num2 = validarNumeroInput("Ingrese el segundo numero: ");
    let resultado = calculator(num1,op,num2);
    alert(num1+" "+op+" "+num2+" = "+resultado);
}
//------------------------------------------------------------------------
function validarNumeroInput(mensaje) {
    let input;
    do {
        input = prompt(mensaje);
        if (isNaN(input)) {
            alert("Ingrese un número válido.");
        }
    } while (isNaN(input));
    return parseFloat(input);
}
//------------------------------------------------------------------------
function validarNumEntMayCero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || numero < 0) {
            alert("Número incorrecto. Asegúrese de ingresar un número entero mayor o igual a 0.");
        }
    } while (isNaN(numero) || numero < 0);
    return parseInt(numero);
}
//------------------------------------------------------------------------
function validarOperacion(mensaje) {
    let oper;
    do {
        oper = prompt(mensaje);
        if (oper != "+" && oper != "-" && oper != "/" && oper != "x" && oper != "%") {
            alert("Operador incorrecto");
        }
    } while (oper != "+" && oper != "-" && oper != "/" && oper != "x" && oper != "%");
    return oper;
}
//------------------------------------------------------------------------
function ejecutarEjercicio() {
    let selector = document.getElementById("ejercicioSelector");
    let ejercicio = selector.value; // Obtenemos el valor seleccionado

    // Ejecutar la función correspondiente según la selección
    switch (ejercicio) {
        case "ejercicio1":
            ejercicio1();
            break;
        case "ejercicio2":
            ejercicio2();
            break;
        case "ejercicio3":
            ejercicio3();
            break;
        case "ejercicio4":
            ejercicio4();
            break;
        case "ejercicio5":
            ejercicio5();
            break;
        default:
            alert("Seleccione un ejercicio válido");
    }
    window.scrollTo(0, (document.body.scrollHeight - window.innerHeight) / 2);
}