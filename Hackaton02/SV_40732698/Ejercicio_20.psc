Proceso Operaciones_varias
	num1=0
	num2=0
	num3=0
	num4=0
    mayor=0 
	media =0
	suma=0 
	alcuadrado =0
	cuentapares=0
	
	Escribir "Ingrese un primer número: "
    Leer num1
	Escribir "Ingrese un segundo número: "
    Leer num2
	Escribir "Ingrese un tercer número: "
    Leer num3
	Escribir "Ingrese un cuarto número: "
    Leer num4
	
    Si num1 MOD 2 = 0 Entonces
        cuentapares = cuentapares + 1
    FinSi
	
    Si num2 MOD 2 = 0 Entonces
        cuentapares = cuentapares + 1
    FinSi
	
    Si num3 MOD 2 = 0 Entonces
        cuentapares = cuentapares + 1
    FinSi
	
    Si num4 MOD 2 = 0 Entonces
        cuentapares = cuentapares + 1
    FinSi
	Escribir "Cantidad de números pares: ", cuentapares
	
    // Numero mayor 
	
    mayor <- num1
	
    Si num2 > mayor Entonces mayor = num2
    FinSi
	
    Si num3 > mayor Entonces mayor = num3
    FinSi
	
    Si num4 > mayor Entonces mayor = num4
    FinSi
	Escribir "El mayor de todos es: ", mayor
    // Cuadrado del segundo
    Si num3 MOD 2 = 0 Entonces
        Cuadrado = num2 ^ 2
	Escribir "Ya que el tercero es par, el Cuadrado del segundo es : ", Cuadrado
    FinSi
	
    // Si el primero es menor que el cuarto, calcular la media de los 4 números
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
	Escribir "Ya que el primero es menor que el cuarto, la Media de los 4 números es : ", media
    FinSi
	
    // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        suma = num1 + num2 + num3 + num4
	Escribir "Ya que el segundo es mayor que el tercero y el tercero está entre 50 y 700,la Suma de los 4 números es: ", suma
    FinSi
	  
    
  
FinProceso
