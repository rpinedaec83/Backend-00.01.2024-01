
document.addEventListener("DOMContentLoaded", function() {
  var tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  var ticketsList = document.getElementById("tickets-list");

  if (tickets.length > 0) {
    tickets.forEach(function(ticket) {
      var ticketItem = document.createElement("li");
      ticketItem.textContent = "Número de ticket: " + ticket.ticketNumber +
                                ", Fecha de registro: " + ticket.date +
                                ", IMEI: " + ticket.imei +
                                ", Nombre: " + ticket.name;
      ticketsList.appendChild(ticketItem);
    });
  } else {
    var noTicketsMessage = document.createElement("p");
    noTicketsMessage.textContent = "No hay tickets guardados.";
    ticketsList.appendChild(noTicketsMessage);
  }
});

var deviceData = {
  "Samsung": ["Galaxy S10", "Galaxy S20", "Galaxy Note 10"],
  "Apple": ["iPhone 11", "iPhone 12", "iPhone X"],
  "Huawei": ["P30 Pro", "P40 Pro", "Mate 30 Pro"],
  "Xiaomi": ["Mi 9", "Mi 10", "Redmi Note 9"]
};

document.getElementById("verify-button").addEventListener("click", function() {
  var imei = document.getElementById("imei-input").value;
  var marca = generateRandomData(Object.keys(deviceData));
  var modelos = deviceData[marca];
  var modelo = generateRandomData(modelos);
  var sistemaOperativo = getSistemaOperativo(marca);
  var reportado = generateRandomData([true, false]);

  var resultsMessage = "IMEI: " + imei + "<br>";
  resultsMessage += "Marca: " + marca + "<br>";
  resultsMessage += "Modelo: " + modelo + "<br>";
  resultsMessage += "Sistema operativo: " + sistemaOperativo + "<br>";
  resultsMessage += "Reportado como robado: " + (reportado ? "Sí" : "No");

  var resultsDialog = document.getElementById("results-dialog");
  resultsDialog.innerHTML = resultsMessage;
  resultsDialog.style.display = "block";

  if (!reportado) {
    var diagnosticoButton = document.createElement("button");
    diagnosticoButton.textContent = "Realizar diagnóstico";
    diagnosticoButton.addEventListener("click", function() {
      var currentDate = new Date();
      var formattedDate = currentDate.toISOString().split('T')[0];

      var ticketForm = document.createElement("form");
      ticketForm.id = "ticket-form";

      var imeiLabel = document.createElement("label");
      imeiLabel.textContent = "Número de IMEI:";
      var imeiInput = document.createElement("input");
      imeiInput.type = "text";
      imeiInput.id = "imei-input";
      imeiInput.value = imei;
      imeiInput.readOnly = true;

      var marcaLabel = document.createElement("label");
      marcaLabel.textContent = "Marca:";
      var marcaInput = document.createElement("input");
      marcaInput.type = "text";
      marcaInput.id = "marca-input";
      marcaInput.value = marca;
      marcaInput.readOnly = true;

      var sistemaOperativoLabel = document.createElement("label");
      sistemaOperativoLabel.textContent = "Sistema Operativo:";
      var sistemaOperativoInput = document.createElement("input");
      sistemaOperativoInput.type = "text";
      sistemaOperativoInput.id = "sistema-operativo-input";
      sistemaOperativoInput.value = sistemaOperativo;
      sistemaOperativoInput.readOnly = true;

      var modeloLabel = document.createElement("label");
      modeloLabel.textContent = "Modelo:";
      var modeloInput = document.createElement("input");
      modeloInput.type = "text";
      modeloInput.id = "modelo-input";
      modeloInput.value = modelo;
      modeloInput.readOnly = true;

      var fechaLabel = document.createElement("label");
      fechaLabel.textContent = "Fecha:";
      var fechaInput = document.createElement("input");
      fechaInput.type = "text";
      fechaInput.id = "fecha-input";
      fechaInput.value = formattedDate;
      fechaInput.readOnly = true;

      var precioLabel = document.createElement("label");
      precioLabel.textContent = "Precio Total del Servicio (S/.):";
      var precioInput = document.createElement("input");
      precioInput.type = "number";
      precioInput.step = "0.01"; 
      precioInput.id = "precio-input";

      var pagoLabel = document.createElement("label");
      pagoLabel.textContent = "¿Cliente pagó el 50% del servicio?";
      var pagoInput = document.createElement("select");
      pagoInput.id = "pago-input";
      var opcionesPago = ["Sí", "No"];
      opcionesPago.forEach(function(opcion) {
      var option = document.createElement("option");
      option.value = opcion.toLowerCase();
      option.text = opcion;
      pagoInput.appendChild(option);
      });
      
      var ticketLabel = document.createElement("label");
      ticketLabel.textContent = "Número de Ticket:";
      var ticketInput = document.createElement("input");
      ticketInput.type = "text";
      ticketInput.id = "ticket-input";

      var clienteLabel = document.createElement("label");
      clienteLabel.textContent = "Nombre del Cliente:";
      var clienteInput = document.createElement("input");
      clienteInput.type = "text";
      clienteInput.id ="cliente-input";

      var submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Enviar";

      ticketForm.appendChild(imeiLabel);
      ticketForm.appendChild(imeiInput);
      ticketForm.appendChild(marcaLabel);
      ticketForm.appendChild(marcaInput);
      ticketForm.appendChild(sistemaOperativoLabel);
      ticketForm.appendChild(sistemaOperativoInput);
      ticketForm.appendChild(modeloLabel);
      ticketForm.appendChild(modeloInput);
      ticketForm.appendChild(fechaLabel);
      ticketForm.appendChild(fechaInput);
      ticketForm.appendChild(precioLabel);
      ticketForm.appendChild(precioInput);
      ticketForm.appendChild(pagoLabel);
      ticketForm.appendChild(pagoInput);
      ticketForm.appendChild(ticketLabel);
      ticketForm.appendChild(ticketInput);
      ticketForm.appendChild(clienteLabel);
      ticketForm.appendChild(clienteInput);
      ticketForm.appendChild(submitButton);
      
      ticketForm.addEventListener("submit", function(event) {
        event.preventDefault();

        
        var ticketNumber = Math.floor(Math.random() * 1000000);
        var name = clienteInput.value;
        var date = formattedDate;
        var precioTotal = precioInput.value;
        var pagoConfirmado = pagoInput.value === "sí" ? true : false;

        var ticket = {
          ticketNumber: ticketNumber,
          imei: imei,
          marca: marca,
          sistemaOperativo: sistemaOperativo,
          modelo: modelo,
          date: date,
          precioTotal: precioTotal,
          pagoConfirmado: pagoConfirmado,
          name: name

          
        };

        var tickets = JSON.parse(localStorage.getItem("tickets")) || [];
        tickets.push(ticket);
        localStorage.setItem("tickets", JSON.stringify(tickets));



        var ticketItem = document.createElement("li");
        ticketItem.textContent = "Número de ticket: " + ticket.ticketNumber +
                                  ", Fecha de registro: " + ticket.date +
                                  ", IMEI: " + ticket.imei +
                                  ", Nombre: " + ticket.name+
                                  ", Precio Total: S/. " + ticket.precioTotal +
                                  ", Pago del 50%: " + (ticket.pagoConfirmado ? "Sí" : "No");

        var ticketsList = document.getElementById("tickets-list");
        ticketsList.appendChild(ticketItem);

        ticketForm.reset();

      });

      resultsDialog.appendChild(ticketForm);
    });

    resultsDialog.appendChild(diagnosticoButton);
  }
});

function generateRandomData(data) {
  return data[Math.floor(Math.random() * data.length)];
}

function getSistemaOperativo(marca) {
  switch (marca) {
    case "Samsung":
      return "Android";
    case "Apple":
      return "iOS";
    case "Huawei":
      return "Android";
    case "Xiaomi":
      return "MIUI";
    default:
      return "";
  }
}