Proceso Ejercicio_5
	Definir num, amt Como Entero
	par <- 80
	Escribir "Ingrese el número de pares de zapatos a adquirir"
	Leer num
	amt = par * num
	Si num > 10 y num < 20 Entonces
		desc = amt * 0.1
		Escribir "Tienes un descuento del 10%."
	SiNo
		Si num > 20 y num < 30 Entonces
			desc = amt * 0.2
			Escribir "Tienes un descuento del 20%."
		SiNo
			Si num > 30 Entonces
				desc = amt * 0.4
				Escribir "Tienes un descuento del 40%."
			FinSi
		FinSi
	FinSi
	tot <- amt - desc
	Escribir "Valor compra: $",amt,"."
	Escribir "Descuento: $",desc,"."
	Escribir "Total: $",tot,"."
	
FinProceso
