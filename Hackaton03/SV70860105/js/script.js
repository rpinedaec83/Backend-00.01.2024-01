function ejercicio_01(){
    let num = prompt("Ingrese un numero");
    if (num > 99 && num < 1000){
        alert("Tiene 3 digitos");
    }
    else{
        alert("No tiene 3 digitos");
    }
}

function ejercicio_02(){
   let num = prompt("Ingrese un numero");
   num < 0 ? alert("Es negativo") : alert("No es negativo");
}

function ejercicio_03(){
   let num = prompt("Ingrese un numero");
   num % 10 == 4 ? alert("Termina en 4") : alert("No termina en 4");
}

