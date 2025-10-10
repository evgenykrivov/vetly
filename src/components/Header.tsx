'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Dog Trainers', href: '#trainers' },
    { label: 'Blog', href: '#blog' },
    { label: 'For Partners', href: '#partners' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: 'mailto:contact@vetly.gg?subject=Contact%20Vetly%20Team&body=Hi%20Vetly%20Team,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding%20your%20pet%20care%20services.%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you!' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('mailto:')) {
      return;
    }
    
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? 'shadow-header' : ''
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/vetlyLogo.svg" 
                alt="Vetly Logo" 
                className="h-8 w-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-vetly-muted hover:text-vetly-ink transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="https://quiz.vetly.gg/vetly-dog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Try Vetly
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-vetly-muted hover:text-vetly-ink focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-vetly-line">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-vetly-muted hover:text-vetly-ink transition-colors duration-200 font-medium py-2"
                  onClick={(e) => {
                    handleAnchorClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="https://quiz.vetly.gg/vetly-dog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-block text-center"
                >
                  Try Vetly
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
