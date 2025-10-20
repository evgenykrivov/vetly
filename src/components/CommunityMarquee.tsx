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

  // Real dog photos
  const dogPhotos = [
    { src: '/dogs/Frame 1000007553.png', alt: 'Happy Golden Retriever' },
    { src: '/dogs/Frame 1000007554.png', alt: 'Playful Labrador' },
    { src: '/dogs/Frame 1000007555.png', alt: 'Cute Pomeranian' },
    { src: '/dogs/Frame 1000007556.png', alt: 'Friendly Beagle' },
    { src: '/dogs/Frame 1000007557.png', alt: 'Beautiful Husky' },
    { src: '/dogs/Frame 1000007558.png', alt: 'Adorable Bulldog' },
    { src: '/dogs/Frame 1000007559.png', alt: 'Energetic Border Collie' }
  ];

  // Duplicate photos to create seamless marquee
  const allDogPhotos = [...dogPhotos, ...dogPhotos, ...dogPhotos, ...dogPhotos];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2 font-bold text-vetly-ink mb-4">
            Why Pet Parents Choose Vetly
          </h2>
          <p className="text-body-mobile md:text-body text-vetly-muted max-w-2xl mx-auto">
            All-in-one training & wellness app — proven to reduce stress and speed up progress
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Marquee container */}
          <div className="marquee-container animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-4 animate-marquee marquee-content">
              {allDogPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-110 hover:rotate-3 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center animate-on-scroll" style={{ animationDelay: '0.5s' }}>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-vetly-pink mb-2">10,000+</div>
            <div className="text-vetly-muted">dog parents use Vetly</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-vetly-pink mb-2">25,000+</div>
            <div className="text-vetly-muted">lessons completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-vetly-pink mb-2">500+</div>
            <div className="text-vetly-muted">training videos & activities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMarquee;
