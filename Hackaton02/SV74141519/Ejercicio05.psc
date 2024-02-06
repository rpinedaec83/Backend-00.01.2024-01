Proceso Ejercicio05
	
	Escribir "-------------------- BIENVENIDO A ZAPATERIA JACOBO --------------------"
	
	Escribir "Ingrese la cantidad de zapatos a comprar: "
    Leer cantidad
	
    
    precio = 80
    total = cantidad * precio
	
	Si cantidad > 10 y cantidad < 20 Entonces
		descuento = total * 0.1
	SiNo
		Si cantidad > 20 y cantidad < 30 Entonces			
			descuento = total * 0.2
		Sino 
			Si cantidad > 30 Entonces
				descuento = total * 0.4
			FinSi
		FinSi
	FinSi
   
    total = total - descuento
	
   
    Escribir "El precio total sin descuento es: $", total + descuento
    Escribir "Se aplicó un descuento de: $", descuento
    Escribir "El precio final con descuento es: $", total
	
FinProceso
