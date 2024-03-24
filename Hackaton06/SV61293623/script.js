const form = document.getElementById('formulario');
        const contenido = document.getElementById('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            
            const telSerial = document.getElementById('telSerial').value;
            const telIMEI = document.getElementById('telIMEI').value;
            const diagnostico = document.getElementById('diagnostico').value;
            const Autorizacion = document.getElementById('Autorizacion').checked;
            const Rep = document.getElementById('Rep').checked;

            const tec = document.querySelectorAll('.tec')
            const select = document.querySelectorAll('.selec')
            for (elemento in select){
                pepe = select[elemento];
                pepe.innerHTML=tec[elemento].value
            }
            const spareParts = document.getElementById('spareParts').value;

            
            let estado = 'El servicio no puede ser realizado:';
            if (!telSerial || !telIMEI) {
                estado += ' falta número de serie o IMEI;';
            }
            if (!diagnostico) {
                estado += ' falta diagnóstico;';
            }
            if (!Autorizacion) {
                estado += ' falta autorización del usuario;';
            }
            if (!Rep) {
                estado += ' falta abono del 50%;';
            }
            if (tec.length === 0) {
                estado += ' falta seleccionar skills del técnico;';
            }

            if (estado === 'El servicio no puede ser realizado:') {
                estado = 'El servicio puede ser realizado.';
            }

           
            contenido.textContent = estado;
        });