// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.


Proceso Ejercicio23
	
	Definir n Como Entero
	Definir suma Como Entero
	suma=0
	
	Escribir "Escriba el numero a calcular"
	Leer n
	
	suma=0
	
	Para i=1 hasta n Hacer
		si i % 2 > 0 Entonces
			suma=suma+i
		FinSi
	FinPara
	Escribir "La suma de los impares hasta " n " es igual a " suma
	
FinProceso
