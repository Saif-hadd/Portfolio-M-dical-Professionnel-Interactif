export interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translation = {
  fr: {
    // Navigation
    profile: 'Profil',
    experience: 'Expérience',
    skills: 'Compétences',
    certifications: 'Certifications',
    projects: 'Projets',
    recommendations: 'Recommandations',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Dr. SAMI MAHDAOUI',
    heroSubtitle: 'Médecin Généraliste & Spécialiste en Médecine d\'Urgence',
    heroDescription: 'Expertise internationale en médecine d\'urgence, néphrologie et soins critiques. Plus de 3 ans d\'expérience dans des environnements hospitaliers à haute pression.',
    downloadCV: 'Télécharger CV',
    contactMe: 'Me Contacter',

    // About
    aboutTitle: 'Profil Professionnel',
    aboutText: 'Médecin passionné avec une expertise approfondie en médecine d\'urgence et néphrologie. Formé internationalement avec une expérience significative dans la gestion des situations critiques et l\'amélioration des processus de soins.',

    // Experience
    experienceTitle: 'Parcours Professionnel',
    currentPosition: 'Médecin Urgentiste Senior',

    // Skills
    skillsTitle: 'Domaines d\'Expertise',
    technicalSkills: 'Compétences Techniques',  // <-- clé ajoutée
    emergencyMedicine: 'Médecine d\'Urgence',
    criticalCare: 'Soins Critiques',
    generalPractice: 'Médecine Générale & Néphrologie',
    crisisManagement: 'Gestion de Crise & Communication Interdisciplinaire',
    digitalTools: 'Outils Numériques (DME, EHR, Télémédecine)',
    dialysis: 'Dialyse',
    ventilation: 'Ventilation Mécanique',

    // Languages
    languagesTitle: 'Compétences Linguistiques',
    french: 'Français',
    english: 'Anglais',
    arabic: 'Arabe',
    russian: 'Russe',
    german: 'Allemand',

    // Certifications
    certificationsTitle: 'Certifications & Formations',

    // Projects
    projectsTitle: 'Projets Cliniques',

    // Stats
    patientsTitle: 'Patients Traités',
    proceduresTitle: 'Procédures Réalisées',
    yearsTitle: 'Années d\'Expérience',
    countriesTitle: 'Pays d\'Exercice',
  },

  en: {
    // Navigation
    profile: 'Profile',
    experience: 'Experience',
    skills: 'Skills',
    certifications: 'Certifications',
    projects: 'Projects',
    recommendations: 'Recommendations',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Dr. SAMI MAHDAOUI',
    heroSubtitle: 'General Practitioner & Emergency Medicine Specialist',
    heroDescription: 'International expertise in emergency medicine, nephrology and critical care. Over 3 years of experience in high-pressure hospital environments.',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',

    // About
    aboutTitle: 'Professional Profile',
    aboutText: 'Passionate physician with deep expertise in emergency medicine and nephrology. Internationally trained with significant experience in managing critical situations and improving care processes.',

    // Experience
    experienceTitle: 'Professional Experience',
    currentPosition: 'Senior Emergency Physician',

    // Skills
    skillsTitle: 'Areas of Expertise',
    technicalSkills: 'Technical Skills', // <-- clé ajoutée
    emergencyMedicine: 'Emergency Medicine',
    criticalCare: 'Critical Care',
    generalPractice: 'General Practice & Nephrology',
    crisisManagement: 'Crisis Management & Interdisciplinary Communication',
    digitalTools: 'Digital Tools (EMR, EHR, Telemedicine)',
    dialysis: 'Dialysis',
    ventilation: 'Mechanical Ventilation',

    // Languages
    languagesTitle: 'Language Skills',
    french: 'French',
    english: 'English',
    arabic: 'Arabic',
    russian: 'Russian',
    german: 'German',

    // Certifications
    certificationsTitle: 'Certifications & Training',

    // Projects
    projectsTitle: 'Clinical Projects',

    // Stats
    patientsTitle: 'Patients Treated',
    proceduresTitle: 'Procedures Performed',
    yearsTitle: 'Years Experience',
    countriesTitle: 'Countries Practiced',
  },

  ar: {
    // Navigation
    profile: 'الملف الشخصي',
    experience: 'الخبرة',
    skills: 'المهارات',
    certifications: 'الشهادات',
    projects: 'المشاريع',
    recommendations: 'التوصيات',
    contact: 'اتصل',

    // Hero Section
    heroTitle: 'د. سامي المهداوي',
    heroSubtitle: 'طبيب عام ومتخصص في طب الطوارئ',
    heroDescription: 'خبرة دولية في طب الطوارئ وأمراض الكلى والرعاية الحرجة. أكثر من 3 سنوات من الخبرة في بيئات المستشفيات عالية الضغط.',
    downloadCV: 'تحميل السيرة الذاتية',
    contactMe: 'تواصل معي',

    // About
    aboutTitle: 'الملف المهني',
    aboutText: 'طبيب شغوف بخبرة عميقة في طب الطوارئ وأمراض الكلى. متدرب دولياً مع خبرة كبيرة في إدارة الحالات الحرجة وتحسين عمليات الرعاية.',

    // Experience
    experienceTitle: 'الخبرة المهنية',
    currentPosition: 'طبيب طوارئ أول',

    // Skills
    skillsTitle: 'مجالات الخبرة',
    technicalSkills: 'المهارات التقنية', // <-- clé ajoutée
    emergencyMedicine: 'طب الطوارئ',
    criticalCare: 'الرعاية الحرجة',
    generalPractice: 'الطب العام وأمراض الكلى',
    crisisManagement: 'إدارة الأزمات والتواصل متعدد التخصصات',
    digitalTools: 'الأدوات الرقمية (السجلات الطبية الإلكترونية، التطبيب عن بعد)',
    dialysis: 'غسيل الكلى',
    ventilation: 'التهوية الميكانيكية',

    // Languages
    languagesTitle: 'المهارات اللغوية',
    french: 'الفرنسية',
    english: 'الإنجليزية',
    arabic: 'العربية',
    russian: 'الروسية',
    german: 'الألمانية',

    // Certifications
    certificationsTitle: 'الشهادات والتدريب',

    // Projects
    projectsTitle: 'المشاريع الطبية',

    // Stats
    patientsTitle: 'المرضى المعالجين',
    proceduresTitle: 'الإجراءات المنجزة',
    yearsTitle: 'سنوات الخبرة',
    countriesTitle: 'البلدان المتمرس بها',
  }
};
