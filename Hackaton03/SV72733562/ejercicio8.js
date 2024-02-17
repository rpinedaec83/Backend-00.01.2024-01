
console.log("Usted aprobará si tiene un mínimo de 14 de promedio")
console.log(" ")
 
 let nota1= prompt("Ingresa tu primera nota");
 nota1=parseInt(nota1)

 let nota2= prompt("Ingresa tu segunda nota");
 nota2=parseInt(nota2)

 let nota3= prompt("Ingresa la tercera nota")
 nota3=parseInt(nota3)

 const promedio = (nota1+nota2+nota3)/3;
 

 console.log("Su promedio es: "+ promedio)

 

 if (promedio>=14)
 {
    console.log("Usted está aprobado.")
 }
 else
 {
    console.log("Usted ha desaprobado.")
 }