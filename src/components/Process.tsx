import { motion, Variants } from 'motion/react';
import { Search, MessageSquare, CreditCard, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const stepIcons = [
    <Search className="w-6 h-6" />,
    <MessageSquare className="w-6 h-6" />,
    <CreditCard className="w-6 h-6" />,
    <Gift className="w-6 h-6" />
  ];

  const translatedSteps = t('process.steps').map((step: any, idx: number) => ({
    ...step,
    icon: stepIcons[idx]
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-24 bg-accent-soft/30 border-y border-accent-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold block"
          >
            {t('process.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-text mb-4"
          >
            {t('process.title')}
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {translatedSteps.map((step: any, idx: number) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm relative">
                {step.icon}
                {idx < translatedSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-accent/20 -translate-y-1/2 ml-4 px-2" />
                )}
              </div>
              <h3 className="font-serif text-xl text-text mb-3">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
