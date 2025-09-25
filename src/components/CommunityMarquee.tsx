'use client';

import { useEffect, useRef } from 'react';

const CommunityMarquee = () => {
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

  // Generate dog avatars with different colors and expressions
  const generateDogAvatar = (id: number, color: string) => (
    <div key={id} className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <svg width="80" height="80" viewBox="0 0 80 80" className="w-full h-full">
        <rect width="80" height="80" fill={color}/>
        <g transform="translate(15, 20)">
          {/* Dog face */}
          <ellipse cx="25" cy="20" rx="20" ry="16" fill="#654321" opacity="0.8"/>
          <ellipse cx="25" cy="30" rx="16" ry="20" fill="#654321" opacity="0.8"/>
          
          {/* Ears */}
          <ellipse cx="12" cy="12" rx="5" ry="8" fill="#654321" opacity="0.8"/>
          <ellipse cx="38" cy="12" rx="5" ry="8" fill="#654321" opacity="0.8"/>
          
          {/* Eyes */}
          <circle cx="20" cy="18" r="2" fill="white"/>
          <circle cx="30" cy="18" r="2" fill="white"/>
          <circle cx="20" cy="19" r="1" fill="black"/>
          <circle cx="30" cy="19" r="1" fill="black"/>
          
          {/* Nose */}
          <ellipse cx="25" cy="24" rx="1.5" ry="1" fill="black"/>
          
          {/* Mouth */}
          <path d="M22 28 Q25 31 28 28" stroke="black" strokeWidth="1.5" fill="none"/>
          
          {/* Spots for variety */}
          {id % 3 === 0 && (
            <>
              <circle cx="18" cy="22" r="2" fill="white" opacity="0.6"/>
              <circle cx="32" cy="26" r="1.5" fill="white" opacity="0.6"/>
            </>
          )}
        </g>
      </svg>
    </div>
  );

  const dogColors = [
    '#D2B48C', '#8B4513', '#F4A460', '#CD853F', '#DEB887',
    '#A0522D', '#D2691E', '#BC8F8F', '#F5DEB3', '#FFE4B5',
    '#FFDAB9', '#EEE8AA'
  ];

  const dogAvatars = Array.from({ length: 24 }, (_, i) => 
    generateDogAvatar(i, dogColors[i % dogColors.length])
  );

  return (
    <section ref={sectionRef} className="section-padding bg-vetly-cream">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2 font-bold text-vetly-ink mb-4">
            Join Our Vetly Community
          </h2>
          <p className="text-body-mobile md:text-body text-vetly-muted max-w-2xl mx-auto">
            Join thousands of happy pet parents who trust Vetly for their furry family members
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-vetly-cream to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-vetly-cream to-transparent z-10"></div>
          
          {/* Marquee container */}
          <div className="marquee-container animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-6 animate-marquee marquee-content">
              {/* First set of avatars */}
              {dogAvatars}
              {/* Duplicate for seamless loop */}
              {dogAvatars}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center animate-on-scroll" style={{ animationDelay: '0.5s' }}>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-vetly-pink mb-2">10,000+</div>
            <div className="text-vetly-muted">Happy Pet Parents</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-vetly-pink mb-2">25,000+</div>
            <div className="text-vetly-muted">Pets Cared For</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-vetly-pink mb-2">500+</div>
            <div className="text-vetly-muted">Expert Vets</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMarquee;
