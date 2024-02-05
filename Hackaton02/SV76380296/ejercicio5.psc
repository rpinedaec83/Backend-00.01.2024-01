Proceso ejercicio5
	
	Definir cantidad Como Entero;
	Definir preciofinal Como Real;
	preciozapato = 80;
	descuento = 0;
	
	Escribir "Ingrese el numero de zapatos comprados.";
	Escribir "Recibira un descuento por las siguentes cantidades:";
	Escribir "11-20: 10%";
	Escribir "21-30: 20%";
	Escribir "30+: 40%";
	Leer cantidad;
	
	Si cantidad < 10 Entonces
		preciofinal = preciozapato*cantidad;
	SiNo
		Si cantidad > 10 y cantidad < 21 Entonces
			preciofinal = (preciozapato*(1-0.10))*cantidad;
			descuento = 10;
		SiNo 
			Si cantidad > 20 y cantidad < 31 Entonces
				preciofinal = (preciozapato*(1-0.20))*cantidad;
				descuento = 20;
			SiNo
				preciofinal = (preciozapato*(1-0.40))*cantidad;
				descuento = 40;
			FinSi
		FinSi
	FinSi
	
	Escribir "El precio final es de " preciofinal ", con un " descuento "% de descuento.";
	
FinProceso

//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento 
//para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, 
//se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor 
//de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos 
//se otorgará un 40% de descuento. El precio de cada zapato es de $80.