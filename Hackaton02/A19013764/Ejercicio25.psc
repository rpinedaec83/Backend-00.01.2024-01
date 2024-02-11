Proceso Ejercicio25
	Definir numero, factorial, i Como Entero
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero
	
    Si numero >= 0 Entonces
        factorial <- 1
		
        Para i Desde 2 Hasta numero Hacer
            factorial <- factorial * i
        FinPara
		
        Escribir "El factorial de ", numero, " es: ", factorial
    Sino
        Escribir "Ingrese un número no negativo."
    FinSi
FinProceso
