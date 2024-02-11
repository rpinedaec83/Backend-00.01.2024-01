Algoritmo ejercicio5
    Definir cantidadZapatos, precioUnitario, totalCompra, descuento, totalConDescuento Como Real
    Escribir "Ingrese la cantidad de zapatos comprados:"
    Leer cantidadZapatos
    precioUnitario = 80
    totalCompra = cantidadZapatos * precioUnitario
	
    Si cantidadZapatos > 30 Entonces
        descuento = 0.4  
    Sino
        Si cantidadZapatos > 20 Entonces
            descuento = 0.2  
        Sino
            Si cantidadZapatos > 10 Entonces
                descuento = 0.1 
            Sino
                descuento = 0  
            FinSi
        FinSi
    FinSi
	
    totalConDescuento = totalCompra - (totalCompra * descuento)
	
    Escribir"Total de la compra: $", totalCompra
    Escribir"Descuento aplicado: ", descuento * 100, "%"
    Escribir"Total con descuento: $", totalConDescuento
	
FinAlgoritmo
