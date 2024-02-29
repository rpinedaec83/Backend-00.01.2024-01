let divRojo = document.getElementsByClassName("rojo");

console.log(divRojo)

divRojo[0].innerHTML = "<p> hola desde javascript</p>"
divRojo[1].textContent = "chao desde javascript"

let divResultado = document.getElementById("resultado");
divResultado.innerText = "Hola hola"

divResultado.style.backgroundColor = "green";

let arrCarros = [
    {
        nombre: "Volvo",
        año: 2002
    }, {
        nombre: "BMW",
        año: 2010
    }, {
        nombre: "Jaguan",
        año: 2023
    }
];

let divResultado2 = document.getElementById("resultado2");


function agregarElemento() {
    let nombre = prompt("Pon el nombre de auto");
    let año = parseInt(prompt("Pon el año de auto"));
    let obj = {
        nombre,
        año
    }
    arrCarros.push(obj);
    agregarAlDiv();
}

function agregarAlDiv() {
    divResultado2.innerHTML = "";
    let select = document.createElement("select");
    select.id = "selCarros";
    for (let index = 0; index < arrCarros.length; index++) {
        const element = arrCarros[index];
        let op = document.createElement("option");
        op.value = element.año;
        op.text = element.nombre;
        select.appendChild(op);
    }
    divResultado2.appendChild(select)
    document.getElementById("selCarros").addEventListener("change", cambioSel);
}

let divImagen = document.getElementById("imagen");
let imagen = document.createElement("img");
imagen.src = "img/descarga.png";
imagen.height = 250
//imagen.width = 300
divImagen.appendChild(imagen);


document.getElementById("otraOpcion").addEventListener("click", funcOtraOpcion);
document.getElementById("otraOpcion").addEventListener("mouseover", funcOtraOpcion2);

function funcOtraOpcion(){
    alert("Hizo Click")
}

function funcOtraOpcion2(){
    console.log("Paso el maous por aqui")
}
function cambioSel(){
    
    let selCarros = document.getElementById("selCarros");
    console.log(selCarros.selectedOptions[0].innerText);
}