Proceso Ejercicio_19
	Escribir "------| BIENVENIDO |------"
	Escribir "En este programa sabra el salario del personal"
	Escribir "Primero seleccione el tipo de personal:"
	Escribir "1. Cajero"
	Escribir "2. Servidor"
	Escribir "3. Preparador de mezclas"
	Escribir "4. Manetinimiento"
	Leer tipo
	Mientras tipo<>1 y tipo<>2 y tipo<>3 y tipo<>4 Hacer
		Escribir "Por favor, escoga dentro del rango permitido 1-2-3-4 :"
		Leer tipo
	FinMientras
	Segun tipo Hacer
		1:
			t<-"Cajero"
			sxd<-56
		2:
			t<-"Servidor"
			sxd<-64
		3:
			t<-"Preparador de mezclas"
			sxd<-80
		4:
			t<-"Mantenimiento"
			sxd<-48
	FinSegun
	Escribir "Ingrese la cantidad de dias trabajados:"
	Leer d
	Mientras d<0 o d>6 Hacer
		Escribir "No puede ingresar esa cantidad de dias:"
		Escribir "Ingrese los dias trabajadas:"
		Leer d
	FinMientras
	total<-sxd*d
	Escribir "Para el ",t," con ",d," dias trabajados; le corresponde: ",total," dolares."
	
FinProceso
