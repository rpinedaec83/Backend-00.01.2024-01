Proceso Ejercicio03
	

	Escribir "-------------------- BIENVENIDO AL SISTEMA VERIFICADOR DE DIGITO 4 --------------------"
	

	Escribir("Ingrese un número: ")
    Leer num1
	
    
    ultDig = num1 MOD 10
	
    Si ultDig = 4 Entonces
        Escribir("El número termina en 4.")
    Sino
        Escribir("El número NO termina en 4.")
    FinSi
	
FinProceso
