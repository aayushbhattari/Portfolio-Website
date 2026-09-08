const revealSections = document.querySelectorAll('.section');
revealSections.forEach((section) => section.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealSections.forEach((section) => revealObserver.observe(section));
