const formulario = document.forms["formulario"];
const salida = document.getElementById("salida");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  salida.innerHTML = "";

  let camposVacios = [];
  let camposErrores = [];

  // Expresiones regulares
  const expApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
  const expNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/;
  const expFecha = /^\d{2}\/\d{2}\/\d{4}$/;
  const expDni = /^\d{8}[A-Za-z]$/;
  const expEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const expUsuario = /^[A-Za-z0-9]+$/;
  const expTelefono = /^\d{9}$/;
  const expTwitter = /^@[\w]+$/;

  // Campos
  const {
    apellidos,
    nombre,
    fechaNacimiento,
    dni,
    email,
    usuario,
    telefono,
    twitter
  } = formulario;

  // Comprobación de vacíos
  for (let campo of formulario.elements) {
    if (campo.type !== "submit" && campo.value.trim() === "") {
      camposVacios.push(campo.name);
    }
  }

  // Validaciones
  if (apellidos.value && !expApellidos.test(apellidos.value))
    camposErrores.push("Apellidos");

  if (nombre.value && !expNombre.test(nombre.value))
    camposErrores.push("Nombre");

  if (fechaNacimiento.value && !expFecha.test(fechaNacimiento.value))
    camposErrores.push("Fecha de nacimiento");

  if (dni.value && !expDni.test(dni.value))
    camposErrores.push("DNI");

  if (email.value && !expEmail.test(email.value))
    camposErrores.push("Correo electrónico");

  if (usuario.value && !expUsuario.test(usuario.value))
    camposErrores.push("Usuario IDEA");

  if (telefono.value && !expTelefono.test(telefono.value))
    camposErrores.push("Teléfono");

  if (twitter.value && !expTwitter.test(twitter.value))
    camposErrores.push("Twitter");

  // Mostrar resultados
  if (camposVacios.length > 0) {
    const ul = document.createElement("ul");
    ul.textContent = "Campos vacíos:";
    camposVacios.forEach(campo => {
      const li = document.createElement("li");
      li.textContent = campo;
      ul.appendChild(li);
    });
    salida.appendChild(ul);
  }

  if (camposErrores.length > 0) {
    const ul = document.createElement("ul");
    ul.textContent = "Campos con errores:";
    camposErrores.forEach(campo => {
      const li = document.createElement("li");
      li.textContent = campo;
      ul.appendChild(li);
    });
    salida.appendChild(ul);
  }

  // Si todo está correcto
  if (camposVacios.length === 0 && camposErrores.length === 0) {
    formulario.submit();
  }
});