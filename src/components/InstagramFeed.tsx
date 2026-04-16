import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Mocking latest posts since we don't have an API token
  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600', link: 'https://www.instagram.com/sweet.memoiree/' },
    { id: 2, image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=600', link: 'https://www.instagram.com/sweet.memoiree/' },
    { id: 3, image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600', link: 'https://www.instagram.com/sweet.memoiree/' },
    { id: 4, image: 'https://images.unsplash.com/photo-1457089328109-e5d9f4b15f00?auto=format&fit=crop&q=80&w=600', link: 'https://www.instagram.com/sweet.memoiree/' },
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[2px] text-text-muted mb-3 font-bold block">Latest from @sweet.memoiree</span>
            <a 
              href="https://www.instagram.com/sweet.memoiree/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors font-medium text-xl font-serif"
            >
              <Instagram size={20} />
              @sweet.memoiree
            </a>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {posts.map((post) => (
            <motion.a
              key={post.id}
              variants={itemVariants}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden rounded-lg block"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-soft-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
