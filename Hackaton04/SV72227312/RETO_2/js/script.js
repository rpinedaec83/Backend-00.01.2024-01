
//--------------------------------------------------------------------------------------
function ejercicio1(){
    let nombre = prompt("¿Cuál es el nombre?");
    let apellido = prompt("¿Cuál es el apellido?");
    let edad = validarNumEntMayCero("¿Cuál es la edad?");
    let resultado = ejer1(nombre, apellido, edad);
    alert(resultado);
}

let ejer1 = (nombre, apellido, edad) => {
    let nota = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`
    return nota;
}
//--------------------------------------------------------------------------------------
function ejercicio2(){
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
//--------------------------------------------------------------------------------------
function ejercicio3() {
    let valor = prompt("Ingrese un valor:");
    let tipoDeValor = obtenerTipoDeValor(valor);
    alert(`Valor ingresado: ${valor}\nTipo de valor: ${tipoDeValor}`);
}

function obtenerTipoDeValor(valor) {
    if (!isNaN(valor)) {
        return "number";
    } else if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
        return "boolean";
    } else if (Array.isArray(eval(valor))) {
        return "object";
    } else {
        return typeof valor;
    }
}
//--------------------------------------------------------------------------------------
function sumar(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

function ejercicio4() {
    let numeros = [];
    let continuar = true;
    while (continuar) {
        let valor = prompt("Ingrese un número (Deje el campo vacío para terminar):");
        if (valor === "") {
            continuar = false;
        } else {
            let numero = parseFloat(valor);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    }
    let resultado = sumar(...numeros);
    alert("La suma de los números ingresados es: " + resultado);
}
//--------------------------------------------------------------------------------------
function ejercicio5() {
    let valores = [];
    let valor = prompt("Ingrese un valor (o 'fin' para terminar):");
    while (valor.toLowerCase() !== 'fin') {
        if (!isNaN(valor)) {
            valor = parseFloat(valor); // Convertimos el valor a número si es posible
        } else if (valor.startsWith("[") && valor.endsWith("]")) {
            // Verificamos si el valor parece ser un array
            try {
                valor = JSON.parse(valor); // Intentamos convertirlo a un array
            } catch (error) {
                // Si hay un error, no es un array válido, lo dejamos como string
            }
        }
        valores.push(valor);
        valor = prompt("Ingrese otro valor (o 'fin' para terminar):");
    }
    let stringsFiltrados1 = valores.filter(valor => typeof valor === 'number');
    let stringsFiltrados2 = valores.filter(valor => typeof valor === 'object');
    let stringsFiltrados3 = valores.filter(valor => typeof valor === 'string');
    alert("Valores filtrados: " + stringsFiltrados1 + " " +"["+stringsFiltrados2+"]");
    alert("Nuevo array: ["+stringsFiltrados3+"]");
}
//--------------------------------------------------------------------------------------
function ejercicio6() {
    let numeros = [];
    let continuar = true;
    while (continuar) {
        let valor = prompt("Ingrese un número (Deje el campo vacío para terminar):");
        if (valor === "") {
            continuar = false;
        } else {
            let numero = parseFloat(valor);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    }
    let min = Math.min(...numeros); // Encuentra el número mínimo en el array
    let max = Math.max(...numeros); // Encuentra el número máximo en el array
    alert("Los elementos mínimo y máximos son: ["+min+", "+max+"]");
}
//--------------------------------------------------------------------------------------
function ejercicio7() {
    let numbers = [];
    let continuar = true;
    let contador = 0;
    
    while (continuar && contador < 10) {
        let valor = validarNumEntMayCero(`Ingrese el número ${contador + 1}:`);
        
        // Verificar si se ingresó un valor vacío
        if (valor === "") {
            continuar = false;
        } else {
            let numero = parseInt(valor);
            
            // Verificar si el valor ingresado es un número entero válido en el rango de 0 a 9
            if (!isNaN(numero) && numero >= 0 && numero <= 9) {
                numbers.push(numero);
                contador++;
            } else {
                alert("Por favor, ingrese un número entero válido en el rango de 0 a 9.");
            }
        }
    }
    
    // Verificar si se ingresaron exactamente 10 números
    if (numbers.length !== 10) {
        alert("Se requieren exactamente 10 números.");
        return;
    }
    
    // Formatear el número de teléfono
    let phoneNumber = `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
    
    alert("El número de teléfono formateado es: " + phoneNumber);
}
//--------------------------------------------------------------------------------------
function ejercicio8() {
let numMatrices = parseInt(prompt("Ingrese el número de matrices que desea ingresar:"));
    let matrices = [];

    // Loop para ingresar las matrices
    for (let m = 0; m < numMatrices; m++) {
        let matriz = [];
        let continuarMatriz = true;
        let contador = 0;

        // Loop para ingresar los valores de una matriz
        while (continuarMatriz) {
            let valor = prompt(`Ingrese el valor ${contador + 1} de la matriz ${m + 1} (o escriba "fin" para terminar):`);
            contador++;

            // Verificar si se ingresó "fin" para terminar la matriz actual
            if (valor.toLowerCase() === "fin") {
                continuarMatriz = false;
            } else {
                let numero = parseFloat(valor);

                // Verificar si el valor ingresado es un número válido
                if (!isNaN(numero)) {
                    matriz.push(numero);
                } else {
                    alert("Por favor, ingrese un número válido o escriba 'fin' para terminar la matriz.");
                    contador--;
                }
            }
        }

        // Agregar la matriz al array de matrices
        matrices.push(matriz);
    }

    // Encontrar el mayor número de cada submatriz y almacenarlo en una nueva matriz
    let mayores = matrices.map(submatriz => Math.max(...submatriz));

    // Mostrar el resultado
    alert("Los mayores números de cada submatriz son: " + mayores.join(", "));
}
//--------------------------------------------------------------------------------------
function ejercicio9() {

    function charIndex(palabra, letra) {
        let primerIndice = palabra.indexOf(letra);
        if (primerIndice === -1) {
            return `La letra "${letra}" no existe en la palabra "${palabra}".`;
        }
        let ultimoIndice = palabra.lastIndexOf(letra);
        return [primerIndice, ultimoIndice];
    }

    // Solicitar al usuario ingresar la palabra y la letra
    let palabra = prompt("Ingrese una palabra:");
    let letra = prompt("Ingrese la letra que desea buscar:");
    let indices = charIndex(palabra, letra);
    alert("["+indices+"]");
}
//--------------------------------------------------------------------------------------
function ejercicio10() {
    function toArray(objeto) {
        let matriz = [];

        for (let clave in objeto) {
            if (objeto.hasOwnProperty(clave)) {
                matriz.push([clave, objeto[clave]]);
            }
        }
        return matriz;
    }

    let entrada = prompt("Ingrese pares clave-valor separados por ':' (ejm: a:2) ('fin' para detenerse):");
    let objeto = {};

    while (entrada.toLowerCase() !== "fin") {
        let partes = entrada.split(":");
        if (partes.length === 2) {
            let clave = partes[0].trim();
            let valor = partes[1].trim();
            objeto[clave] = valor;
        } else {
            alert("Formato incorrecto. Ingrese la clave y el valor separados por ':'");
        }
        entrada = prompt("Ingrese otro par clave-valor ('fin' para detenerse):");
    }

    let matriz = toArray(objeto);
    let mensaje = "Matriz obtenida:\n[";
    matriz.forEach(function(submatriz, index) {
        mensaje += "[" + submatriz.join(", ") + "]";
        if (index < matriz.length - 1) {
            mensaje += ", ";
        }
    });
    mensaje += "]";
    alert(mensaje);
}
//--------------------------------------------------------------------------------------
function ejercicio11() {

    let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
    let personas = [];

    for (let i = 0; i < cantidadPersonas; i++) {
        let nombre = prompt("Ingrese el nombre de la persona:");
        let edad = validarNumEntMayCero("Ingrese la edad de " + nombre + ":");
        let presupuesto = validarNumMayCero("Ingrese el presupuesto de " + nombre + ":");

        if (!isNaN(presupuesto)) {
            personas.push({ name: nombre, age: edad, budget: presupuesto });
        } else {
            alert("El presupuesto ingresado no es válido. Ingrese un número.");
            i--;
        }
    }

    let totalPresupuestos = personas.reduce(function(acumulador, persona) {
        return acumulador + persona.budget;
    }, 0);

    let mensaje = "Matriz de personas:\n[\n";
    personas.forEach(function(persona) {
        mensaje += "  { name: '" + persona.name + "', age: " + persona.age + ", budget: " + persona.budget + " },\n";
    });
    mensaje += "]\n\nTotal de presupuestos: " + totalPresupuestos;

    alert(mensaje);
}
//--------------------------------------------------------------------------------------
function ejercicio12(){
        let cantidadNombres = parseInt(prompt("Ingrese la cantidad de nombres:"));
        let nombres = [];

        for (let i = 0; i < cantidadNombres; i++) {
            let nombre = prompt("Ingrese el nombre " + (i + 1) + ":");
            nombres.push(nombre);
        }

        alert("Matriz de nombres: [" + nombres.join(", ") + "]");
}
//--------------------------------------------------------------------------------------
function ejercicio13() {
    let matriz = [];
    let claves = ["likes", "dislikes", "followers"];

    for (let clave of claves) {
        let valor = validarNumEntMayCero(`Ingrese el valor para "${clave}":`);
        matriz.push([clave, parseInt(valor)]);
    }

    let mensaje = "Matriz:\n[\n";
    matriz.forEach(function(elemento) {
        mensaje += "  { '" + elemento[0] + "' " + elemento[1] + " },\n";
    });

    mensaje += "]";
    alert(mensaje);
}
//--------------------------------------------------------------------------------------
function ejercicio14() {
    let suma = 0;
    let n = validarNumEntMayCero("Ingrese un número:");
    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }
    alert("La suma de todos los cuadrados hasta "+n+" es: "+suma);
}
//--------------------------------------------------------------------------------------
function ejercicio15() {
    let arr = [];
    let continuar = true;
    while (continuar) {
        let valor = prompt("Ingrese un número (Escriba 'fin' para terminar):");
        if (valor.toLowerCase() === "fin") {
            continuar = false;
        } else {
            let numero = parseFloat(valor);
            if (!isNaN(numero)) {
                arr.push(numero);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    }

    let multiplicados = [];
    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * arr.length);
    }

    let mensaje = "Matriz original: [" + arr.join(", ") + "] \n" + "Matriz multiplicada: [" + multiplicados.join(", ") + "]";
    alert(mensaje);
}

//--------------------------------------------------------------------------------------
function ejercicio16() {
    let numeros = [];
    let n = validarNumEntMayCero("Ingrese un número: ");
    for (let i = n; i >= 0; i--) {
        numeros.push(i);
    }
    alert("El resultado es: [" + numeros+"]");
}
//--------------------------------------------------------------------------------------
function ejercicio17() {
    let numeros = [];
    let continuar = true;
    while (continuar) {
        let valor = prompt("Ingrese un número (Deje el campo vacío para terminar):");
        if (valor === "") {
            continuar = false;
        } else {
            let numero = parseFloat(valor);
            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingrese un número válido.");
            }
        }
    }
    let resta = Math.max(...numeros) - Math.min(...numeros);
    alert("La matriz es: ["+numeros+"] \n"+"La diferencia entre el máximo y el mínimo valor de la lista es: " + resta);
}
//--------------------------------------------------------------------------------------
function ejercicio18() {
    let valores = [];
    let valor = prompt("Ingrese un valor (deje vacio para terminar):");
    while (valor.toLowerCase() !== '') {
        if (!isNaN(valor)) {
            valor = parseFloat(valor); 
        } else if (valor.startsWith("[") && valor.endsWith("]")) {
            try {
                valor = JSON.parse(valor); 
            } catch (error) {
            }
        }
        valores.push(valor);
        valor = prompt("Ingrese otro valor (deje vacio para terminar):");
    }

    let stringsFiltrados1 = valores.filter(valor => typeof valor === 'number');
    let enteros = stringsFiltrados1.filter(numero => Number.isInteger(numero));

    alert("Matriz original: ["+valores+"]\n"+"Matriz filtrada: [" + enteros + "]");
}
//--------------------------------------------------------------------------------------
function repeat(elemento, veces) {
    let resultado = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

function ejercicio19() {
    let elemento = prompt("Ingrese el elemento a repetir:");
    let veces = validarNumeroInput("Ingrese la cantidad de veces a repetir el elemento:");
    let resultado = repeat(elemento, veces);
    alert("Matriz con elementos repetidos: [" + resultado+"]");
}
//--------------------------------------------------------------------------------------
String.prototype.vreplace = function(vocalReemplazo) {
    return this.replace(/[aeiou]/gi, vocalReemplazo);
};

function ejercicio20() {
    let palabra = prompt("Ingrese la palabra:");
    let vocalReemplazo = prompt("Ingrese la vocal de reemplazo:");
    // @ts-ignore
    let palabraModificada = palabra.vreplace(vocalReemplazo);
    alert("Palabra original: " + palabra + "\nPalabra modificada: " + palabraModificada);
}
//--------------------------------------------------------------------------------------
function ejercicio21() {
    let oracion = prompt("Ingrese una oración:");
    let palabraBuscada = prompt("Ingrese la palabra a buscar:");
    oracion = oracion.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let palabras = oracion.split(" ");
    let indice = palabras.findIndex(palabra => palabra.toLowerCase() === palabraBuscada.toLowerCase());
    if (indice !== -1) {
        alert(`¡Encontré a "${palabraBuscada}" en la ${indice + 1} posición`);
    } else {
        alert(`La palabra "${palabraBuscada}" no está en la oración.`);
    }
}
//--------------------------------------------------------------------------------------
function ejercicio22() {
    // Dividir la oración en palabras utilizando expresiones regulares
    let oracion = prompt("Ingrese una oración:");
    let palabras = oracion.split(/\b/);

    // Capitalizar la última letra de cada palabra y omitir los signos de puntuación
    let palabrasCapitalizadas = palabras.map(palabra => {
        // Si la palabra contiene caracteres alfabéticos
        if (/[a-zA-Z]/.test(palabra)) {
            let palabraSinPuntuacion = palabra.replace(/[^\w\s]|_/g, ""); // Eliminar signos de puntuación
            let palabraCapitalizada = palabraSinPuntuacion.slice(0, -1) + palabraSinPuntuacion.slice(-1).toUpperCase();
            return palabra.replace(palabraSinPuntuacion, palabraCapitalizada);
        } else {
            return palabra; // Conservar caracteres que no sean letras
        }
    });

    // Unir las palabras de nuevo en una cadena
    let oracionCapitalizada = palabrasCapitalizadas.join("");

    alert("Capitalizamos la última letra de cada palabra: "+oracionCapitalizada);
}

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
function validarNumEntMayCero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || numero < 0) {
            alert("Incorrecto. Asegúrese de ingresar un número entero mayor o igual a 0.");
        }
    } while (isNaN(numero) || numero < 0);
    return parseInt(numero);
}
//--------------------------------------------------------------------------------------
function validarNumEntMayCero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || parseInt(numero) !== parseFloat(numero) || numero < 0) {
            alert("Incorrecto. Asegúrese de ingresar un número entero mayor o igual a 0.");
        }
    } while (isNaN(numero) || parseInt(numero) !== parseFloat(numero) || numero < 0);
    return parseInt(numero);
}
//--------------------------------------------------------------------------------------
function validarNumMayCero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (isNaN(numero) || numero < 0) {
            alert("Incorrecto. Asegúrese de ingresar un número entero mayor o igual a 0.");
        }
    } while (isNaN(numero) || numero < 0);
    return parseFloat(numero);
}
//--------------------------------------------------------------------------------------
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