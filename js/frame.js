document.addEventListener('DOMContentLoaded', function() {
    const motto = document.querySelector('.motto');

    const frame = document.querySelector('.frame');
    const body = document.querySelector('body');

    // Disabilita lo scroll quando la pagina viene caricata
    body.classList.add('no-scroll');

    motto.addEventListener('animationend', function () {
        frame.classList.add('shrink-frame');
        // Riabilita lo scroll dopo che il video e il frame si sono rimpiccioliti
        body.classList.remove('no-scroll');
    });
});

