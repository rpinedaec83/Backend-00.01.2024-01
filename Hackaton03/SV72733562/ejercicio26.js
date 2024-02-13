
let dividendo=0; 
let divisor = 0; 
let cociente

dividendo = parseInt(prompt("Ingrese el dividendo"));

divisor = parseInt(prompt("Ingrese el divisor"));

while (dividendo>=divisor)
{
    dividendo= dividendo-divisor;
    cociente++
}

 console.log("El resto es: " +dividendo);

 console.log("El cociente es: " +cociente);