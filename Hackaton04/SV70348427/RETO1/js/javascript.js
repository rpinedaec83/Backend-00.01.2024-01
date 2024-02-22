 
  function Ejercicio1() {
    var numero1 = parseInt(prompt("Ingrese el primer número:"));
    var numero2 = parseInt(prompt("Ingrese el segundo número:"));
    
    var suma  = numero1 + numero2;
    
    alert("La suma es: " + suma);
    }

    function calcularPotencia(base, exponente) {
        const resultado = base ** exponente;
        return resultado;
      }
    function Ejercicio2() {
        const base = parseInt(prompt("Ingrese el primer número:"));
        const exponente = parseInt(prompt("Ingrese el primer número:"));
        const resultado = calcularPotencia(base, exponente);
        alert(resultado);
    }

    function sumOfCubes() {
        const numeros = Array.from(arguments);
    
        if (numeros.length === 0) {
        return "No se proporcionaron números.";
        }
    
        const sumaCubos = numeros.reduce((acumulador, numero) => {
        return acumulador + Math.pow(numero, 3);
        }, 0);
    
        return sumaCubos;
    }
  
    function Ejercicio3() {
        var numero1 = parseInt(prompt("Ingrese el primer número:"));
        var numero2 = parseInt(prompt("Ingrese el segundo número:"));
        var numero3 = parseInt(prompt("Ingrese el tercer número:"));

        const resultado = sumOfCubes(numero1, numero2, numero3);
        alert(resultado);
    }

    function triArea(base, altura) {
        const area = (base * altura) / 2;
        return area;
    }
  
    function Ejercicio4() {
        var numero1 = parseInt(prompt("Ingrese el primer número:"));
        var numero2 = parseInt(prompt("Ingrese el segundo número:"));

        const resultado = triArea(numero1, numero2);
        alert("El resultado es: "+resultado);   
    }

    function calculator(numero1, operacion, numero2) {
        // Verificar la operación y realizar la operación correspondiente
        switch (operacion) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "/":
            return numero1 / numero2;
        case "x":
            // 'x' para la multiplicación
            return numero1 * numero2;
        case "%":
            return numero1 % numero2;
        default:
            return "El parámetro no es reconocido";

        }
    }
  
    function Ejercicio5() {
        var numero1 = parseInt(prompt("Ingrese el primer número:"));
        var opera = String(prompt("Ingrese el simbolo de la operacion:"));
        var numero2 = parseInt(prompt("Ingrese el segundo número:"));
        
        const resultado = calculator(numero1,opera,numero2);

        alert("El resultado es: " + resultado); 
    }