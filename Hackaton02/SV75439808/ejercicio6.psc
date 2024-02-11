Proceso Ejercicio_6
	Definir ht, he Como Entero
	Escribir "Ingrese un número de horas de trabajadas"
	Leer ht
	Si ht <= 40 Entonces
		pag = ht * 20
	SiNo
		Si ht > 40 Entonces
			he = ht - 40
			pag = (he * 25) + 800
		FinSi
	FinSi
	Escribir "Sueldo Semanal:",pag,"."
	
FinProceso
