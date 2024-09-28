document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.description');
    const h1 = document.querySelectorAll('h2');

    let maxLengthP;
    let maxLengthH1;

    if (window.innerWidth <= 600) {
        // Schermi piccoli (smartphone)
        maxLengthP = 480;
        maxLengthH1 = 23;
    } else if (window.innerWidth <= 1024) {
        // Schermi medi (tablet)
        maxLengthP = 1500;
        maxLengthH1 = 40;
    } else {
        // Schermi grandi (desktop)
        maxLengthP = 1700;
        maxLengthH1 = 45;
    }

    paragraphs.forEach((paragraph, index) => {
        if (paragraph.textContent.length > maxLengthP) {
            paragraph.textContent = paragraph.textContent.slice(0, maxLengthP) + '...';
        }
    });

    h1.forEach((h1, index) => {
        if (h1.textContent.length > maxLengthH1) {
            h1.textContent = h1.textContent.slice(0, maxLengthH1) + '  ';
        }
    });
});
