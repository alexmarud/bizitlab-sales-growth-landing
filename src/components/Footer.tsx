
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <a href="#" className="text-xl font-bold flex items-center">
            <span className="text-bizitblue">Biz.</span>
            <span className="text-bizitgreen">IT.</span>
            <span>Lab</span>
          </a>
        </div>
        
        <p className="text-gray-600">
          © {new Date().getFullYear()} biz.it.lab — Автоматизация & CRM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
