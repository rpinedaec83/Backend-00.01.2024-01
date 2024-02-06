// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
// sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento

Proceso ejercicio_07
	Definir Tipodemembresia Como Caracter
	Escribir " ¿ Que tipo de membresia tiene A, B o C ? "
	Leer Tipodemembresia
	
	Segun Tipodemembresia hacer
		'A' :
			Escribir " Tiene 10% de descuento "
		'B' :
			Escribir " Tiene 15% de descuento "
		'C' :
			Escribir " Tiene 20% de descuento "
		De Otro Modo:
			Escribir " No tiene descuento "
	FinSegun
	
FinProceso
