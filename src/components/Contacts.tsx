import React, { useEffect } from 'react';
import { Mail, Navigation, Phone } from "lucide-react";

const Contacts = () => {
  // Animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section id="contacts" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-gradient reveal">Контакты</h2>
        
        <div className="max-w-2xl mx-auto mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-8 reveal">ИП Марудов Александр Владимирович</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-4 reveal">
                <Phone size={24} className="mr-3 text-bizitblue" />
                <a 
                  href="tel:+79167021579" 
                  className="text-lg hover:text-bizitblue transition-colors"
                >
                  +7 916 702-15-79
                </a>
              </div>
              
              <div className="flex items-center justify-center mb-4 reveal">
                <Navigation size={24} className="mr-3 text-bizitblue" />
                <a 
                  href="https://www.bizitlab.ru" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-bizitblue transition-colors"
                >
                  www.bizitlab.ru
                </a>
              </div>
              
              <div className="flex items-center justify-center mb-4 reveal">
                <Mail size={24} className="mr-3 text-bizitgreen" />
                <a 
                  href="mailto:sale@bizitlab.ru" 
                  className="text-lg hover:text-bizitgreen transition-colors"
                >
                  sale@bizitlab.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
