Proceso Ejercicio_31
	i<-1
	sumImp<-0
	sumPar<-0
	contImp<-0
	contPar<-0
	Escribir "------| BIENVENIDOS |------"
	Escribir "En este programa se hallara la media de impares como pares por separado de solo 10 numeros"
	Escribir "Ingrese 10 numeros:"
	Mientras i<=10 Hacer
		Leer num
		si (num mod 2)=0 Entonces
			sumPar<-sumPar+num
			contPar<-contPar+1
		SiNo
			sumImp<-sumImp+num
			contImp<-contImp+1
		FinSi
		i<-i+1
	FinMientras
	medPar<-sumPar/contPar
	medImp<-sumImp/contImp
	Escribir "La media de todos los impares es: ",medImp
	Escribir "La media de todos los pares es: ",medPar
	
FinProceso
