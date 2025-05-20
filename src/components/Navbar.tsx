
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <div className="font-bold text-xl text-primary-blue">
            <span>Kalki</span>
            <span className="text-secondary-orange"> Packers & Movers</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-neutral-text hover:text-primary-blue font-medium transition-colors duration-200">Home</Link>
          <Link to="/services" className="text-neutral-text hover:text-primary-blue font-medium transition-colors duration-200">Services</Link>
          <Link to="/estimate" className="text-neutral-text hover:text-primary-blue font-medium transition-colors duration-200">Get Estimate</Link>
          <Link to="/about" className="text-neutral-text hover:text-primary-blue font-medium transition-colors duration-200">About Us</Link>
          <Link to="/contact" className="text-neutral-text hover:text-primary-blue font-medium transition-colors duration-200">Contact</Link>
          <Button asChild className="btn-primary ml-4">
            <a href="tel:+919876543210">Call Now</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-text p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav-open md:hidden">
          <div className="flex flex-col items-center gap-6 pt-12">
            <Link to="/" className="text-xl font-medium" onClick={closeMenu}>Home</Link>
            <Link to="/services" className="text-xl font-medium" onClick={closeMenu}>Services</Link>
            <Link to="/estimate" className="text-xl font-medium" onClick={closeMenu}>Get Estimate</Link>
            <Link to="/about" className="text-xl font-medium" onClick={closeMenu}>About Us</Link>
            <Link to="/contact" className="text-xl font-medium" onClick={closeMenu}>Contact</Link>
            <Button asChild className="btn-primary mt-4 w-3/4">
              <a href="tel:+919876543210">Call Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
