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

// ScrollReveal (Desktop Only)
if (window.innerWidth > 768) {

    const sr = ScrollReveal({
        distance: '40px',
        duration: 700,
        easing: 'ease-out',
        reset: false
    });

    sr.reveal('.hero-text', { origin: 'left' });
    sr.reveal('.hero-image', { origin: 'right', delay: 100 });

    sr.reveal('.about-image', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right', delay: 100 });

    sr.reveal('.skill-card', { origin: 'bottom', interval: 50 });
    sr.reveal('.project-card', { origin: 'bottom', interval: 50 });
    sr.reveal('.timeline-item', { origin: 'left', interval: 50 });
    sr.reveal('.contact-card', { origin: 'bottom', interval: 50 });

}
