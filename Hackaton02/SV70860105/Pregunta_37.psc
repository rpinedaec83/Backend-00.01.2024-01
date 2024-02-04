Proceso Pregunta_37
	Definir num1, num2, resto Como Entero
    
    Escribir "Ingrese primer número:"
    Leer num1
    a = num1
    Escribir "Ingrese segundo número:"
    Leer num2
	b = num2
    
    Mientras num2 <> 0 Hacer
        resto = num1 % num2
        num1 = num2
        num2 = resto
    FinMientras
    
    Escribir "El Máximo Común Divisor de " a " y " b " es:" num1
FinProceso
