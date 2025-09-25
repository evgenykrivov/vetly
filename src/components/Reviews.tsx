'use client';

import { useState, useEffect, useRef } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Auto-advance reviews
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const reviews = [
    {
      name: "Samantha",
      location: "California",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-vetly-pink to-vetly-pink-dark rounded-full flex items-center justify-center text-white font-semibold">
          S
        </div>
      ),
      text: "Vetly has been a game-changer for training my Golden Retriever. The step-by-step guides are easy to follow, and I've seen amazing progress in just weeks. The vet consultations feature is incredibly helpful!",
      rating: 5
    },
    {
      name: "Carlos",
      location: "Texas",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-vetly-orange to-vetly-orange-dark rounded-full flex items-center justify-center text-white font-semibold">
          C
        </div>
      ),
      text: "As a first-time dog owner, I was overwhelmed until I found Vetly. The personalized care plans and daily health routines have made pet ownership so much more manageable. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily",
      location: "New York",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          E
        </div>
      ),
      text: "The health tracking features are fantastic! I love how I can monitor my dog's wellness and get reminders for important checkups. The expert advice is always spot-on.",
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
    setIsAutoPlaying(false);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-h2-mobile md:text-h2 font-bold text-vetly-ink mb-4">
            Vetly Reviews — True experiences from pet owners who trust Vetly
          </h2>
          <p className="text-body-mobile md:text-body text-vetly-muted max-w-2xl mx-auto">
            See what real pet parents are saying about their experience with Vetly
          </p>
        </div>

        {/* Reviews carousel for mobile, grid for desktop */}
        <div className="lg:hidden">
          {/* Mobile carousel */}
          <div className="max-w-md mx-auto animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl p-6 shadow-card border border-vetly-line">
              {/* Quote icon */}
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-vetly-pink">
                  <path d="M9.6 18.4c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C13.067 13.867 11.733 12 9.6 12c-.533 0-1.067.133-1.6.4L8.8 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8h-7.6v-5.2zm14.4 0c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C27.467 13.867 26.133 12 24 12c-.533 0-1.067.133-1.6.4L23.2 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8H24v-5.2z" fill="currentColor"/>
                </svg>
              </div>

              <p className="text-vetly-ink text-lg leading-relaxed mb-6">
                {reviews[currentReview].text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1l2.163 4.382L15 6.09l-3.5 3.409.826 4.818L8 12.236l-4.326 2.08L4.5 9.5 1 6.091l4.837-.708L8 1z"
                      fill="#FFD93D"
                    />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                {reviews[currentReview].avatar}
                <div>
                  <div className="font-semibold text-vetly-ink">{reviews[currentReview].name}</div>
                  <div className="text-vetly-muted text-sm">{reviews[currentReview].location}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={prevReview}
                className="w-10 h-10 bg-vetly-line hover:bg-vetly-pink hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous review"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentReview ? 'bg-vetly-pink w-6' : 'bg-vetly-line'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 bg-vetly-line hover:bg-vetly-pink hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next review"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-card border border-vetly-line hover:shadow-card-hover transition-shadow duration-200 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-vetly-pink">
                  <path d="M9.6 18.4c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C13.067 13.867 11.733 12 9.6 12c-.533 0-1.067.133-1.6.4L8.8 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8h-7.6v-5.2zm14.4 0c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C27.467 13.867 26.133 12 24 12c-.533 0-1.067.133-1.6.4L23.2 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8H24v-5.2z" fill="currentColor"/>
                </svg>
              </div>

              <p className="text-vetly-ink leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1l2.163 4.382L15 6.09l-3.5 3.409.826 4.818L8 12.236l-4.326 2.08L4.5 9.5 1 6.091l4.837-.708L8 1z"
                      fill="#FFD93D"
                    />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                {review.avatar}
                <div>
                  <div className="font-semibold text-vetly-ink">{review.name}</div>
                  <div className="text-vetly-muted text-sm">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
