
//RETO 1

const suma = (a, b) => {return a + b};

const potencia = (num, pot) => {
    return Math.pow(num,pot);
}

const suma_cubos = (...args) => {
    let suma = 0;
    for(let n of args){
        suma += Math.pow(n,3);
    }
    return suma;
}

const area_triangulo = (base, altura) =>{ return base * altura / 2 }

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
        return console.log("El parametro no es reconocido");
    }
}


//RETO 2

const nombre_completo = (nombre, apellido, edad) => {return `Hola mi nombre es ${nombre + " " + apellido} y mi edad es ${edad}`}

const sumofcubes = (...args) => {return args.reduce((acumulador, num) => acumulador + Math.pow(num,3) , 0)};

const tipodato = (dato) => {return typeof dato}

const sumanumeros = (...args) => {
    let suma = 0;
    for(n of args){
        suma += n;
    }
    return suma;
}

const nostrings = (lista) => {
    let no_strings = [];
    for(valor of lista){
        if(typeof(valor) != "string"){
            no_strings.push(valor);
        }
    }
    return no_strings;
}

const min_max = (lista) =>{
    lista.sort((a, b) => a - b);
    let menor= lista[0];

    lista.sort((a, b) => b - a );
    let mayor = lista[0];
    return console.log("Menor : " + menor + " Mayor :" + mayor);
}

const tel_num = (lista) =>{
    return `(${lista[0] + "" + lista[1] + "" + lista[2]}) ${lista[3] + "" + lista[4] + "" + lista[5]}-${lista[6] + "" + lista[7] + "" + lista[8]}`;
}

const findLargestNums = (listas) =>{
    let mayores = [];
    for(lista of listas){
        lista.sort((a,b)=> b - a);
        mayores.push(lista[0]);1
    }
    return mayores;
}

const charIndex = (palabra, letra)=>{
    let indices = [];
    indices.push(palabra.indexOf(letra));
    indices.push(palabra.lastIndexOf(letra));
    return indices;
}

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

const getBudgets = (objetos) =>{
    let budgets = 0;
    for(obj of objetos){
        budgets += obj['budget'];
    }
    return budgets;
}

const getStudentNames = (matriz) =>{
    let nombres = [];
    for(obj of matriz){
        nombres.push(obj.name);
    }
    return nombres;
}


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

const squaresSum = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Math.pow(i, 2);
    }
    return sum;
}

const multiplyByLength = (matriz) =>{
    return matriz.map(x => x * matriz.length);
}

const countdown = (num) =>{
    let matriz = [];
    for(let i = num; i >= 0; i--){
        matriz.push(i);
    }
    return matriz;
}

const repeat = (num, veces) =>{
    return Array(veces).fill(num);
}

const findNemo = (cadena) =>{
    let palabras = cadena.split(" ");
    console.log(palabras);
    return palabras.indexOf("Nemo") + 1;
}

const capLast = (palabra) =>{
    let letras = palabra.split("");
    letras[letras.length - 1] = letras[letras.length - 1].toUpperCase();
    let text = letras.join("");
    return text;
}

String.prototype.vreplace = function(nuevaVocal) {
    return this.replace(/[aeiou]/g, nuevaVocal);
};

const palabra = "apples and bananas".vreplace("u");
console.log(palabra);
