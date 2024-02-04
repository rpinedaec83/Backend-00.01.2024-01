//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.


Proceso Ejercicio16
	
	Definir numeroDia Como Entero
	
    Escribir "Ingrese un número del 1 al 7:"
    Leer numeroDia
	
	Mientras numeroDia < 1 o numeroDia > 7 Hacer
        Escribir "El número debe estar entre 1 y 7. Por favor, vuelva a intentar:"
        Leer numeroDia
    FinMientras
	
    Segun numeroDia Hacer
        1: Escribir "El número ", numeroDia, " corresponde al Lunes."
        2: Escribir "El número ", numeroDia, " corresponde al Martes."
        3: Escribir "El número ", numeroDia, " corresponde al Miércoles."
        4: Escribir "El número ", numeroDia, " corresponde al Jueves."
        5: Escribir "El número ", numeroDia, " corresponde al Viernes."
        6: Escribir "El número ", numeroDia, " corresponde al Sábado."
        7: Escribir "El número ", numeroDia, " corresponde al Domingo."
    FinSegun
	
FinProceso
