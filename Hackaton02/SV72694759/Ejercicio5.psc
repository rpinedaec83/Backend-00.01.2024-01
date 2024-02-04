Proceso Ejercicio5
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidadZapatos
	
       precioZapato = 80.0
	
       totalCompra = cantidadZapatos * precioZapato
	
       Si cantidadZapatos > 30 Entonces
        descuentoPorcentaje = 0.4
    Sino
        Si cantidadZapatos > 20 Entonces
            descuentoPorcentaje = 0.2
        Sino
            Si cantidadZapatos > 10 Entonces
                descuentoPorcentaje = 0.1
            Sino
                descuentoPorcentaje = 0
            Fin Si
        Fin Si
    Fin Si
	
        totalConDescuento = totalCompra - (totalCompra * descuentoPorcentaje)
	
       Escribir "Cantidad de zapatos:", cantidadZapatos
    Escribir "Precio por zapato: $", precioZapato
    Escribir "Total de compra sin descuento: $", totalCompra
    Escribir "Descuento aplicado:", descuentoPorcentaje * 100, "%"
    Escribir "Total de compra con descuento: $", totalConDescuento

	
FinProceso
