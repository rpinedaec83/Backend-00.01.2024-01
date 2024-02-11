Proceso Ejercicio_4
	Definir n1, n2, n3, p, s, t Como Entero 
	Escribir "Ingrese el tres n�meros"
	Leer n1, n2, n3
	Si n1 > n2 y n1 > n3 Entonces
		p <- n1
		Si n2 > n3 Entonces
			s <- n2
			t <- n3
		SiNo
			s <- n3
			t <- n2
		FinSi
	SiNo
		Si n2 > n1 y n2 > n3 Entonces
			p <- n2
			Si n1 > n3 Entonces
				s <- n1
				t <- n3
			SiNo
				s <- n3
				t <- n1
			FinSi
		SiNo
			Si n3 > n1 y n3 > n2 Entonces
				p <- n3
				Si n1 > n2 Entonces
					s <- n1
					t <- n2
				SiNo
					s <- n2
					t <- n1
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "En orden ascendente: ",t," -> ",s," -> ",p,".";
	
FinProceso
