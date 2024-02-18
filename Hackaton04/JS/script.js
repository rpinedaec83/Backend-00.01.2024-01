function ejercicio1() {
    let a = +prompt("Escriba el primer numero")
    let b = +prompt("Escriba el segundo numero")
    
    alert(`La suma es ${a+b}`)
}

function ejercicio2() {
    let a = +prompt("Escriba el numero a potenciar")
    let b = +prompt("Escriba la potencia")
    
    alert(`La potencia de ${a} a la ${b} es ${a**b}`)
}

function ejercicio3() {
    let a = +prompt("Escriba el primer numero")
    let b = +prompt("Escriba el segundo numero")
    let c = +prompt("Escriba el tercer numero")
    
    let sumeOfCubes = (a**3+b**3+c**3)

    alert(`La suma de los cubos es ${sumeOfCubes}`)
}

function ejercicio4() {
    let a = +prompt("Determine la base del triangulo")
    let b = +prompt("Determine la altura del triangulo")
    
    let area = (a*b/2)

    alert(`El área del triangulo es ${area}`)
}

function ejercicio5(){
    let a = +prompt("Escriba el primer numero")
    let b = +prompt("Escriba el segundo numero")
    let operacion = prompt("Escoja la operacion a realizar (+,-,*,/) ")

    switch (operacion){
        case "+":
            alert(`La suma es ${a+b}`);
            break;
        case "-":
            alert(`La resta es ${a-b}`);
            break;
        case "*":
            alert(`La multiplicacion es ${a*b}`);
            break;
        case "/":
            alert(`La division es ${a/b}`);
            break;

        default:
            alert("Defina una operacion Valida")
        }
    }

let ejercicio01 = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
let resultado01 = ejercicio01("Jorge", "Zegarra", 32);
console.log(`Ejercicio 1: ${resultado01}`);

let ejercicio02 = (a,b,c) => a**3+b**3+c**3
let resultado02 = ejercicio02(1,5,9);
console.log(`Ejercicio 2: ${resultado02}`)

let ejercicio03 = (valor) => typeof valor;
let resultado03 = ejercicio03("Hello");
console.log(`Ejercicio 3: ${resultado03}`)

let ejercicio04 = (...numeros) => numeros.reduce((a, b) => a + b, 0);
let resultado04 = ejercicio04(2, 4, 6, 8);
console.log(`Ejercicio 4: ${resultado04}`)

let ejercicio05 = (...valores) => valores.filter(valor => typeof valor === "number")
let resultado05 = ejercicio05(2, 4, "hola", true, 15, 8);
console.log(`Ejercicio 5: ${resultado05}`)

let ejercicio06 = (...numeros) => numeros.sort((a,b) => a-b);
let resultado06 = ejercicio06(2, 4, 96, 54, 15, 8, 32);
console.log(`Ejercicio 6: ${resultado06}`)

let ejercicio07 = (...celular) => `${celular.slice(0, 3).join('')}-${celular.slice(3, 6).join('')}-${celular.slice(6).join('')}`;
let resultado07 = ejercicio07(9,1,1,9,1,1,9,1,1);
console.log(`Ejercicio 7: ${resultado07}`)

let ejercicio08 = (...arrays) => arrays.map(subArray => Math.max(...subArray));
let resultado08 = ejercicio08([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]);
console.log(`Ejercicio 8: ${resultado08}`)

let ejercicio09 = (palabra, caracter) => [palabra.indexOf(caracter), palabra.lastIndexOf(caracter)]
let resultado09 = ejercicio09 ("hello", "l")
console.log(`Ejercicio 9: ${resultado09}`)

let ejercicio10 = (objeto) => JSON.stringify(Object.entries(objeto));
let resultado10 = ejercicio10 ({ a: 1, b: 2 })
console.log(`Ejercicio 10: ${resultado10}`)

let ejercicio11 = (ppto) => ppto.reduce((acumulado, nombre) => acumulado+nombre.budget, 0);
let resultado11 = ejercicio11 ([
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
])
console.log(`Ejercicio 11: ${resultado11}`)

let ejercicio12 = (estudiantes) => estudiantes.map(estudiante=>estudiante.name);
let resultado12 = ejercicio12 ([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]  )
console.log(`Ejercicio 12: ${resultado12}`)

let ejercicio13 = (lista) => JSON.stringify(Object.entries(lista));
let resultado13 = ejercicio13 ({
    likes: 2,
    dislikes: 3,
    followers: 10
  })
console.log(`Ejercicio 13: ${resultado13}`)


let ejercicio14 = (n) => Array.from({ length: n + 1 }, (_, index) => index ** 2).reduce((acumulado, numero) => acumulado + numero, 0);;
let resultado14 = ejercicio14 (3)
console.log(`Ejercicio 14: ${resultado14}`)

let ejercicio15 = (...numbers) => numbers.map(numero => numero * numbers.length);
let resultado15 = ejercicio15 (2, 3, 1, 0)
console.log(`Ejercicio 15: ${resultado15}`)

let ejercicio16 = (x) => {
    let countdown = [];
    for (let i = x; i > 0; i--) {
        countdown.push(i);
    }
    return countdown;
};
let resultado16 = ejercicio16 (5)
console.log(`Ejercicio 16: ${resultado16}`)

let ejercicio17 = (...numeros) => Math.max(...numeros)-Math.min(...numeros);
let resultado17 = ejercicio17 (10, 4, 1, 4, -10, -50, 32, 21)
console.log(`Ejercicio 17: ${resultado17}`)

let ejercicio18 = (...valores) => valores.filter(enteros=> Number.isInteger(enteros));
let resultado18 = ejercicio18 (1, 2, 3, "x", "y", 10)
console.log(`Ejercicio 18: ${resultado18}`)

let ejercicio19 = (x,n) => Array.from({length:n},()=>x);
let resultado19 = ejercicio19 (13,5)
console.log(`Ejercicio 19: ${resultado19}`)

String.prototype.vreplace = function(ejercicio20) {
    return this.replace(/[aeiou]/gi, ejercicio20);
};
let resultado20 = "apples and bananas".vreplace("u");
console.log(`Ejercicio 20: ${resultado20}`);

let ejercicio21 = (texto) => texto.split(' ').indexOf('Nemo') ?? -1;
let resultado21 = ejercicio21("I am finding Nemo");
console.log(`Ejercicio 21: I found Nemo at ${resultado21 + 1}`);

let ejercicio22 = (texto) => texto.split(' ').map(palabra => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()).join(' ');;
let resultado22 = ejercicio22 ("hello")
console.log(`Ejercicio 22: ${resultado22}`)
