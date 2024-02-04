Proceso Pregunta_05
	definir cantidad Como Real
	definir costo Como Real
	definir precio Como Real
	precio = 80
	escribir "Ingrese cantidad de zapatos a comprar : "
	leer cantidad
	costo = precio * cantidad
	
	si cantidad > 10 Entonces
		Si cantidad > 10 y cantidad <= 20 Entonces
			costo = costo - 0.1 * costo
		SiNo
			Si cantidad > 20 y cantidad <= 30 Entonces
				costo = costo - 0.2 * costo
			SiNo
				costo = costo - 0.4 * costo
			Fin Si
		Fin Si
	FinSi
	
	escribir cantidad " zapatos costaria un total de : $: " costo
	
	
	
FinProceso
