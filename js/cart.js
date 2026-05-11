// M-ISSY Tech Store - Cart Management

let cart = JSON.parse(localStorage.getItem('missy_cart')) || [];

// Add item to cart
function addToCart(productId) {
  const product = window.productsData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  
  // Show sidebar
  document.querySelector('.cart-overlay').classList.add('active');
  document.querySelector('.cart-sidebar').classList.add('active');
}

// Remove item
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

// Update quantity
function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

// Save to localStorage
function saveCart() {
  localStorage.setItem('missy_cart', JSON.stringify(cart));
}

// Render Cart HTML
function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartBadges = document.querySelectorAll('.cart-badge');
  const cartTotalEl = document.getElementById('cart-total-amount');
  
  if(!cartItemsContainer) return; // If script runs on a page without cart HTML
  
  // Update badges
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadges.forEach(badge => badge.textContent = totalItems);

  // Render items
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; margin-top:20px;">Your cart is empty.</p>';
    if(cartTotalEl) cartTotalEl.textContent = '₦0';
    return;
  }

  let totalAmount = 0;

  cart.forEach(item => {
    totalAmount += item.price * item.quantity;
    
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">${window.formatPrice(item.price)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})" style="margin-left: auto;">Remove</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  if(cartTotalEl) cartTotalEl.textContent = window.formatPrice(totalAmount);
}

// Complete order via WhatsApp
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  
  let message = "Hello M-ISSY, I would like to place an order from my cart:%0A%0A";
  let total = 0;
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ${item.quantity} x ${window.formatPrice(item.price)}%0A`;
    total += item.price * item.quantity;
  });
  
  message += `%0A*Total: ${window.formatPrice(total)}*%0A%0APlease let me know how to proceed with payment and delivery.`;
  
  const waNumber = "2348051152098";
  const url = `https://wa.me/${waNumber}?text=${message}`;
  window.open(url, '_blank');
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkoutViaWhatsApp = checkoutViaWhatsApp;

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  
  // Cart close/open bindings
  const overlay = document.querySelector('.cart-overlay');
  const sidebar = document.querySelector('.cart-sidebar');
  const closeBtn = document.querySelector('.close-cart');
  const cartIcon = document.querySelector('.cart-icon-wrapper');
  
  if(cartIcon && overlay && sidebar) {
    cartIcon.addEventListener('click', () => {
      overlay.classList.add('active');
      sidebar.classList.add('active');
    });
  }
  
  if(closeBtn && overlay && sidebar) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      sidebar.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      sidebar.classList.remove('active');
    });
  }
});
