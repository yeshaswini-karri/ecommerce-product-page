document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.size-btn');
    const addToCartButton = document.getElementById('add-to-cart');
    const buyNowButton = document.getElementById('buy-now');
    let selectedSize = '';

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedSize = button.textContent;
        });
    });

    addToCartButton.addEventListener('click', () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }

        const product = {
            name: 'Women Printed Cotton Sweatshirt',
            size: selectedSize,
            price: 1499,
            quantity: 1
        };

        addToCart(product);
        alert('Product successfully added to cart!');
    });

    buyNowButton.addEventListener('click', () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }

        const product = {
            name: 'Women Printed Cotton Sweatshirt',
            size: selectedSize,
            price: 1499,
            quantity: 1
        };

        addToCart(product);
        window.location.href = '/cart/cart.html';
    });

    function addToCart(product) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    function updateCarousel() {
        const slideWidth = carouselItems[0].offsetWidth;
        const offset = -currentIndex * slideWidth;
        
        carouselItems.forEach(item => {
            item.style.transform = `translateX(${offset}px)`;
        });
    }
});
