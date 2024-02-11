Proceso Sueldo_semanal
	Definir total_horas Como Entero
	pago_hora_normal=20
	pago_hora_extra=25
	Escribir "Horas trabajadas:"
	Leer total_horas
	
	Si total_horas>40 Entonces
		pago_total<-40*pago_hora_normal+((total_horas-40)*pago_hora_extra)
		Escribir "Su pago de esta semana es: ",pago_total
	SiNo
		pago_total<-40*pago_hora_normal
		Escribir "Su pago de esta semana es: ",pago_total
	Fin Si
	
FinProceso
