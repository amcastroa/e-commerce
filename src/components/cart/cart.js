function cart() {
  const ul = document.getElementById('cart_list');
  const itemsCart = JSON.parse(localStorage.getItem('cart')) || [];

  ul.innerHTML = '';

  for (const product of itemsCart) {
    const li = document.createElement('li');
    li.classList.add('section__li--cart');

    li.innerHTML = `
      <img src=${product.image} alt=${product.name} class='section__img--cart'>
      <div class='section__div--cart'>
        <h3 class='section__h3--cart'>${product.name}</h3>
        <h4 class='section__h4--cart' >$${product.price}.00</h4>
        <p class='section__p--cart'>Talla: ${product.size}</p>
        <div class='section__div--buttonsCart'>
          <div class='section__div--modifed'>
            <button class='decrement'>-</button>
            <h4 class='quantity'>${product.quantity}</h4>
            <button class='increment'>+</button>
          </div>
          <button class='remove'>
            <i class='bx bxs-trash' style='color:#737171'></i>
          </button>
        </div>
      </div>
    `;

    ul.appendChild(li);

    // Add event listeners for the buttons within each item
    const incrementButton = li.querySelector('.increment');
    const decrementButton = li.querySelector('.decrement');
    const removeButton = li.querySelector('.remove');
    const quantityElement = li.querySelector('.quantity');

    incrementButton.addEventListener('click', () => {
      // Increment the quantity of the product
      product.quantity += 1;
      quantityElement.textContent = product.quantity;
      // Update the cart in local storage
      updateLocalStorage(itemsCart);
    });

    decrementButton.addEventListener('click', () => {
      // Decrement the quantity of the product, but ensure it's not less than 1
      if (product.quantity > 1) {
        product.quantity -= 1;
        quantityElement.textContent = product.quantity;
        // Update the cart in local storage
        updateLocalStorage(itemsCart);
      }
    });

    removeButton.addEventListener('click', () => {
      // Remove the product from the cart
      const productIndex = itemsCart.indexOf(product);
      if (productIndex !== -1) {
        itemsCart.splice(productIndex, 1);
        ul.removeChild(li);
        // Update the cart in local storage
        updateLocalStorage(itemsCart);
      }
    });
  }
}

function updateLocalStorage(cartItems) {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

export default cart;
