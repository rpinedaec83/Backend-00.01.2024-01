Proceso ejercicio15
	
	numero1 = 0;
	numero2 = 0;
	resultado = 0;
	
	Escribir "Eliga la opcion a convertir:";
	Escribir "1 para CENTRIMETROS a PULGADAS";
	Escribir "2 para PULGADAS a CENTIMETROS";
	Escribir "3 para LIBRAS a KILOGRAMOS";
	Escribir "4 para KILOGRAMOS a LIBRAS";
	
	Leer numero1
	
	Segun numero1
		1:
			Escribir "Ingrese los CENTIMETROS a convertir";
			Leer numero2;
			resultado = numero2/2.54;
			Escribir numero2 "cm -> " resultado "in.";
		2:
			Escribir "Ingrese las PULGADAS a convertir";
			Leer numero2;
			resultado = numero2*2.54;
			Escribir numero2 "in -> " resultado "cm.";
		3:
			Escribir "Ingrese las LIBRAS a convertir";
			Leer numero2;
			resultado = numero2/2.20462;
			Escribir numero2 "lb -> " resultado "kg.";
		4:
			Escribir "Ingrese los KILOGRAMOS a convertir";
			Leer numero2;
			resultado = numero2*2.20462;
			Escribir numero2 "kg -> " resultado "lb.";
		De Otro Modo:
			Escribir "Eliga una opcion valida!";
	FinSegun
	
FinProceso

//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.