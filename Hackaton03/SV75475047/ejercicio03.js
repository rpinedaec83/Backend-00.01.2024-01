function ejercicio03() {

    let numero = prompt("Ingrese un número:");

    if (numero.charAt(numero.length - 1) === '4') {
        console.log("El número termina en 4.");
    } else {
        console.log("El número no termina en 4.");
    }
}