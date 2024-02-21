function calculator(num1, operacion, num2) {
    switch(operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "x":
            return num1 * num2;
        case "%":
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

// Ejemplo de uso de la función
console.log(calculator(2, "+", 2)); // Output: 4
console.log(calculator(10, "/", 2)); // Output: 5
console.log(calculator(3, "*", 4)); // Output: 12
console.log(calculator(5, "-", 3)); // Output: 2
console.log(calculator(10, "^", 2)); // Output: El parámetro no es reconocido