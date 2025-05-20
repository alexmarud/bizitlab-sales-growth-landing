
import React, { useEffect } from 'react';

const Testimonials = () => {
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
    <section id="testimonials" className="section bg-bizitgray/50">
      <div className="container mx-auto">
        <h2 className="section-title text-gradient reveal">Отзывы клиентов</h2>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-600 italic reveal">
            Секция для отзывов клиентов будет добавлена в ближайшее время.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
