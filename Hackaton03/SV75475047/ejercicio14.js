function ejercicio14(params) {

    let numero = parseInt(prompt("Ingrese un número entero positivo del 1 al 10:"));

    if (numero >= 1 && numero <= 10) {
        if (numero === 1) {
            console.log("El número 1 no es primo.");
        } else if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            console.log("El número " + numero + " es primo.");
        } else if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0) {
            console.log("El número " + numero + " es primo.");
        } else {
            console.log("El número " + numero + " no es primo.");
        }
    } else {
        console.log("El número ingresado está fuera del rango válido.");
    }

}