function Promedio(arreglo, cantidad){
    let prom = 0;
    let suma = 0;
    for (let index = 0; index < cantidad; index++){
        suma += arreglo[index]; 
    }
    prom = suma / cantidad;
    return prom;
}

function obtenerPares(arreglo, cant){
    let cant_pares = 0;
    for (let index = 0; index < cant; index++){
        let resto = arreglo[index] % 2;
        if(resto == 0){
            cant_pares += 1;
        }
    }
    return cant_pares;
}

function obtenerMayor(arreglo, cant){
    let pos_mayor = 1;
    for (let index = 1; index < cant; index++){
        if(arreglo[index] > arreglo[pos_mayor]){
            pos_mayor = index;
        }
    }
    return pos_mayor;
}

function terceroPar(arreglo, posicion){
    let cuadrado_segundo;
    if (arreglo[posicion] % 2 == 0){
        if (arreglo[posicion-1] >= 0){
            cuadrado_segundo = Math.sqrt(arreglo[posicion-1]);            
            cuadrado_segundo.toPrecision(3);
        } else {
            cuadrado_segundo = -1;
        }
    } else {
        cuadrado_segundo = -2
    }

    return cuadrado_segundo;
}

function primeroMenorCuarto(arreglo, cant, posicion1, posicion2){
    let media = 0;
    if (arreglo[posicion1] < arreglo[posicion2]){
        let suma = 0;
        for (let j = 0; j < cant; j++){
            suma += parseFloat(arreglo[j]);            
        }
        media = suma / cant;
        console.log("suma: " + suma + " cant " +  cant + " media " + media);
    }
    return media;
}

function sumaRecursiva(n){
    let f;
    if(n <= 0){
        f = -1;
    } else {
        if (n <= 1){
            f = 1;
        } else {
            f = sumaRecursiva(n - 1) + n;
        }
    }
    return f;
}

function factorial(n){
    let f;

    if(n <= 0){
        f = -1;
    } else {
        if (n <= 1) {
            f = 1;
        } else {
            f = factorial(n-1) * n;
        }
    }

    return f;
}

