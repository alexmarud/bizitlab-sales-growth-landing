
import React, { useEffect } from 'react';
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    id: 1,
    text: "15 лет в рознице и опте рыбы/FMCG — знаем «боль» изнутри.",
    icon: "🏆"
  },
  {
    id: 2,
    text: "Работаем sprint-подходом: первые результаты через 2 недели.",
    icon: "🚀"
  },
  {
    id: 3,
    text: "Гарантия: дорабатываем бесплатно, пока не скажете «Вау!».",
    icon: "✅"
  }
];

const WhyUs = () => {
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
    <section id="why-us" className="section bg-bizitgray">
      <div className="container mx-auto">
        <h2 className="section-title text-gradient reveal">Почему мы</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id} 
              className="flex items-start mb-8 reveal" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mr-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {reason.icon}
              </div>
              <div>
                <p className="text-lg md:text-xl text-gray-700">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
