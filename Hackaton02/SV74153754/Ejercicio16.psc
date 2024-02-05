Proceso Ejercicio16
	
	Definir numeroDia Como Entero
	
    Escribir "Ingrese un numero del 1 al 7:"
    Leer numeroDia
	
	Mientras numeroDia < 1 o numeroDia > 7 Hacer
        Escribir "El numero debe estar entre 1 y 7."
        Leer numeroDia
    FinMientras
	
    Segun numeroDia Hacer
        1: Escribir "El numero ", numeroDia, " es Lunes."
        2: Escribir "El numero ", numeroDia, " es Martes."
        3: Escribir "El numero ", numeroDia, " es Miercoles."
        4: Escribir "El numero ", numeroDia, " es Jueves."
        5: Escribir "El numero ", numeroDia, " es Viernes."
        6: Escribir "El numero ", numeroDia, " es Sabado."
        7: Escribir "El numero ", numeroDia, " es  Domingo."
    FinSegun
	
FinProceso