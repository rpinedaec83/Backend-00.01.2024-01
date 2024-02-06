Proceso Ejercicio7
	Definir precio, total, Descuento Como Reales
	Definir membresia Como Caracter
	Escribir "Precio del producto"
	Leer precio
	Escribir  "Tipo de Cliente"
	Leer membresia
	
	Si  membresia = "A" Entonces
		total <- precio - (precio*0.1)
		Descuento = 10 
	SiNo
		Si membresia = "B" Entonces
			total <- precio - (precio*0.15)
			Descuento = 15
		SiNo
			Si membresia = "C"  Entonces
				total <- precio - (precio*0.2)
				Descuento = 20
			FinSi
		FinSi
	FinSi
	
	Escribir "Precio del producto:" total
	Escribir "Categoría:" membresia
	Escribir "Descuento:" Descuento
FinProceso


