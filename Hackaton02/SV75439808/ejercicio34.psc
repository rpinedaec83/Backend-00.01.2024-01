Proceso Ejercicio_34
	Definir	n como Entero
	cont <- 0
	Escribir "Ingrese un número"
	Leer n
	Si n > 0 y n <= 9 Entonces
		Para x = 1 Hasta 9 Con Paso 1 hacer 
			cont = cont + x
			tm = n * x
			Escribir n," X ",x," = ",tm
		FinPara
	SiNo
		Escribir "Solo se permite un número del 1 al 9"
	FinSi
	
FinProceso
