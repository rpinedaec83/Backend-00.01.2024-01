Proceso tarea20
	escribir "ingrese el primer numero: "
	leer num1
	escribir "ingrese el segundo numero: "
	leer num2
	escribir "ingrese el tercer numero: "
	leer num3
	escribir "ingrese el cuarto numero: "
	leer num4
	contar_pares=0
	maximo = num1
	si num2 > maximo Entonces
		maximo = num2
	FinSi
	si num3 > maximo Entonces
		maximo = num3
	finsi
	si num4 > maximo Entonces
		maximo = num4
	finsi
	si num1%2 ==0 Entonces
		contar_pares = contar_pares + 1
	FinSi
	si num2%2 ==0 Entonces
		contar_pares = contar_pares + 1
	FinSi
	si num3%2 ==0 Entonces
		contar_pares = contar_pares + 1
	FinSi
	si num4%2 ==0 Entonces
		contar_pares = contar_pares + 1
	FinSi
	Escribir "cantidad de numeros pares: ", contar_partes
	Escribir "El maximo es: ",maximo
	si num3%2 == 0 Entonces
		cuadrado_segundo = num2 + num2
		Escribir "El cuadrado del segundo número es: " cuadrado_segundo
	FinSi
	si num1 < num4 Entonces
		media = (num1 + num2 + num3 + num4) /4.0
		Escribir "La media de los cuatro numeros es: " media
	FinSi
	si num2 > num3 Entonces
		si num3 >= 50 y num3 <= 700 Entonces
			suma = num1 + num2 + num3 + num4
			Escribir "la suma de los cuatro numeros es: " suma
		FinSi
	FinSi
FinProceso
