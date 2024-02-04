//17.	Hacer un algoritmo en Pseint donde se ingresa una hora y nos calcula la hora dentro de un segundo.
Proceso ejercicio_17
	// Variables
    Definir hora, minutos, segundos Como Entero
	
    // Entrada de datos
    Escribir "Ingrese la hora (formato de 24 horas):"
    Leer hora
	
    Escribir "Ingrese los minutos:"
    Leer minutos
	
    Escribir "Ingrese los segundos:"
    Leer segundos
	
    // Verificar que la hora, minutos y segundos están dentro de los rangos válidos
    Si hora >= 0 Y hora <= 23 Y minutos >= 0 Y minutos <= 59 Y segundos >= 0 Y segundos <= 59 Entonces
        // Calcular la hora dentro de un segundo
        segundos <- segundos + 1
		
        // Ajustar los minutos y segundos si es necesario
        Si segundos = 60 Entonces
            segundos <- 0
            minutos <- minutos + 1
			
            // Ajustar la hora si es necesario
            Si minutos = 60 Entonces
                minutos <- 0
                hora <- hora + 1
				
                // Ajustar la hora a medianoche si es necesario
                Si hora = 24 Entonces
                    hora <- 0
                FinSi
            FinSi
        FinSi
		
        // Mostrar la nueva hora
        Escribir "La hora después de un segundo es:", hora, ":", minutos, ":", segundos
    Sino
        Escribir "Hora, minutos o segundos ingresados no válidos."
    FinSi
FinProceso
