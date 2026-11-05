
/* ==========================================
   PETUNIA · GSAP + SCROLLTRIGGER
   ========================================== */

if (typeof gsap !== "undefined" &&
  typeof ScrollTrigger !== "undefined") {

  gsap.registerPlugin(ScrollTrigger);

  const movimientoReducido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!movimientoReducido) {

    // Animaciones individuales
    gsap.utils.toArray(".animar-scroll").forEach((elemento) => {

      gsap.fromTo(elemento,
        {
          autoAlpha: 0,
          y: 35
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elemento,
            start: "top 95%",
            once: true
          }
        }
      );

    });

    // Animaciones de tarjetas
    document.querySelectorAll(".grupo-animado").forEach((grupo) => {

      const tarjetas = grupo.querySelectorAll(".tarjeta-animada");

      if (tarjetas.length === 0) return;

      gsap.fromTo(tarjetas,
        {
          autoAlpha: 0,
          y: 35
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grupo,
            start: "top 90%",
            once: true
          }
        }
      );

    });

    // Actualizar posiciones después de cargar las imágenes
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

  }
}
