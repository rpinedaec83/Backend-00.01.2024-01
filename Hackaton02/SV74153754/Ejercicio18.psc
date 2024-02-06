Proceso Ejercicio18
	Definir cantidadCDS, ganancia, precioCD, Costototal Como Real
	Escribir "Ingrese la cantidad de CDs"
	Leer cantidadCDS
	
	
	
	Si cantidadCDS >= 1 y cantidadCDS <= 9 Entonces
		precioCD= 10
	SiNo
		Si cantidadCDS >= 10 y cantidadCDS <= 99 Entonces
			precioCD= 8
		SiNo
			Si cantidadCDS >= 100 y cantidadCDS <= 499 Entonces
				precioCD= 7
			SiNo
				Si cantidadCDS >= 500 Entonces
					precioCD= 6
				FinSi
				
			FinSi
		FinSi
	FinSi
	
	ganancia= precioCD*cantidadCDS - precioCD*cantidadCDS*0.825
	
	Costototal= precioCD*cantidadCDS
	
	Escribir "Importe a pagar:" Costototal
	Escribir "Comisión del vendedor:" ganancia
FinProceso
