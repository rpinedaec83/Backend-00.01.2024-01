Proceso Ejercicio_27
	Escribir "Ingrese un número"
	Leer n
	sum <- 0
	Si n >= 0 Entonces
		Para i = 1 Hasta n Con Paso 1 Hacer
			sum <- sum + i
		FinPara
		res <- sum / n
		Escribir "La media es: ",res,"." 
	SiNo
		Escribir "Programa Terminado..."
	FinSi
	
FinProceso
