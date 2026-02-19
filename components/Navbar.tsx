
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Plans', href: '#plans' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl animate-bounce">🍛</span>
          <span className="text-2xl font-heading font-black text-secondary">
            G R <span className="text-primary">Mess</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-heading font-semibold text-text-medium hover:text-primary transition-colors rounded-full hover:bg-primary/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919035733264"
            target="_blank"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full font-heading-sc text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <span>📱</span> Order Now
          </a>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-2 z-[1001]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-secondary transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-secondary transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-secondary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[999] transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-heading font-bold text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919035733264"
            className="bg-primary text-white px-8 py-3 rounded-full font-heading text-xl shadow-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Chat with Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
