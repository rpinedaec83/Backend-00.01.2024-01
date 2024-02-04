Proceso Ejercicio7
	Definir tipoMembresia Como Caracter
    Definir montoCompra, descuento, totalConDescuento Como Real
	
    Escribir "Ingrese el tipo de membresía (A, B o C): "
    Leer tipoMembresia
    Escribir "Ingrese el monto total de la compra: "
    Leer montoCompra
	
    Segun tipoMembresia Hacer
			Caso "A":
            descuento <- 0.10
			Caso "B":
            descuento <- 0.15
			Caso "C":
            descuento <- 0.20
			Otro:
            descuento <- 0
    FinSegun
	
    totalConDescuento <- montoCompra - (montoCompra * descuento)
	
    Escribir "Tipo de membresía: ", tipoMembresia
    Escribir "Monto de la compra: $", montoCompra
    Escribir "Descuento aplicado: ", descuento * 100, "%"
    Escribir "Total con descuento: $", totalConDescuento
FinProceso
