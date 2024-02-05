Proceso CalcularAumentoSueldo
    Definir sueldo Como Real
	
    Escribir "¿Cuánto gana el trabajador?"
    Leer sueldo
	
    Si sueldo > 2000 Entonces
        Escribir "Su aumento es del 5% :", (sueldo + (sueldo * 0.05))
    Sino
        Escribir "Su aumento es del 10% :", (sueldo + (sueldo * 0.1))
    FinSi
	
FinProceso