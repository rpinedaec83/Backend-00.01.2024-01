Proceso Ejercicio6
	Definir horasTrabajadas, sueldoSemanal Como Real
    Definir tarifaNormal, tarifaExtra Como Real
	
    tarifaNormal <- 20  // Tarifa por hora normal
    tarifaExtra <- 25   // Tarifa por hora extra
	
    Escribir "Ingrese la cantidad de horas trabajadas en la semana: "
    Leer horasTrabajadas
	
    Si horasTrabajadas <= 40 Entonces
        sueldoSemanal <- horasTrabajadas * tarifaNormal
    Sino
        sueldoSemanal <- 40 * tarifaNormal + (horasTrabajadas - 40) * tarifaExtra
    FinSi
	
    Escribir "El sueldo semanal es: $", sueldoSemanal
FinProceso
