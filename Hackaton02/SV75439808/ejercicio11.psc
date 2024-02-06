Proceso Ejercicio_11
	Escribir "Ingrese tres n�meros"
	Leer n1,n2,n3
	
	Si n1 > n2 y n1 > n3 Entonces
		n_may = n1
	SiNo
		Si n2 > n1 y n2 > n3 Entonces
			n_may = n2	
		SiNo
			n_may = n3
		FinSi
	FinSi
	Escribir "El n�mero mayor es: ",n_may,"."
	
FinProceso
