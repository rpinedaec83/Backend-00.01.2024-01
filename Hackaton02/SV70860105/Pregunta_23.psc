Proceso Pregunta_23
	definir n Como Real
	escribir "Ingrese un numero : "
	leer n
	suma = 0
	Para i = 1 Hasta n-1 Con Paso 1 Hacer
		si i % 2 == 1 Entonces
			suma = suma + i
		FinSi
	Fin Para
	
	escribir "La suma de los impares menores a " n " es " suma
FinProceso
