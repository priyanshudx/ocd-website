import { Button } from "./ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-black">
              <span className="text-[var(--yellow-primary)]">O</span>bsessed <span className="text-[var(--yellow-primary)]">C</span>ar <span className="text-[var(--yellow-primary)]">D</span>etailings
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[var(--yellow-primary)] transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[var(--yellow-primary)] transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-[var(--yellow-primary)] transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-[var(--yellow-primary)] transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-[var(--yellow-primary)] transition-colors">Contact</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 7372001122</span>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-[var(--yellow-primary)]">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[var(--yellow-primary)]">About</a>
              <a href="#services" className="text-gray-700 hover:text-[var(--yellow-primary)]">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-[var(--yellow-primary)]">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-[var(--yellow-primary)]">Contact</a>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 7372001122</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}