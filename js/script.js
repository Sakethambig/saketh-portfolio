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

// ScrollReveal Configuration
const sr = ScrollReveal({
    distance: '80px',
    duration: 800,
    easing: 'ease',
    reset: false
});

// Hero
sr.reveal('.hero-text', {
    origin: 'left'
});

sr.reveal('.hero-image', {
    origin: 'right',
    delay: 300
});

// About
sr.reveal('.about-image', {
    origin: 'left'
});

sr.reveal('.about-text', {
    origin: 'right',
    delay: 200
});

// Skills
sr.reveal('.skill-card', {
    origin: 'bottom',
    interval: 100
});

// Projects
sr.reveal('.project-card', {
    origin: 'bottom',
    interval: 150
});

// Education
sr.reveal('.timeline-item', {
    origin: 'left',
    interval: 200
});

// Contact
sr.reveal('.contact-card', {
    origin: 'bottom',
    interval: 120
});

// Footer
//sr.reveal('.footer', {origin: 'bottom'});
