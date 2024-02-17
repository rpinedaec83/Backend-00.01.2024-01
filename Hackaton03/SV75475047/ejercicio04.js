function ejercicio04() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número:"));

    let numeros = [numero1, numero2, numero3];

    numeros.sort((a, b) => a - b);

    console.log("Los números ordenados de menor a mayor son:");
    for (let numero of numeros) {
        console.log(numero);
    }

}