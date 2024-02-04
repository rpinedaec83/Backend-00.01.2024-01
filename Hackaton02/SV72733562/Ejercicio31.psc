Proceso sin_titulo
	n = 0 
	numpares=0
	numimpares=0
	sumpares= 0
	sumimpares=0
	
	Repetir 
		Escribir "Ingrese el numero"
		Leer num
		
		Si nro mod 2=0 Entonces
			sumpares=sumpares+nro;
			nunpares=numpares+1
		SiNo
			sumimpares=sumimpares+nro;
			numimpares=numimpares+1
		FinSi
		
		n=n+1
		
	Hasta Que n=10
	
	mediapares=sumpares/numpares
	mediaimpares=sumimpares/numimpares
	Escribir "Media numeros pares: " mediapares
	Escribir "Media numeros impares: " mediaimpares
	
	Escribir "Suma de ambas medias: mediapares+mediaimpares
	
FinProceso
