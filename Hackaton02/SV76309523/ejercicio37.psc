Proceso ejercicio37
	Definir num1, num2, residuo Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Mientras num2 <> 0 Hacer
        residuo = num1 Mod num2
        num1 = num2
        num2 = residuo
    FinMientras
	
    Escribir "El M.C.D. de los dos números es: ", num1
FinProceso
