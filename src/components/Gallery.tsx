import { motion } from 'motion/react';

export default function Gallery() {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="gallery" className="py-24 bg-bg">
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
            Our Gallery
          </motion.span>
          <motion.h2 variants={headerItemVariants} className="text-4xl md:text-5xl font-serif text-text mb-4">
            Visual Inspiration
          </motion.h2>
          <motion.p variants={headerItemVariants} className="text-text-muted max-w-2xl mx-auto">
            A glimpse into the beautiful moments we've helped create.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={headerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full"
        >
          {/* Elfsight Instagram Feed */}
          <div className="elfsight-app-8ad1bb9a-c4e9-487c-ae52-f05cfd40cca3" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
}
