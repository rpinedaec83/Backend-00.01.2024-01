// Variables
let numero, mayor, menor;

// Inicializar las variables mayor y menor con el primer número ingresado
console.log("Ingrese el primer número:");
// Se puede usar 'prompt()' para obtener la entrada del usuario en un entorno de navegador.
// En un entorno de consola, podrías usar un paquete como 'readline-sync'.
numero = parseFloat(prompt());
mayor = numero;
menor = numero;

// Ingresar los restantes diecinueve números
for (let i = 2; i <= 20; i++) {
    console.log("Ingrese el número " + i + ":");
    numero = parseFloat(prompt());

    // Actualizar el número mayor si es necesario
    if (numero > mayor) {
        mayor = numero;
    }

    // Actualizar el número menor si es necesario
    if (numero < menor) {
        menor = numero;
    }
}

// Mostrar resultados
console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);