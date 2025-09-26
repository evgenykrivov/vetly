'use client';

import { useState, useEffect, useRef } from 'react';

const TrustBlock = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        const nextSlide = (currentSlide + 1) % testimonials.length;
        changeSlide(nextSlide);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

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

  const testimonials = [
    {
      name: "Olivia Bennett",
      title: "Licensed veterinarian, expert in preventive care and stress-free pet parenting",
      testimonial: "With Vetly, you can confidently care for your pet's health through personalized guidance, created by licensed veterinarians. Whether it's regular check-ups, behavior concerns, or sudden symptoms, Vetly helps you understand your pet's needs at every stage of life. From daily wellness tips to expert advice, you and your pet can enjoy a healthier, happier life — with less stress and more peace of mind",
      avatar: (
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="/olivia.png" 
            alt="Dr. Olivia Bennett - Licensed veterinarian" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )
    },
    {
      name: "Dr. Sarah Williams",
      title: "Animal behaviorist, certified dog trainer",
      testimonial: "Vetly has revolutionized how pet parents approach dog training and care. The evidence-based methods and personalized approach make it accessible for everyone, regardless of experience level. I've seen remarkable improvements in both dogs and their families using this platform.",
      avatar: (
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="/sarah.png" 
            alt="Dr. Sarah Williams - Animal behaviorist" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )
    },
    {
      name: "Dr. Michael Chen",
      title: "Veterinary nutritionist and wellness expert",
      testimonial: "The comprehensive approach to pet wellness in Vetly is outstanding. It combines medical expertise with practical daily care, making it an invaluable resource for any pet parent who wants to provide the best care for their furry family member.",
      avatar: (
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="/chen.png" 
            alt="Dr. Michael Chen - Veterinary nutritionist" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-vetly-orange to-vetly-orange-dark overflow-hidden rounded-[60px] mx-4 md:mx-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2 font-bold text-vetly-ink mb-6">
            Trusted by Vets. Loved by Pet Parents
          </h2>
          <p className="text-lg text-vetly-ink max-w-4xl mx-auto leading-relaxed">
            Vetly is built on real veterinary knowledge and deep care for animals. Every feature is developed in 
            collaboration with licensed experts and backed by the latest medical research — because your pet 
            deserves nothing but the best
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="animate-on-scroll max-w-4xl mx-auto" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start gap-8 min-h-[300px] md:min-h-[250px]">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="transition-all duration-500 ease-in-out">
                  {testimonials[currentSlide].avatar}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className={`transition-all duration-500 ease-in-out transform ${
                  isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  <p className="text-lg text-vetly-ink leading-relaxed mb-6 min-h-[120px] md:min-h-[100px]">
                    {testimonials[currentSlide].testimonial}
                  </p>
                  
                  {/* Author Info */}
                  <div>
                    <h3 className="font-bold text-vetly-ink text-lg mb-1">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-vetly-muted text-sm">
                      {testimonials[currentSlide].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => changeSlide(Math.max(0, currentSlide - 1))}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-50 hover:scale-110"
              disabled={currentSlide === 0 || isTransitioning}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-3 hover:bg-white/60'
                  }`}
                  disabled={isTransitioning}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 disabled:opacity-50 hover:scale-110"
              disabled={currentSlide === testimonials.length - 1 || isTransitioning}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
