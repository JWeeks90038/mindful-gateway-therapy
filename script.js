document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuBar = document.getElementById("menuBar");

    if (menuToggle && menuBar) {
        menuToggle.addEventListener("click", function() {
            menuBar.classList.toggle("menu-open");
        });
    }

    insertMissingFooterContactMeta();
    appendFooterSocialLinks();
});

function insertMissingFooterContactMeta() {
    const footer = document.querySelector("footer");

    if (!footer || footer.querySelector(".footer-contact-meta")) {
        return;
    }

    const footerContactMeta = document.createElement("div");
    const profileHref = "/sandy-karina-weeks-lpcc/";

    footerContactMeta.className = "footer-contact-meta";
    footerContactMeta.innerHTML = [
        '<a href="' + profileHref + '">Sandy Karina Weeks, LPCC</a> at Mindful Gateway Therapy | ',
        '<a href="tel:+18582554135">(858) 255-4135</a>'
    ].join("");

    const footerCopyright = footer.querySelector("p");

    if (footerCopyright) {
        footer.insertBefore(footerContactMeta, footerCopyright);
    } else {
        footer.appendChild(footerContactMeta);
    }
}

function appendFooterSocialLinks() {
    const footer = document.querySelector("footer");

    if (!footer || footer.querySelector(".footer-social")) {
        return;
    }

    const socialContainer = document.createElement("div");
    socialContainer.className = "footer-social";
    socialContainer.innerHTML = [
        '<a class="social-icon-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Mindful Gateway Therapy on Facebook">',
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.9.3-1.6 1.7-1.6H16V4.9c-.3 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H9v3h2.1v7h2.4Z"></path></svg>',
        '</a>',
        '<a class="social-icon-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Mindful Gateway Therapy on Instagram">',
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Z"></path></svg>',
        '</a>'
    ].join("");

    const footerSeal = footer.querySelector(".footer-seal");
    const footerCopyright = footer.querySelector("p");

    if (footerSeal) {
        footer.insertBefore(socialContainer, footerSeal);
    } else if (footerCopyright) {
        footer.insertBefore(socialContainer, footerCopyright);
    } else {
        footer.appendChild(socialContainer);
    }
}

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
