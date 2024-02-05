Proceso  ejercicio7
    Definir totalCompra, descuento, totalConDescuento Como Real
	definir tipoMembresia Como Caracter
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
	
    Si tipoMembresia == 'A' o tipoMembresia == 'B' o tipoMembresia == 'C' Entonces
        Segun tipoMembresia Hacer
            "A":
                descuento = 0.1  
            "B":
                descuento = 0.15  
            "C":
                descuento = 0.2  
        FinSegun
		Escribir "Ingrese el total de la compra:"
		Leer totalCompra
        totalConDescuento = totalCompra - (totalCompra * descuento)
		
        Escribir "Total de la compra: $", totalCompra
        Escribir "Descuento aplicado: ", descuento * 100, "%"
        Escribir "Total con descuento: $", totalConDescuento
    Sino
        Escribir "Tipo de membresía no válido."
    FinSi
FinProceso


