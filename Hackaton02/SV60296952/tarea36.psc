SubProceso FibonacciSecuencial(n)
	Definir i,f,n1,n2 Como Entero;
	n1 <-0;
	n2 <-1;
	para i <- 1 hasta n Con Paso 1 Hacer
		escribir n1;
		f <- n1 + n2;
		n1 <- n2;
		n2 <- f;
	FinPara
	
FinSubProceso
Proceso tarea36
	// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987 ...
	//f0 = 0
	//f1 = 1
	// fn = f1-1 + fn-2
	FibonacciSecuencial(5);
FinProceso
