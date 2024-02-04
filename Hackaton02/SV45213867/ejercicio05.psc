//5.	Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//      esto dependerá del número de zapatos que se comprenda. Si son más de diez, se les dará un 10% de descuento sobre el 
//      total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//      y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso pregunta_05
	// Constante que representa el precio de cada zapato
	PrecioPorZapato <- 80
	
	// Declaraciones de Variables
	
	Definir cantidadZapatos Como Entero
	Definir totalCompras, descuento, totalConDescuento Como Real
	
	// Entrada de datos
    Escribir "Ingrese la cantidad de zapatos que va a comprar:"
    Leer cantidadZapatos
	
	// Calcular el total de la compra sin descuento
	
	totalCompras <- cantidadZapatos * PrecioPorZapato  
	
	// Aplicar descuento según la cantidad de zapatos
	Si cantidadZapatos > 30 Entonces
        descuento <- 0.4  // 40% de descuento
		
	Sino
		Si cantidadZapatos > 20 Entonces
			descuento <- 0.2  // 20% de descuento
			
		Sino
			Si cantidadZapatos > 10 Entonces
				descuento <- 0.1  // 20% de descuento
				
			Sino
				descuento <- 0  // 20% de descuento
			FinSi
		FinSi
	FinSi
	// Calcular el total con descuento
    totalConDescuento <- totalCompras - (totalCompras * descuento)
	
    // Mostrar resultados
    Escribir "Cantidad de zapatos:", cantidadZapatos
    Escribir "Precio por zapato:", PrecioPorZapato
    Escribir "Total de la compra sin descuento:", totalCompras
    Escribir "Descuento aplicado:", descuento * 100, "%"
    Escribir "Total con descuento:", totalConDescuento

FinProceso
