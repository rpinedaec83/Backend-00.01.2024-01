Proceso tarea6
	Definir xx, sueldo, bono Como Entero; 
	bono <- 0;
	sueldo <- 0;
	Escribir "ingrese las horas trabajadas"
	leer xx;
	si (xx < 40) Entonces
		sueldo <- xx * 20;
		Escribir "su sueldo esta semana es de: ", sueldo
	SiNo
		bono <- xx - 40;
		sueldo <-(xx - bono) * 20;
		Escribir "su sueldo esta semana es de: " , sueldo
	FinSi
FinProceso
