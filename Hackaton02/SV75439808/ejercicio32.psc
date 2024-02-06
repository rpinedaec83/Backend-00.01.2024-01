Proceso Ejercicio_32
	Definir prov, ciu Como Entero
	Definir p_max, max_ciu, max_prov como Entero
	p_max <- 0
	max_ciu <- 0
	max_prov <- 0
	Para prov <- 1 Hasta 3 Hacer
		Para ciu <- 1 Hasta 11 Hacer
			pob <- azar(1000) + 1
			Escribir "Ingrese la población de la ciudad ",ciud," en la provincia: ",prov,":",pob
			Si pob > p_max Entonces
				p_max <- pob
				max_ciu <- ciu
				max_prov <- prov
			FinSi
		FinPara
	FinPara
	Escribir "La ciudad con la población mas alta tiene ",p_max," habitantes."
	Escribir "Provincia: ",max_prov,"."
	Escribir "Ciudad: ",ciud,"."
	
FinProceso
