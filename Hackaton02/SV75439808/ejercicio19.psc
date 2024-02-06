Proceso Ejercicio_19
	Definir num, dt Como Entero
	Escribir "# Número Identificador para cada tipo de empleado:"
	Escribir "# 1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Matenimiento"
	Escribir "Ingrese el número identificador del empleado"
	Leer num
	Escribir "Ingrese la cantidad de días de trabajo"
	Leer dt
	Si dt <= 6 Entonces
		Segun num Hacer
			1:
				sy = 56 * dt
			2:
				sy = 64 * dt
			3:
				sy = 80 * dt
			4:
				sy = 48 * dt
			De Otro Modo:
				Escribir "No es un número identificador válido"
		Fin Segun
		Escribir "Pago: $",sy
	SiNo 
		Escribir "Cantidad de días no válidas. Ingrese un valor menor o igual a 6"
	FinSi
	
FinProceso
