//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Proceso ejercicio23
	Definir n Como Entero
	Definir suma_pares Como Entero
	
	suma_pares <- 0
	n <- 1000
	
	Para i <- 2 Hasta n Con Paso 2 Hacer
		Si i Mod 2 == 0 Entonces
			suma_pares <- suma_pares + i
		FinSi
	FinPara
	
	Escribir "//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000"
	Escribir "La suma de los números pares hasta " n " es: " suma_pares
		
FinProceso