Proceso Ejercicio5
	
	Definir cantidad Como Entero
	Definir total Como Real
	Definir precio Como Real
	Definir descuento Como Real
	precio = 80
	Escribir "Ingrese cantidad de zapatos"
	Leer cantidad;
    
	Si cantidad > 10 y cantidad < 20
		Entonces total = cantidad*80 - (cantidad*80*0.10)
		descuento = 10
		
	SiNo
		si cantidad > 20 y cantidad < 30
			Entonces total = cantidad*80 - (cantidad*80*0.20)
			descuento = 20
		SiNo
			si cantidad > 40 
				Entonces total = cantidad*80 - (cantidad*80*0.40)
			SiNo
				total = cantidad*80
			FinSi
		FinSi		
			
	FinSi
	
	
  Escribir "precio:" cantidad *80
  Escribir "descuento %" descuento
  Escribir "total:" total
	
FinProceso
