//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, 
//tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Proceso Ejercicio7
	Definir tipoMembresia Como Caracter
    Definir compra, descuento, compracondescuento Como Real
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
	
    si Mayusculas(tipoMembresia) = "A" Entonces
		Escribir "Su descuento es del 10%"
	SiNo
		si Mayusculas(tipoMembresia) = "B" Entonces
			Escribir "Su descuento es del 15%"
		SiNo
			si Mayusculas(tipoMembresia) = "C" Entonces
				Escribir "Su descuento es del 20%"
			SiNo
				Escribir "Por favor selecciona un tipo de membresia valida"
			FinSi
		FinSi
	FinSi
FinProceso
