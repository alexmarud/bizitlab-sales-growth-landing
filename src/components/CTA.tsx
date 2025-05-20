
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-bizitblue to-bizitgreen text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
          Готовы обсудить ваш проект?
        </h2>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 reveal">
          Свяжитесь с нами для бесплатной консультации и обсуждения задач вашего бизнеса
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-bizitblue hover:bg-white/90 font-medium py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 reveal"
        >
          <a 
            href="tel:+79167021579" 
            className="flex items-center"
          >
            <Phone className="mr-2" />
            Получить консультацию
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
