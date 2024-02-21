
const areatriangulo = function(base, altura)
{
    return (base*altura)/2;
}

let basetriangulo = parseInt(prompt("Ingresa la base del triangulo"))

let alturatriangulo = parseInt(prompt("Ingresa la altura del triangulo"))


const resultado = areatriangulo(basetriangulo,alturatriangulo)

console.log(resultado)
