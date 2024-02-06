//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//	pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso Ejercicio6
	hrasTra = 0
	hrCuar = 20
	hrEx    = 25
	pagoFinal = 0
	Escribir  "Ingresar numero de horas de trabajo"
	Leer  hrasTra
	Si hrasTra > 40 Entonces
		temp = hrasTra - 40
		pagoFinal = (hrasTra *  hrCuar) + ( temp * hrEx)
	SiNo
		
		pagoFinal = hrasTra *  hrCuar
		
	FinSi
	Escribir  "Su sueldo semana sera de : ",pagoFinal,"$"
FinProceso
