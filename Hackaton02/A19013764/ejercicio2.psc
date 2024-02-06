Proceso ejercicio2
	Definir numero Como Entero
    Definir opcion Como Cadena
	
    Mientras opcion <> "n" Hacer
        Escribir "Ingrese un número entero: "
        Leer numero
		
        Si numero < 0 Entonces
            Escribir "El número es negativo."
        Sino
            Escribir "El número no es negativo."
        FinSi
		
        Escribir "¿Desea continuar? (s/n): "
        Leer opcion
	
    FinMientras
	
    Escribir "Fin del programa."
FinProceso
