'use client';

import { useEffect, useRef } from 'react';

const PillList = () => {
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

  const pillItems: Array<{ icon?: React.ReactNode; text: string }> = [
    {
      icon: (
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-lg">🌱</span>
        </div>
      ),
      text: "Eager to teach fun tricks, commands, and games"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
          <span className="text-lg">💖</span>
        </div>
      ),
      text: "Looking to care for your dog and put an end to destructive behavior"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-lg">❤️</span>
        </div>
      ),
      text: "See your dog as family and your closest companion"
    },
    {
      icon: (
        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
          <span className="text-lg">🐶</span>
        </div>
      ),
      text: "Recently got a puppy or became a dog parent for the first time"
    },
    {
      text: "You don't have much free time ⏱️ and often work from home 🏠"
    }
  ];

    return (
      <section id="blog" ref={sectionRef} className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-h2-mobile md:text-h2 font-bold text-vetly-ink mb-8">
              Vetly is the right dog training app if you:
            </h2>
          </div>
  
          <div className="relative">
            {/* Pills container - centered with max-width */}
            <div className="w-full max-w-[1054px] mx-auto relative">
              {/* Dog illustration - absolute positioned relative to pills container */}
              <div className="hidden lg:block absolute -left-[390px] top-1 animate-on-scroll">
                <div className="w-[350px] h-[350px]">
                  <img 
                    src="/dog.png" 
                    alt="Happy dog illustration" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillItems.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className="pill-card animate-on-scroll flex items-center gap-4 hover:scale-105 focus-within:scale-105 transition-transform duration-200 w-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.icon && (
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                    )}
                    <p className="text-body-mobile md:text-body text-vetly-ink leading-relaxed flex-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom text - separate without card */}
          <div className="flex justify-center mt-[60px] animate-on-scroll" style={{ animationDelay: '0.5s' }}>
            <p className="text-body-mobile md:text-body text-vetly-ink leading-relaxed text-center">
              {pillItems[4].text}
            </p>
          </div>
        </div>
      </section>
    );
};

export default PillList;
