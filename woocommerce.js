// WooCommerce specific functionality
const WooCommerce = {
    init: function() {
        this.initQuantityButtons();
        this.initAjaxCart();
    },

    initQuantityButtons: function() {
        // Quantity increment/decrement buttons
        document.querySelectorAll('.quantity').forEach(wrapper => {
            const input = wrapper.querySelector('input[type="number"]');
            const incrementBtn = wrapper.querySelector('.increment');
            const decrementBtn = wrapper.querySelector('.decrement');

            if (incrementBtn) {
                incrementBtn.addEventListener('click', () => {
                    input.value = parseInt(input.value) + 1;
                    input.dispatchEvent(new Event('change'));
                });
            }

            if (decrementBtn) {
                decrementBtn.addEventListener('click', () => {
                    if (input.value > 1) {
                        input.value = parseInt(input.value) - 1;
                        input.dispatchEvent(new Event('change'));
                    }
                });
            }
        });
    },

    initAjaxCart: function() {
        // Ajax add to cart functionality
        document.querySelectorAll('.add_to_cart_button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Add to cart logic here
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    WooCommerce.init();
}); 