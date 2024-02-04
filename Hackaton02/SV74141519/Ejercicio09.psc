Proceso Ejercicio09
	
	Escribir "-------------------- BIENVENIDO AL SISTEMA DE CALCULO SALARIAL --------------------"
	
	Escribir "Ingrese el salario actual del trabajador: $" 
    Leer salarioAct 
	
    Si salarioAct > 2000 Entonces
        nuevoSal = salarioAct * 1.05
		Escribir "Usted gana: $ " salarioAct " se le aplicara un bono de 5%."
        Escribir "Su nuevo salario es: $", nuevoSal 
    Sino
        nuevoSal = salarioAct * 1.1
		Escribir "Usted gana: $ " salarioAct " se le aplicara un bono de 10%."
        Escribir "Su nuevo salario es: $", nuevoSal 
    FinSi
	
FinProceso
