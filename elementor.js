// Elementor specific functionality
const elementorFrontend = {
    init: function() {
        // Initialize animations
        this.initAnimations();
        // Initialize lazy loading
        this.initLazyLoad();
    },

    initAnimations: function() {
        const animatedElements = document.querySelectorAll('.elementor-element');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('elementor-animated');
                }
            });
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    },

    initLazyLoad: function() {
        const lazyloadImages = document.querySelectorAll('img.lazy');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyloadImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    elementorFrontend.init();
}); 