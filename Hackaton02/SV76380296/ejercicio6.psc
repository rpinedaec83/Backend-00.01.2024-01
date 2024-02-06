Proceso ejercicio6
	
	Definir horas Como Entero;
	Definir salariofinal Como Real;
	salario = 20;
	
	Escribir "Ingrese el numero de horas a trabajar esta semana.";
	Escribir "Se le pagara 20$ por hora.";
	Escribir "Si trabaja mas de 40 horas, recibe 25$ por hora extra.";
	Leer horas;
	
	Si horas <= 40 Entonces
		salariofinal = horas*20;
	SiNo
		salariofinal = horas*20+(horas-40)*5;
		Si horas = 41
			Escribir "Usted va a trabajar " horas-40 " hora extra!";
		SiNo
			Escribir "Usted va a trabajar " horas-40 " horas extra!";
		FinSi
	FinSi
	
	Escribir "Su salario final esta semana sera de " salariofinal ".";
FinProceso

//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
//entonces las horas extras se le pagarán a $25 por hora.