Proceso ejercicio4
	definir a, b, c Como Entero
	definir aux como entero
	escribir "ingrese los numeros"
	leer a, b, c
	Repetir
		si a> b Entonces
			aux = a
			a=b
			b=aux
		FinSi
		si b> c entonces
			aux =b
			b=c
			c=aux
			
		FinSi
	Hasta Que a < b y b <c
	escribir "los numeros de menor a mayor son:"
	escribir a
	Escribir b
	Escribir c
	
	
	
	
	
	
FinProceso
