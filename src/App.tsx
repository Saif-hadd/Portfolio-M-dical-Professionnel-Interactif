import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [currentLang, setCurrentLang] = useState<'fr' | 'en' | 'ar'>('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = (key: string) => translations[currentLang][key] || key;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navigation
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        t={t}
      />
      
      <HeroSection t={t} scrollToSection={scrollToSection} />
      <AboutSection t={t} />
      <ExperienceSection t={t} currentLang={currentLang} />
      <SkillsSection t={t} />
      <CertificationsSection t={t} currentLang={currentLang} />
      <ContactSection t={t} currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;