Proceso tarea5
		Escribir Sin Saltar "Ingresa el valor de numero de zapatos:";
		Leer numero_de_zapatos;
		subtotal <- numero_de_zapatos*80;
		descuento <- 0;
		Si numero_de_zapatos>10 Y numero_de_zapatos<=20 Entonces
			descuento <- subtotal*0.1;
		FinSi
		Si numero_de_zapatos>20 Y numero_de_zapatos<=30 Entonces
			descuento <- subtotal*0.2;
		FinSi
		Si numero_de_zapatos>30 Entonces
			descuento <- subtotal*0.4;
		FinSi
		total <- subtotal-descuento;
		Escribir "Precio total sin descuento: ", subtotal;
		Escribir "Descuento: ", descuento;
		Escribir "total: ", total;
FinProceso
