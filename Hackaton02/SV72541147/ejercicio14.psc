Proceso ejercicio14
	Definir numero Como Entero
    
    Escribir "Ingrese un número entero positivo del 1 al 8 o del 10 en adelante:"
    Leer numero

    Si numero >= 1 Y numero <= 8 O numero >= 10 Entonces
       
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 Entonces
            Escribir "El número ingresado es primo."
        Sino
            Escribir "El número ingresado no es primo."
        FinSi
    Sino
        Escribir "Número no válido. Por favor, ingrese un número entre 1 y 8 o mayor o igual a 10."
    FinSi
FinProceso
