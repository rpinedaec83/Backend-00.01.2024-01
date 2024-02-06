//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento 
//por compra a sus clientes con membresía dependiendo de su tipo, sólo existen 
//tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

Proceso ejercicio_07
	// Variables
    Definir tipoMembresia Como Caracter
    Definir totalCompra, descuento, totalConDescuento Como Real
	
    // Entrada de datos
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
	
    Escribir "Ingrese el total de la compra:"
    Leer totalCompra
	
    // Calcular descuento según el tipo de membresía
    Segun tipoMembresia Hacer
			Caso "A":
            descuento <- totalCompra * 0.1  // Descuento del 10% para tipo A
			Caso "B":
            descuento <- totalCompra * 0.15  // Descuento del 15% para tipo B
			Caso "C":
            descuento <- totalCompra * 0.2  // Descuento del 20% para tipo C
			OtroCaso:
            descuento <- 0  // Sin descuento para tipos no especificados
    FinSegun
	
    // Calcular total con descuento
    totalConDescuento <- totalCompra - descuento
	
    // Mostrar resultados
    Escribir "Tipo de membresía:", tipoMembresia
    Escribir "Total de la compra:", totalCompra
    Escribir "Descuento aplicado:", descuento
    Escribir "Total con descuento:", totalConDescuento
	
FinProceso
