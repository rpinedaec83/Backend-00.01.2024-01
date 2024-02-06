Proceso tarea23
		//declarar variables
		Definir t, num, i, res Como Entero;
		//datos de entrada
		Escribir "Ingrese la tabla a mostrar";
		leer t;
		Escribir "Ingrese hasta que número desea ver la tabla";
		leer num;
		//Proceso
		Para i=0 Hasta num Con Paso 1 Hacer
			res = t * i;
			Escribir t, "X", i, " = ", res;
		Fin Para
		
FinProceso
