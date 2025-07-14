import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string, sectionId?: string) => {
    onNavigate(page);
    
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
    <footer className="py-12 bg-stone-800 text-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/Screenshot 2025-07-07 102307 copy.png" 
                alt="IKHANDA EMAFINI Logo" 
                className="h-14 w-18 object-contain mr-3"
              />
              <h4 className="text-2xl font-serif font-semibold">IKHANDA EMAFINI</h4>
            </div>
            <p className="text-stone-300 leading-relaxed max-w-md mb-6">
              Creating timeless homeware that celebrates the beauty of natural materials and artisan craftsmanship. Specializing in custom orders and bespoke creations.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-stone-300 text-sm font-medium">Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/ikhandaemafini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-[#1877F2] p-2 rounded-full hover:bg-[#166FE5] transition-colors duration-300 group-hover:scale-110 transform">
                    <Facebook className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/ikhandaemafini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] p-2 rounded-full hover:from-[#D73653] hover:via-[#E8543A] hover:to-[#FFCD6B] transition-all duration-300 group-hover:scale-110 transform">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>
                
                <a 
                  href="https://twitter.com/ikhandaemafini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-[#1DA1F2] p-2 rounded-full hover:bg-[#1A91DA] transition-colors duration-300 group-hover:scale-110 transform">
                    <Twitter className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium mb-4">Quick Links</h5>
            <div className="space-y-2">
              <button 
                onClick={() => handleNavClick('home')} 
                className="block text-stone-300 hover:text-stone-50 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('home', 'products')} 
                className="block text-stone-300 hover:text-stone-50 transition-colors text-left"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavClick('home', 'about')} 
                className="block text-stone-300 hover:text-stone-50 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('home', 'contact')} 
                className="block text-stone-300 hover:text-stone-50 transition-colors text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => handleNavClick('return-policy')} 
                className="block text-stone-300 hover:text-stone-50 transition-colors text-left"
              >
                Return Policy
              </button>
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-4">Services</h5>
            <div className="space-y-2">
              <span className="block text-stone-300">Custom Orders</span>
              <span className="block text-stone-300">Design Consultation</span>
              <span className="block text-stone-300">Bespoke Furniture</span>
              <span className="block text-stone-300">Installation</span>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; 2024 IKHANDA EMAFINI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}