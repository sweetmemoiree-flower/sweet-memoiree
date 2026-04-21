import { motion, Variants } from 'motion/react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      text: 'The standing acrylic arrangement for our grand opening was absolutely stunning. It added such an elegant touch to the event!',
      rating: 5
    },
    {
      id: 2,
      name: 'Jessica T.',
      text: 'Ordered a Korean Rose Bouquet for my mother\'s birthday. The flowers were fresh, beautifully arranged, and the packaging was premium.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amanda L.',
      text: 'Sweet Memoiree never disappoints! The Money Blooms I ordered as a graduation gift were a huge hit. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-bg">
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
            {t('testimonials.badge')}
          </motion.span>
          <motion.h2 variants={headerItemVariants} className="text-4xl md:text-5xl font-serif text-text mb-4">
            {t('testimonials.title')}
          </motion.h2>
          <motion.p variants={headerItemVariants} className="text-text-muted max-w-2xl mx-auto">
            {t('testimonials.description')}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-accent-soft p-6 rounded-[20px] relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif italic text-[14px] leading-[1.5] text-text mb-4">
                "{testimonial.text}"
              </p>
              <span className="text-[11px] font-bold uppercase opacity-60 text-text mt-2 block">
                — {testimonial.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
