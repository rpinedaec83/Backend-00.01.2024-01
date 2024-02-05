Proceso Ejercicio_31
	cont <- 1
	sum_par <- 0
	sum_ipr <- 0
	Repetir 
		Escribir "Ingresar número ",cont
		Leer n
		Si num MOD 2 = 0 Entonces
			sum_par = sum_par + n 
			
		SiNo
			sum_ipr = sum_ipr + n
		FinSi
		cont <- cont + 1
	Hasta Que cont > 10
	m_par <- sum_par / (cont - 1)
	m_ipr <- sum_ipr / (cont - 1)
	Escribir "La media de los números pares es: ",m_par,"."
	Escribir "La media de los números impares es: ",m_ipr,"."
	
FinProceso
