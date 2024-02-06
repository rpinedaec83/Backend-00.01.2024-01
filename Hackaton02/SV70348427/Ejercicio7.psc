Algoritmo CalcularDescuento
    Definir tipoMembresia Como Caracter
    Definir montoCompra, descuento, montoTotal Como Real
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
	
    Escribir "Ingrese el monto total de la compra:"
    Leer montoCompra
	
    Si tipoMembresia = "A" Entonces
        descuento = 0.10 * montoCompra
    Sino
        Si tipoMembresia = "B" Entonces
            descuento = 0.15 * montoCompra
        Sino
            Si tipoMembresia = "C" Entonces
                descuento = 0.20 * montoCompra
            Sino
                Escribir "Tipo de membresía no válido."
            FinSi
        FinSi
    FinSi
	
    montoTotal = montoCompra - descuento
	
    Escribir "Monto de compra: $", montoCompra
    Escribir "Descuento aplicado: $", descuento
    Escribir "Monto total a pagar: $", montoTotal
	
FinAlgoritmo
