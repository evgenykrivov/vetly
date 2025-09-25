'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const dogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (dogRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.1;
        dogRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-vetly-pink to-vetly-pink-dark h-[400px] flex items-center overflow-hidden rounded-tl-0 rounded-tr-0 rounded-br-[100px] rounded-bl-[100px]">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8 text-center lg:text-left animate-fade-in">
            <h1 className="text-hero-mobile md:text-hero-desktop font-bold leading-tight text-balance text-white">
              The go-to app for new and future dog parents
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Help your pup grow happy, healthy, and well-behaved
            </p>
            <div>
              <a 
                href="https://quiz.vetly.gg/vetly-dog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 inline-block"
              >
                Start Training
              </a>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div ref={dogRef} className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-full"></div>
              
              {/* Dog image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/hero.png" 
                  alt="Happy Corgi dog" 
                  className=" h-auto object-contain max-w-[580px]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
