Proceso Ejercicio_23
	sum = 0
	Escribir "Ingresar un número"
	Leer n
	Para x = 1 Hasta n Con Paso 1 Hacer
		Si x MOD 2 <> 0 Entonces
			sum = sum + x
		FinSi
	FinPara
	Escribir "La suma de números impares menores o iguales a ",n," es ",sum,"."
	
FinProceso
