import { compania } from './compania.js'
import { obtenerValorLocalStorage, limpiarTodoLocalStorage } from './utilitarios.js'

document.addEventListener("DOMContentLoaded", function (event) {
    const usuarioLogueado = obtenerValorLocalStorage('usuario_datos');
    document.querySelector('#lblCompania').textContent = compania.nombre;
    document.querySelector('#lblUsuarioLogueado').textContent = `Hola, ${usuarioLogueado.nombre} ${usuarioLogueado.apellido}`;
});

const linkCerrarSession = document.querySelector('#link-logout');
linkCerrarSession.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarTodoLocalStorage();
    window.location.href = '../../index.html';
});