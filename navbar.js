document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    for (let i = 0; i < 3; i++) {
        hamburger.appendChild(document.createElement('span'));
    }

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    nav.prepend(hamburger);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

