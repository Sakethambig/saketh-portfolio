// ==========================
// MOBILE NAVIGATION
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(navLinks.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

// Close menu after clicking a link
document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// ==========================
// SCROLL REVEAL (Desktop Only)
// ==========================

if (window.innerWidth > 768) {

    const sr = ScrollReveal({
        distance: '40px',
        duration: 700,
        delay: 0,
        easing: 'ease-out',
        reset: false,
        viewFactor: 0.15
    });

    sr.reveal('.hero-text', { origin: 'left' });
    sr.reveal('.hero-image', { origin: 'right' });

    sr.reveal('.about-image', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right' });

    sr.reveal('.skill-card', {
        origin: 'bottom',
        interval: 50
    });

    sr.reveal('.project-card', {
        origin: 'bottom',
        interval: 50
    });

    sr.reveal('.timeline-item', {
        origin: 'left',
        interval: 50
    });

    sr.reveal('.contact-card', {
        origin: 'bottom',
        interval: 50
    });

}
