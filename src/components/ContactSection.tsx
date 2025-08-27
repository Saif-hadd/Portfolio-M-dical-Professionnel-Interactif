import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
  t: (key: string) => string;
  currentLang: 'fr' | 'en' | 'ar';
}

const ContactSection: React.FC<ContactSectionProps> = ({ t, currentLang }) => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentLang === 'fr' 
              ? 'Intéressé par une collaboration ? N\'hésitez pas à me contacter.' 
              : currentLang === 'en' 
              ? 'Interested in collaboration? Feel free to reach out.' 
              : 'مهتم بالتعاون؟ لا تتردد في التواصل معي.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">Mehdaouisami706@gmail.com</p>
          </div>
          <div className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {currentLang === 'fr' ? 'Téléphone' : currentLang === 'en' ? 'Phone' : 'الهاتف'}
            </h3>
            <p className="text-gray-300">+216 26 435 182 </p>
          </div>
          <div className="text-center p-8 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {currentLang === 'fr' ? 'Localisation' : currentLang === 'en' ? 'Location' : 'الموقع'}
            </h3>
            <p className="text-gray-300">Medenine, Tunisia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;