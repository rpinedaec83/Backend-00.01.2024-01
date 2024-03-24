const generarNumeroTelefono = () => {
    const digito1 = document.getElementById("digito1").value;
    const digito2 = document.getElementById("digito2").value;
    const digito3 = document.getElementById("digito3").value;
    const digito4 = document.getElementById("digito4").value;
    const digito5 = document.getElementById("digito5").value;
    const digito6 = document.getElementById("digito6").value;
    const digito7 = document.getElementById("digito7").value;
    const digito8 = document.getElementById("digito8").value;
    const digito9 = document.getElementById("digito9").value;
    const digito10 = document.getElementById("digito10").value;

    if (digito1 && digito2 && digito3 && digito4 && digito5 &&
        digito6 && digito7 && digito8 && digito9 && digito10) {

        const numeroTelefono = `${digito1}${digito2}${digito3}-${digito4}${digito5}${digito6}-${digito7}${digito8}${digito9}${digito10}`;
        
        const numeroTelefonoElemento = document.getElementById("numeroTelefono");
        numeroTelefonoElemento.innerHTML = `Número de Teléfono: ${numeroTelefono}`;
    } else {
        alert("Por favor, complete todos los dígitos.");
    }
};
