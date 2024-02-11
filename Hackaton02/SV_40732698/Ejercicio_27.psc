Proceso Calculo_Media
	Definir numero, suma, cantidad, media Como Real
	
	media=0
	suma = 0
    cantidad = 0
	
    
        Escribir "Ingrese un número positivo: "
        Leer numero
		
		Si numero>0 Entonces
			Para i=1 hasta numero
				suma=suma+i
			FinPara
		media=suma/numero
        Escribir "La media de la suma de los números hasta el numero ingresados es: ", media
    Sino
        Escribir "Ingrese un número positivo, reinicie"
    FinSi
FinProceso
