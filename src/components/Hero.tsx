import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=2000"
          alt="Beautiful floral arrangement"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-[56px] leading-[1.1] font-serif text-text font-normal mb-5">
            Preserving your sweetest memories, <br />
            <span className="italic">in every petal.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[16px] leading-[1.6] text-text-muted mb-8 max-w-[360px] mx-auto">
            Artisanal flower arrangements for weddings, birthdays, and the quiet moments in between. Hand-crafted in Indonesia with love and attention to detail.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=6285179680868&text=Hello+Sweet+Memoiree%2C+I+would+like+to+inquire+about+your+flower+arrangements.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-[18px] rounded-[40px] font-semibold text-[15px] hover:bg-accent/90 transition-colors inline-flex items-center justify-center w-full sm:w-auto"
            >
              Book a Consultation on WhatsApp
            </a>
            <a
              href="#price-list"
              className="bg-transparent border border-text text-text px-8 py-[18px] rounded-[40px] font-semibold text-[15px] hover:bg-text hover:text-white transition-colors inline-flex items-center justify-center w-full sm:w-auto"
            >
              View Price List
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
