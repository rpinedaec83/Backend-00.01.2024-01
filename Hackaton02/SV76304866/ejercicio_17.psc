//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso ejercicio_17
    Definir hora, minuto, segundo Como Entero
	
    Escribir 'Ingresa la hora:'
    Leer hora
    Escribir 'Ingresa el minuto:'
    Leer minuto
    Escribir 'Ingresa el segundo:'
    Leer segundo
	
    Si hora > -1 Y hora < 24 Y minuto > -1 Y minuto < 60 Y segundo > -1 Y segundo < 60 Entonces
        segundo = segundo + 1
		
        Si segundo > 59 Entonces
            segundo = 0
            minuto = minuto + 1
			
            Si minuto >= 60 Entonces
                minuto = 0
                hora = hora + 1
				
                Si hora > 23 Entonces
                    hora = 0
                FinSi
            FinSi
        FinSi
		
        Escribir 'Un segundo después, la hora será:', hora, ':', minuto, ':', segundo
    Sino
        Escribir 'Ingrese una hora, minuto y segundo válidos.'
    FinSi
	
FinProceso
