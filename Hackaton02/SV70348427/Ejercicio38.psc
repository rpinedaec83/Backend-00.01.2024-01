Proceso Ejercicio38
    Definir numero, sumaDivisores, i Como Entero	
    Escribir "Ingrese un número:"
    Leer numero
	
    sumaDivisores = 0
	
    Para i = 1 Hasta numero / 2 Hacer
        Si numero % i = 0 Entonces
            sumaDivisores = sumaDivisores + i
        FinSi
    FinPara
	
    Si sumaDivisores = numero Entonces
        Escribir "El número ingresado es un número perfecto."
    Sino
        Escribir "El número ingresado no es un número perfecto."
    FinSi
FinProceso
