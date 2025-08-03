import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import suitImage from '../assets/100.jpg';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-50 to-teal-50 pt-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-navy-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-teal-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-br from-navy-400/20 to-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src={suitImage} 
              alt="Sakthi Aravind"
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white object-cover hover:scale-105 transition-all duration-500 hover:shadow-3xl hover:border-teal-200"
            />
          </div>
          
          <h1 className={`text-5xl md:text-7xl  font-sans font-bold text-navy-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hi, I'm <span className="text-teal-600">Sakthi Aravind</span>
          </h1>
          
          <h2 className={`text-2xl md:text-3xl text-gray-700 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Full Stack Developer & Software Engineer
          </h2>
          
          <p className={`text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Passionate about creating innovative software solutions with modern technologies. 
            I build scalable web applications and love turning complex problems into simple, 
            beautiful designs.
          </p>
          
          <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </div>
          
          <div className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="https://github.com/sakthiaravind-dev" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sakthi-aravind-m-6064a2242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sakthicareer.edu@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-teal-600" />
      </button>
    </section>
  );
};

export default Hero;