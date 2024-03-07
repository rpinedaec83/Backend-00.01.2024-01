class Skill {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills; // Esto ahora será un array de objetos Skill
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const registro = new RegistroTecnicos();

    document.getElementById('registroTecnico').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombreTecnico').value;
        const skillsSelect = document.getElementById('skillsTecnico');
        const skills = Array.from(skillsSelect.selectedOptions).map(option => new Skill(option.text));

        const tecnico = new Tecnico(nombre, skills);
        registro.agregarTecnico(tecnico);
    });
});

class RegistroTecnicos {
    constructor() {
        this.tecnicos = [];
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
        this.actualizarTablaTecnicos();
    }

    actualizarTablaTecnicos() {
        const datosTabla = this.tecnicos.map(tecnico => ({
            nombre: tecnico.nombre,
            skills: tecnico.skills.map(skill => skill.nombre).join(', ')
        }));

        $('#tablaTecnicos').bootstrapTable('load', datosTabla);
    }
}
