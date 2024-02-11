
let primernumero = parseInt(prompt("Ingrese el primer numero"));

let segundonumero = parseInt(prompt("Ingrese el segundo numero"));

let arreglo = [primernumero, segundonumero];


for (let i=0; i<=100; i++)
{
    let nuevonumero = primernumero+segundonumero;
    arreglo.push(nuevonumero);

    primernumero=segundonumero; 
    segundonumero=nuevonumero;

}

console.log(arreglo);