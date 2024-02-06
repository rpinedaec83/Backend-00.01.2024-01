//16. Hacer un algoritmo en Pseint que lea un n�mero y seg�n ese n�mero, indique el d�a que corresponde.


Proceso Ejercicio16
	
	Definir numeroDia Como Entero
	
    Escribir "Ingrese un numero del 1 al 7:"
    Leer numeroDia
	
	Mientras numeroDia < 1 o numeroDia > 7 Hacer
        Escribir "El numero debe estar entre 1 y 7. Por favor, vuelva a intentar:"
        Leer numeroDia
    FinMientras
	
    Segun numeroDia Hacer
        1: Escribir "El numero ", numeroDia, " corresponde al Lunes."
        2: Escribir "El numero ", numeroDia, " corresponde al Martes."
        3: Escribir "El numero ", numeroDia, " corresponde al Miercoles."
        4: Escribir "El numero ", numeroDia, " corresponde al Jueves."
        5: Escribir "El numero ", numeroDia, " corresponde al Viernes."
        6: Escribir "El numero ", numeroDia, " corresponde al Sabado."
        7: Escribir "El nuumero ", numeroDia, " corresponde al Domingo."
    FinSegun
	
FinProceso
