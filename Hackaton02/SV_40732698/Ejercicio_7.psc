Proceso Tienda_Helado
	Definir precio_final,dctoA, dctoB, dctoC Como Real
	Definir unid, precio_unid Como Entero
	Definir membresia Como Caracter
	precio_unid=5
	dctoA=0.9
	dctoB=0.85
	dctoC=0.8
	membresia="Ninguna"
	Escribir "Cuantos helados quiere:"
	Leer unid
	Escribir "Que membresia posee (A,B,C o Ninguna):"
	Leer membresia
	Si membresia="Ninguna" Entonces
		precio_final=unid*precio_unid
		Escribir "El precio final de su pedido es ",precio_final
	FinSi
	Si membresia="A" Entonces
		precio_final=unid*precio_unid*dctoA
		Escribir "El precio final de su pedido es ",precio_final
	FinSi
	Si membresia="B" Entonces
		precio_final=unid*precio_unid*dctoB
		Escribir "El precio final de su pedido es ",precio_final
	FinSi
	Si membresia="C" Entonces
		precio_final=unid*precio_unid*dctoC
		Escribir "El precio final de su pedido es ",precio_final
	FinSi
	
FinProceso
