/* Proceso Determinar_NEGATIVO
	Definir numero, megativo Como Entero
	
	Escribir "Ingrese un numero entero:"
	
	Leer numero
	
	Si numero < 0 Entonces
		negativo <- 1
	FinSi
	
	Si negativo = 1 Entonces
		Escribir " El numero ingresado es negativo"
	SiNo
		Escribir " El numero ingresado no es negativo"
	FinSi
	
	
FinProceso */

numero = prompt("Ingrese un numero entero:");

let negativo;

if (numero < 0) {
    negativo = 0
    console.log("El numero ingresado es negativo")
} else {
    negativo = 0;
    console.log("El número ingresado no es negativo");
}