function esVocal(letra) {
    letra = letra.toLowerCase(); // Convertir la letra a minúscula
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return true;
    } else {
        return false;
    }
}

// Solicitar al usuario que ingrese una letra
console.log("Ingrese una letra:");
var letra = prompt("Letra:"); // Leer la letra ingresada por el usuario

// Verificar si la letra ingresada es una vocal usando la función esVocal
if (esVocal(letra)) {
    console.log("La letra ingresada es una vocal.");
} else {
    console.log("La letra ingresada no es una vocal.");
}