Proceso CalcularNuevaHora
    Definir horas, minutos, segundos Como Entero
    
    Escribir "Escriba la hora:"
    Leer horas
    
    Escribir "Escriba los minutos:"
    Leer minutos
    
    Escribir "Escriba los segundos:"
    Leer segundos
    
    segundos = segundos + 1
    
    Si segundos = 60 Entonces
        segundos = 0
        minutos = minutos + 1
        
        Si minutos = 60 Entonces
            minutos = 0
            horas = horas + 1
            
            Si horas = 24 Entonces
                horas = 0
            Fin Si
        Fin Si
    Fin Si
    
    Escribir "La nueva hora es ", horas, ":", minutos, ":", segundos
Fin Proceso