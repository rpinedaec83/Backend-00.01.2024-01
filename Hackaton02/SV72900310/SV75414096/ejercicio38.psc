Algoritmo sin_titulo
	Definir numero, sumaDivisores, divisor Como Entero
	
    Escribir "Ingrese un número para verificar si es perfecto: "
    Leer numero
	sumaDivisores  = 0
	
    Para divisor = 1 Hasta (numero / 2)
        Si numero MOD divisor = 0 Entonces
            sumaDivisores = sumaDivisores + divisor
        FinSi
    FinPara
	
	
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    FinSi
FinAlgoritmo
