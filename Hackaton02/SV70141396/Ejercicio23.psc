// Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso ejercicio_23
	Definir n, i Como Entero
	Escribir " Ingrese un numero entero positivo "
	Leer n
	
	suma = 0
	Para i = 1 Hasta n Con Paso 2 Hacer
		suma = suma + i
	FinPara
	
	Escribir "La suma de ", num, " es: ", suma
FinProceso
