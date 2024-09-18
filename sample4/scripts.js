document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on add to cart and buy now buttons
    const addToCartButton = document.querySelector('.add-to-cart');
    const buyNowButton = document.querySelector('.buy-now');

    addToCartButton.addEventListener('click', () => {
        addToCartButton.classList.add('button-clicked');
        setTimeout(() => {
            addToCartButton.classList.remove('button-clicked');
        }, 300);
    });

    buyNowButton.addEventListener('click', () => {
        buyNowButton.classList.add('button-clicked');
        setTimeout(() => {
            buyNowButton.classList.remove('button-clicked');
        }, 300);
    });
});
