const slides = document.querySelectorAll('.slide-elem');
let currentIndex = 0;

// Inizializza la prima slide come visibile
function initializeSlider() {
    slides[currentIndex].classList.add('active');
}

// Funzione per aggiornare la visibilità delle slide
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.style.left = '100%'; // Posiziona fuori schermo
        slide.style.opacity = '0'; // Nasconde la slide
    });

    // Mostra la slide corrente
    slides[currentIndex].classList.add('active');
    slides[currentIndex].style.left = '0'; // Posiziona la slide corrente sullo schermo
    slides[currentIndex].style.opacity = '1'; // Mostra la slide corrente
}

// Funzione per mostrare la slide successiva
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

// Funzione per mostrare la slide precedente
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

// Event listeners per i pulsanti
document.querySelector('.button-next').addEventListener('click', showNextSlide);
document.querySelector('.button-prev').addEventListener('click', showPrevSlide);

// Inizializza lo slider
initializeSlider();