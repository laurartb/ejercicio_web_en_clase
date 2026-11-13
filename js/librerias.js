
/* ==========================================
   PETUNIA · AOS (ANIMATE ON SCROLL)
   Animaciones al desplazarse por la web
   ========================================== */

if (typeof AOS !== "undefined") {

    // Animaciones de títulos, fotografías y bloques
    document.querySelectorAll(".animar-scroll").forEach((elemento) => {
        elemento.setAttribute("data-aos", "fade-up");
    });

    // Animaciones escalonadas de tarjetas
    document.querySelectorAll(".grupo-animado").forEach((grupo) => {

        const tarjetas = grupo.querySelectorAll(".tarjeta-animada");

        tarjetas.forEach((tarjeta, indice) => {

            tarjeta.setAttribute("data-aos", "fade-up");

            // Retraso progresivo entre las tarjetas
            const retraso = (indice % 3) * 100;

            tarjeta.setAttribute("data-aos-delay", retraso);

        });

    });

    // Configuración general de AOS
    AOS.init({
        duration: 800,
        easing: "ease-out",
        offset: 80,
        once: true,
        disable: () => window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    });

}
