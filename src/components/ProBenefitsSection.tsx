'use client';

import { useEffect, useRef } from 'react';

const ProBenefitsSection = () => {
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

  const proBenefits = [
    { 
      icon: "💬", 
      title: "Full Access to AI Chats", 
      description: "Get quick help and enjoy 24/7 support from our team" 
    },
    { 
      icon: "🎯", 
      title: "Unlimited Training Programs", 
      description: "Benefit from our personalized and diverse training programs tailored to your pet's needs" 
    },
    { 
      icon: "🎬", 
      title: "Exclusive Video Content", 
      description: "Access all our high-quality videos for effective visual learning and training techniques" 
    },
    { 
      icon: "📊", 
      title: "Advanced Journaling", 
      description: "Track your progress, stay motivated, and analyze your results for continuous improvement" 
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-vetly-orange to-vetly-orange-dark relative overflow-hidden rounded-[60px] mx-4 md:mx-8 my-8 md:my-12">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-16 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-[1200px] mx-auto text-center text-vetly-ink">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-vetly-ink">PRO SUBSCRIPTION</span>
            </div>
            <h2 className="text-h2-mobile md:text-h2 font-bold mb-4 text-vetly-ink">
              PRO Subscription Benefits
            </h2>
            <p className="text-lg md:text-xl text-vetly-ink/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Upgrade to Vetly PRO for an enhanced experience with your pet
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {proBenefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 hover:shadow-xl hover:bg-white transition-all duration-300 text-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vetly-orange/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-vetly-ink mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-vetly-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="animate-on-scroll bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-8" style={{ animationDelay: '0.8s' }}>
            <p className="text-xl font-semibold text-vetly-ink mb-6">
              Upgrade to PRO today and give your pet the best care possible!
            </p>
            <a 
              href="https://quiz.vetly.gg/vetly-dog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Upgrade to PRO
            </a>
          </div>

          {/* Enterprise Note */}
          <div className="animate-on-scroll text-center" style={{ animationDelay: '1s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-vetly-orange/30">
              <h4 className="text-lg font-semibold text-vetly-ink mb-2">
                Custom / Enterprise Pricing
              </h4>
              <p className="text-vetly-ink/70">
                At this time, Vetly.gg does not provide custom or enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProBenefitsSection;
