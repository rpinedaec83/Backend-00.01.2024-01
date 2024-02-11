Proceso Ejercicio21
	Definir numero, factorial Como Entero
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero
	
    factorial <- 1
	
    Si numero >= 0 Entonces
        Para i Desde 1 Hasta numero Hacer
            factorial <- factorial * i
        FinPara
        Escribir "El factorial de ", numero, " es: ", factorial
    Sino
        Escribir "Ingrese un número no negativo."
    FinSi
FinProceso
