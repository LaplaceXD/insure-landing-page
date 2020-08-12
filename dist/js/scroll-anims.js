let fadeInElements = document.querySelectorAll(".fade-in");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0)
            entry.target.style.animation = `fade-in 1s ease-in-out forwards`;
    });
});

fadeInElements.forEach((fadeInElement) => observer.observe(fadeInElement));
