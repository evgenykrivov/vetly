'use client';

import { useEffect, useRef } from 'react';

const BenefitsStrip = () => {
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

  const benefits = [
    "Gentle, expert-approved care methods",
    "24/7 access to Vet Assistant", 
    "Clear and simple health tutorials",
    "Smart pricing with flexible plans",
    "Personalized care based on breed and age",
    "Health records available for all family members"
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-vetly-pink to-vetly-pink-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      {/* Decorative "VETLY" text */}
      <div className="absolute bottom-8 right-8 text-white/10 text-6xl md:text-8xl lg:text-9xl font-bold leading-none pointer-events-none select-none">
        VETLY
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2 font-bold mb-12">
              Enjoy stress-free pet care with Vetly
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="white"/>
                      <path 
                        d="M6 10 L8.5 12.5 L14 7" 
                        stroke="#FF6B9D" 
                        strokeWidth="2" 
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium leading-relaxed text-left">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://quiz.vetly.gg/vetly-dog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsStrip;
