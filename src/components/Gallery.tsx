import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { products } from '../data/products';

// Helper to determine the bento grid span based on index
const getGridSpan = (index: number) => {
  const spans = [
    'col-span-1 row-span-2', // Large vertical
    'col-span-1 row-span-1', // Small
    'col-span-1 row-span-1', // Small
    'col-span-2 row-span-1', // Large horizontal
    'col-span-1 row-span-2', // Large vertical
    'col-span-1 row-span-1', // Small
    'col-span-2 row-span-2', // Massive
    'col-span-1 row-span-1', // Small
  ];
  return spans[index % spans.length];
};

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Take the first 8 products for a varied showcase
  const galleryItems = products.slice(0, 8);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold block"
          >
            Visual Muse
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-text mb-4"
          >
            Artistry in Bloom
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-2xl mx-auto"
          >
            A curated showcase of our favorite bespoke creations, capturing the essence of elegance and emotion.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {galleryItems.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onClick={() => setSelectedIndex(index)}
              className={`relative group overflow-hidden rounded-2xl bg-card-bg cursor-pointer ${getGridSpan(index)}`}
            >
              <img
                src={product.image}
                alt={`${product.name} Floral Arrangement by Sweet Memoiree`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <Maximize2 size={20} className="text-white mb-2 absolute top-4 right-4" />
                <span className="text-[10px] uppercase tracking-[1px] text-white/70 mb-1 font-bold">
                  Collection Highlight
                </span>
                <h4 className="text-white font-serif text-lg leading-tight">
                  {product.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-8"
        >
          <p className="text-text-muted italic flex items-center justify-center gap-2">
            Each arrangement is uniquely crafted for your special moment.
          </p>

          <div className="pt-4">
            <a 
              href="https://www.instagram.com/sweet.memoiree/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-card-bg border border-accent/20 px-8 py-4 rounded-[40px] text-text font-semibold hover:bg-accent hover:text-white transition-all duration-300 group"
            >
              <span className="bg-accent/10 p-2 rounded-full group-hover:bg-white/20 transition-colors text-accent group-hover:text-white">
                <Maximize2 size={18} className="rotate-45" />
              </span>
              <span>Visit our Instagram for more catalogs</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-text/95 p-4 md:p-12 backdrop-blur-md"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[70] p-2"
            >
              <X size={32} />
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[70] p-2"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[70] p-2"
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <motion.div 
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center gap-6"
              >
                <div className="relative group w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
                  <img 
                    src={galleryItems[selectedIndex].image}
                    alt={galleryItems[selectedIndex].name}
                    className="max-w-full max-h-[70vh] object-contain shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="text-center text-white max-w-2xl px-4">
                  <span className="text-[11px] uppercase tracking-[2px] text-white/60 mb-2 font-bold block">
                    {selectedIndex + 1} / {galleryItems.length} — Collection Highlight
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif mb-3">
                    {galleryItems[selectedIndex].name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {galleryItems[selectedIndex].details}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
