Algoritmo sin_titulo
	Definir numero, factorial Como Entero
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero
    factorial = 1
	
    
    Si numero >= 0 Entonces
        Para i = 1 Hasta numero
            factorial = factorial * i
        FinPara
        Escribir "El factorial de ", numero, " es: ", factorial
    Sino
        Escribir "Por favor, ingrese un número no negativo para calcular el factorial."
    FinSi
FinAlgoritmo
