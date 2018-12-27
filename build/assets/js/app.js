// Site JS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal

window.sr = ScrollReveal();

// SECTION - HEADER

sr.reveal('#header .phone-mockup', {
    duration: 600,
    origin: 'right'
});

sr.reveal('#header #header-title', {
    duration: 500,
    delay: 800
});

sr.reveal('#header #header-subtext', {
    duration: 500,
    delay: 1000
});

sr.reveal('#header #email-submit-input-top', {
    duration: 500,
    delay: 1200
});

sr.reveal('#header #company-logos', {
    duration: 500,
    delay: 1400
});

// SECTION - FEATURES

sr.reveal('#features #feature-title', {
    duration: 500,
    delay: 100,
    origin: 'left'
});

sr.reveal('#features #feature-1', {
    duration: 300,
    delay: 1000
});

sr.reveal('#features #feature-2', {
    duration: 300,
    delay: 1150
});

sr.reveal('#features #feature-3', {
    duration: 300,
    delay: 1300
});

sr.reveal('#features #feature-4', {
    duration: 300,
    delay: 1450
});

sr.reveal('#features #feature-5', {
    duration: 300,
    delay: 1600
});

// SECTION - UI

sr.reveal('#ui #phones', {
    duration: 500,
    delay: 200,
    origin: 'left'
});

sr.reveal('#ui .section-text #ui-title', {
    duration: 600,
    delay: 900,
    origin: 'right'
});

sr.reveal('#ui .section-text #ui-subtitle', {
    duration: 600,
    delay: 1100,
    origin: 'right'
});