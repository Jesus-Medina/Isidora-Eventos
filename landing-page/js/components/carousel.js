export const carousel = {
    initialize: () => {
        const slides = document.querySelectorAll('.carousel__slide');
        const buttons = document.querySelectorAll('.carousel__button');
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        buttons.forEach(button => {
            button.addEventListener('click', nextSlide);
        });
    }
};

// Auto-inicialización cuando se carga el script
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.carousel')) {
        carousel.initialize();
    }
});