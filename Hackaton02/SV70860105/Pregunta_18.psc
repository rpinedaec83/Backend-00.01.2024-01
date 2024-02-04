Proceso Pregunta_18
	definir cantidad Como Entero
	definir costo como real
	definir ganancia como real
	escribir "Ingrese cantidad de discos que llevara : "
	leer cantidad
	Si cantidad <= 9 Entonces
		costo = cantidad * 10
	SiNo
		Si cantidad >= 10 y cantidad < 100 Entonces
			costo = cantidad * 8
		SiNo
			Si cantidad >= 100 y cantidad < 500 Entonces
				costo = cantidad * 7
			SiNo
				costo = cantidad * 6
			Fin Si
		Fin Si
	Fin Si
	
	ganancia = costo * 8.25/100
	escribir "El cliente debera pagar : $" costo
	escribir "El vendedor tendra una ganancia de : $" ganancia
FinProceso
