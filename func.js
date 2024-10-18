document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('.button-link');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar la acción predeterminada de los enlaces
            const url = enlace.getAttribute('data-url'); // Obtener la URL del atributo data-url
            window.open(url, '_blank'); // Abrir la URL en una nueva pestaña
        });
    });
});
