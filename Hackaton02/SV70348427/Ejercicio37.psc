Proceso Ejercicio37
    Definir numero1, numero2, resto Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer numero1
	
    Escribir "Ingrese el segundo número:"
    Leer numero2
	
    Mientras numero2 <> 0 Hacer
        resto = numero1 % numero2
        numero1 = numero2
        numero2 = resto
    FinMientras
	
    Escribir "El M.C.D. es: ", numero1
FinProceso
