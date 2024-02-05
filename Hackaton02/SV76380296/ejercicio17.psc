Proceso ejercicio17
	
	Definir hora,min,sec,hora2,min2,sec2 como Entero;
	Definir horatxt,mintxt,sectxt Como Caracter;
	
	Escribir "Escriba las horas, los minutos, y los segundos.";
	Leer hora;
	Leer min;
	Leer sec;
	
	hora2 = hora;
	min2= min;
	sec2= sec;
	
	Si hora > 24 o min >= 60 o sec >= 60 Entonces
		Escribir"No ha ingresado valores correctos.";
	SiNo
		sec2 = (sec + 1) mod 60;
		Si (sec + 1) >= 60 Entonces;
			min2 = (min + 1) mod 60;
			Si (min + 1) >= 60 Entonces;
				hora2 = (hora + 1) mod 24;
			FinSi
		FinSi
		
		Si (hora2 mod 24) < 10 Entonces
			horatxt = "0";
		FinSi
		
		Si min2 < 10 Entonces
			mintxt = "0";
		FinSi
		
		Si sec2 < 10 Entonces
			sectxt = "0";
		FinSi
		
		Escribir "La nueva hora es " horatxt (hora2 mod 24) ":" mintxt (min2 mod 60) ":" sectxt sec2;
	FinSi
	
	
	
FinProceso

//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.