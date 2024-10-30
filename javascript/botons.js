document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.icono-boton');
    botones.forEach(boton => {
        boton.addEventListener('touchstart', () => {
            boton.style.backgroundColor = '#ffa500';
            boton.style.transform = 'scale(1.05)';
        });
        boton.addEventListener('touchend', () => {
            boton.style.backgroundColor = '#ff8c00';
            boton.style.transform = 'scale(1)';
        });
    });
});
