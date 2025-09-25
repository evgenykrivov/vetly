const Footer = () => {
  return (
    <footer className="bg-vetly-ink text-white section-padding">
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
            
            {/* Store badges */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a 
                href="https://quiz.vetly.gg/vetly-dog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 text-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://quiz.vetly.gg/vetly-dog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 text-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.445 12l2.253-2.491zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z" fill="currentColor"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Navigation links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors duration-200">Dog Trainers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              Copyright © 2025 Vetly LTD. All rights reserved.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vetly-pink rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vetly-pink rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vetly-pink rounded-full flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
