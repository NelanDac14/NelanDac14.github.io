document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll('.fade-in');

    const showOnScroll = () => {
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    };

    showOnScroll();
    window.addEventListener('scroll', showOnScroll);

});