Proceso CalcularMedia
    Definir sum, prom, numero Como Entero
    
    sum = 0
    prom = 0
    
    Mientras Verdadero
        Escribir "Ingrese numero:"
        Leer numero
        
        Si numero < 0 Entonces
			Escribir "La suma es ", sum, " y su media es ", sum / prom	
			numero=numero+1
			prom = prom -1
        Fin Si
        
        sum = sum + numero
        prom = prom + 1
    Fin Mientras
    
    
Fin Proceso