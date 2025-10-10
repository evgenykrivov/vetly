'use client';

import { useEffect, useRef } from 'react';

const StorePitch = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" ref={sectionRef} className="section-padding bg-gradient-to-br from-vetly-orange to-vetly-orange-dark overflow-hidden rounded-[60px] mx-4 md:mx-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-12 right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2 font-light leading-tight">
              If your dog could choose an app, Vetly would be their top pick for health and training
            </h2>
            <p className="text-[32px] leading-relaxed font-bold text-black">
              So, why not give them the best?
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://quiz.vetly.gg/vetly-dog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background circle */}
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                {/* Dog and cat illustration */}
                <div className="relative w-128 h-128">
                  <img 
                    src="/dog&cat.png" 
                    alt="Dog and cat illustration" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorePitch;
