//1. Crea una función que retorne la suma de dos números. 
const calcSuma = (numero1,numero2) => {
    do {
        numero1 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero1) || numero1 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero1));

    do {
        numero2 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero2) || numero2 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero2));

    alert(numero1 + numero2);
};

//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
const calcPotencia = (base,exponente) => {
    do {
        base = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(base) || base === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(base));

    do {
        exponente = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(exponente) || exponente === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(exponente));

    alert(base ** exponente);
}

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const sumaCubos = (numero1,numero2,numero3) => {
    do {
        numero1 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero1) || numero1 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero1));

    do {
        numero2 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero2) || numero2 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero2));

    do {
        numero3 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero3) || numero3 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero3));

    alert(numero1 **3 + numero2 **3 + numero3 **3);
}

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3
const areaTriangulo = (base,altura) => {
    do {
        base = parseInt(prompt("Por favor ingresar la base del triangulo."))
        if (isNaN(base) || base === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(base));

    do {
        altura = parseInt(prompt("Por favor ingresar la altura del triangulo."))
        if (isNaN(altura) || altura === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(altura));
    
    alert(base * altura/2);
}

//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), 
//y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
const calculadora = (numero1,operador,numero2) => {
    do {
        numero1 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero1) || numero1 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero1));

    do {
        numero2 = parseInt(prompt("Por favor ingresar un numero."))
        if (isNaN(numero2) || numero2 === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero2));

    operador = prompt("Eliga el simbolo de la operacion a realizar.\nOperaciones disponibles: +, -, *, /, %.")

    switch (operador) {
        case "+":
            alert(numero1 + numero2);
        break;
        case "-":
            alert(numero1 - numero2);
        break;
        case "*":
            alert(numero1 * numero2);
        break;
        case "/":
            alert(numero1 / numero2);
        break;
        case "%":
            alert(numero1 % numero2);
        break;
        default:
            alert("El parametro no es reconocido!");
            return 0;
        break;
    }
}

/*
const datos = (...args) =>{
    console.log(args)
}

datos(2,3,4)

const usuario = {
    nombre:"AMONG",
    edad:"sus",
    universidad:"UNISUS",
    carrera: "Ing. Informatica",
    password: "AMONG"
};

let { password, ...rest} = usuario;
password = "sdasjdiejdiejd"

const newUser = {
    ...rest,
    password,
};

//console.log(nombre);
*/

//1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y 
//edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const saludoMensaje = (nombre="Nombre",apellido="Apellido",edad=32) => {alert("Hola, mi nombre es " + nombre + " " + apellido + ", y tengo " + edad + " años.")};

//2. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const sumaDeCubos = (numero1=10,numero2=3,numero3=4) => alert(numero1**3 + numero2**3 + numero3**3);

//3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const getType = (valor="hola") => {
    alert(typeof valor);
    valor = 1;
    alert(typeof valor);
    valor = undefined;
    alert(typeof valor)
}

//4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumaIndefinida = (...numeros) => {
    let sumaFinal = 0;
    numeros = [10,40,39,-1,49,3]

    for (let i = 0; i < numeros.length; i++) {
        sumaFinal += numeros[i];
    }


    alert(sumaFinal);
};

//5. Crear una función que reciba un array de valores y filtre los valores que no son string
const filtroString = (...argumentos) => {
    let arrFiltrado = new Array;

    argumentos = ["AMONG","AM",4,undefined,"A",10]

    for (let i = 0; i < argumentos.length; i++) {
        if (typeof argumentos[i] == "string"){
            arrFiltrado.push(argumentos[i]);
            console.log("AMONG.");
        };
        
    }

    alert(arrFiltrado);
};

//6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = () => {
    arrNumeros = [10,30,40,50,203,4,1,304,38,4]
    arrNumeros.sort(function(a, b){return a - b});
    alert(`El menor es ${arrNumeros[1]}, y el mayor es ${arrNumeros[9]}`);
};

//7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const numeroTelefono = (n1=1,n2=2,n3=3,n4=4,n5=5,n6=6,n7=7,n8=8,n9=9,n10=0) => {alert(`(${n1}${n2}${n3}) ${n4}${n5}${n6}${n7}-${n8}${n9}${n10}`)};

//8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const matrizMayores = (m1,m2,m3) => {
    m1 = [1,40,30,29,4,1];
    m2 = [4,20,403,5,29,0];
    m3 = [-1,-40,-4,-304,-4,-10];

    m1.sort(function(a, b){return b - a});
    m2.sort(function(a, b){return b - a});
    m3.sort(function(a, b){return b - a});

    let mMayor = [m1[0],m2[0],m3[0]];
    alert(mMayor);
};

//9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
const indices = (palabra,letra) => {
    palabra = "amonga"
    letra = "a"

    let indice1 = palabra.indexOf(letra);
    let indice2 = palabra.lastIndexOf(letra);

    alert(`La primera instancia de la letra ${letra} en la palabra ${palabra} es en el indice ${indice1}, y la ultima instancia es en el indice ${indice2}`)
};

//10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const toArray = (objeto = {a: "mong", b: "mongus", c: "sus"}) =>{
    
    const matriz = [];
    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)){
            matriz.push([clave,objeto[clave]])
            
        }
    }

    alert(matriz);
    console.log(matriz)
}

//Version alterna
//console.log(Object.entries({a: "mong", b: "mongus", c: "sus"}))

//11.Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
//getBudgets([
    //{ name: "John", age: 21, budget: 23000 },
    //{ name: "Steve",  age: 32, budget: 40000 },
    //{ name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700
const getBudgets = (matriz = [
    {nombre: "Nombre1", edad: 40, presupuesto: 150000},
    {nombre: "Nombre2", edad: 30, presupuesto: 34000},
    {nombre: "Nombre3", edad: 102, presupuesto: 50000}
]) =>  {
    let sumafinal = 0;

    for (let i = 0; i < matriz.length; i++) {
        const sumar = matriz[i].presupuesto;
        sumafinal += sumar;
    }

    alert(sumafinal);
};

//12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
    //{ name: "Steve" },
    //{ name: "Mike" },
    //{ name: "John" }
//]) ➞ ["Becky", "John", "Steve"]
const getStudentNames = (matriz = [
    { nombre: "Mark" },
    { nombre: "Mike" },
    { nombre: "Emily" }
]) => {
    matrizNombres = [];

    for (let i = 0; i < matriz.length; i++) {
        matrizNombres.push(matriz[i].nombre);
    }

    alert(matrizNombres);
    console.log(matrizNombres)
};

//13.Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
    //likes: 2,
    //dislikes: 3,
    //followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
const objectToArray = (objeto = {
    likes: 23,
    dislikes: 104052,
    seguidores: 1
}) =>{
    const matriz = [];
    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)){
            matriz.push([clave,objeto[clave]])
            
        }
    }

    alert(matriz);
    console.log(matriz);
};

//14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
const squaresSum = (numero = 1) => {
    let sumaFinal = 0;
    
    do {
        numero = prompt("Por favor ingresar un numero.")
        if (numero <= 0 || numero === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (numero <= 0 || numero === null);

    for (let i = 1; i <= numero; i++) {
        sumaFinal += (i**2)      
        
    }

    alert(sumaFinal);
};

//15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
const multiplyByLength = () => {
    matriz = [];
    matrizFinal = [];

    do {
        numero = parseInt(prompt("Por favor ingresar un numero. Ingresar un 0 para terminar la matriz."))
        if (numero < 0 || isNaN(numero)) {
            alert("Numero no valido, terminando la matriz.");
            break;
        } else if (numero == 0) {
            alert("Numero 0 encontrado, terminando matriz.")
        }

        matriz.push(numero);

    } while (numero > 0 && numero !== null);

    for (let i = 0; i < matriz.length; i++) {
        matrizFinal.push((matriz[i]*matriz.length));
    }

    alert(matrizFinal);
}


//16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]
const countdown = (numero = 0) =>{
    matrizFinal = [];

    do {
        numero = parseInt(prompt("Por favor ingresar un numero para hacer una cuenta regresiva."))
        if (isNaN(numero) || numero === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (isNaN(numero));

    for (let i = numero; i >= 0; i--) {
        matrizFinal.push(i);
    }

    alert(matrizFinal);
}

//17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
const diffMaxMin = () =>{
    arrNumeros = [10,30,40,50,203,4,1,304,38,4]
    arrNumeros.sort(function(a, b){return a - b});
    alert(`${arrNumeros[0]-arrNumeros[arrNumeros.length-1]}`);
}

//18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
const filtroNumeros = (matriz = [10,30,4,"A","AMONG",30,"D",104]) => {
    let arrFiltrado = new Array;

    for (let i = 0; i < matriz.length; i++) {
        if (typeof matriz[i] == "number" && Number.isInteger(matriz[i])){
            arrFiltrado.push(matriz[i]);
            console.log("AMONG2.");
        };
        
    }

    alert(arrFiltrado);
};

//19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el 
//elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se 
//debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]
const repeat = (elemento="Texto!",repeticiones=1) => {
    matrizFinal = []

    elemento = prompt("Por favor ingresar el elemento a repetirse dentro de una matriz.");

    do {
        repeticiones = prompt("Por favor ingresar la cantidad de veces que se repetira.")
        if (repeticiones <= 0 || repeticiones === null) {
            alert("Por favor ingresar un valor valido.")
        }
    } while (repeticiones <= 0 || repeticiones === null);

    for (let i = 0; i < repeticiones; i++) {
        matrizFinal.push(elemento);
        
    };

    alert(matrizFinal);
    console.log(matrizFinal);
};

//20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas 
//las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"
String.prototype.vreplace = function(vocal){
    vocal = prompt("Eliga lo que reemplazara a las vocales.");
    return this.replace(/[aeiou]/gi, vocal);
};

const reemplazarVocal = () =>{
    const resultado = "apples and bananas".vreplace("u");
    alert(resultado)
}




//21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
//"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
const findNemo = (frase = "Nemo Nemo Nemo Nemoooooo") => {
    frase = prompt("Ingresar una frase.\nEsta funcion encontrara todas las instancias donde se halle \"Nemo\".")
    palabras = frase.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == "Nemo"){
            alert(`NEMO encontrado en la posicion ${i+1}.`)
        }
        
    }
};

//22. Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"
const capLast = (frase = "La frase de Todos los TIEMPos!") =>{

    frase = prompt("Por favor ingresar una frase. Cualquier frase.\nEsta funcion capitalizara todas las ultimas letras de cada palabra.")

    const palabras = frase.split(" ")
    console.log(palabras)
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i].split("");
        let capital = palabra[palabra.length-1].toUpperCase();
        palabra[palabra.length-1] = capital;
        console.log(palabra)
        palabras[i] = palabra.join("");
    }
    frase = palabras.join(" ");
    return frase;

};