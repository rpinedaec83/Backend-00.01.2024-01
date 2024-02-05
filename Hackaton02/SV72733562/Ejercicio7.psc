Proceso Ejercicio7
	
	Definir descuento, cantidadhelados, preciohelados Como Real
	Definir tipodescuento Como Caracter
	
	
	Escribir "Los helados cuestan 20 soles"
	Escribir " "
	Escribir "Cuantos helados desea"
	Leer cantidadhelados
	
	Escribir "Elija el tipo de descuento: A | B | C "
	Leer tipodescuento
	
	preciohelados= cantidadhelados*20;
	
	Si tipodescuento = "A" Entonces
		
		descuento= 0.1*preciohelados
		preciohelados = preciohelados-descuento
		Escribir  "Gracias a su descuento, los helados cuestan: " preciohelados
		
	FinSi
	
	Si tipodescuento = "B" Entonces
		
		descuento= 0.15*preciohelados
		preciohelados = preciohelados-descuento
		Escribir  "Gracias a su descuento, los helados cuestan: " preciohelados
		
	FinSi
	
	Si tipodescuento = "C" Entonces
		
		descuento= 0.2*preciohelados
		preciohelados = preciohelados-descuento
		Escribir  "Gracias a su descuento, los helados cuestan: " preciohelados
		
	FinSi
	
	
	
	
	
FinProceso
