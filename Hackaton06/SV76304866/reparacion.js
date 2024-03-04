window.onload = function() {
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores ingresados por el usuario
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Verificar que se haya ingresado un usuario y una contraseña
    if (usuario && contrasena) {
      // Guardar los datos en el Local Storage
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('contrasena', contrasena);

      // Mostrar un mensaje de éxito
      alert('Usuario registrado correctamente');

      // Limpiar los campos del formulario
      document.getElementById('usuario').value = '';
      document.getElementById('contrasena').value = '';
    } else {
      // Mostrar un mensaje de error si no se ingresaron usuario y contraseña
      alert('Por favor, ingresa un usuario y una contraseña');
    }
  });

  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores ingresados por el usuario
    var usuario = document.getElementById('login-usuario').value;
    var contrasena = document.getElementById('login-contrasena').value;

    // Verificar las credenciales de inicio de sesión
    var storedUsuario = localStorage.getItem('usuario');
    var storedContrasena = localStorage.getItem('contrasena');
    if (usuario === storedUsuario && contrasena === storedContrasena) {
      // Credenciales válidas, guardar usuario en Local Storage y redirigir al usuario a la siguiente página
      localStorage.setItem('logged_in', 'true');
      window.location.replace('proximapagina.html');
    } else {
      // Credenciales inválidas, mostrar un mensaje de error
      alert('Usuario o contraseña incorrectos');
    }
  });
};