Proceso Ejercicio_25
	Definir n1, n2 Como Entero
	n2 = 1
	Escribir "Ingrese un número"
	Leer n1
	Si n1 > 1 Entonces
		Mientras n1 <> 0 Hacer
			n2 = n2 * n1
			n1 = n1 - 1
		Fin Mientras
	FinSi
	Escribir "El fatorial es ",n2,"."
	
FinProceso
