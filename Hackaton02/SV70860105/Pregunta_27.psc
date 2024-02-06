Proceso Pregunta_27
	definir media Como Real
	definir numero Como Entero
	contador = 0
	numero = 0
	Mientras numero >= 0 Hacer
		escribir "Ingrese un numero: "
		leer numero
		si numero >= 0
			media = media + numero
			contador = contador + 1
		finsi
	Fin Mientras
	escribir "La media de lo numeros es : " media/contador
FinProceso
