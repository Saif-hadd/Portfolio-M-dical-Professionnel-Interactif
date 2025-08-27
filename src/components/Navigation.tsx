import React from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

interface NavigationProps {
  currentLang: 'fr' | 'en' | 'ar';
  setCurrentLang: (lang: 'fr' | 'en' | 'ar') => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
  t: (key: string) => string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentLang,
  setCurrentLang,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  t
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Dr. SAMI MAHDAOUI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'experience', 'skills', 'certifications', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {t(section === 'home' ? 'profile' : section)}
              </button>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {['fr', 'en', 'ar'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang as 'fr' | 'en' | 'ar')}
                  className={`px-3 py-1 rounded-md transition-all duration-300 ${
                    currentLang === lang
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-blue-50'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2">
            {['home', 'experience', 'skills', 'certifications', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {t(section === 'home' ? 'profile' : section)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;