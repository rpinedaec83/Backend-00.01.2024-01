//ESTAN COMENTADOS LOS EJEMPLOS DE CADA FUNCION
//RETO 1

const suma = (a, b) => {return a + b};
//console.log(suma(7,8));


const potencia = (num, pot) => {
    return Math.pow(num,pot);
}
//console.log(potencia(5,3));


const suma_cubos = (...args) => {
    let suma = 0;
    for(let n of args){
        suma += Math.pow(n,3);
    }
    return suma;
}
//console.log(suma_cubos(1,3,5));


const area_triangulo = (base, altura) =>{ return base * altura / 2 }
//console.log(area_triangulo(5,6));


const operacion = (dato1, signo, dato2) =>{
    const signos = ['+', '-', 'x', '%'];
    if (signos.includes(signo)){
        switch(signo){
            case '+':
                return dato1 + dato2;
                break;
            case '-':
                return dato1 - dato2;
                break;
            case 'x':
                return dato1 * dato2;
                break;
            case '%':
                return dato1 / dato2;
                break;
        }
    }
    else{
        return "El parametro no es reconocido";
    }
}
//console.log(operacion(1,'y',4));
//console.log(operacion(10,'x',6));


//RETO 2

const nombre_completo = (nombre, apellido, edad) => {return `Hola mi nombre es ${nombre + " " + apellido} y mi edad es ${edad}`}
//console.log(nombre_completo("Alvaro", "Escalante", 24));


const sumOfCubes = (...args) => {return args.reduce((acumulador, num) => acumulador + Math.pow(num,3) , 0)};
//console.log(sumOfCubes(1, 5, 9));


const tipodato = (dato) => {return typeof dato}
//console.log(tipodato("hola"));


const sumanumeros = (...args) => {
    let suma = 0;
    for(n of args){
        suma += n;
    }
    return suma;
}
//console.log(sumanumeros(1,5,6,7,8,2));


const nostrings = (lista) => {
    let no_strings = [];
    for(valor of lista){
        if(typeof(valor) != "string"){
            no_strings.push(valor);
        }
    }
    return no_strings;
}
//console.log(nostrings([2,5,"adrian"]));


const min_max = (lista) =>{
    let nums = [];
    lista.sort((a, b) => a - b);
    let menor= lista[0];
    nums.push(menor);
    lista.sort((a, b) => b - a );
    let mayor = lista[0];
    nums.push(mayor);
    return nums;
}
//console.log(min_max([57,8,9,35,265,98,1]));


const formatPhoneNumber = (lista) =>{
    return `(${lista[0] + "" + lista[1] + "" + lista[2]}) ${lista[3] + "" + lista[4] + "" + lista[5]}-${lista[6] + "" + lista[7] + "" + lista[8]}`;
}
//console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


const findLargestNums = (listas) =>{
    let mayores = [];
    for(lista of listas){
        lista.sort((a,b)=> b - a);
        mayores.push(lista[0]);1
    }
    return mayores;
}
//console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


const charIndex = (palabra, letra)=>{
    let indices = [];
    indices.push(palabra.indexOf(letra));
    indices.push(palabra.lastIndexOf(letra));
    return indices;
}
//console.log(charIndex("hello", "l"));


const toArray = (objeto) => {
    let array = [];
    let valor = [];
    for(llave in objeto){
        valor.push(llave);
        valor.push(objeto[llave]);
        array.push(valor);
        valor = [];
    }
    return array;
}
//console.log(toArray({ a: 1, b: 2 }));


const getBudgets = (objetos) =>{
    let budgets = 0;
    for(obj of objetos){
        budgets += obj['budget'];
    }
    return budgets;
}
//console.log(getBudgets([{ name: "John", age: 21, budget: 23000 },{ name: "Steve",  age: 32, budget: 40000 },{ name: "Martin",  age: 16, budget: 2700 }]));


const getStudentNames = (matriz) =>{
    let nombres = [];
    for(obj of matriz){
        nombres.push(obj.name);
    }
    return nombres;
}
//console.log(getStudentNames([{ name: "Steve" },{ name: "Mike" },{ name: "John" }]));


const objectToArray = (objeto) =>{
    let array = [];
    let valor = [];
    for(key in objeto){
        valor.push(key);
        valor.push(objeto[key]);
        array.push(valor);
        valor = [];
    }
    return array;
}
//console.log(objectToArray({likes: 2,dislikes: 3,followers: 10}));


const squaresSum = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Math.pow(i, 2);
    }
    return sum;
}
//console.log(squaresSum(3));


const multiplyByLength = (matriz) =>{
    return matriz.map(x => x * matriz.length);
}
//console.log(multiplyByLength([2, 3, 1, 0]));


const countdown = (num) =>{
    let matriz = [];
    for(let i = num; i >= 0; i--){
        matriz.push(i);
    }
    return matriz;
}
//console.log(countdown(5));

const diffMaxMin = (lista) =>{

    lista.sort((a, b) => a - b);
    let menor= lista[0];
    
    lista.sort((a, b) => b - a );
    let mayor = lista[0];
   
    return mayor - menor;
}
//console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));


const filterList = (matriz) => {
    let enteros = [];
    for( valor of matriz){
        if(typeof(valor) == 'number'){
            enteros.push(valor);
        }
    }
    return enteros;
}
//console.log(filterList([1, 2, 3, "x", "y", 10]));


const repeat = (num, veces) =>{
    return Array(veces).fill(num);
}
//console.log(repeat(13, 5));


String.prototype.vreplace = function(nuevaVocal) {
    return this.replace(/[aeiou]/g, nuevaVocal);
};

const palabra = "apples and bananas".vreplace("u");
//console.log(palabra);


const findNemo = (cadena) =>{
    let palabras = cadena.split(" ");
    console.log(palabras);
    return palabras.indexOf("Nemo") + 1;
}
//console.log("I found Nemo at " + findNemo("I am finding Nemo !"));


const capLast = (palabra) =>{
    let letras = palabra.split("");
    letras[letras.length - 1] = letras[letras.length - 1].toUpperCase();
    let text = letras.join("");
    return text;
}
//console.log(capLast("hello"));


