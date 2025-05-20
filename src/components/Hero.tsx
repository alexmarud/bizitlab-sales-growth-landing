
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element: Element) => {
        const speed = parseFloat((element as HTMLElement).dataset.speed || '0.5');
        (element as HTMLElement).style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-bizitgray to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="parallax absolute -top-10 -left-10 w-64 h-64 rounded-full bg-bizitblue opacity-10" data-speed="0.2"></div>
        <div className="parallax absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-bizitgreen opacity-10" data-speed="0.3"></div>
        <div className="parallax absolute bottom-10 left-1/3 w-40 h-40 rounded-full bg-bizitblue opacity-10" data-speed="0.1"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Автоматизация, которая растит продажи и экономит время
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10 leading-normal max-w-3xl mx-auto">
            Внедрение Bitrix24 и amoCRM, Telegram-боты, кастом-отчёты и управленческий учёт 
            в 1С — <span className="font-medium">без головной боли</span>.
          </h2>
          
          <Button 
            size="lg" 
            className="bg-bizitblue hover:bg-bizitblue/90 text-white font-medium py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#services" className="flex items-center">
              Узнать больше
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
