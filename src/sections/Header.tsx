import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Начало', href: '#hero' },
  { label: 'Об издательстве', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Авторы', href: '#authors' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="#E5A823" />
                  <path
                    d="M25 70 Q25 30 50 25 Q75 30 75 70 L75 75 L25 75 Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M50 25 Q55 20 60 25 Q65 30 60 35 Q55 30 50 25"
                    fill="#1A1A1A"
                  />
                  <circle cx="45" cy="40" r="3" fill="#E5A823" />
                  <path
                    d="M55 50 Q60 45 65 50 Q60 55 55 50"
                    fill="#E5A823"
                  />
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg md:text-xl font-bold text-dark leading-tight">
                  1000
                </div>
                <div className="text-xs md:text-sm text-gray-text leading-tight">
                  бестселлеров
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-dark hover:text-gold transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+79951180102"
                className="flex items-center gap-2 text-sm font-medium text-dark hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 995 118 01 02
              </a>
              <button
                onClick={() => scrollToSection('#contacts')}
                className="btn-primary text-sm py-3 px-6"
              >
                Связаться
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-xl font-medium text-dark hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+79951180102"
                className="flex items-center gap-2 text-lg font-medium text-gold mt-4"
              >
                <Phone className="w-5 h-5" />
                +7 995 118 01 02
              </a>
              <button
                onClick={() => scrollToSection('#contacts')}
                className="btn-primary w-full mt-4"
              >
                Связаться
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
