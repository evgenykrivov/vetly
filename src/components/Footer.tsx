'use client';

import { useState } from 'react';

const Footer = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <>
      {/* About Us Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setShowAboutModal(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-vetly-ink mb-6">About Vetly</h2>
              
              <div className="space-y-4 text-vetly-ink leading-relaxed">
                <p>
                  <strong>Vetly</strong> is the comprehensive pet care platform that transforms how pet parents 
                  approach their furry family member's health, training, and overall wellbeing.
                </p>
                
                <p>
                  Built by a team of passionate pet lovers, veterinarians, and technology experts, 
                  Vetly combines cutting-edge technology with evidence-based veterinary science to 
                  provide personalized care solutions for every dog, regardless of breed, age, or needs.
                </p>
                
                <p>
                  Our mission is simple: <em>to make pet care accessible, stress-free, and effective 
                  for every pet parent, while ensuring every dog lives their happiest, healthiest life.</em>
                </p>
                
                
                <div className="bg-gradient-to-r from-vetly-orange/10 to-vetly-pink/10 p-4 rounded-xl border border-vetly-orange/20">
                  <h3 className="text-xl font-semibold mb-3 text-vetly-orange">PRO Subscription Benefits:</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Full Access to AI Chats:</strong> Get quick help and enjoy 24/7 support from our team</li>
                    <li>• <strong>Unlimited Training Programs:</strong> Benefit from our personalized and diverse training programs tailored to your pet's needs</li>
                    <li>• <strong>Exclusive Video Content:</strong> Access all our high-quality videos for effective visual learning and training techniques</li>
                    <li>• <strong>Advanced Journaling:</strong> Track your progress, stay motivated, and analyze your results for continuous improvement</li>
                  </ul>
                  <p className="mt-3 text-sm text-vetly-muted">
                    <em>Note: At this time, Vetly.gg does not provide custom or enterprise plans.</em>
                  </p>
                </div>
                
                <p>
                  Trusted by over 10,000 pet parents and 500+ veterinary professionals, 
                  Vetly has helped more than 25,000 pets live healthier, happier lives.
                </p>
                
                <div className="bg-vetly-cream p-4 rounded-xl">
                  <p className="font-medium text-vetly-ink">
                    Ready to give your pet the best care possible? 
                    <a 
                      href="mailto:contact@vetly.gg?subject=Start%20Journey%20with%20Vetly&body=Hi%20Vetly%20Team,%0A%0AI'm%20ready%20to%20give%20my%20pet%20the%20best%20care%20possible%20and%20would%20like%20to%20start%20my%20journey%20with%20Vetly.%0A%0APlease%20contact%20me%20to%20learn%20more%20about%20your%20services.%0A%0AThank%20you!"
                      className="text-vetly-pink hover:underline ml-1"
                    >
                      Start your journey with Vetly today.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer content */}
    <footer id="contact" className="bg-vetly-ink text-white section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/vetlyLogo.svg" 
                alt="Vetly Logo" 
                className="h-8 w-auto filter brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              The comprehensive pet care app that makes pet ownership easier, healthier, and more enjoyable for you and your furry friends.
            </p>
            
            {/* CTA Button */}
            <div className="mt-6">
              <a 
                href="mailto:contact@vetly.gg?subject=Get%20Started%20with%20Vetly&body=Hi%20Vetly%20Team,%0A%0AI'm%20interested%20in%20getting%20started%20with%20Vetly%20for%20my%20pet.%20I%20would%20like%20to%20learn%20more%20about%20your%20comprehensive%20pet%20care%20services.%0A%0APlease%20contact%20me%20to%20get%20started.%0A%0AThank%20you!"
                className="bg-vetly-pink hover:bg-vetly-pink-dark text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 inline-block text-center"
              >
                Get Started with Vetly
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <button 
                  onClick={() => setShowAboutModal(true)}
                  className="hover:text-white transition-colors duration-200 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <a 
                  href="mailto:contact@vetly.gg?subject=Hello%20Vetly%20Team&body=Hi%20there,%0A%0AI%20would%20like%20to%20learn%20more%20about%20Vetly%20and%20how%20it%20can%20help%20with%20my%20pet%20care%20needs.%0A%0AThank%20you!"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a 
                  href="https://vetly.gg/privacy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://vetly.gg/terms"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="https://vetly.gg/pricing"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              Copyright © 2025 Vetly LTD. All rights reserved.
            </p>
            
            {/* Contact Email */}
            <div className="flex items-center gap-3">
              <a 
                href="mailto:contact@vetly.gg?subject=Hello%20Vetly%20Team&body=Hi%20there,%0A%0AI%20would%20like%20to%20learn%20more%20about%20Vetly%20and%20how%20it%20can%20help%20with%20my%20pet%20care%20needs.%0A%0AThank%20you!"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm">contact@vetly.gg</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
