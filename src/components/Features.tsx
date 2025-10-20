'use client';

import { useEffect, useRef } from 'react';

const Features = () => {
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

  const features = [
    {
      icon: (
        <div className="w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <img 
            src="/personalized.png" 
            alt="Personalized Care Plan" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ),
      title: "Personalized Care Plan",
      description: "Get a health care routine tailored to your pet's breed, age, and lifestyle — with step-by-step guides and daily wellness tips"
    },
    {
      icon: (
        <div className="w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <img 
            src="/quickDaily.png" 
            alt="Quick Daily Health Routines" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ),
      title: "Quick Daily Health Routines",
      description: "Support your pet's well-being with short daily tasks — just 15–20 minutes a day from the comfort of your home"
    },
    {
      icon: (
        <div className="w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <img 
            src="/healthWellness.png" 
            alt="Health & Wellness Tracker" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ),
      title: "Health & Wellness Tracker",
      description: "Easily monitor your pet's key health metrics, get reminders for checkups, and stay in control of their schedule — even remotely"
    },
    {
      icon: (
        <div className="w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <img 
            src="/activity.png" 
            alt="Activity & Walk Insights" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ),
      title: "Activity & Walk Insights",
      description: "Track your pet's movement and daily walks, set exercise goals, and create healthy routines with interactive maps"
    },
    {
      icon: (
        <div className="w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <img 
            src="/bond.png" 
            alt="Stronger Bond With Your Pet" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ),
      title: "Stronger Bond With Your Pet",
      description: "Understand your furry companion's emotional and physical needs through expert-backed tips, calming sounds, and care rituals"
    },
    {
      icon: (
        <div className="w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <img 
            src="/vetExpert.png" 
            alt="AI Training Assistant" 
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ),
      title: "AI Training Assistant",
      description: "Get step-by-step guidance and personalized plans based on vet-reviewed knowledge (educational use only, not a medical service)"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container max-w-5xl">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`animate-on-scroll flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon/Illustration */}
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-h3-mobile md:text-h3 font-bold text-vetly-ink mb-4">
                  {feature.title}
                </h3>
                <p className="text-body-mobile md:text-body text-vetly-muted leading-relaxed max-w-md mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://quiz.vetly.gg/vetly-dog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-vetly-orange to-vetly-orange-dark hover:from-vetly-orange-dark hover:to-vetly-orange text-white font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Get My Personal Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
