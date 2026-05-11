// M-ISSY Tech Store - Products Data
const products = [
  { id: 1, name: "Samsung Galaxy S24 Ultra", category: "Phones", brand: "Samsung", price: 1250000, oldPrice: 1350000, image: "https://picsum.photos/seed/s24/400/400", rating: 4.8, description: "Super fast AI-powered smartphone with titanium frame.", inStock: true, isNew: true, isFeatured: true },
  { id: 2, name: "Apple iPhone 15 Pro Max", category: "Phones", brand: "Apple", price: 1450000, oldPrice: 1550000, image: "https://picsum.photos/seed/ip15/400/400", rating: 4.9, description: "Forged in titanium. Features the A17 Pro chip.", inStock: true, isNew: false, isFeatured: true },
  { id: 3, name: "Tecno Phantom V Fold", category: "Phones", brand: "Tecno", price: 950000, oldPrice: 1050000, image: "https://picsum.photos/seed/phantom/400/400", rating: 4.5, description: "Premium foldable smartphone with massive display.", inStock: true, isNew: true, isFeatured: true },
  { id: 4, name: "Infinix Zero 30 5G", category: "Phones", brand: "Infinix", price: 320000, oldPrice: 350000, image: "https://picsum.photos/seed/zero30/400/400", rating: 4.4, description: "Vlog-centric smartphone with 4K 60fps front camera.", inStock: true, isNew: false, isFeatured: false },
  
  { id: 5, name: "HP Envy x360 2-in-1", category: "Laptops", brand: "HP", price: 780000, oldPrice: 820000, image: "https://picsum.photos/seed/hpenvy/400/400", rating: 4.6, description: "Versatile 2-in-1 laptop for creators and professionals.", inStock: true, isNew: true, isFeatured: true },
  { id: 6, name: "Apple MacBook Pro M3 (14-inch)", category: "Laptops", brand: "Apple", price: 1950000, oldPrice: null, image: "https://picsum.photos/seed/macm3/400/400", rating: 5.0, description: "Mind-blowing M3 chip performance for heavy workloads.", inStock: true, isNew: true, isFeatured: true },
  { id: 7, name: "Dell XPS 15", category: "Laptops", brand: "Dell", price: 1650000, oldPrice: null, image: "https://picsum.photos/seed/dellxps/400/400", rating: 4.7, description: "The ultimate 15-inch laptop with InfinityEdge display.", inStock: true, isNew: false, isFeatured: false },
  { id: 8, name: "Lenovo ThinkPad X1 Carbon", category: "Laptops", brand: "Lenovo", price: 1350000, oldPrice: 1500000, image: "https://picsum.photos/seed/thinkpad/400/400", rating: 4.8, description: "Ultralight business laptop with robust security.", inStock: true, isNew: false, isFeatured: false },

  { id: 9, name: "LG 65-inch OLED C3 TV", category: "TVs", brand: "LG", price: 2100000, oldPrice: 2300000, image: "https://picsum.photos/seed/lgc3/400/400", rating: 4.9, description: "Exceptional picture quality with self-lit OLED pixels.", inStock: true, isNew: true, isFeatured: true },
  { id: 10, name: "Hisense 55-inch U8K Mini-LED", category: "TVs", brand: "Hisense", price: 750000, oldPrice: 800000, image: "https://picsum.photos/seed/hisenseu8k/400/400", rating: 4.6, description: "Bright mini-LED display for incredible HDR performance.", inStock: true, isNew: true, isFeatured: false },
  { id: 11, name: "Samsung 75-inch Neo QLED 8K", category: "TVs", brand: "Samsung", price: 4500000, oldPrice: 5000000, image: "https://picsum.photos/seed/samqled/400/400", rating: 4.8, description: "The pinnacle of Samsung's 8K TV technology.", inStock: false, isNew: true, isFeatured: false },
  { id: 12, name: "TCL 50-inch 4K Smart Roku TV", category: "TVs", brand: "TCL", price: 380000, oldPrice: 420000, image: "https://picsum.photos/seed/tclroku/400/400", rating: 4.3, description: "Affordable 4K TV with excellent smart features.", inStock: true, isNew: false, isFeatured: false },

  { id: 13, name: "Hisense 205L Double Door Fridge", category: "Fridges", brand: "Hisense", price: 280000, oldPrice: 310000, image: "https://picsum.photos/seed/hisensef/400/400", rating: 4.5, description: "Energy efficient double door refrigerator.", inStock: true, isNew: false, isFeatured: true },
  { id: 14, name: "LG InstaView Side-by-Side Refrigerator", category: "Fridges", brand: "LG", price: 1850000, oldPrice: null, image: "https://picsum.photos/seed/lging/400/400", rating: 4.7, description: "Knock twice to see inside without opening the door.", inStock: true, isNew: true, isFeatured: false },
  { id: 15, name: "Thermocool 150L Chest Freezer", category: "Freezers", brand: "TEC", price: 210000, oldPrice: 230000, image: "https://picsum.photos/seed/chestfr/400/400", rating: 4.4, description: "Fast freezing and retains ice for long after power cut.", inStock: true, isNew: false, isFeatured: false },
  
  { id: 16, name: "Sony WH-1000XM5 Headphones", category: "Headphones", brand: "Sony", price: 380000, oldPrice: 420000, image: "https://picsum.photos/seed/sonyxm5/400/400", rating: 4.9, description: "Industry leading noise-canceling wireless headphones.", inStock: true, isNew: true, isFeatured: true },
  { id: 17, name: "JBL Charge 5 Bluetooth Speaker", category: "Accessories", brand: "JBL", price: 140000, oldPrice: 160000, image: "https://picsum.photos/seed/jblc5/400/400", rating: 4.7, description: "Waterproof portable speaker with built-in powerbank.", inStock: true, isNew: false, isFeatured: false },
  { id: 18, name: "Oraimo FreePods 4", category: "Earbuds", brand: "Oraimo", price: 35000, oldPrice: 45000, image: "https://picsum.photos/seed/freepods4/400/400", rating: 4.5, description: "Active noise cancellation and heavy bass sound.", inStock: true, isNew: true, isFeatured: true },
  { id: 19, name: "Apple AirPods Pro (2nd Gen)", category: "Earbuds", brand: "Apple", price: 280000, oldPrice: 300000, image: "https://picsum.photos/seed/airpods2/400/400", rating: 4.8, description: "Rich audio quality with next-level active noise cancellation.", inStock: true, isNew: false, isFeatured: false },
  
  { id: 20, name: "Apple Watch Series 9", category: "Smartwatches", brand: "Apple", price: 520000, oldPrice: 550000, image: "https://picsum.photos/seed/awatch9/400/400", rating: 4.7, description: "Smarter, brighter, and mightier.", inStock: true, isNew: true, isFeatured: true },
  { id: 21, name: "Samsung Galaxy Watch 6 Classic", category: "Smartwatches", brand: "Samsung", price: 380000, oldPrice: 400000, image: "https://picsum.photos/seed/gwatch6/400/400", rating: 4.6, description: "Timeless design with a rotating bezel.", inStock: true, isNew: false, isFeatured: false },
  { id: 22, name: "Xiaomi Smart Band 8", category: "Smartwatches", brand: "Xiaomi", price: 35000, oldPrice: 40000, image: "https://picsum.photos/seed/miband8/400/400", rating: 4.4, description: "Affordable fitness tracking with a vibrant AMOLED display.", inStock: true, isNew: false, isFeatured: false },
  { id: 23, name: "Oraimo Watch 2 Pro", category: "Smartwatches", brand: "Oraimo", price: 45000, oldPrice: 55000, image: "https://picsum.photos/seed/oraimow2/400/400", rating: 4.3, description: "Bluetooth calling and health monitoring.", inStock: true, isNew: false, isFeatured: false },

  { id: 24, name: "Apple iPad Pro 12.9-inch (M2)", category: "Tablets", brand: "Apple", price: 1650000, oldPrice: null, image: "https://picsum.photos/seed/ipadpro/400/400", rating: 4.9, description: "The ultimate iPad experience with the blazing-fast M2.", inStock: true, isNew: true, isFeatured: true },
  { id: 25, name: "Samsung Galaxy Tab S9 Ultra", category: "Tablets", brand: "Samsung", price: 1550000, oldPrice: 1700000, image: "https://picsum.photos/seed/tabs9/400/400", rating: 4.8, description: "Massive screen, S Pen included, water and dust resistant.", inStock: true, isNew: true, isFeatured: false },
  { id: 26, name: "Lenovo Tab P11 Gen 2", category: "Tablets", brand: "Lenovo", price: 320000, oldPrice: 350000, image: "https://picsum.photos/seed/lenovotab/400/400", rating: 4.5, description: "Great for entertainment and light productivity.", inStock: true, isNew: false, isFeatured: false },

  { id: 27, name: "Anker PowerCore III 20K Power Bank", category: "Accessories", brand: "Anker", price: 55000, oldPrice: 65000, image: "https://picsum.photos/seed/ankerpb/400/400", rating: 4.8, description: "High capacity power bank with USB-C fast charging.", inStock: true, isNew: false, isFeatured: true },
  { id: 28, name: "Intel Core i9-14900K Processor", category: "Accessories", brand: "Intel", price: 780000, oldPrice: null, image: "https://picsum.photos/seed/inteli9/400/400", rating: 4.9, description: "Unleash desktop performance for extreme gamers.", inStock: true, isNew: true, isFeatured: false },
  { id: 29, name: "Logitech MX Master 3S Mouse", category: "Accessories", brand: "Logitech", price: 120000, oldPrice: 140000, image: "https://picsum.photos/seed/mxmaster/400/400", rating: 4.8, description: "The ultimate precision mouse for creators and coders.", inStock: true, isNew: false, isFeatured: false },
  { id: 30, name: "TCL 1.5HP Split Air Conditioner", category: "Accessories", brand: "TCL", price: 350000, oldPrice: 380000, image: "https://picsum.photos/seed/tclac/400/400", rating: 4.5, description: "Fast cooling and energy saving inverter AC.", inStock: true, isNew: true, isFeatured: false }
];

// Helper to format currency
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
};

// Helper for product badge color
const getBadgeClass = (brand) => {
  const brandLower = brand.toLowerCase();
  if(brandLower === 'samsung') return 'badge-samsung';
  if(brandLower === 'apple') return 'badge-apple';
  if(brandLower === 'tecno' || brandLower === 'infinix') return 'badge-tecno';
  if(brandLower === 'oraimo') return 'badge-oraimo';
  return 'badge-default';
};

// Expose globally
window.productsData = products;
window.formatPrice = formatPrice;
window.getBadgeClass = getBadgeClass;
