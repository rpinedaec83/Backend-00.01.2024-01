let tv = {
    marca: "LG",
    tamaño: 55,
    pantalla: "4K",
    SO: "webtv",
    tipo: "SmartTV",
    encender() {
      console.log("La tv se está encendiendo");
    },
    apagar() {
      console.log("La tv se está apagando");
    },
    cambiarCanal(canal) {
      console.log("Se está cambiando el canal al " + canal);
    },
  };
  
  console.log(tv.marca);
  console.log(tv.pantalla);
  console.log(tv.SO)
  tv.encender();
  tv.apagar();
  tv.cambiarCanal();
