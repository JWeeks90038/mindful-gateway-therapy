document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuBar = document.getElementById("menuBar");

    menuToggle.addEventListener("click", function() {
        menuBar.classList.toggle("menu-open");
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 80;
        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);
