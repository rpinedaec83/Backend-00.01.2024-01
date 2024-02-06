Proceso Ejercicio_18
	Escribir "Ingrese una cantidad"
	Leer cant
	Si cant <= 9 Entonces
		pt = cant * 10
	SiNo
		Si cant >= 10 y cant <= 99 Entonces
			pt = cant * 8
		SiNo
			Si cant >= 100 y cant <= 499 Entonces
				pt = cant * 7
			SiNo
				pt = cant * 6
			FinSi
		FinSi
	FinSi
	g = pt * 0.0825
	Escribir "Precio total: $",pt
	Escribir "Ganancia: $",g
	
FinProceso
