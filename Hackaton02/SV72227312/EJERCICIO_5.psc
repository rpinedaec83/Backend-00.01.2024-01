Proceso EJERCICIO_5
	Definir respuesta Como Caracter
	Definir cantidad, descuento, preciofinal Como Real

	Repetir
		Repetir // Validación de cantidad no negativa
			Escribir "Ingrese la cantidad de zapatos a comprar: "
			Leer cantidad
			Si Trunc(cantidad) <> cantidad Entonces
				Escribir "Ingrese un número entero, inténtelo de nuevo."
			Sino	
				Si cantidad < 0 Entonces
					Escribir "Error. La cantidad no puede ser negativa. Intente nuevamente."
				FinSi
			FinSi
		Hasta Que cantidad >= 0 Y Trunc(cantidad) = cantidad
		
		Si cantidad >= 0 y cantidad <= 10	
			descuento = 0
		SiNo
			Si cantidad > 10 y cantidad <= 20 Entonces
				descuento = 0.1
			SiNo
				Si cantidad > 20 y cantidad <= 30 Entonces
					descuento = 0.2
				SiNo
					descuento = 0.4
				FinSi
			FinSi
		FinSi
		
		preciofinal = 80*cantidad - descuento*80*cantidad
		Escribir "El precio final es: ", preciofinal
		Escribir "Se aplico un descuento del: ",descuento*100,"%"
		//Validación de respuesta ingresada
		Repetir
			Escribir "¿Desea repetir el proceso? (si / no): "
			Leer respuesta
			respuesta <- Minusculas(respuesta)
			Si respuesta <> "si" Y respuesta <> "no" Entonces
                Escribir "Respuesta no válida. Solo se admiten si o no."
            FinSi
		Hasta Que respuesta = "si" O respuesta = "no"
	Hasta Que respuesta = "no"
FinProceso
