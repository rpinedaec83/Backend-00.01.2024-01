Proceso rept
	repeticiones = 0
	Mientras repeticiones <> 5 Hacer
		Escribir repeticiones
		repeticiones = repeticiones + 1
	Fin Mientras
	//Estos son lo mismo, salvo que el de arriba se detiene al llegar a 5, y el de abajo hace una repeticion mas al llegar a 5.
	Para a<-1 Hasta 5 Con Paso paso Hacer
		Escribir a
		a = a + 1
	Fin Para
	
FinProceso
