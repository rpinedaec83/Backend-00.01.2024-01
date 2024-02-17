function ejercicio31(params) {
    function calcularMediaParesImpares() {
        let sumaPares = 0;
        let cantidadPares = 0;
        let sumaImpares = 0;
        let cantidadImpares = 0;

        for (let i = 1; i <= 10; i++) {
            let numero = parseInt(prompt("Ingrese el número " + i + ":"));

            if (numero % 2 === 0) {
                sumaPares += numero;
                cantidadPares++;
            } else {
                sumaImpares += numero;
                cantidadImpares++;
            }
        }

        let mediaPares = cantidadPares === 0 ? 0 : sumaPares / cantidadPares;
        let mediaImpares = cantidadImpares === 0 ? 0 : sumaImpares / cantidadImpares;

        return {
            mediaPares: mediaPares,
            mediaImpares: mediaImpares
        };
    }

    let medias = calcularMediaParesImpares();
    console.log("La media de los números pares es: " + medias.mediaPares.toFixed(2));
    console.log("La media de los números impares es: " + medias.mediaImpares.toFixed(2));

}