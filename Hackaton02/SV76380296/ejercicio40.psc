Proceso ejercicio40
	
	Definir valorpi, division1, division2 Como Real;
	Definir operaciones Como Entero;
	
	Escribir "Algoritmo para determinar la aproximacion a pi usando la serie de Nilakantha.";
	
	Escribir "Ingrese la cantidad de repeticiones a realizar.";
	Leer operaciones;
	
	valorpi = 3;
	division2 = 2;
	
	Para i <- 1 Hasta operaciones Hacer
        division1 = 4/(division2*(division2+1)*(division2+2));
		Escribir division1 "= 4/(" division2 "*(" division2+1 ")*(" division2+2 "))";
        Si i mod 2 == 1 Entonces
            valorpi = valorpi + division1;
			Escribir valorpi " = " valorpi-division1 " + " division1;
        Sino
            valorpi = valorpi - division1;
			Escribir valorpi " = " valorpi+division1 " - " division1;
        FinSi
		
		division2 = division2+2;
		
    FinPara
	
    Escribir "La aproximacion de pi con ", operaciones, " repeticiones es: ", valorpi;
	
	
FinProceso

//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
//La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...