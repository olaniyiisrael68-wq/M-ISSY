// M-ISSY Tech Store - Main Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Remove Loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }
  }, 300);

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  
  if(hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Scroll animations & Back to top
  const faders = document.querySelectorAll('.fade-in');
  const backToTop = document.getElementById('backToTop');
  
  const scrollHandler = () => {
    if(window.scrollY > 300) {
      if(backToTop) backToTop.classList.add('show');
    } else {
      if(backToTop) backToTop.classList.remove('show');
    }
    
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        fader.classList.add('appear');
      }
    });
  };
  
  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // trigger once on load
  
  if(backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Newsletter Submit (Local storage mock)
  const newsletterForm = document.getElementById('newsletter-form');
  if(newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input').value;
      if(input) {
        localStorage.setItem('missy_newsletter_email', input);
        alert('Thank you for subscribing to new arrivals and offers!');
        newsletterForm.reset();
      }
    });
  }

  // Render Homepage Featured Products
  const featuredContainer = document.getElementById('featured-products-container');
  if(featuredContainer && window.productsData) {
    const featured = window.productsData.filter(p => p.isFeatured).slice(0, 8);
    renderProducts(featured, featuredContainer);
  }

  // Set current year in footer
  const yearEl = document.getElementById('currentYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});

// Helper to generate a single product card HTML
function generateProductCardHTML(product) {
  const badgeClass = window.getBadgeClass(product.brand);
  const waNumber = "2348051152098";
  const waText = encodeURIComponent(`Hello M-ISSY, I want to order ${product.name} for ${window.formatPrice(product.price)}`);
  
  return `
    <div class="product-card fade-in">
      <div class="product-badge ${badgeClass}">${product.brand}</div>
      <a href="product.html?id=${product.id}" class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </a>
      <div class="product-info">
        <div class="product-rating">★★★★★ (${product.rating})</div>
        <a href="product.html?id=${product.id}">
          <h3 class="product-title">${product.name}</h3>
        </a>
        <div class="product-price">
          ${window.formatPrice(product.price)}
          ${product.oldPrice ? `<span class="old-price">${window.formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
          <a href="https://wa.me/${waNumber}?text=${waText}" target="_blank" class="btn btn-whatsapp text-center" style="display:block; text-decoration:none; text-align:center;">Order on WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

// Helper to render an array of products into a container
function renderProducts(productsArray, container) {
  if(!container) return;
  container.innerHTML = productsArray.map(p => generateProductCardHTML(p)).join('');
}

window.renderProducts = renderProducts;
window.generateProductCardHTML = generateProductCardHTML;
