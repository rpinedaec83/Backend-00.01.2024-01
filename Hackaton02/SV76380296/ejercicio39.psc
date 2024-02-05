Proceso ejercicio39
	
	Definir valorpi, division Como Real;
	Definir operaciones Como Entero;
	
	Escribir "Algoritmo para determinar la aproximacion a pi usando la serie de Gregory-Leibniz.";
	
	Escribir "Ingrese la cantidad de repeticiones a realizar.";
	Leer operaciones;
	
	
    Para i <- 0 Hasta operaciones - 1 Hacer
        division = 4/(1 + 2 * i);
		
        Si i mod 2 == 0 Entonces
            valorpi = valorpi + division;
			Escribir valorpi " = " valorpi-division " + " division;
        Sino
            valorpi = valorpi - division
			Escribir valorpi " = " valorpi+division " - " division;
        FinSi
		
    FinPara
	
    Escribir "La aproximacion de pi con ", operaciones, " repeticiones es: ", valorpi;
	
FinProceso

//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la 
//serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...