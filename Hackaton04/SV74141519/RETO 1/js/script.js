
function ejercicio01(){
    let numero1 = parseInt(prompt("Escriba un primer numero: "));
    let numero2 = parseInt(prompt("Escriba un segundo numero: "));
    let suma = sumaNumeros(numero1, numero2);
    
    alert("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
}

function sumaNumeros(numero1, numero2){
    
    let suma1 = numero1 + numero2;
    return suma1; 
}

function ejercicio02(){
    let numero1 = parseInt(prompt("Escriba un numero: "));
    let numero2 = parseInt(prompt("Escriba una portencia: "));   
    let potencia = potenciarNumero(numero1, numero2);

    alert("La potencia de " + numero1 + " elevada a " + numero2 + " es: " + potencia);
}

function potenciarNumero(numero1, numero2){
    
    let potencia1 = numero1 ** numero2;
    return potencia1; 
}

function ejercicio03(){
   
    let numero1 = parseInt(prompt("Escriba el primer numero: "));
    let numero2 = parseInt(prompt("Escriba el segundo numero: "));
    let numero3 = parseInt(prompt("Escriba el tercer numero: "));
    let sumacubos = sumaDeCubos(numero1, numero2, numero3);
    
    alert("La suma de los cubos de los numeros " + numero1 + ", " + numero2 + ", " + numero3 + " es: " + sumacubos);
      
}

function sumaDeCubos(numero1, numero2, numero3){
    
    let sumacubos1 = (numero1 ** 3) + (numero2 ** 3) + (numero3 ** 3);
    return sumacubos1; 
}

function ejercicio04(){
   
    let base = parseInt(prompt("Escriba la base del triangulo: "));
    let altura = parseInt(prompt("Escriba la altura del triangulo: "));
    let area = areaTriangulo(base, altura);

    alert("El area de un triangulo con base " + base + " y altura " + altura + " es: " + area);
}

function areaTriangulo(base, altura){
    
    let area1 = (base * altura) / 2;
    return area1; 
}

function ejercicio05(){
   
    let numero1 = parseInt(prompt("Escriba el primero numero: "));
    let numero2 = parseInt(prompt("Escriba el segundo numero: "));
    let operacion = prompt("Ingrese la operacion (+, -, *, /, %): ");
    let calculo = calculator(numero1, numero2, operacion);

    if(calculo == 0){
        alert("Ingreso una operacion invalida, intente nuevamente.")
    } else{
        alert("La " + operacion + " de los numeros " + numero1 + " y " + numero2 + " es: " + calculo);
    }


}

function calculator(numero1, numero2, operacion){
    
    switch(operacion){
        case '+':{
            resultado = numero1 + numero2;
            break;
        }
        case '-':{
            resultado = numero1 - numero2;
            break;
        }
        case '*':{
            resultado = numero1 * numero2;
            break;
        }
        case '/':{
            resultado = numero1 / numero2;
            break;
        }
        case '%':{
            resultado = numero1 % numero2;
            break;
        }
        default:{
            resultado = 0;
            break;
        }
    }
    return resultado;
}

function preguntas(){
    alert("¿Cómo defines una función?");
    alert(" Una función en JavaScript es un bloque de código que se define una vez y se puede ejecutar en cualquier momento. Las funciones se utilizan para encapsular una pieza de código que realiza una tarea específica y para reutilizar ese código en diferentes partes de un programa. Las funciones pueden tomar cero o más parámetros y pueden devolver un valor. En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores de otras funciones. ");
    alert("¿Hasta cuantos argumentos puedes declarar en una función?");
    alert("En JavaScript, puedes declarar cualquier cantidad de argumentos en una función. No hay un límite específico de la cantidad de argumentos que puedes declarar en una función. Sin embargo, es importante tener en cuenta que, en la práctica, el uso de un gran número de argumentos puede hacer que el código sea más difícil de entender y mantener. Es una buena práctica limitar el número de argumentos en una función para mantener el código limpio y fácil de leer.");
}
