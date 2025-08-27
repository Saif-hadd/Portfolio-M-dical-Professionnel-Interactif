import React from 'react';
import { Stethoscope } from 'lucide-react';

interface FooterProps {
  currentLang: 'fr' | 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Dr. SAMI MAHDAOUI</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 Dr. SAMI MAHDAOUI. {currentLang === 'fr' ? 'Tous droits réservés.' : currentLang === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;