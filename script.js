// ===== Scroll Reveal Animation =====
window.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - 150) {
            reveal.classList.add('active');
        }
    });
});


// ===== Typing Animation in Hero Section =====
const text = "Hello, I'm Surya ";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

window.addEventListener("load", typeEffect);
