/* =========================================================
   interfaz.js · PERSONA A (rama menu-y-tema)
   JavaScript nativo: menú móvil y modo claro/oscuro
   =========================================================

   Recuerda los 3 pasos de cualquier interacción:
     1. SELECCIONAR el elemento    -> document.querySelector('#id')
     2. ESCUCHAR un evento         -> elemento.addEventListener('click', ...)
     3. CAMBIAR algo               -> elemento.classList.toggle('clase')


   TAREA 1 · Menú móvil
   - Al pulsar #boton-menu, poner y quitar la clase "hidden" a #menu.
   - Actualizar aria-expanded del botón (true / false).
   - Cambiar el texto del botón: "Menú" / "Cerrar".
   - Extra: cerrar el menú al pulsar cualquiera de sus enlaces.


   TAREA 2 · Modo claro / oscuro
   - Al pulsar #boton-tema, poner y quitar la clase "dark" en <html>
     (document.documentElement). Los colores oscuros ya están en css/styles.css.
   - Cambiar el texto del botón: "Modo oscuro" / "Modo claro".
   - Actualizar aria-pressed del botón.
   - Guardar la elección en localStorage para que se recuerde al recargar.

*/

const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    const abierto = !menu.classList.contains("hidden");
    botonMenu.setAttribute("aria-expanded", abierto);
});


/* ========== MODO CLARO Y OSCURO PETUNIA ========== */

const botonTema = document.getElementById("boton-tema");

// Función para aplicar el tema
function cambiarTema(oscuro) {

    document.documentElement.classList.toggle("dark", oscuro);

    if (botonTema) {
        botonTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
        botonTema.setAttribute("aria-pressed", String(oscuro));
    }

    // Guardar la elección
    localStorage.setItem("tema-petunia", oscuro ? "oscuro" : "claro");
}

// Recuperar el tema guardado
const temaGuardado = localStorage.getItem("tema-petunia");

cambiarTema(temaGuardado === "oscuro");

// Detectar clic en el botón
if (botonTema) {
    botonTema.addEventListener("click", () => {

        const oscuro = document.documentElement.classList.contains("dark");

        cambiarTema(!oscuro);

    });
}
