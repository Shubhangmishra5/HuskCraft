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


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function showSlide(index) {
        const slider = document.querySelector(".slider");
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    // Auto-slide functionality
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Change slide every 3 seconds
});
