import React from 'react';
import { FileText, Mail } from 'lucide-react';

const cvUrl = '/assets/CV_Sami_Mahdaoui.pdf';
const profileImage = '/assets/image1.png';

interface HeroSectionProps {
  t: (key: string) => string;
  scrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t, scrollToSection }) => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte & boutons */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t('heroTitle')}
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-200 mb-6 font-light">
              {t('heroSubtitle')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href={cvUrl} 
                download="CV_Sami_Mahdaoui.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>{t('downloadCV')}</span>
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/20 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>{t('contactMe')}</span>
              </button>
            </div>
          </div>

          {/* Image de profil & Stats */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img src={profileImage} alt="Profil" className="w-full h-full object-cover" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl text-slate-800">
              <div className="text-2xl font-bold text-blue-600">6000+</div>
              <div className="text-sm">{t('patientsTitle')}</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl text-slate-800">
              <div className="text-2xl font-bold text-green-600">3+</div>
              <div className="text-sm">{t('yearsTitle')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
