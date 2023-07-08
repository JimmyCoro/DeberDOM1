document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario si la validación no es correcta
    
    // Validar los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
  
    if (nombre === "" || apellido === "" || correo === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Si la validación es correcta, se puede enviar el formulario
    alert("Formulario enviado correctamente.");
    document.getElementById("miFormulario").reset(); // Restablecer el formulario
  });