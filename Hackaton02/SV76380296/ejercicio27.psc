Proceso ejercicio27
	
	Escribir "Algoritmo para crear media de numeros consecutivos."
	
	Definir numeronuevo,numeroacumulado,cantidadnumeros Como Entero
	
	Repetir
		Escribir "Ingresar un nuevo numero"
		Leer numeronuevo
		numeroacumulado = numeroacumulado + numeronuevo
		Escribir numeroacumulado ", " numeronuevo
		cantidadnumeros = cantidadnumeros + 1
		Escribir "La nueva media es de " numeroacumulado/cantidadnumeros "."
	Hasta Que numeronuevo < 0
	
	Escribir "Al haberse usado un numero negativo, se ha terminado el algoritmo."
	
FinProceso

//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida 
//de números positivos, se debe acabar el programa al ingresar un número negativo.