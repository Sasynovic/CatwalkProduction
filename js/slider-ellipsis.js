document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.description');
    const h1 = document.querySelectorAll('h2');

    const maxLengthP = 500;
    const maxLengthH1 = 23;

    paragraphs.forEach((paragraph, index) => {
        if (paragraph.textContent.length > maxLengthP) {
            paragraph.textContent = paragraph.textContent.slice(0, maxLengthP) + '...';
        }
    });

    h1.forEach((h1, index) => {
        if (h1.textContent.length > maxLengthH1) {
            h1.textContent = h1.textContent.slice(0, maxLengthH1) + ' - ';
        }
    });
});
