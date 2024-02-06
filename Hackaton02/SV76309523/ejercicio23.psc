Proceso ejercicio23
	Definir n, suma Como Entero
	
    Escribir "Ingrese el valor de n para calcular la suma de los impares menores o iguales a n:"
    Leer n
	
    Si n < 0 Entonces
        Escribir "El valor de n debe ser un número positivo."
    Sino
        suma = 0
        Para i desde 1 hasta n Hacer
            Si i MOD 2 = 1 Entonces
                suma = suma + i
            FinSi
        FinPara
		
        Escribir "La suma de los números impares menores o iguales a ", n, " es:", suma
    FinSi
FinProceso
