document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const words = ["Desarrollo Full-Stack.", "Arquitectura Cloud.", "Automatización Inteligente.", "Experiencias Digitales."];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typewriter = document.getElementById("typewriter");

    function type() {
        currentWord = words[i];
        if (isDeleting) {
            typewriter.textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
            }
        } else {
            typewriter.textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();

    // Advanced Reveal on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.project-item, .skill-card, .hero-wrapper, .footer-glass');
    scrollElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(el);
    });

    // Add active class style dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
