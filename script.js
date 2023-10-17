

// Controlador de eventos para el botón "Enviar"
function enviarFormulario(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
  
    // Realizar alguna acción, como mostrar una confirmación al usuario
    const confirmacion = `¡Formulario enviado con éxito!\nNombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`;
    alert(confirmacion);
  
    // Puedes redirigir al usuario a otra página o realizar otra acción aquí
  }
  
  
  
// Función para mostrar la ventana modal de ingreso de habilidad
function mostrarVentanaModal() {
    const nombreHabilidad = prompt("Ingrese el nombre de la nueva habilidad:");
    if (nombreHabilidad !== null) {
        const valorHabilidad = prompt("Ingrese el valor de la barra de rendimiento (0-100):");
        if (valorHabilidad !== null) {
            agregarNuevaHabilidad(nombreHabilidad, valorHabilidad);
        }
    }
}

// Función para agregar una nueva habilidad a la lista
function agregarNuevaHabilidad(nombre, valor) {
    const listaHabilidades = document.getElementById("habilidades-lista");
    const nuevaHabilidad = document.createElement("li");
    nuevaHabilidad.innerHTML = `
        <span class="habilidad-nombre">${nombre}</span>
        <div class="barra-rendimiento">
            <div class="barra-progreso" style="width: ${valor}%;"></div>
        </div>
    `;
    listaHabilidades.appendChild(nuevaHabilidad);
}

// Agregar un controlador de eventos al botón "Agregar Habilidad"
const botonAgregarHabilidad = document.getElementById("agregar-habilidad");
botonAgregarHabilidad.addEventListener("click", mostrarVentanaModal);
