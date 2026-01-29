const elements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // 





