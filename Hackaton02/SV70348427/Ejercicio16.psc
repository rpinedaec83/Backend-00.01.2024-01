Proceso IndicarDia
    Definir  NumeroDia Como Entero
	
    Escribir("Ingrese un número del 1 al 7 para indicar el día de la semana:")
    Leer NumeroDia
	
    Segun NumeroDia Hacer
        1:
            Escribir("Lunes")
        2:
            Escribir("Martes")
        3:
            Escribir("Miércoles")
        4:
            Escribir("Jueves")
        5:
            Escribir("Viernes")
        6:
            Escribir("Sábado")
        7:
            Escribir("Domingo")
        De Otro Modo:
            Escribir("Número ingresado no válido. Ingrese un número del 1 al 7.")
    FinSegun
FinProceso
