// Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos,
// se debe acabar el programa al ingresar un número negativo.

Proceso ejercicio_27
	Definir num, suma, cantidad Como Real
	
	suma = 0
	cantidad = 0
	
	Escribir " Ingrese numeros positivos para calcular la media "
	Escribir " Ingrese un numero negativo para finalizar "
	
	Leer num
	Mientras num >= 0 Hacer
		suma = suma + num
		cantidad = cantidad + 1
		Escribir " Ingrese otro número positivo o un número negativo para finalizar: "
        Leer num
    FinMientras
	Si cantidad > 0 Entonces
	media = suma / cantidad
	Escribir " La media de los números ingresados es: ", media
	Sino
	Escribir "No se ingresaron números positivos."
FinSi
FinProceso
