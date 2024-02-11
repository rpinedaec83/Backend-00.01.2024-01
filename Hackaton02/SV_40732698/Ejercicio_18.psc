Proceso CD_virgenes
	Definir pedido_cds Como Entero
    Definir precio_total, ganancia_vendedor Como Real
	
    rango1 = 10
    rango2 = 8
    rango3 = 7
    rango4 = 6
	porcent_vend = 0.0825
	
	    	
    Escribir "Pedido de CDs: "
    Leer pedido_cds
	
    
    Si pedido_cds >= 1 Y pedido_cds <= 9 Entonces
        precio_total = pedido_cds * rango1
    Sino
        Si pedido_cds >= 10 Y pedido_cds <= 99 Entonces
            precio_total = pedido_cds * rango2
        Sino
            Si pedido_cds >= 100 Y pedido_cds <= 499 Entonces
                precio_total = pedido_cds * rango3
            Sino
                Si pedido_cds >= 500 Entonces
                    precio_total =pedido_cds * rango4
                FinSi
            FinSi
        FinSi
    FinSi
	
	
    ganancia_vendedor = precio_total * porcent_vend
	
	
    Escribir "Precio total: $", precio_total
    Escribir "Comisión: $", ganancia_vendedor

FinProceso
