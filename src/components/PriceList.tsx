import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { categories, products } from '../data/products';
import { ChevronRight, Flower2, Gift, Camera, Package, Sparkles, Heart, Palette, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PriceList() {
  const { t } = useLanguage();
  
  const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [customization, setCustomization] = useState('');

  const filteredProducts = products.filter(p => p.categoryId === activeCategory);

  const getOptionIcon = (optionName: string) => {
    const lowerName = optionName.toLowerCase();
    if (lowerName.includes('full flower') || lowerName.includes('korean') || lowerName.includes('thumbelina')) return <Flower2 size={16} className="text-accent" />;
    if (lowerName.includes('photo')) return <Camera size={16} className="text-accent" />;
    if (lowerName.includes('standard')) return <Gift size={16} className="text-accent" />;
    if (lowerName.includes('type')) return <Package size={16} className="text-accent" />;
    return <Sparkles size={16} className="text-accent" />;
  };

  return (
    <section id="price-list" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={headerItemVariants}
            className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold block"
          >
            {t('pricelist.badge')}
          </motion.span>
          <motion.h2 variants={headerItemVariants} className="text-4xl md:text-5xl font-serif text-text mb-4">
            {t('pricelist.title')}
          </motion.h2>
          <motion.p variants={headerItemVariants} className="text-text-muted max-w-2xl mx-auto">
            {t('pricelist.description')}
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedProduct(null);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-card-bg border border-[#eee] text-text hover:bg-accent-soft'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-card-bg border border-[#eee] p-4 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedOptionIndex(0);
                  setIsZoomed(false);
                  setCustomization('');
                }}
              >
                <div className="aspect-[4/5] overflow-hidden relative rounded-xl">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.details}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white flex items-center gap-2 font-medium">
                      {t('pricelist.viewDetails')} <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
                <div className="pt-4 pb-2">
                  <h3 className="font-serif text-xl text-text mb-1">{product.name}</h3>
                  <p className="text-sm text-text-muted mb-4">{product.size}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-bold text-[13px]">
                      {t('pricelist.from')} {product.options[0].price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-text/60 backdrop-blur-sm"
                onClick={() => setSelectedProduct(null)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-card-bg rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-text hover:bg-white"
                >
                  <ChevronRight className="rotate-180" size={20} />
                </button>
                
                <div 
                  className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group cursor-zoom-in"
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img 
                    src={selectedProduct.image} 
                    alt={`${selectedProduct.name} Floral Display`}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'}`}
                    style={{ transformOrigin: 'center center' }}
                  />
                  {/* Zoom hint */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                  </div>
                  {/* Logo overlay on product image */}
                  <div className="absolute bottom-4 left-4 shadow-lg rounded-lg overflow-hidden pointer-events-none">
                    <img 
                      src="/Logo2.png" 
                      alt="Sweet Memoiree Official Brand Logo" 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                  {/* Dynamic Schema for search engines */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org/",
                      "@type": "Product",
                      "name": selectedProduct.name,
                      "image": [`https://sweet-memoiree.com${selectedProduct.image}`],
                      "description": selectedProduct.details,
                      "brand": { "@type": "Brand", "name": "Sweet Memoiree" },
                      "offers": {
                        "@type": "Offer",
                        "priceCurrency": "IDR",
                        "price": selectedProduct.options[0].price.replace('k', '000'),
                        "availability": "https://schema.org/InStock",
                        "url": "https://sweet-memoiree.com#price-list"
                      }
                    })}
                  </script>
                  <h3 className="font-serif text-3xl text-text mb-2">{selectedProduct.name}</h3>
                  <p className="text-text-muted font-medium mb-6">{selectedProduct.size}</p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold">{t('pricelist.selectOption')}</h4>
                      <div className="space-y-3">
                        {selectedProduct.options.map((opt, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => setSelectedOptionIndex(idx)}
                            className={`w-full flex justify-between items-center p-4 border rounded-xl transition-all group ${
                              selectedOptionIndex === idx 
                                ? 'border-accent bg-accent/5 ring-1 ring-accent' 
                                : 'border-[#eee] hover:border-accent/40 bg-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`flex transition-transform duration-300 ${selectedOptionIndex === idx ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {getOptionIcon(opt.name)}
                              </span>
                              <span className={`font-medium text-left pr-4 ${selectedOptionIndex === idx ? 'text-accent' : 'text-text'}`}>
                                {opt.name}
                              </span>
                            </div>
                            <span className="font-bold text-accent flex-shrink-0">{opt.price}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold">{t('pricelist.summary')}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{selectedProduct.details}</p>
                    </div>

                    {(selectedProduct as any).flowers && (
                      <div className="bg-bg/50 p-4 rounded-2xl border border-[#eee]">
                        <div className="flex items-center gap-2 mb-2">
                          <Flower2 size={16} className="text-accent" />
                          <h4 className="text-[11px] uppercase tracking-[2px] text-text font-bold">{t('pricelist.components')}</h4>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">{(selectedProduct as any).flowers}</p>
                      </div>
                    )}

                    {(selectedProduct as any).palettes && (
                      <div className="bg-bg/50 p-4 rounded-2xl border border-[#eee]">
                        <div className="flex items-center gap-2 mb-2">
                          <Palette size={16} className="text-accent" />
                          <h4 className="text-[11px] uppercase tracking-[2px] text-text font-bold">{t('pricelist.palettes')}</h4>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">{(selectedProduct as any).palettes}</p>
                      </div>
                    )}

                    {(selectedProduct as any).care && (
                      <div className="bg-bg/50 p-4 rounded-2xl border border-[#eee]">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart size={16} className="text-accent" />
                          <h4 className="text-[11px] uppercase tracking-[2px] text-text font-bold">{t('pricelist.care')}</h4>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">{(selectedProduct as any).care}</p>
                      </div>
                    )}

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold flex items-center gap-2">
                        <Info size={14} />
                        {t('pricelist.customization')}
                      </h4>
                      <textarea
                        value={customization}
                        onChange={(e) => setCustomization(e.target.value)}
                        placeholder={t('pricelist.placeholder')}
                        className="w-full p-4 border border-[#eee] rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none h-24 bg-transparent text-text placeholder:text-text-muted/50"
                      />
                    </div>
                  </div>
                  
                  <a
                    href={`https://api.whatsapp.com/send/?phone=6285179680868&text=${encodeURIComponent(`Hello Sweet Memoiree, I would like to order ${selectedProduct.name} - ${selectedProduct.options[selectedOptionIndex].name}.${customization ? `\n\nCustomization Notes:\n${customization}` : ''}`)}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent hover:bg-accent/90 text-white text-center px-6 py-4 rounded-[40px] transition-colors font-semibold text-[15px]"
                  >
                    {t('pricelist.cta')}
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
