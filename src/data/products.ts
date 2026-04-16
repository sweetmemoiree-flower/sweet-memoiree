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
    details: 'Colors: White, Black, Transparent, or Custom',
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
    details: 'Colors: Rose Gold, Gold, Silver, or Custom',
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
    details: 'Colors: White, Black, or Custom',
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
    details: 'Transparent Acrylic. Max 15 words. Free request flower theme. Order min H-2.',
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
    details: 'Transparent Acrylic. Max 30 words. Free request flower theme. Order min H-2.',
    image: '/Woody_Acrylic_A4.png'
  },

  // Blooms & Bloombox
  {
    id: 'bb-1',
    categoryId: 'blooms-bloombox',
    name: 'Blooms Acrylic Flower Type S',
    size: 'Acrylic Dia 10cm, Box 10x10cm',
    options: [{ name: 'Standard', price: '125k' }],
    details: 'Colors: White, Black, Transparent, or Custom. Free request flower theme.',
    image: '/Blooms_Type_S.png'
  },
  {
    id: 'bb-2',
    categoryId: 'blooms-bloombox',
    name: 'Blooms Acrylic Flower Type M',
    size: 'Acrylic Dia 15cm, Box 15x15cm',
    options: [{ name: 'Standard', price: '185k' }],
    details: 'Colors: White, Black, Transparent, or Custom. Free request flower theme.',
    image: '/Blooms_Type_M.png'
  },
  {
    id: 'bb-3',
    categoryId: 'blooms-bloombox',
    name: 'Blooms Acrylic Flower Type L',
    size: 'Acrylic Dia 30cm, Box 20x15cm',
    options: [{ name: 'Standard', price: '285k' }],
    details: 'Colors: White, Black, Transparent, or Custom. Free request flower theme.',
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
    details: 'Free request flower theme.',
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
    details: 'Free request flower theme. Order min H-1. Free greeting card.',
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
    details: 'Free request flower theme. Order min H-1. Free greeting card.',
    image: '/Korean_Flower_Bouquet.jpg'
  },
  {
    id: 'bq-3',
    categoryId: 'bouquets',
    name: 'Artificial Flower Korean Bouquet',
    size: 'Size L 47x84cm',
    options: [{ name: 'Standard', price: '290k' }],
    details: 'Free request flower theme. Order min H-1. Free greeting card.',
    image: '/Korean_Flower_Bouquet.jpg'
  },
  {
    id: 'bq-4',
    categoryId: 'bouquets',
    name: 'Thumbelina Bouquet Full Color Flower',
    size: 'Size M',
    options: [{ name: 'Standard', price: '385k' }],
    details: 'Free request flower theme. Order min H-1. Free greeting card.',
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
    details: 'Free request flower theme. Order min H-1. Add 5 sheets: +15k.',
    image: 'https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mb-2',
    categoryId: 'money-blooms',
    name: 'Money Blooms Type C',
    size: 'Box 7.8x22.5x7.8cm',
    options: [{ name: 'Standard (8 Sheet Money)', price: '160k' }],
    details: 'With Preserved flower, 6 Pcs Coklat Ferrero.',
    image: 'https://images.unsplash.com/photo-1613515887640-7117e13b084c?auto=format&fit=crop&q=80&w=800'
  }
];
