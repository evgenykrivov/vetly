'use client';

import { useState, useEffect, useRef } from 'react';

const Reviews = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const reviewsPerGroup = 3;

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

  const reviews = [
    {
      name: "Samantha",
      location: "California",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-vetly-pink to-vetly-pink-dark rounded-full flex items-center justify-center text-white font-semibold">
          S
        </div>
      ),
      text: "Vetly has been a game-changer for training my Golden Retriever. The step-by-step guides are easy to follow, and I've seen amazing progress in just weeks.",
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
      text: "As a first-time dog owner, I was overwhelmed until I found Vetly. The personalized care plans have made pet ownership so much more manageable.",
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
      text: "The health tracking features are fantastic! I love how I can monitor my dog's wellness and get reminders for important checkups.",
      rating: 5
    },
    {
      name: "Michael",
      location: "Florida",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          M
        </div>
      ),
      text: "The AI assistant and vet-reviewed guides helped us understand our dog's behavior better. Quick, reliable guidance right when we needed it most.",
      rating: 5
    },
    {
      name: "Jessica",
      location: "Washington",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
          J
        </div>
      ),
      text: "Love the daily wellness tips! My rescue dog has never been healthier. The training modules are easy to follow and really effective.",
      rating: 5
    },
    {
      name: "David",
      location: "Colorado",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold">
          D
        </div>
      ),
      text: "Vetly helped us bond with our new puppy. The expert guidance and personalized care plans are worth every penny.",
      rating: 5
    },
    {
      name: "Sarah",
      location: "Oregon",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
          S
        </div>
      ),
      text: "The activity tracking helps us maintain our dog's exercise routine. Great insights and easy-to-understand recommendations.",
      rating: 5
    },
    {
      name: "Tom",
      location: "Michigan",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold">
          T
        </div>
      ),
      text: "Excellent app for busy pet parents. The reminders and health tracking keep me organized and my dog healthy.",
      rating: 5
    },
    {
      name: "Lisa",
      location: "Arizona",
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
          L
        </div>
      ),
      text: "The behavioral training tips really work! Our dog's destructive behavior improved dramatically in just a few weeks.",
      rating: 5
    }
  ];

  const totalGroups = Math.ceil(reviews.length / reviewsPerGroup);

  // Auto-advance review groups
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentGroup, totalGroups]);

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
    setIsAutoPlaying(false);
  };

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
    setIsAutoPlaying(false);
  };

  const goToGroup = (groupIndex: number) => {
    setCurrentGroup(groupIndex);
    setIsAutoPlaying(false);
  };

  // For mobile single review navigation
  const [currentMobileReview, setCurrentMobileReview] = useState(0);
  
  const nextMobileReview = () => {
    setCurrentMobileReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevMobileReview = () => {
    setCurrentMobileReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToMobileReview = (index: number) => {
    setCurrentMobileReview(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="trainers" ref={sectionRef} className="section-padding bg-white">
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
            <div className="bg-white rounded-3xl p-6 border border-vetly-line">
              {/* Quote icon */}
              <div className="mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-vetly-pink">
                  <path d="M9.6 18.4c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C13.067 13.867 11.733 12 9.6 12c-.533 0-1.067.133-1.6.4L8.8 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8h-7.6v-5.2zm14.4 0c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C27.467 13.867 26.133 12 24 12c-.533 0-1.067.133-1.6.4L23.2 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8H24v-5.2z" fill="currentColor"/>
                </svg>
              </div>

              <p className="text-vetly-ink text-lg leading-relaxed mb-8">
                {reviews[currentMobileReview].text}
              </p>

              {/* Bottom section - rating and author always at bottom */}
              <div className="mt-auto">
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
                  {reviews[currentMobileReview].avatar}
                  <div>
                    <div className="font-semibold text-vetly-ink">{reviews[currentMobileReview].name}</div>
                    <div className="text-vetly-muted text-sm">{reviews[currentMobileReview].location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={prevMobileReview}
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
                    onClick={() => goToMobileReview(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentMobileReview ? 'bg-vetly-pink w-6' : 'bg-vetly-line'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextMobileReview}
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

        {/* Desktop slider */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Reviews container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentGroup * 100}%)`
                }}
              >
                {Array.from({ length: totalGroups }, (_, groupIndex) => {
                  const groupReviews = reviews.slice(groupIndex * reviewsPerGroup, (groupIndex + 1) * reviewsPerGroup);
                  return (
                    <div
                      key={groupIndex}
                      className="w-full flex-shrink-0 grid grid-cols-3 gap-6"
                      style={{ minWidth: '100%' }}
                    >
                      {groupReviews.map((review, reviewIndex) => (
                        <div
                          key={`${groupIndex}-${reviewIndex}`}
                          className="bg-white rounded-3xl p-6 border border-vetly-line hover:border-vetly-pink transition-colors duration-200 h-full flex flex-col"
                        >
                          {/* Quote icon */}
                          <div className="mb-4">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-vetly-pink">
                              <path d="M9.6 18.4c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C13.067 13.867 11.733 12 9.6 12c-.533 0-1.067.133-1.6.4L8.8 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8h-7.6v-5.2zm14.4 0c0-2.133.8-3.2 2.4-3.2.533 0 1.067.133 1.6.4C27.467 13.867 26.133 12 24 12c-.533 0-1.067.133-1.6.4L23.2 10c.8-.533 1.733-.8 2.8-.8 3.2 0 5.6 2.4 5.6 6.4v8H24v-5.2z" fill="currentColor"/>
                            </svg>
                          </div>

                          {/* Review text */}
                          <p className="text-vetly-ink leading-relaxed mb-6 flex-1">
                            {review.text}
                          </p>

                          {/* Bottom section - rating and author */}
                          <div className="mt-auto">
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
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevGroup}
                className="w-12 h-12 bg-vetly-line hover:bg-vetly-pink hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous review group"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalGroups }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToGroup(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentGroup ? 'bg-vetly-pink w-6' : 'bg-vetly-line'
                    }`}
                    aria-label={`Go to review group ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextGroup}
                className="w-12 h-12 bg-vetly-line hover:bg-vetly-pink hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next review group"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
