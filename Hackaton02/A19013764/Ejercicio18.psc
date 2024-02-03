Proceso Ejercicio18
		Definir cantidadCDs, precioUnitario, precioTotalCliente, gananciaVendedor Como Real
		
		Escribir "Ingrese la cantidad de CDs a vender: "
		Leer cantidadCDs
		

		Si cantidadCDs >= 1 Y cantidadCDs <= 9 Entonces
			precioUnitario <- 10
		FinSi
		
		Si cantidadCDs >= 10 Y cantidadCDs <= 99 Entonces
			precioUnitario <- 8
		FinSi
		
		Si cantidadCDs >= 100 Y cantidadCDs <= 499 Entonces
			precioUnitario <- 7
		FinSi
		
		Si cantidadCDs >= 500 Entonces
			precioUnitario <- 6
		FinSi
		
	
		precioTotalCliente <- cantidadCDs * precioUnitario
		
	
		gananciaVendedor <- precioTotalCliente * 8.25 / 100
		
	
		Escribir "Precio total para el cliente: $", precioTotalCliente
		Escribir "Ganancia para el vendedor: $", gananciaVendedor


FinProceso
