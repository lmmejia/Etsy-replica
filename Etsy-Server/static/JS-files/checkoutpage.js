




function removeCartItem() {
    console.log("remainingItems");
    // Select the cart item and the empty cart message element
    const element = document.querySelector('.cart-item');
    const checkout = document.querySelector('.checkout');
    const cartContainer = document.querySelector('.wholecart');

    if (checkout) {
        checkout.remove();
    }
    // Remove the cart item from the DOM
    if (element) {
        element.remove();
    }

    // // Check if the cart is now empty
    const remainingItems = cartContainer.querySelectorAll('.wholecart');  
    console.log(remainingItems);
    if (remainingItems.length === 0) {
        document.getElementById('emptyCartMessage').style.display = 'block';
        document.getElementById('header').style.display = 'block';
        // document.getElementById('checkout').style.display = 'block';
        console.log("executed visibility")
    }


}
