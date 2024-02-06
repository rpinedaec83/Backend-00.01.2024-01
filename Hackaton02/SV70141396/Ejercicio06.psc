//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso ejercicio_06
	Definir sueldosemanal, horas Como Entero
	Escribir " Digite la cantidad de horas laboradas "
	Leer horas

	
	Si horas <= 40 Entonces
		sueldosemanal = horas * 20
		
	SiNo
		sueldosemanal = (800 + (horas - 40) * 25)
			
	FinSi
	
	Escribir "Su sueldo semanal es : " sueldosemanal "$"
	
FinProceso
