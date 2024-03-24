// Obtiene los parámetros de consulta de la URL
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

// Obtiene el valor del parámetro "imei"
var imei = urlParams.get("imei");

// Realiza una lógica de verificación adicional si es necesario
var marca = "Samsung";
var modelo = "Galaxy S10";
var sistemaOperativo = "Android";
var reportadoRobado = false;

// Crea un elemento div para mostrar los resultados
var resultadoDiv = document.createElement("div");
resultadoDiv.innerHTML = "<strong>Número de IMEI:</strong> " + imei + "<br>"
                        + "<strong>Marca:</strong> " + marca + "<br>"
                        + "<strong>Modelo:</strong> " + modelo + "<br>"
                        + "<strong>Sistema operativo:</strong> " + sistemaOperativo + "<br>"
                        + "<strong>Reportado como robado:</strong> " + (reportadoRobado ? "Sí" : "No");

// Agrega el elemento div al contenedor en la página
var resultadoContainer = document.getElementById("resultado-container");
resultadoContainer.appendChild(resultadoDiv);