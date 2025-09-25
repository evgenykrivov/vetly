'use client';

import { useEffect, useRef } from 'react';

const DogGallery = () => {
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

  // Создаем массив с placeholder изображениями собак
  const dogPhotos = [
    { src: '/dog.png', alt: 'Happy Golden Retriever' },
    { src: '/dog.png', alt: 'Playful Labrador' },
    { src: '/dog.png', alt: 'Cute Pomeranian' },
    { src: '/dog.png', alt: 'Friendly Beagle' },
    { src: '/dog.png', alt: 'Beautiful Husky' },
    { src: '/dog.png', alt: 'Adorable Bulldog' },
    { src: '/dog.png', alt: 'Energetic Border Collie' }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-vetly-ink">
      <div className="container">
        <div className="animate-on-scroll mb-12">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {dogPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden bg-gray-200 animate-on-scroll hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
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
    </section>
  );
};

export default DogGallery;
