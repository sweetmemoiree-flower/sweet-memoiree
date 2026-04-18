import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Announcement() {
  return (
    <div className="bg-accent text-white py-2 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 text-[11px] md:text-xs font-bold uppercase tracking-[1.5px]">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <Sparkles size={12} />
          <span>Free delivery for orders above 300k (Medan Area)</span>
        </motion.div>
        <span className="hidden md:block opacity-30">|</span>
        <span className="hidden md:block">Now taking orders for next week</span>
      </div>
    </div>
  );
}
