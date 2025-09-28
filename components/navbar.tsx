'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'About Us',
    'Live With Us',
    'How We Care',
    'Help & Support',
    'Work With Us'
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-venturi-coral/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 hover-lift">
            <Image
              src="/logo.png"
              alt="Venturi Healthcare"
              width={140}
              height={50}
              className={`h-14 w-auto transition-all duration-300 ${isScrolled ? '' : ' brightness-0 invert'}`}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 people-focus ${
                  isScrolled 
                    ? 'text-venturi-slate hover:text-venturi-coral hover:bg-venturi-coral/5' 
                    : 'text-white hover:text-venturi-coral hover:bg-white/10'
                }`}
              >
                {item}
              </a>
            ))}
            
            {/* CTA Button */}
            <div className="ml-6">
              <button className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift ${
                isScrolled
                  ? 'bg-venturi-coral hover:bg-venturi-orange text-white shadow-lg'
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50'
              }`}>
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-venturi-slate hover:text-venturi-coral hover:bg-venturi-coral/5' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl mt-4 mb-4 border border-venturi-coral/10 overflow-hidden">
            <div className="py-4">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="block px-6 py-4 text-venturi-slate hover:text-venturi-coral hover:bg-venturi-coral/5 transition-all duration-200 font-medium border-b border-gray-100/50 last:border-b-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-6 py-4">
                <button className="w-full bg-venturi-coral hover:bg-venturi-orange text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-venturi-coral to-venturi-orange opacity-20">
          <div 
            className="h-full bg-gradient-to-r from-venturi-coral to-venturi-orange transition-all duration-300"
            style={{ 
              width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
            }}
          />
        </div>
      )}
    </nav>
  );
}