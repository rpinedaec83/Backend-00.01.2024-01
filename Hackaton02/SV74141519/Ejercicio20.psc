Proceso Ejercicio20
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE VERIFICACION --------------------"
	
	
	Escribir "Ingrese el primer numero entero positivo: " 
    Leer num1 
	
    Escribir "Ingrese el segundo numero entero positivo: " 
    Leer num2 
	
    Escribir "Ingrese el tercer numero entero positivo: "
    Leer num3 
	
    Escribir "Ingrese el cuarto numero entero positivo: " 
    Leer num4 
	
    
    cantPar = 0
    Si num1 MOD 2 = 0 
		Entonces cantPar = cantPar + 1 
	FinSi
	
    Si num2 MOD 2 = 0 
		Entonces cantPar = cantPar + 1 
	FinSi
	
    Si num3 MOD 2 = 0 Entonces 
		cantPar = cantPar + 1 
	FinSi
	
    Si num4 MOD 2 = 0 Entonces 
		cantPar = cantPar + 1 
	FinSi
		
	
    
    may = num1
    Si num2 > may Entonces 
		may = num2 
	FinSi

    Si num3 > may Entonces
		may = num3 
	FinSi
    Si num4 > may Entonces 
		may = num4
	FinSi
	
   
    Si num3 MOD 2 = 0 Entonces
        resCuadrado = num2 * num2
    FinSi
	
    Si num1 < num4 Entonces
        resMedia = (num1 + num2 + num3 + num4) / 4
    FinSi
	
    Si num2 > num3 Entonces
        Si num3 >= 50 y num3 <= 700 Entonces
            sumCuatroNum = num1 + num2 + num3 + num4
        FinSi
    FinSi
	
    
    Escribir "Cantidad de numeros pares: " cantPar 
    Escribir "El mayor de los cuatro numeros es: " may 
    Escribir "Resultado del cuadrado del segundo numeros: " resCuadrado 
    Escribir "Media de los cuatro numeros: " resMedia 
    Escribir "Suma de los cuatro numeros: " sumCuatroNum 

	
FinProceso
