//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
// Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
// y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.


Proceso Ejercicio5
	definir precio Como Entero
	definir cantidad Como Entero
	precio = 80
	
	escribir "Cuantos zapatos va a comprar"
	leer cantidad
	
	si cantidad > 10 y cantidad <= 20 Entonces
		Escribir "Para " cantidad " zapatos, el precio final es de $" precio*cantidad*.9
	SiNo
		si cantidad > 20 y cantidad <= 30 Entonces
			Escribir "Para " cantidad " zapatos, el precio final es de $" precio*cantidad*.8
		SiNo
			si cantidad > 30 Entonces
			Escribir "Para " cantidad " zapatos, el precio final es de $" precio*cantidad*.6
			SiNo
			Escribir "Para " cantidad " zapatos, el precio final es de $" precio*cantidad 
			FinSi
		FinSi
	FinSi

	
FinProceso
