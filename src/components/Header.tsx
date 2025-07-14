import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, sectionId?: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="/Screenshot 2025-07-07 102307 copy.png" 
              alt="IKHANDA EMAFINI Logo" 
              className="h-12 w-20 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`transition-colors font-medium ${
                currentPage === 'home' ? 'text-amber-700' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('home', 'products')} 
              className="text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavClick('home', 'about')} 
              className="text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('home', 'contact')} 
              className="text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('home', 'products')} 
              className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavClick('home', 'about')} 
              className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('home', 'contact')} 
              className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}