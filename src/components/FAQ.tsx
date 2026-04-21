import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = t('faq.questions');

  return (
    <section id="faq" className="py-24 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold block"
          >
            {t('faq.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-text mb-4"
          >
            {t('faq.title')}
          </motion.h2>
        </div>

        <div className="space-y-4">
          {Array.isArray(faqs) && faqs.map((faq: any, idx: number) => (
            <div 
              key={idx}
              className="border border-[#eee] rounded-2xl overflow-hidden bg-card-bg shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between transition-colors hover:bg-accent-soft/30"
              >
                <span className="font-serif text-lg text-text pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-[#eee] pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
