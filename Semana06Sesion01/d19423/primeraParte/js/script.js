let strJson = `{"nombre":"Roberto","apellidos":"Pineda","edad":40,"peso":82.55,"estadoCivil":false,"hijos":null,"hobbies":["Aeromodelismo","Gunpla"],"padres":[{"nombre":"Rene","apellido":"Pineda"},{"nombre":"Miriam","apellido":"Lopez"}]}`;

let objJson = JSON.parse(strJson);
console.log(objJson);

if(objJson.estadoCivil){
    console.log("Estas Casado")
}
else{
    console.log("Estas Soltero")
}

for (let index = 0; index < objJson.hobbies.length; index++) {
    const element = objJson.hobbies[index];
    console.log(element)
    
}

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("Si se puede usar el storage web api")
  } else {
    // Sorry! No Web Storage support..
    console.log("No se puede usar el storage web api")
  }
  

  localStorage.setItem("lastname", "Pineda");

  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  localStorage.setItem("obj",JSON.stringify(objJson));

  document.getElementById("result").innerHTML = localStorage.getItem("obj");

  function clickMe(){
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " +
      sessionStorage.clickcount + " time(s) in this session.";
  }