document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuBar = document.getElementById("menuBar");

    menuToggle.addEventListener("click", function() {
        menuBar.classList.toggle("menu-open");
    });
});
