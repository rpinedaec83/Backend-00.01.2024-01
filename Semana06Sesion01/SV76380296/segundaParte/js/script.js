let divRojo = document.getElementsByClassName("rojo");

console.log(divRojo);

divRojo[0].innerHTML = "<p>HOLA EDITADO POR JAVASCRIPT.</p>"
divRojo[1].textContent = "modificadoAMONG"

let divResultado = document.getElementById("resultado")
divResultado.innerText = "HolAAAA"

divResultado.style.backgroundColor = "green"

let arrCarros = [
    {
        nombre: "Volvo",
        año: 2002
    },{
        nombre: "BMW",
        año: 2010
    }
];

let divResultado2 = document.getElementById("resultado2")
let select = document.createElement("select");

for (let i = 0; i < arrCarros.length; i++) {
    const element = arrCarros[i];
    let op = document.createElement("option")
    op.value = element.año;
    op.text = element.nombre;
    select.appendChild(op);
}


function agregarElemento(){
    let nombre = prompt("Eliga el nombre.")
    let año = parseInt(prompt("Pon el año"))
    let obj = {
        nombre,
        año
    }
    arrCarros.push(obj)
    agregarAlDiv()
}

function agregarAlDiv() {
    divResultado2.innerHTML = "";
    let select = document.createElement("select")
    select.id = "selCarros";
    for (let i = 0; i < arrCarros.length; i++) {
        const element = arrCarros[i];
        let op = document.createElement("option");
        op.value = element.año;
        op.text = element.nombre;
        select.appendChild(op);
    }
    divResultado2.appendChild(select)
    document.getElementById("selCarros").addEventListener("change", cambioSel);
}

let divImagen = document.getElementById("imagen")
let imagen = document.createElement("img")
imagen.src = "img/"
imagen.height = 0;
divImagen.appendChild(imagen);

document.getElementById("otraOpcion").addEventListener("click",funcOtraOpcion)
document.getElementById("otraOpcion").addEventListener("mouseover",funcOtraOpcion)



function funcOtraOpcion(){
    alert("AMONGUS CLICK")
}

function cambioSel() {
    let selCarros = document.getElementById("selCarros")
    console.log(selCarros.selectedOptions[0].innerText)
}