Proceso Tienda_Zapatos
	Definir precio_final,dcto1, dcto2, dcto3 Como Real
	Definir unid, precio_unid Como Entero
	precio_unid=80
	dcto1=0.9
	dcto2=0.8
	dcto3=0.6
	Escribir "Unidades de venta"
	Leer unid
	Si unid<=10 Entonces
		precio_final=unid*precio_unid
		Escribir "El precio final es ",precio_final
	FinSi
	Si unid>10 y unid<=20 Entonces
		precio_final=unid*precio_unid*dcto1
		Escribir "El precio final es ",precio_final
	FinSi
	Si unid>20 y unid<=30 Entonces
		precio_final=unid*precio_unid*dcto2
		Escribir "El precio final es ",precio_final
	FinSi
	Si unid>30 Entonces
		precio_final=unid*precio_unid*dcto3
		Escribir "El precio final es ",precio_final
	FinSi
	
FinProceso
