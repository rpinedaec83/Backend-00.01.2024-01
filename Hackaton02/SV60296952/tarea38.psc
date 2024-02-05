Proceso tarea38
	definir n,x,perfecto Como Entero
	escribir "Escribe un número"
	leer n
	x = 2
	mientras x <= n Hacer
		si n mod x ==0 Entonces
			perfecto = perfecto + (n/x)
		FinSi
		x = x + 1
	FinMientras
	si perfecto == n Entonces
		Escribir "El numero ",n," Es un número perfecto"
	SiNo
		Escribir "El numero ",n," No es un número perfecto"
	FinSi
FinProceso
