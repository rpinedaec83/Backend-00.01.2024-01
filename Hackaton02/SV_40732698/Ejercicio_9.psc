Proceso Aumento_trabajador
	Definir SueldoBase,	Nuevosueldo Como Real
	Escribir "Sueldo inicial:"
	leer SueldoBase
	
	si SueldoBase>2000 Entonces
		Nuevosueldo =SueldoBase+(SueldoBase*0.05) 	
		Escribir "Tu nuevo sueldo es: " Nuevosueldo
	SiNo
		si SueldoBase <2000  Entonces
			Nuevosueldo =SueldoBase+(SueldoBase*0.1) 	
			Escribir "Tu nuevo sueldo es: " Nuevosueldo 
		FinSi
	FinSi
FinProceso
