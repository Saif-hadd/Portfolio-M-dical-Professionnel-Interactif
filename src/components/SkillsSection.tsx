import React from 'react';
import { BookOpen, Languages, Zap, Activity, Heart, Shield, Brain } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface LanguageSkill {
  name: string;
  level: number;
  code: string;
}

interface SkillsSectionProps {
  t: (key: string) => string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ t }) => {
  const skills: Skill[] = [
    { name: t('emergencyMedicine'), level: 95, icon: <Zap className="w-6 h-6" /> },
    { name: t('criticalCare'), level: 90, icon: <Heart className="w-6 h-6" /> },
    { name: t('generalPractice'), level: 88, icon: <Activity className="w-6 h-6" /> },
    { name: t('crisisManagement'), level: 85, icon: <Shield className="w-6 h-6" /> },
    { name: t('digitalTools'), level: 82, icon: <Brain className="w-6 h-6" /> },
  ];

  const languageSkills: LanguageSkill[] = [
    { name: t('french'), level: 100, code: 'fr' },
    { name: t('english'), level: 95, code: 'en' },
    { name: t('arabic'), level: 90, code: 'ar' },
    { name: t('russian'), level: 75, code: 'ru' },
    { name: t('german'), level: 60, code: 'de' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('skillsTitle')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
              {t('technicalSkills')} {/* clé de traduction pour le titre */}
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out transform hover:scale-105"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
              <Languages className="w-6 h-6 mr-3 text-blue-600" />
              {t('languagesTitle')}
            </h3>
            <div className="space-y-6">
              {languageSkills.map((lang, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-800">{lang.name}</span>
                    <span className="text-blue-600 font-bold">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
