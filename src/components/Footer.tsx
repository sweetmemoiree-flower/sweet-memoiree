import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent-soft text-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold mb-6 italic text-accent">Sweet Memoiree</h3>
            <p className="text-text-muted max-w-xs leading-relaxed">
              Crafting beautiful memories with premium floral arrangements for every special occasion.
            </p>
            <p className="text-xs text-accent font-medium pt-2">
              <a href="https://www.instagram.com/sweet.memoiree/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Visit our Instagram @sweet.memoiree for more catalog details & latest collections.
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://api.whatsapp.com/send/?phone=6285179680868&text=Hello+Sweet+Memoiree%2C+I+would+like+to+inquire+about+your+flower+arrangements.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  <span>+62 851-7968-0868</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/sweet.memoiree/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors"
                >
                  <Instagram size={18} />
                  <span>@sweet.memoiree</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Medan, Indonesia<br/><span className="text-sm opacity-80">(Free delivery min 300k for Medan area)</span></span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-text-muted hover:text-accent transition-colors">Home</a></li>
              <li><a href="#price-list" className="text-text-muted hover:text-accent transition-colors">Price List</a></li>
              <li><a href="#gallery" className="text-text-muted hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-text-muted hover:text-accent transition-colors">Testimonials</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-text/10 mt-16 pt-8 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Sweet Memoiree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
