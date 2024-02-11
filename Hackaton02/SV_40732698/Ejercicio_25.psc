Proceso Factoriales
	Definir factorial, i Como Entero
	
	factorial = 1
    i = 1
	
    Escribir "Ingrese un número entero positivo:"
	Leer numero
	Si numero > 0 Entonces
		Mientras i <= numero
        factorial <- factorial * i
        i <- i + 1
    FinMientras
	Escribir "Su factorial es ",factorial
    SiNo
		Escribir "Ingrese un número entero positivo, reinicie"
    FinSi
    
FinProceso
