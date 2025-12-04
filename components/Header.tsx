import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Serviços', id: 'services' },
    { label: 'Planos', id: 'pricing' },
    { label: 'Inovação', id: 'innovation' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold text-bubba-700 tracking-tight group-hover:text-bubba-600 transition-colors">Bubba</span>
            <span className="w-2 h-2 bg-bubba-500 rounded-full ml-1 mt-2 group-hover:bg-bubba-400 transition-colors"></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-bubba-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
             <Button variant="primary" onClick={() => scrollToSection('contact')}>
               Falar com Especialista
             </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-bubba-600 p-2 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen bg-opacity-95 backdrop-blur-sm">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-4 text-lg font-medium text-gray-700 hover:text-bubba-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6">
              <Button fullWidth onClick={() => scrollToSection('contact')}>
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;