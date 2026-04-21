import { motion } from 'motion/react';
import { ShoppingBag, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PromoSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-accent-soft/20 pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                {t('promo.title')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-text leading-tight">
                Exclusive Floral <br />
                <span className="italic italic-font">Collections Just for You</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                Elevate your gift-giving experience with our premium arrangements. Now available with special limited-time pricing and free delivery perks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://shopee.co.id/product/523006253/45859017360"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#ee4d2d] hover:bg-[#ee4d2d]/90 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all shadow-lg shadow-orange-500/20 group"
              >
                <ShoppingBag size={20} />
                {t('promo.shopee')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="https://api.whatsapp.com/send/?phone=6285179680868&text=Hello+Sweet+Memoiree%2C+I+would+like+to+inquire+about+the+promo+featured+on+your+website.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white border border-accent text-accent px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:bg-accent hover:text-white"
              >
                <Phone size={20} />
                {t('promo.whatsapp')}
              </a>
            </div>
          </motion.div>

          {/* Promo Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl group border border-accent-soft">
              <img 
                src="/Landing Page Promo.jpg"
                alt="Sweet Memoiree Promo Billboard"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Artistic accents */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
