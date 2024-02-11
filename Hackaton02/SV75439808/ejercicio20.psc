Proceso Ejercicio_20
	Definir n1, n2, n3, n4 Como Entero
	Escribir "Ingrese 4 números"
	Leer n1, n2, n3, n4
	Si n1 MOD 2 = 0 Entonces
		pr = pr + 1
	FinSi
	Si n2 MOD 2 = 0 Entonces
		pr = pr + 1
	FinSi
	Si n3 MOD 2 = 0 Entonces
		pr = pr + 1
	FinSi
	Si n4 MOD 2 = 0 Entonces
		pr = pr + 1
	FinSi
	Escribir "Nº de pares: ",pr,"."
	
	Si n1 > n2 y n1 > n3 y n1 > n4 Entonces
		nmay = n1
	SiNo
		Si n2 > n1 y n2 > n3 y n2 > n4 Entonces
			nmay = n2
		SiNo
			Si n3 > n1 y n3 > n2 y n3 > n4 Entonces
				nmay = n3
			SiNo
				Si n4 > n1 y n4 > n2 y n4 > n3 Entonces
					nmay = n4
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "Número mayor: ",nmay,"."
	
	Si n3 MOD 2 = 0 Entonces
		res = n2^2
		Escribir "El cuadrado del segundo es ",res,"."
	SiNo
		Si n1 < n4 Entonces
			res = (n1 + n2 + n3 + n4) / 4
			Escribir "La media de los 4 números es ",res,"."
		SiNo
			Si n2 > n3 Entonces
				Si n3 > 50 y n3 < 700 Entonces
					res = n1 + n2 + n3 + n4
					Escribir "La suma de los 4 números es ",res,"."
				FinSi
			FinSi
		FinSi
	FinSi
	
FinProceso
