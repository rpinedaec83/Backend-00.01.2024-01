function ejercicio13(params) {
    let letra = prompt("Ingrese una letra:");

    letra = letra.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("La letra ingresada es una vocal.");
    } else {
        console.log("La letra ingresada no es una vocal.");
    }

}