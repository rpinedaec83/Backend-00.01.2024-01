// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
// con su número identificador y salario diario correspondiente:
// Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
// identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará
// por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	dias = 0
	tipo = 0
	ca = 56
	ser = 64
	pm = 80
	mant = 48
	pagof=0
	Escribir "Si eres cajero digita ---> 1 "
	Escribir "Servidor digita ---> 2 "
	Escribir "Preparador de mezclas digita ---> 3 " 
	Escribir  "Mantenimiento digita ---> 4 "
	Leer  tipo
	Escribir  "Ingrese cantidad de dias que trabajo en la semana"
	Leer dias
	Si dias <= 6 Entonces
		Segun tipo Hacer
			1:
				pagof = dias * ca
				Escribir  "Pago final  " , pagof 
			2:
				pagof = dias * ser
				Escribir  "Pago final  " , pagof
			3:
				pagof = dias * pm
				Escribir  "Pago final  " , pagof
			4:
				pagof = dias * mant
				Escribir  "Pago final  " , pagof
			De Otro Modo:
				Escribir "Error al digitar el tipo de Empleado"
		Fin Segun
	SiNo
		Escribir  "Maximo son 6 dias de trabajo"
	FinSi

FinProceso
