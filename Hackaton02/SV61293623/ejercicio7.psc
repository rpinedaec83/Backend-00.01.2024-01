Proceso CalcularDescuentoMembresia
    Definir tipo Como Entero
	
    Escribir "¿Qué membresía tiene? 1-TipoA 2-TipoB 3-TipoC"
    Leer tipo
	
    Si tipo = 1 Entonces
        Escribir "Tiene un descuento del 10%"
    Sino
        Si tipo = 2 Entonces
            Escribir "Tiene un descuento del 15%"
        Sino
            Si tipo = 3 Entonces
                Escribir "Tiene un descuento del 20%"
            FinSi
        FinSi
    FinSi
	
FinProceso