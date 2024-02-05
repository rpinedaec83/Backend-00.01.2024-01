Algoritmo ejercicio6
    Definir horasTrabajadas Como Real
    Definir sueldoSemanal Como Real
    
   Definir tarifaNormal, tarifaExtra Como Real
    tarifaNormal <- 20.0
    tarifaExtra <- 25.0
    
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horasTrabajadas
    
    Si horasTrabajadas <= 40 Entonces
        sueldoSemanal <- horasTrabajadas * tarifaNormal
    Sino
        sueldoSemanal <- (40 * tarifaNormal) + ((horasTrabajadas - 40) * tarifaExtra)
    FinSi
    
    Escribir "Sueldo semanal: $", sueldoSemanal
    
FinAlgoritmo