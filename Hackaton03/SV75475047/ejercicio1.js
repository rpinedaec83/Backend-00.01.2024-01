1. 
function ejercicio01() {
    

let numero = prompt("Ingrese un número:");

if (numero.length === 3 && !isNaN(numero)) {
    console.log("El número tiene tres dígitos.");
} else {
    console.log("El número no tiene tres dígitos o no es un número válido.");
}
}