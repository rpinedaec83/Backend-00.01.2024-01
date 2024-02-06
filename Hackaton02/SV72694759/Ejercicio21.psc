Proceso Ejercicio21
	Definir numero, factorial Como Entero
	
  
    Escribir "Ingrese un número entero mayor o igual a cero para calcular su factorial:"
    Leer numero

    factorial = 1
	
	Si numero=0
		factorial = 1
	Sino	
    Para i = 1 Hasta numero
        factorial = factorial * i
    Fin Para
FinSi


    Escribir "El factorial de ", numero, " es:", factorial

FinProceso
