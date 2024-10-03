const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.service-section');
hiddenElements.forEach((el) => observer.observe(el));