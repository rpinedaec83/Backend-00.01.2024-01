Algoritmo sin_titulo
	TipoM = ""
	Precio=0
	total=0
	Escribir "Ingrese el tipo de mebresia"
	leer TipoM
	Escribir "Ingrese el precio"
	leer Precio
	
	si TipoM =  "A" o TipoM =  "a" Entonces
		total =precio	-(precio*0.1) 	
		Escribir "El tipo de mebresia es " TipoM " tiene el 10% de descuento el importe Total es : " total 
	SiNo
		si TipoM =  "B" o TipoM =  "b"  Entonces
			total =precio	-(precio*0.15) 	
			Escribir "El tipo de mebresia es " TipoM " tiene el 15% de descuento el importe Total es : " total 
			
        SiNo
			si TipoM =  "C" o TipoM =  "c"  Entonces
				total =precio - (precio*0.2) 	
				Escribir "El tipo de mebresia es " TipoM " tiene el 20% de descuento el importe Total es : " total 
			FinSi
		FinSi
		finsi