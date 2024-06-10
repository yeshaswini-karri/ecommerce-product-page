document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    calculateSubtotal();

    function displayCartItems() {
        const cartItemsList = document.getElementById('cart-items');
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


        if (cartItems.length === 0) {
            cartItemsList.innerHTML = '<li>Oops, your cart is empty!</li>';
            return;
        }

        cartItemsList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Size: ${item.size} - ₹${item.price} x ${item.quantity}`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn'); // Add a class for styling
            removeBtn.addEventListener('click', () => {
                removeCartItem(index);
            });
            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
        });
    }

    function removeCartItem(index) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
        calculateSubtotal(); // Recalculate subtotal after removing item
    }

    function calculateSubtotal() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let subtotal = 0;
        cartItems.forEach(item => {
            subtotal += item.price * item.quantity;
        });

        // Display subtotal in the HTML
        const subtotalElement = document.getElementById('subtotal');
        subtotalElement.textContent = `Subtotal: ₹${subtotal}`;
    }
});
