

// function myFunction() {
//     const element = document.querySelector(".wholecart");
//     element.remove();
// }

// function toggleContent() {
//     const hiddenParagraphs = document.querySelectorAll('.more');
//     const button = document.querySelector('.cart-button2'); 
//     hiddenParagraphs.forEach(p => {
//     p.classList.toggle('visible');
//     });
// }



function removeCartItem() {
    console.log("remainingItems");
    // Select the cart item and the empty cart message element
    const element = document.querySelector('.wholecart');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartContainer = document.querySelector('.wholecart');

    // Remove the cart item from the DOM
    if (element) {
        element.remove();
    }

    // // Check if the cart is now empty
    const remainingItems = cartContainer.querySelectorAll('.wholecart');  
    console.log("remainingItems");
    // if (remainingItems.length === 0) {
    //     emptyCartMessage.style.display = 'block';
    // }
    if (emptyCartMessage.length === 0) {
        emptyCartMessage.style.display = 'block';
    }
    console.log("Cart is empty, showing empty message");
}
