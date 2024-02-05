Algoritmo TiendaDeZapatos

    Definir cantidadZapatos Como Entero
    Definir precioZapato Como Real
    Definir totalCompra, descuento, totalConDescuento Como Real
	
    precioZapato <- 80.0
    
    Escribir"Ingrese la cantidad de zapatos que desea comprar:"
    Leer cantidadZapatos
    
    totalCompra <- cantidadZapatos * precioZapato
    
    Si cantidadZapatos > 30 Entonces
        descuento <- 0.4 
    Sino
        Si cantidadZapatos > 20 Entonces
            descuento <- 0.2 
        Sino
            Si cantidadZapatos > 10 Entonces
                descuento <- 0.1 
            Sino
                descuento <- 0 
            FinSi
        FinSi
    FinSi
    
    totalConDescuento <- totalCompra - (totalCompra * descuento)
    
    Escribir "Cantidad de zapatos: ", cantidadZapatos
    Escribir "Precio por zapato: $", precioZapato
    Escribir "Total de compra sin descuento: $", totalCompra
    Escribir "Descuento aplicado: ", descuento * 100, "%"
    Escribir "Total con descuento: $", totalConDescuento
    
FinAlgoritmo