Proceso Ejercicio_21
	Escribir "Ingresar un número"
	Leer num
	Si num > 0 Entonces
		fl <- 1
		Para i = 1 Hasta num Con Paso 1 Hacer
			fl = fl * i
		FinPara
	FinSi
	Escribir "El fatorial de ",num," es ",fl,"."
	
FinProceso
