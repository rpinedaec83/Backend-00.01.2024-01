function ejercicio37(params) {
    function mcdEuclides(a, b) {

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    let mcd = mcdEuclides(num1, num2);
    console.log("El MCD de " + num1 + " y " + num2 + " es: " + mcd);

}