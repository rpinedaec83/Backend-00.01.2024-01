// Definir variable
var continuar;

do {
    // Preguntar al usuario si desea continuar
    continuar = prompt("¿Desea continuar con el programa? (S/N): ");
    continuar = continuar.toUpperCase(); // Convertir la entrada a mayúsculas
} while (continuar !== "N");

// El programa se detendrá cuando el usuario ingrese "N" o "n"