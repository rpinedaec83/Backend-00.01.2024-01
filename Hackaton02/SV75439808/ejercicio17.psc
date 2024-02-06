Proceso Ejercicio_17
    Definir h, m, s Como Entero
	Escribir "Ingrese la hora en formato (24h)"
    Leer h
	Escribir "Ingrese los minutos: "
    Leer m
	Escribir "Ingrese los segundos: "
    Leer s
	s <- s + 1
    Si s = 60 Entonces
        s <- 0
        m <- m + 1
        Si m = 60 Entonces
            m <- 0
            h <- h + 1
            Si h = 24 Entonces
                h <- 0
            Fin Si
        Fin Si
    Fin Si
    Escribir "La hora después de un segundo es: ",h," : ",m, " : ",s
	
FinProceso
