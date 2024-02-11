<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Verificación de aprobación de estudiante</title>
</head>
<body>
<h2>Verificación de aprobación de estudiante</h2>
<form id="formNotas" onsubmit="calcularPromedio(); return false;">
    <label for="nombre">Ingrese el nombre del estudiante:</label><br>
    <input type="text" id="nombre" name="nombre" required><br>
    <label for="nota1">Ingrese la primera nota:</label><br>
    <input type="number" id="nota1" name="nota1" required><br>
    <label for="nota2">Ingrese la segunda nota:</label><br>
    <input type="number" id="nota2" name="nota2" required><br>
    <label for="nota3">Ingrese la tercera nota:</label><br>
    <input type="number" id="nota3" name="nota3" required><br>
    <button type="submit">Calcular promedio</button>
</form>
<p id="resultado"></p>

<script>
function calcularPromedio() {
    var nombre = document.getElementById("nombre").value;
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio <= 12) {
        document.getElementById("resultado").innerText = "El estudiante " + nombre + " está desaprobado";
    } else {
        document.getElementById("resultado").innerText = "El estudiante " + nombre + " está aprobado";
    }
}
</script>
</body>
</html>