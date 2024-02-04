Proceso Pregunta_21
	
	Definir numero, factorial como Entero
    
    Escribir "Ingrese un número : "
    Leer numero
    
    Si (numero >= 0) Entonces
        factorial = 1
        Para i = 1 Hasta numero Hacer
		factorial = factorial * i
        FinPara
        
		Escribir "El factorial de " numero " es: " factorial
	Sino
		Escribir("Debe ingresar un numero positivo")
    FinSi
FinProceso
