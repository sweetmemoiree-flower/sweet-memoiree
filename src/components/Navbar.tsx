import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Announcement from './Announcement';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Price List', href: '#price-list' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full z-50 border-b border-accent-soft">
      <Announcement />
      <div className="bg-bg/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="/Logo2.png" 
                alt="Sweet Memoiree Logo" 
                className="h-14 w-auto object-contain rounded-lg shadow-sm"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-[1px] text-text-muted font-semibold hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=6285179680868&text=Hello+Sweet+Memoiree%2C+I+would+like+to+inquire+about+your+flower+arrangements.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-[18px] rounded-[40px] font-semibold text-[15px] hover:bg-accent/90 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg border-b border-accent-soft">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-[13px] uppercase tracking-[1px] text-text-muted font-semibold hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=6285179680868&text=Hello+Sweet+Memoiree%2C+I+would+like+to+inquire+about+your+flower+arrangements.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-accent font-semibold text-[13px] uppercase tracking-[1px]"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
