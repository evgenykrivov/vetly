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
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-vetly-orange to-vetly-orange-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-12 right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2 font-bold leading-tight">
              If your dog could choose an app, Vetly would be their top pick for health and training
            </h2>
            <p className="text-xl leading-relaxed">
              So, why not give them the best?
            </p>
            
            {/* Store badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://quiz.vetly.gg/vetly-dog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors duration-200 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://quiz.vetly.gg/vetly-dog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors duration-200 group"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.445 12l2.253-2.491zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative flex justify-center lg:justify-end animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background circle */}
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                {/* Dog and cat illustration */}
                <div className="relative w-64 h-64">
                  <img 
                    src="/Frame 1000007269.svg" 
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
