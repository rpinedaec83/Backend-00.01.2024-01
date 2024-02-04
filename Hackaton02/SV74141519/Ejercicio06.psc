Proceso Ejercicio06
	
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE PAGOS --------------------"
	
	Escribir "Ingrese el número de horas trabajadas en la semana: " 
	
    Leer horasTraba 
	
    
    Si horasTraba <= 40 Entonces
        sueldo = horasTraba * 20
    Sino
        
        horasNorm = 40
        horasExt = horasTraba - horasNorm
		pagoExt = (horasExt * 25)
        pagoNorm = (horasNorm *20)
        sueldo = pagoNorm + pagoExt
		
    FinSi
	
    Escribir "Usted trabajo en total: " horasTraba
	Escribir "Su sueldo normal es de $: " pagoNorm
	Escribir "Usted recibira el monto de $ " pagoExt " por las horas extras laboradas"
    Escribir "Su sueldo semanal es: $" sueldo 
	

FinProceso
