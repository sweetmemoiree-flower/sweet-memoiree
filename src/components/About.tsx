import { motion } from 'motion/react';

export default function About() {
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
              <span className="text-[11px] uppercase tracking-[2px] text-accent font-bold">The Story Behind the Petals</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text leading-tight">
                Preserving Your <br />
                <span className="italic italic-font">Sweetest Memories</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                Founded in Medan, <strong>Sweet Memoiree</strong> was born from a simple belief: every milestone, every "I love you," and every "Congratulations" deserves to be captured in a way that lasts. 
              </p>
              <p>
                We specialize in artisanal arrangements that blend the timeless beauty of premium florals with modern, sleek design elements like acrylic and wood. Our goal isn't just to sell flowers; it's to create a bespoke piece of art that remains a cherished keepsake in your home.
              </p>
              <p className="italic text-text font-serif">
                "Whether it's a birthday, a graduation, or a simple surprise, we handle every stem with the care your special moment deserves."
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-[#eee]">
              <div className="text-center">
                <span className="block text-2xl font-serif text-accent font-bold">500+</span>
                <span className="text-[10px] uppercase tracking-[1px] text-text-muted">Memories Shared</span>
              </div>
              <div className="w-[1px] h-10 bg-[#eee]" />
              <div className="text-center">
                <span className="block text-2xl font-serif text-accent font-bold">100%</span>
                <span className="text-[10px] uppercase tracking-[1px] text-text-muted">Hand-Crafted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
