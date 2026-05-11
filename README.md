# M-ISSY Tech Store

A complete, production-ready, high-converting e-commerce website built entirely with static HTML, CSS, and Vanilla JavaScript. 

No frameworks. No backend. No complicated build tools.

## Features
- **Frontend Architecture:** Pure HTML5, CSS3, and ES6 JavaScript.
- **Dynamic Product Rendering:** Products are injected dynamically via JavaScript on the shop and homepage.
- **Filtering & Search:** Fully functional client-side filtering on the shop page (by Category, Brand, Max Price, Search query).
- **Cart System:** Fully functional shopping cart that persists using `localStorage`.
- **WhatsApp Integration:** All checkout operations format the cart items into a readable message and open a pre-filled WhatsApp chat to complete the order directly with the vendor.
- **Google AdSense:** Placeholder ad slots are pre-configured in standard positions on the page.
- **Responsive Design:** Mobile-first approach, works beautifully on phones, tablets, and desktops.
- **SEO Optimized:** Includes proper meta tags, OpenGraph tags, semantic HTML, `sitemap.xml`, and `robots.txt`.

## File Structure
```
/
├── index.html           # Homepage
├── shop.html            # Product Catalog with filtering
├── product.html         # Dynamic single product detail page
├── about.html           # About page
├── contact.html         # Contact page with FAQ
├── blog.html            # Blog listing page
├── blog-post.html       # Individual blog post template
├── privacy-policy.html  # Privacy policy and AdSense disclosure
├── robots.txt           # Search engine directive
├── sitemap.xml          # XML sitemap
├── README.md            # Documentation
├── css/
│   └── style.css        # Entire website stylesheet
└── js/
    ├── products.js      # Array of 30 product objects and global helpers
    ├── cart.js          # Shopping cart logic and UI rendering
    ├── main.js          # Generic UI interactions, scroll effects, and home rendering
    └── search.js        # Site-wide search redirect logic
```

## How to Deploy to Netlify (or any static host)
Deploying this website requires absolutely zero build steps. 

1. **Get the files:** Download or extract all the files in this project into a single folder.
2. **Access Netlify:** Go to [Netlify Drop](https://app.netlify.com/drop) in your web browser. (You may need to create a free account).
3. **Upload:** Drag and drop the specific folder containing your `index.html` file into the designated upload area on Netlify.
4. **Done:** Netlify will instantly publish your site and provide you with a live URL.

*Note: You can apply the same logic to GitHub Pages, Cloudflare Pages, Vercel, or any traditional cPanel shared hosting environment.*

## Customization Guide

### 1. Updating Products
Open `js/products.js` to modify, add, or remove products. Ensure the product object follows this structure:
```javascript
{ 
  id: 1, 
  name: "Product Name", 
  category: "Phones", 
  brand: "Samsung", 
  price: 1250000, 
  oldPrice: 1350000, // Or null
  image: "image_url.jpg", 
  rating: 4.8, 
  description: "Product description here.", 
  inStock: true, 
  isNew: true, 
  isFeatured: true 
}
```

### 2. Updating WhatsApp Numbers
The WhatsApp order flow currently directs to `2348051152098`. 
- To change this globally, open `js/cart.js`, find `const waNumber = "2348051152098";` and change it.
- Also search for `2348051152098` across the HTML files (especially `contact.html` and the floating widget) and update it to your active number.

### 3. Activating Google AdSense
Currently, all AdSense codes use standard placeholders like `ca-pub-XXXXXXXXXX`. Once your website is approved by Google AdSense:
1. Find all `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=...` tags across all HTML files.
2. Replace the `ca-pub-XXXXXXXXXX` with your actual AdSense Publisher ID.
3. Update the `data-ad-slot` values with specific ad unit IDs created in your AdSense dashboard.
