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
    { icon: "🐾", text: "Fun, AI-powered training methods" },
    { icon: "👋", text: "24/7 access to AI Training Assistant" },
    { icon: "🎬", text: "Clear and simple training tutorials" },
    { icon: "💳", text: "Smart pricing with flexible plans" },
    { icon: "🐕", text: "Personalized training based on breed and age" },
    { icon: "👥", text: "Training progress available for all family members" }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-vetly-pink to-vetly-pink-dark relative overflow-hidden rounded-[60px] mx-4 md:mx-8">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      {/* Vetly logo image as decoration */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div className="w-[40rem] h-auto">
          <img 
            src="/vetly.png" 
            alt="" 
            className="w-full h-full object-contain"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <div className="animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2 font-bold mb-12 text-white">
              Enjoy fun and easy pet training with Vetly
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-full p-4 md:p-6 hover:shadow-lg transition-all duration-200 flex justify-center items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{benefit.icon}</span>
                  </div>
                  <span className="text-sm md:text-base font-medium leading-relaxed text-left text-black">
                    {benefit.text}
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
