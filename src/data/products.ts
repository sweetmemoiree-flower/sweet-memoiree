export const categories = [
  { id: 'standing-acrylic', name: 'Standing Acrylic' },
  { id: 'woody-acrylic', name: 'Woody Acrylic' },
  { id: 'blooms-bloombox', name: 'Blooms & Bloombox' },
  { id: 'bouquets', name: 'Bouquets' },
  { id: 'money-blooms', name: 'Money Blooms' },
];

export const products = [
  // Standing Acrylic
  {
    id: 'sa-1',
    categoryId: 'standing-acrylic',
    name: 'Standing Acrylic',
    size: '50 x 40 cm',
    options: [
      { name: 'Standard', price: '330k' },
      { name: 'Full Flower', price: '380k' }
    ],
    details: 'Elegant acrylic signage with premium floral accents. Perfect for greetings or event decor.',
    flowers: 'Premium Artificial Silks, Preserved Baby\'s Breath, Mixed Greenery.',
    care: 'Keep in a cool, dry place. Avoid direct sunlight. Dust lightly with a soft brush if needed.',
    palettes: 'Pastel Dream, Classic White & Gold, Moody Midnight, Custom Request.',
    image: '/Standing_Acrylic_Standart.jpeg'
  },
  {
    id: 'sa-2',
    categoryId: 'standing-acrylic',
    name: 'Standing Acrylic Mirror',
    size: '50 x 40 cm',
    options: [
      { name: 'Standard', price: '450k' },
      { name: 'Full Flower', price: '485k' }
    ],
    details: 'Luxurious mirror finish acrylic that adds a reflective depth to your message.',
    flowers: 'High-end Silk Peonies, Roses, and Preserved Fillers.',
    care: 'Clean mirror surface with a microfiber cloth. Do not use harsh chemicals on the flowers.',
    palettes: 'Rose Gold Luxury, Gold Elegance, Silver Minimalist.',
    image: '/Standing_Acrylic_Mirror_Full_Flower.jpg'
  },
  {
    id: 'sa-3',
    categoryId: 'standing-acrylic',
    name: 'Standing Acrylic Bulat',
    size: '60 x 60 cm',
    options: [
      { name: 'Standard', price: '400k' },
      { name: 'Full Flower', price: '450k' }
    ],
    details: 'Modern circular design for a soft, contemporary event aesthetic.',
    flowers: 'Lush Silk Ranunculus, Hydrangeas, and Eucalyptus.',
    care: 'Ensure the stand is on stable ground. Keep away from high humidity.',
    palettes: 'White Cloud, Charcoal Chic, Custom Pastel.',
    image: '/Standing_Acrylic_Bulat_Full_Flower.jpg'
  },

  // Woody Acrylic
  {
    id: 'wa-1',
    categoryId: 'woody-acrylic',
    name: 'Woody Acrylic Size A5',
    size: '21 x 15 cm',
    options: [
      { name: 'Type A (Letter + Standard Flower)', price: '130k' },
      { name: 'Type B (Letter + Standard Flower + Photo)', price: '150k' },
      { name: 'Type C (Letter + Full Flower)', price: '200k' },
      { name: 'Type D (Letter + Full Flower + Photo)', price: '220k' }
    ],
    details: 'Minimalist wood and acrylic frame. Max 15 words. Order min H-2.',
    flowers: 'Preserved Roses, Hydrangeas, Statice, and dried foliage.',
    care: 'No water required. Avoid humid areas. Keep away from extreme heat.',
    palettes: 'Rustic Earth, Sweet Lavender, Romantic Rose, Sun-Kissed Yellow.',
    image: '/Woody_Acrylic_A5.png'
  },
  {
    id: 'wa-2',
    categoryId: 'woody-acrylic',
    name: 'Woody Acrylic Size A4',
    size: '21 x 30 cm',
    options: [
      { name: 'Type A (Letter + Standard Flower)', price: '190k' },
      { name: 'Type B (Letter + Standard Flower + Photo)', price: '210k' },
      { name: 'Type C (Letter + Full Flower)', price: '260k' },
      { name: 'Type D (Letter + Full Flower + Photo)', price: '280k' }
    ],
    details: 'Larger format wood frame for more text or larger photos. Max 30 words. Order min H-2.',
    flowers: 'Preserved Roses, Hydrangeas, and Premium Dried Florals.',
    care: 'Handle by the wooden base. Avoid direct sunlight to prevent flower fading.',
    palettes: 'Classic Neutrals, Blush Pink, Forest Green, Custom.',
    image: '/Woody_Acrylic_A4.png'
  },

  // Blooms & Bloombox
  {
    id: 'bb-1',
    categoryId: 'blooms-bloombox',
    name: 'Blooms Acrylic Flower Type S',
    size: 'Acrylic Dia 10cm, Box 10x10cm',
    options: [{ name: 'Standard', price: '125k' }],
    details: 'Compact acrylic dome arrangement. Free request flower theme.',
    flowers: 'Premium Soap Roses and High-quality Silk Accents.',
    care: 'Avoid high humidity (soap flowers are sensitive). Do not spray water.',
    palettes: 'Modern Monochrome, Cherry Blossom, Ocean Breeze.',
    image: '/Blooms_Type_S.png'
  },
  {
    id: 'bb-2',
    categoryId: 'blooms-bloombox',
    name: 'Blooms Acrylic Flower Type M',
    size: 'Acrylic Dia 15cm, Box 15x15cm',
    options: [{ name: 'Standard', price: '185k' }],
    details: 'Medium sized dome, perfect for bedside or office desk decoration.',
    flowers: 'Silk Roses, Preserved Hydrangeas, and Pearl Accents.',
    care: 'Keep in a stable temperature environment. Dust container with a soft cloth.',
    palettes: 'Vintage Cream, Pastel Mix, Royal Purple.',
    image: '/Blooms_Type_M.png'
  },
  {
    id: 'bb-3',
    categoryId: 'blooms-bloombox',
    name: 'Blooms Acrylic Flower Type L',
    size: 'Acrylic Dia 30cm, Box 20x15cm',
    options: [{ name: 'Standard', price: '285k' }],
    details: 'Grand acrylic arrangement for a significant impact statement.',
    flowers: 'Lush Silk Peonies, Premium Preserved Roses, and Foliage.',
    care: 'Handle with care. Avoid moving frequently to preserve the delicate arrangement.',
    palettes: 'Elegant Burgundy, Soft Peach, Winter White.',
    image: '/Standing_Acrylic_Full_Flower.png'
  },
  {
    id: 'bb-4',
    categoryId: 'blooms-bloombox',
    name: 'Bloombox Full Flower',
    size: 'Various Sizes',
    options: [
      { name: 'Type S (10x10cm)', price: '99k' },
      { name: 'Type M (15x15cm)', price: '180k' },
      { name: 'Type L (20x15cm)', price: '280k' },
      { name: 'Type XL With Extra Flower (20x15cm)', price: '320k' },
      { name: 'Flower Hand Bag', price: '160k' }
    ],
    details: 'Traditional bloombox style. Versatile and classic.',
    flowers: 'A mix of Silk Roses, Carnations, and seasonal fillers.',
    care: 'Dust the box surface. Keep in a dry, ventilated room.',
    palettes: 'Spring Garden, Morning Mist, Sunset Glow, Custom.',
    image: '/Bloombox.png'
  },

  // Bouquets
  {
    id: 'bq-1',
    categoryId: 'bouquets',
    name: 'Cheerful Flower Bouquet',
    size: 'Various Sizes',
    options: [
      { name: 'Type S (34x37.5cm)', price: '89k' },
      { name: 'Type M (36.5x37.5cm)', price: '245k' },
      { name: 'Type L (84x47cm)', price: '345k' }
    ],
    details: 'Bright and energetic wrap. Free greeting card. Order min H-1.',
    flowers: 'Vibrant Silk Sunflowers, Daisies, and Eucalyptus.',
    care: 'Dust occasionally. Can be placed in a vase for long-term display.',
    palettes: 'Sunny Yellow, Bright Pink, Rainbow Mix.',
    image: '/Cheerful_Flower_Bouquet.jpg'
  },
  {
    id: 'bq-2',
    categoryId: 'bouquets',
    name: 'Korean Rose Bouquet Type M',
    size: 'Medium Size (10 Rose)',
    options: [
      { name: 'With Artificial Flower', price: '245k' },
      { name: 'With Artificial Flower + 8 Ferrero', price: '300k' },
      { name: 'With Fresh Flower', price: '345k' },
      { name: 'With Fresh Flower + 8 Ferrero', price: '400k' }
    ],
    details: 'Classic Korean style wrap. Perfect for anniversaries.',
    flowers: 'Premium Silk or Fresh Imported Roses, Baby\'s Breath.',
    care: 'For fresh: trim stems, change water daily. For artificial: keep dry.',
    palettes: 'Classic Red, Dusty Pink, Ivory White, Champagne.',
    image: '/Korean_Flower_Bouquet.jpg'
  },
  {
    id: 'bq-3',
    categoryId: 'bouquets',
    name: 'Artificial Flower Korean Bouquet',
    size: 'Size L 47x84cm',
    options: [{ name: 'Standard', price: '290k' }],
    details: 'Large artificial arrangement in premium Korean wrapping.',
    flowers: 'Large Silk Peonies, Lilies, and mixed fillers.',
    care: 'Avoid heavy pressure on the wrapping paper to maintain its shape.',
    palettes: 'Pastel Lavender, Sage Green, Cotton Candy.',
    image: '/Korean_Flower_Bouquet.jpg'
  },
  {
    id: 'bq-4',
    categoryId: 'bouquets',
    name: 'Thumbelina Bouquet Full Color Flower',
    size: 'Size M',
    options: [{ name: 'Standard', price: '385k' }],
    details: 'Whimsical and full bouquet inspired by fairy tales.',
    flowers: 'Preserved Mini Roses, Statice, and Wheat stalks.',
    care: 'Very delicate. Do not touch the preserved petals directly.',
    palettes: 'Fairytale Pink, Enchanted Purple, Custom Whimsical.',
    image: '/Thumbelina_Bouquet.jpg'
  },

  // Money Blooms
  {
    id: 'mb-1',
    categoryId: 'money-blooms',
    name: 'Money Blooms Type A & B',
    size: 'Bloombox 15x15cm',
    options: [
      { name: 'Type A (10 Sheet Money)', price: '170k' },
      { name: 'Type B (10 Sheet Money)', price: '170k' }
    ],
    details: 'Creative gift combining money and flowers. Add 5 sheets: +15k.',
    flowers: 'Silk Roses and Preserved Baby\'s Breath.',
    care: 'Handle money rolls carefully. Keep away from fire or moisture.',
    palettes: 'Success Gold, Lucky Red, Celebration Blue.',
    image: 'https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mb-2',
    categoryId: 'money-blooms',
    name: 'Money Blooms Type C',
    size: 'Box 7.8x22.5x7.8cm',
    options: [{ name: 'Standard (8 Sheet Money)', price: '160k' }],
    details: 'Premium gift box with preserved florals and chocolates.',
    flowers: 'Preserved Rose heads, Cotton flowers, and Dried accents.',
    care: 'Fragile preserved flowers. Keep the lid closed for maximum longevity.',
    palettes: 'Red Romance, Sweet Pink, Golden Harvest.',
    image: 'https://images.unsplash.com/photo-1613515887640-7117e13b084c?auto=format&fit=crop&q=80&w=800'
  }
];
