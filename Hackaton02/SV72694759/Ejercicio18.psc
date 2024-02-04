Proceso Ejercicio18
	Precio1 = 10
    Precio2 = 8
    Precio3 = 7
    Precio4 = 6
    GananciaPorcentaje = 8.25 / 100.0
	    
    Definir cantidadCDs Como Entero
    Definir precioTotal, gananciaVendedor Como Real
	
  
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidadCDs
	
    
		
			Si 1 <=  cantidadCDs Y cantidadCDs<=9
				precioTotal = cantidadCDs * Precio1
			Fin Si 
			Si 10 <=  cantidadCDs Y cantidadCDs<=99
				precioTotal = cantidadCDs * Precio2
			Fin Si 
			Si 100 <=  cantidadCDs Y cantidadCDs<=499
				precioTotal = cantidadCDs * Precio3
			Fin Si 
			Si 500 <=  cantidadCDs 
				precioTotal = cantidadCDs * Precio4
			Fin Si 
           
   
	      gananciaVendedor = precioTotal * GananciaPorcentaje
	
    Escribir "Precio total para el cliente: $", precioTotal
    Escribir "Ganancia para el vendedor: $", gananciaVendedor

FinProceso
