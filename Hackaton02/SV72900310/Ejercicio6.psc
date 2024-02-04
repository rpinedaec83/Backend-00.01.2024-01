//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.


Proceso Ejercicio6
	definir pago Como Entero
	definir jornada Como Entero
	pago = 20
	
	Escribir "Cuantas horas trabajo esta semana?"
	leer jornada
		
	si jornada <= 40 Entonces
		Escribir "Su sueldo de esta semana fue de " jornada * pago
	SiNo
		pago=25
		Escribir "Su sueldo de esta semana fue de " 800 + (jornada - 40)* pago
	FinSi
	
FinProceso
