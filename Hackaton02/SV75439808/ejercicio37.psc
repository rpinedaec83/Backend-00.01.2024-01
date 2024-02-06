Proceso Ejercicio_37
	Definir n1, n2 Como Entero
	Escribir "Ingrese el primer y segundo número entero"
	Leer n1, n2
	Mientras n2 <> 0 Hacer
		rest <- n1 MOD n2
		n1 <- n2
		n2 <- rest
	FinMientras
	mcd <- n1
	Escribir "M.C.D.: ",mcd
	
FinProceso
