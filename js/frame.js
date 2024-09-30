document.addEventListener('DOMContentLoaded', function() {
    const frame = document.querySelector('.frame');
    const body = document.querySelector('body');

    // Disabilita lo scroll quando la pagina viene caricata
    body.classList.add('no-scroll');

    // Imposta un timer per far partire l'animazione di shrinking del frame
    setTimeout(() => {
        frame.classList.add('shrink-frame');

        // Riabilita lo scroll dopo l'inizio dell'animazione di shrinking
        body.classList.remove('no-scroll');
    }, 4000); // Imposta il tempo in millisecondi (qui 4 secondi)
});
