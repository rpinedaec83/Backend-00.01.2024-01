// Variables
let numero, a, b, c;

// Ingreso del número hasta el cual se calculará la serie de Fibonacci
console.log("Ingrese el número hasta el cual desea calcular la serie de Fibonacci:");
// Se puede usar 'prompt()' para obtener la entrada del usuario en un entorno de navegador.
// En un entorno de consola, podrías usar un paquete como 'readline-sync'.
numero = parseInt(prompt());

// Inicializar los primeros dos números de la serie
a = 0;
b = 1;

// Mostrar los dos primeros números
console.log(a);
console.log(b);

// Calcular y mostrar la serie de Fibonacci hasta el número ingresado
for (let i = 3; i <= numero; i++) {
    c = a + b;
    console.log(c);

    // Actualizar valores para el siguiente cálculo
    a = b;
    b = c;
}