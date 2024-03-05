let strJson = `{"nombre":"Roberto","apellidos":"AMONG","edad":40,"peso":82.55,"estadoCivil":false,"hijos":null,"hobbies":["Aerosus","Amongu"],"padres":[{"nombre":"Rene","apellido":"AMONG"},{"nombre":"Miriam","apellido":"AMONG"}]}`

let objJson = JSON.parse(strJson);
console.log(objJson);

if(objJson.estadoCivil){
    console.log("Estas CASADO")
}
else {
    console.log("FOREVER ALONE")
}

for (let i = 0; i < objJson.hobbies.length; i++) {
    const element = objJson.hobbies[i];
    console.log(element);
}

if (typeof(Storage) !== "undefined"){
    console.log("Se puede utilizar el storage.")
} else {
    console.log("Oops. No se puede!")
}

localStorage.setItem("lastname","Pineda")

document.getElementById("result").innerHTML = localStorage.getItem("lastname")

localStorage.setItem("obj",JSON.stringify(strJson))
document.getElementById("result").innerHTML = localStorage.getItem("obj")


function clickMe() {
    if (sessionStorage.clickcount){
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = `You have clicked the button ${sessionStorage.clickcount} times in this session.`
}