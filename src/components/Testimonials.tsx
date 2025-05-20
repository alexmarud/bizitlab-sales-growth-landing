
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 reveal">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-4">
                <Avatar className="h-16 w-16 mb-4 bg-bizitblue text-white">
                  <AvatarFallback>НС</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-xl mb-2">ООО "НАВИГАТОР СНАБ"</h3>
                <p className="text-gray-700 italic mb-4">
                  "Мы сотрудничаем с командой biz.it.lab уже несколько лет и очень довольны качеством сервиса. 
                  Специалисты всегда оперативно реагируют на наши запросы и предлагают эффективные решения 
                  для автоматизации бизнес-процессов. Благодаря внедренным системам нам удалось значительно 
                  оптимизировать работу отдела продаж."
                </p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0075FF" stroke="#0075FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0075FF" stroke="#0075FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0075FF" stroke="#0075FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0075FF" stroke="#0075FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0075FF" stroke="#0075FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
