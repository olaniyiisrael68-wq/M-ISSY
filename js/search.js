// M-ISSY Tech Store - Search Handling

document.addEventListener('DOMContentLoaded', () => {
  const searchForms = document.querySelectorAll('.search-form');
  
  searchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input').value.trim();
      
      if(input) {
        // Redirect to shop page with query string
        window.location.href = `shop.html?q=${encodeURIComponent(input)}`;
      }
    });
  });
});
