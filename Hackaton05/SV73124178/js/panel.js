import { compania } from './compania.js'
import { obtenerValorLocalStorage, limpiarTodoLocalStorage } from './utilitarios.js'

document.addEventListener("DOMContentLoaded", function(event) {
    const tecnicoLogueado = obtenerValorLocalStorage('tecnico_datos');
    const sucursalseleccionada = obtenerValorLocalStorage('sucursal_logueada');
    const nombreSucursal = compania.mostrarNombreSucursal(parseInt(sucursalseleccionada));
    document.querySelector('#lblSucursal').textContent = nombreSucursal;
    document.querySelector('#lblTecnicoLogueado').textContent = `Hola, ${tecnicoLogueado.nombre}`;
});

const linkCerrarSession = document.querySelector('#link-logout');
linkCerrarSession.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarTodoLocalStorage();
    window.location.href = 'index.html';
});

const linkRealizarDiagnostico = document.querySelector('#link-realizardiagnostico');
linkRealizarDiagnostico.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.navbar-toggler').click();
    document.querySelector('.pnlverificarimei').classList.remove('visually-hidden');
});

const linkTicketsGenerados = document.querySelector('#link-ticketsgenerados');
linkTicketsGenerados.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.navbar-toggler').click();
    document.querySelector('.pnlticketsgenerados').classList.remove('visually-hidden');
});

const btnBuscarIMEI = document.querySelector('#btnBuscarIMEI');
btnBuscarIMEI.addEventListener('click', () => {
    const nroIMEI = document.querySelector('#txtNroIMEIConsultar').value;
    const celular = compania.buscarCelularXIMEI(nroIMEI);
    if (celular) {
        document.querySelector('.pnlverificarimei').querySelector('.datocelular').classList.remove('visually-hidden');
        const { imei, marca, modelo, so, robado, reporterobado } = celular;
        document.querySelector('#lblNroImeiConsultado').textContent = imei;
        document.querySelector('#lblMarcaConsultado').textContent = marca;
        document.querySelector('#lblModeloConsultado').textContent = modelo;
        document.querySelector('#lblSOConsultado').textContent = so;
        document.querySelector('#lblReportadoConsultado').textContent = robado?'SI':'NO';
        if (robado) {
            document.querySelector('.btndiagnostico').classList.add('visually-hidden');
            document.querySelector('#lblReportadoConsultado').classList.remove('text-bg-success');
            document.querySelector('#lblReportadoConsultado').classList.add('text-bg-danger');
            document.querySelector('#lblIncidenteConsultado').querySelector('p').classList.add('visually-hidden');
            document.querySelector('#lblIncidenteConsultado').querySelector('ol').classList.remove('visually-hidden');
            const htmlincidentes = reporterobado.map(rr => `<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"><div class="text-start fw-bold">${rr.fecha}</div>${rr.incidente}</div></li>`).join('');
            document.querySelector('#lblIncidenteConsultado').querySelector('ol').innerHTML = htmlincidentes;
        } else {
            document.querySelector('.btndiagnostico').classList.remove('visually-hidden');
            document.querySelector('#lblReportadoConsultado').classList.add('text-bg-success');
            document.querySelector('#lblReportadoConsultado').classList.remove('text-bg-danger');
            document.querySelector('#lblIncidenteConsultado').querySelector('p').classList.remove('visually-hidden');
            document.querySelector('#lblIncidenteConsultado').querySelector('ol').classList.add('visually-hidden');
        }
    }
});

const btnIrADiagnosticar = document.querySelector('#btnIrADiagnosticar');
btnIrADiagnosticar.addEventListener('click', () => {
    document.querySelector('.pnlverificarimei').classList.add('visually-hidden');
    document.querySelector('.pnlregistrardiagnostico').classList.remove('visually-hidden');
});