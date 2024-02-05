Algoritmo TiendaZapatos
    Definir cantidad, precio, total, descuento Como Real
	
    Escribir "¿Cuantos zapatos desea comprar?"
    Leer cantidad
	
    Si cantidad > 30 Entonces
        descuento = 0.4
    Sino
        Si cantidad > 20 Entonces
            descuento = 0.2
        Sino
            Si cantidad > 10 Entonces
                descuento = 0.1
            FinSi
        FinSi
    FinSi
	
    precio = 80
    total = cantidad * precio
    totalConDescuento = total - (total * descuento)
	
	Escribir "Cantidad de zapatos comprados: ", cantidad
	Escribir "Descuento aplicado: ", descuento * 100, "%"
    Escribir "Precio unitario: $ ", precio
    Escribir "Total a pagar (sin descuento): $ ", total
    Escribir "Total a pagar (con descuento): $ ", totalConDescuento
	
FinAlgoritmo