//Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	num = 0
	
    Escribir "Ingrese un número del 1 al 7:"
    Leer num
	// Considerando  el estándar ISO 8601 del año 2004 estableció que la semana comienza el lunes y termina el domingo
    Segun num Hacer
        1:
            Escribir "Lunes"
        2:
            Escribir "Martes"
        3:
            Escribir "Miércoles"
        4:
            Escribir "Jueves"
        5:
            Escribir "Viernes"
        6:
            Escribir "Sábado"
        7:
            Escribir "Domingo"
        De Otro Modo:
            Escribir "Número no válido. Debe estar entre 1 y 7."
    Fin Segun
FinProceso
