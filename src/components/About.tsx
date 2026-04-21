import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[30px] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="/OurDreams.jpg"
                alt="Sweet Memoiree Florist Workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent/5 rounded-full blur-2xl z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[2px] text-accent font-bold">{t('about.badge')}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text leading-tight">
                {t('about.titlePart1')} <br />
                <span className="italic italic-font">{t('about.titlePart2')}</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p className="italic text-text font-serif">
                {t('about.quote')}
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-[#eee]">
              <div className="text-center">
                <span className="block text-2xl font-serif text-accent font-bold">500+</span>
                <span className="text-[10px] uppercase tracking-[1px] text-text-muted">{t('about.stats1')}</span>
              </div>
              <div className="w-[1px] h-10 bg-[#eee]" />
              <div className="text-center">
                <span className="block text-2xl font-serif text-accent font-bold">100%</span>
                <span className="text-[10px] uppercase tracking-[1px] text-text-muted">{t('about.stats2')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
