window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if(elementTop < windowHeight - 150){
            reveal.classList.add('active');
        }
    });
});
