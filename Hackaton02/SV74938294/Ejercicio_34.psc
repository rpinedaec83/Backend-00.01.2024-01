Proceso Ejercicio_34
	num<-0
	val<-1
	Escribir "------| BIENVENIDO |------"
	Escribir "En este porgrama se mostrara la tabla de multiplicar del 1 al 9"
	Mientras val=1 Hacer
		Escribir "De cual numero quiere ver su tabla: (solo del 1-12)"
		Leer num
		k1<-num*1
		k2<-num*2
		k3<-num*3
		k4<-num*4
		k5<-num*5
		k6<-num*6
		k7<-num*7
		k8<-num*8
		k9<-num*9
		k10<-num*10
		k11<-num*11
		k12<-num*12
		Escribir "Esta bien, su tabla del 1 al 12 es:"
		Escribir num,"x1 = ",k1
		Escribir num,"x2 = ",k2
		Escribir num,"x3 = ",k3
		Escribir num,"x4 = ",k4
		Escribir num,"x5 = ",k5
		Escribir num,"x6 = ",k6
		Escribir num,"x7 = ",k7
		Escribir num,"x8 = ",k8
		Escribir num,"x9 = ",k9
		Escribir num,"x10 = ",k10
		Escribir num,"x11 = ",k11
		Escribir num,"x12 = ",k12
		Escribir "Desea buscar la tabla de otro numero:"
		Escribir "1. Si"
		Escribir "2. No"
		Leer val
		si	val<>1 y val<>2 Entonces
			Escribir "Disculpe solo tiene 2 opciones:"
			Escribir "1. Si"
			Escribir "2. No"
			Leer val
		FinSi
	FinMientras
	
FinProceso
