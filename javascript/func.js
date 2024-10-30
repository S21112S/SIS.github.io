document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('.button-link');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault(); // Evita la acción predeterminada de los enlaces
            const url = enlace.getAttribute('data-url'); // Obtiene la URL del atributo data-url
            if (url) { // Verifica que exista la URL antes de intentar abrirla
                window.open(url, '_blank'); // Abre la URL en una nueva pestaña
            } else {
                console.error('El enlace no tiene una URL válida en el atributo data-url');
            }
        });
    });
});
