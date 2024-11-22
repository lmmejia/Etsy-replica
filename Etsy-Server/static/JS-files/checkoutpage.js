

document.addEventListener("DOMContentLoaded", () => {
    const cart = document.getElementById("cart");
    const cartContainer = document.querySelector('.wholecart');
  
    // Attach event listener to the cart
    cart.addEventListener("click", (event) => { 
         // Check if a remove button was clicked
      if (event.target.classList.contains("cart-button2")) {
        // Find the corresponding cart item
        const cartItem = event.target.closest(".wholecart");
        if (cartItem) {
          // Remove the cart item from the DOM
          cartItem.remove();
        }
      }
    });
  });