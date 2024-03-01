/* ---------- Menu categorias de proyectos ---------- */
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".navbar-portfolio ul li a");
    const projects = document.querySelectorAll(".proyecto");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");

            projects.forEach(project => {
                project.style.display = "none"; // Oculta todos los proyectos

                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block"; // Muestra los proyectos que coinciden con la categoría seleccionada
                }
            });
        });
    });

    /* Linea baja menu proyectos bottom */
    const links = document.querySelectorAll(".navbar-portfolio ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Eliminar la clase 'active' de todos los enlaces
            links.forEach(link => link.classList.remove("active"));

            // Agregar la clase 'active' solo al enlace clickeado
            event.target.classList.add("active");
        });
    });


    /* -------- Botón CV -------- */
    // Obtenemos una referencia al checkbox de modo oscuro
    const checkbox = document.querySelector('.checkbox');
    // Obtenemos una referencia al botón de descargar CV
    const botonCV = document.getElementById('boton-cv');

    // Agregamos un event listener para detectar cambios en el checkbox
    checkbox.addEventListener('change', function() {
        // Si el checkbox está marcado, mostramos el botón de CV, de lo contrario lo ocultamos
        if (this.checked) {
            botonCV.style.display = 'block';
            botonCV.style.opacity = '1'; // Mostramos el botón con opacidad completa
            botonCV.removeAttribute('disabled'); // Habilitamos el botón cuando se muestra
        } else {
            botonCV.style.opacity = '0'; // Ocultamos el botón con opacidad cero
            // Agregamos un pequeño retraso antes de ocultar físicamente el botón para que se vea el efecto de opacidad
            setTimeout(() => {
                botonCV.style.display = 'none';
            }, 300);
            botonCV.setAttribute('disabled', 'disabled'); // Deshabilitamos el botón cuando se oculta
        }
    });
});





/*  ------- Typewriter ------- */
const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
        loop: true,
        delay:75
      });

      typewriter
        .typeString('Desarrollo de sitios web y proyectos | Estudiante de Ingeniería.')
        .pauseFor(2000)
        .start();