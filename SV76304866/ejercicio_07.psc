//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con
//membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
Proceso ejercicio_07

    Definir tipoMembresia Como Caracter
    Definir totalCompra, descuento, totalConDescuento Como Real
	
    Escribir 'Bienvenido a la Tienda de Helado'
    Escribir 'Ingrese su tipo de membresía (A, B o C):'
    Leer tipoMembresia
    Escribir 'Ingrese el monto total de la compra:'
    Leer totalCompra
	
   
    Segun tipoMembresia Hacer
        'A':
            descuento = 0.10  
        'B':
            descuento = 0.15  
        'C':
            descuento = 0.20  
        Otro:
            descuento = 0  
    FinSegun
	
    totalConDescuento = totalCompra - (totalCompra * descuento)
	
    Escribir 'Tipo de membresía:', tipoMembresia
    Escribir 'Monto total de la compra: S/.', totalCompra
    Escribir 'Descuento aplicado: ', descuento * 100, '%'
    Escribir 'Total con descuento: $', totalConDescuento
	
FinProceso
