Proceso Promedio_notas
	Definir promedio, nota1, nota2,nota3 Como Real
	Escribir "Brinde su nota1:"
	Leer nota1
	Escribir "Brinde su nota2:"
	Leer nota2
	Escribir "Brinde su nota3:"
	Leer nota3
	promedio<-(nota1+nota2+nota3)/3
	Si promedio>=11 Entonces
		Escribir "Su nota promedio es: ",promedio, " y Ud. está aprobado"
	SiNo
		Escribir "Su nota promedio es: ",promedio, " y Ud. está desaprobado"
	Fin Si
	 
	
FinProceso
