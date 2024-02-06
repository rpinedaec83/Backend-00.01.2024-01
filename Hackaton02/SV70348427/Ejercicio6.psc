Algoritmo CalculoSueldo
    Definir horasTrabajadas, sueldoPorHora, sueldoSemanal Como Real
	
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horasTrabajadas
	
    Si horasTrabajadas <= 40 Entonces
        sueldoPorHora = 20
    Sino
        sueldoPorHora = 25
    FinSi
	
    sueldoSemanal = horasTrabajadas * sueldoPorHora
	
    Escribir "Horas trabajadas: ", horasTrabajadas
    Escribir "Sueldo por hora: $", sueldoPorHora
    Escribir "Sueldo semanal: $", sueldoSemanal
	
FinAlgoritmo
