import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled ? 'bg-white/40 backdrop-blur-md shadow-md' : 'bg-transparent'
}`}>

      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-navy-900">
            S<span className="text-teal-600">A</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <button className="btn-primary flex items-center gap-2">
              <Download size={14} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link text-left">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-left">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link text-left">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
              <button className="btn-primary flex items-center gap-2 w-fit">
                <Download size={14} />
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;