import React from 'react';
import { MapPin, GraduationCap, ChevronRight, Star } from 'lucide-react';

interface Experience {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
  achievements: string[];
}

interface ExperienceSectionProps {
  t: (key: string) => string;
  currentLang: 'fr' | 'en' | 'ar';
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ t, currentLang }) => {
  const experiences: Experience[] = [
  {
    title: currentLang === 'fr' ? 'Médecin Urgentiste (Service de Nuit)' : currentLang === 'en' ? 'Emergency Doctor (Night Shift)' : 'طبيب طوارئ (نوبة ليلية)',
    institution: 'Al-Mouzn Polyclinic',
    location: 'Medenine, Tunisia',
    period: 'Mai 2025 - Présent',
    description: [
      currentLang === 'fr' ? 'Gestion de l’unité d’urgence de nuit, prenant en charge plus de 50 patients par service dans un environnement à haute pression' : 
      currentLang === 'en' ? 'Led the night emergency unit, managing 50+ patients per shift in high-pressure environments' :
      'إدارة وحدة الطوارئ الليلية، التعامل مع أكثر من 50 مريضًا لكل نوبة في بيئة عالية الضغط',
      
      currentLang === 'fr' ? 'Stabilisation des cas critiques traumatiques et cardio-respiratoires, réduisant les délais d’admission en réanimation' : 
      currentLang === 'en' ? 'Stabilized critical trauma and cardio-respiratory cases, reducing ICU admission delays' :
      'تثبيت الحالات الحرجة من الإصابات المتعددة والحالات القلبية التنفسية، مما قلل من تأخيرات الدخول إلى العناية المركزة',

      currentLang === 'fr' ? 'Coordination des transferts vers l’USI et interventions chirurgicales' : 
      currentLang === 'en' ? 'Coordinated seamless ICU transfers and surgical team interventions' :
      'تنسيق نقل المرضى إلى العناية المركزة وتدخلات الفريق الجراحي'
    ],
    achievements: []
  },
  {
    title: currentLang === 'fr' ? 'Néphrologue - Unité de Dialyse' : currentLang === 'en' ? 'Dialysis Unit Nephrologist' : 'أخصائي أمراض الكلى - وحدة الغسيل الكلوي',
    institution: 'IRYS Medical Clinic',
    location: 'Medenine, Tunisia',
    period: 'Mars 2025 - Présent',
    description: [
      currentLang === 'fr' ? 'Gestion d’une cohorte de plus de 30 patients en dialyse et prise en charge des complications aiguës (hypotension, troubles électrolytiques)' :
      currentLang === 'en' ? 'Managed a cohort of 30+ dialysis patients, effectively addressing acute complications (hypotension, electrolyte disorders)' :
      'إدارة أكثر من 30 مريض غسيل كلى، والتعامل مع المضاعفات الحادة (انخفاض ضغط الدم، اضطرابات الكهارل)',

      currentLang === 'fr' ? 'Collaboration avec nutritionnistes et assistants sociaux pour améliorer la prise en charge globale des patients' :
      currentLang === 'en' ? 'Collaborated with nutritionists and social workers to improve holistic patient outcomes' :
      'التعاون مع اختصاصيي التغذية والأخصائيين الاجتماعيين لتحسين النتائج الصحية للمرضى'
    ],
    achievements: []
  },
  {
    title: currentLang === 'fr' ? 'Médecin Généraliste' : currentLang === 'en' ? 'General Practitioner' : 'طبيب عام',
    institution: 'Cabinet Médical Privé',
    location: 'Medenine, Tunisia',
    period: 'Oct 2024 - Présent',
    description: [
      currentLang === 'fr' ? 'Consultations en pédiatrie, médecine interne et santé préventive' :
      currentLang === 'en' ? 'Delivered comprehensive care through consultations in pediatrics, internal medicine, and preventive health' :
      'تقديم الرعاية الشاملة من خلال استشارات في طب الأطفال، الطب الباطني، والصحة الوقائية',

      currentLang === 'fr' ? 'Coordination des plans de prise en charge des maladies chroniques avec des spécialistes externes' :
      currentLang === 'en' ? 'Coordinated chronic disease management plans with external specialists' :
      'تنسيق خطط إدارة الأمراض المزمنة مع الأخصائيين الخارجيين'
    ],
    achievements: []
  },
  {
    title: currentLang === 'fr' ? 'Médecin Résident en Urgences' : currentLang === 'en' ? 'Emergency Resident' : 'طبيب مقيم في الطوارئ',
    institution: 'Ariaya Polyclinic',
    location: 'Ben Guerdane, Tunisia',
    period: 'Mai 2024 - Présent',
    description: [
      currentLang === 'fr' ? 'Optimisation des protocoles de soins d’urgence et amélioration de l’efficacité du triage' :
      currentLang === 'en' ? 'Contributed to optimizing emergency care protocols, improving triage efficiency' :
      'المساهمة في تحسين بروتوكولات الرعاية الطارئة وزيادة كفاءة الفرز',

      currentLang === 'fr' ? 'Accompagnement des familles avec communication claire lors de situations critiques' :
      currentLang === 'en' ? 'Supported families with clear communication during critical situations' :
      'دعم العائلات من خلال التواصل الواضح في الحالات الحرجة'
    ],
    achievements: []
  },
  {
    title: currentLang === 'fr' ? 'Médecin Résident en Urgences' : currentLang === 'en' ? 'Emergency Resident' : 'طبيب مقيم في الطوارئ',
    institution: 'Ariaya Polyclinic',
    location: 'Mahdia, Tunisia',
    period: 'Juil 2022 - Nov 2023',
    description: [
      currentLang === 'fr' ? 'Participation à plus de 100 réanimations Code Blue et interventions ACLS' :
      currentLang === 'en' ? 'Performed ACLS interventions and participated in 100+ Code Blue resuscitations' :
      'أداء تدخلات ACLS والمشاركة في أكثر من 100 عملية إنعاش Code Blue',

      currentLang === 'fr' ? 'Encadrement des internes juniors dans les procédures d’urgence et la documentation clinique' :
      currentLang === 'en' ? 'Mentored junior interns in emergency procedures and clinical documentation' :
      'توجيه الأطباء المقيمين الجدد في إجراءات الطوارئ والتوثيق الطبي'
    ],
    achievements: []
  },
  {
    title: currentLang === 'fr' ? 'Médecin – Unité Covid-19' : currentLang === 'en' ? 'Covid-19 Unit Doctor' : 'طبيب وحدة كوفيد-19',
    institution: 'Habib Bourguiba Hospital',
    location: 'Medenine, Tunisia',
    period: 'Fév 2022 - Juin 2022',
    description: [
      currentLang === 'fr' ? 'Prise en charge des cas sévères de COVID-19 (oxygénothérapie, anticoagulation)' :
      currentLang === 'en' ? 'Delivered frontline care for severe COVID-19 cases (oxygen therapy, anticoagulation)' :
      'تقديم الرعاية المباشرة لحالات COVID-19 الشديدة (العلاج بالأكسجين، مضادات التجلط)',

      currentLang === 'fr' ? 'Mise en œuvre de protocoles stricts de contrôle des infections et facilitation des transferts en réanimation' :
      currentLang === 'en' ? 'Implemented strict infection control protocols and facilitated ICU transfers' :
      'تنفيذ بروتوكولات صارمة للوقاية من العدوى وتسهيل نقل المرضى إلى العناية المركزة'
    ],
    achievements: []
  }
];


  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('experienceTitle')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200 hidden lg:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-12 lg:mb-16 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}>
              <div className={`relative ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                      <div className="text-blue-600 font-semibold mb-1">{exp.institution}</div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location} • {exp.period}
                      </div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{desc}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-slate-800 mb-3">
                      {currentLang === 'fr' ? 'Réalisations clés' : currentLang === 'en' ? 'Key Achievements' : 'الإنجازات الرئيسية'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                          <Star className="w-4 h-4" />
                          <span className="text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;