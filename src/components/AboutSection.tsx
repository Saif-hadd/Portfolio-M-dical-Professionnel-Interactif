import { Users, Activity, Calendar, Globe } from 'lucide-react';

interface AboutSectionProps {
  t: (key: string) => string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  const stats = [
    { value: '50+', label: t('patientsTitle'), icon: <Users className="w-8 h-8" /> },
    { value: '100+', label: t('proceduresTitle'), icon: <Activity className="w-8 h-8" /> },
    { value: '3+', label: t('yearsTitle'), icon: <Calendar className="w-8 h-8" /> },
    { value: '2', label: t('countriesTitle'), icon: <Globe className="w-8 h-8" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('aboutTitle')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('aboutText')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
