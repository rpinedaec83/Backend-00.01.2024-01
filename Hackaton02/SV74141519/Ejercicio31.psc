Proceso Ejercicio31
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE SUMA DE MEDIA DE PARES E IMPARES --------------------"
	
	sumPar = 0
    sumImp = 0
    contPar = 0
    contImp = 0
	
    Para i <- 1 Hasta 10 Hacer
		Escribir "Ingrese el número " i ": " 
		Leer numero 
		
		Si numero MOD 2 = 0 Entonces
			sumPar = sumPar + numero
			contPar = contPar + 1
		Sino
			sumImp = sumImp + numero
			contImp = contImp + 1
		FinSi
    FinPara
	
    
    Si contPar > 0 Entonces
        Escribir "La media de los números pares ingresados es: " sumPar/contPar
    Sino
        Escribir "No se ingresaron números pares." 
    FinSi
	
    Si contImp > 0 Entonces
        Escribir "La media de los números impares ingresados es: " sumImp/contImp
    Sino
        Escribir "No se ingresaron números impares." 
    FinSi
	
FinProceso
