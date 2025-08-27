import React from 'react';
import { Heart, Activity, Brain, Shield, Clipboard ,ArrowRight } from 'lucide-react';


interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

interface CertificationsSectionProps {
  t: (key: string) => string;
  currentLang: 'fr' | 'en' | 'ar';
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ t, currentLang }) => {
  const certifications: Certification[] = [
    {
    name: currentLang === 'fr' ? "Membre de l'Ordre des Médecins Tunisien" : currentLang === 'en' ? 'Tunisian Order of Physicians – Member' : 'عضو في نقابة الأطباء التونسيين',
    issuer: 'Tunisian Order of Physicians',
    date: '2022',
    icon: <Shield className="w-6 h-6" />
  },
  {
    name: currentLang === 'fr' ? 'Accréditation Professionnelle (Médecine Générale)' : currentLang === 'en' ? 'Professional Accreditation (General Medicine)' : 'الاعتماد المهني (الطب العام)',
    issuer: 'Ministère de la Santé – Tunisie',
    date: '2022',
    icon: <Clipboard className="w-6 h-6" />
  }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('certificationsTitle')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {cert.icon}
                </div>
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cert.date}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.name}</h3>
              <p className="text-slate-600 text-sm">{cert.issuer}</p>
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                  <span className="text-sm font-medium">
                    {currentLang === 'fr' ? 'Voir détails' : currentLang === 'en' ? 'View Details' : 'عرض التفاصيل'}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;