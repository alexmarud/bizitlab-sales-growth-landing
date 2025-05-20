
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Внедрение Bitrix24 / amoCRM",
    description: "Анализ бизнес-процессов, настройка воронок, обучение команды.",
    icon: "📊",
    color: "bg-bizitblue/10",
    borderColor: "border-bizitblue/30"
  },
  {
    id: 2,
    title: "Telegram-боты под ключ",
    description: "Заказы, оповещения, поддержка клиентов, интеграция с CRM и 1С.",
    icon: "🤖",
    color: "bg-bizitgreen/10",
    borderColor: "border-bizitgreen/30"
  },
  {
    id: 3,
    title: "Отчёты и дашборды 1С",
    description: "Любая форма, BI-визуализация, автоматическое распределение по email.",
    icon: "📈",
    color: "bg-bizitblue/10",
    borderColor: "border-bizitblue/30"
  },
  {
    id: 4,
    title: "Управленческий учёт в 1С",
    description: "План-факт, бюджетирование, сквозная аналитика затрат и маржи.",
    icon: "📋",
    color: "bg-bizitgreen/10",
    borderColor: "border-bizitgreen/30"
  }
];

const Services = () => {
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
    // Trigger once to reveal elements already in view
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-gradient reveal">Наши услуги</h2>
        <p className="section-subtitle reveal">
          Комплексные решения для автоматизации бизнеса и повышения продаж
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {services.map((service, index) => (
            <div key={service.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className={`h-full card-shadow border-2 ${service.borderColor} ${service.color} hover:bg-white transition-colors`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl md:text-2xl font-semibold">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
