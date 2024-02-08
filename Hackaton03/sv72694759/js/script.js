function ejecicio1(){
    let numero = prompt("Escriba su numero");
    let nroCaracteres = numero.length;
    if(nroCaracteres==3){
        alert("Si tiene 3 caracteres")
    }
    else{
        alert("No tiene 3 caracteres");
    }
}
function ejecicio2(){
    const readline = require('readline');

    // Crear una interfaz de lectura
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    // Preguntar al usuario que ingrese un número
    rl.question('Por favor, ingresa un número entero: '), (input) => {
      // Convertir la entrada a un número entero
      const numero = parseInt(input);
    
      // Verificar si el número es negativo
      if (numero < 0) {
        console.log('El número ingresado es negativo.');
      } else if (numero === 0) {
        console.log('El número ingresado es cero.');
      } else {
        console.log('El número ingresado es positivo.');
      }

}
}