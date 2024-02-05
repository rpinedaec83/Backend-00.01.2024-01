Proceso ejercicio19

	Dimension empleados[4], salario[4];
	Definir empleadotipo,dias como Entero;
	
	empleados[1] = "Cajero";
	empleados[2] = "Servidor de Mezclas";
	empleados[3] = "Preparador";
	empleados[4] = "Mantenimiento";
	salario[1] = 56;
	salario[2] = 64;
	salario[3] = 80;
	salario[4] = 48;
	
	Escribir "Ingrese el numero de identificacion del tipo de empleado.";
	Escribir "1 - Cajero, 2 - Servidor, 3 - Preparador de mezclas, 4 - Mantenimiento";
	Leer empleadotipo;
	
	Escribir "Ha seleccionado el tipo de empleado " empleadotipo " - " empleados[empleadotipo] ".";
	Escribir "El salario figurado es de " salario[empleadotipo] "$ diarios. ¿Cuantos dias ha trabajado el empleado?";
	Leer dias;
	
	Escribir "El salario a pagar esta semana es de " salario[empleadotipo]*dias "$.";
	
FinProceso

//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador 
//del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la 
//cantidad de dinero que el dueño le debe pagar al empleado que ingresó