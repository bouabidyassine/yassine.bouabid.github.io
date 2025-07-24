import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      skills: "Skills",
      certifications: "Certifications",
      education: "Education",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      mechanical_engineer: "MECHANICAL ENGINEER",
      light_mode: "Light Mode",
      dark_mode: "Dark Mode",
      change_language: "Change Language",
      contact_info: "Contact Information",
      social_links: "Social Links",
      theme: "Theme",
      language: "Language",
      hero: {
        greeting: "Hello, I'm",
        title: "Yassine Bouabid",
        description: "Mechanical Design & Simulation | CAD – FEA – AI\n\nProfile Summary:\nMechanical engineer specialized in design and simulation, with strong expertise in Computer-Aided Design (CAD) (CATIA, SolidWorks), Finite Element Analysis (FEA) (Abaqus, ANSYS), and virtual prototyping. Passionate about integrating Artificial Intelligence (AI) to enhance design workflows, predict failures, and automate engineering processes.",
        download: "Download CV",
        console: "Open Console",
        design: "Mechanical Engineer & Designer"
      }
    }
  },
  fr: {
    translation: {
      home: "Accueil",
      skills: "Compétences",
      certifications: "Certifications",
      education: "Formations",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
      mechanical_engineer: "INGÉNIEUR MÉCANIQUE",
      light_mode: "Mode Clair",
      dark_mode: "Mode Sombre",
      change_language: "Changer de langue",
      contact_info: "Informations de contact",
      social_links: "Liens sociaux",
      theme: "Thème",
      language: "Langue",
      hero: {
        greeting: "Bonjour, je suis",
        title: "Yassine Bouabid",
        description: "Conception Mécanique & Simulation | CAO – FEA – IA\n\nRésumé du Profil:\nIngénieur mécanicien spécialisé en conception et simulation, avec une solide expertise en Conception Assistée par Ordinateur (CAO) (CATIA, SolidWorks), Analyse par Éléments Finis (FEA) (Abaqus, ANSYS), et prototypage virtuel. Passionné par l'intégration de l'Intelligence Artificielle (IA) pour améliorer les flux de travail de conception, prédire les défaillances et automatiser les processus d'ingénierie.",
        download: "Télécharger CV",
        console: "Ouvrir Console",
        design: "Ingénieur Mécanique & Designer"
      }
    }
  },
  ar: {
    translation: {
      home: "الرئيسية",
      skills: "المهارات",
      certifications: "الشهادات",
      education: "التعليم",
      projects: "المشاريع",
      experience: "الخبرة",
      contact: "اتصل",
      mechanical_engineer: "مهندس ميكانيكي",
      light_mode: "الوضع الفاتح",
      dark_mode: "الوضع المظلم",
      change_language: "تغيير اللغة",
      contact_info: "معلومات الاتصال",
      social_links: "روابط اجتماعية",
      theme: "المظهر",
      language: "اللغة",
      hero: {
        greeting: "مرحبًا، أنا",
        title: "ياسين بوعبيد",
        description: "التصميم الميكانيكي والمحاكاة | CAD – FEA – الذكاء الاصطناعي\n\nملخص الملف:\nمهندس ميكانيكي متخصص في التصميم والمحاكاة، مع خبرة قوية في التصميم بمساعدة الكمبيوتر (CAD) (كاتيا، سوليدوركس)، تحليل العناصر المحدودة (FEA) (أباكوس، أنسيس)، والنماذج الأولية الافتراضية. شغوف بدمج الذكاء الاصطناعي (AI) لتحسين سير عمل التصميم، وتوقع الأعطال، وأتمتة العمليات الهندسية.",
        download: "تحميل السيرة الذاتية",
        console: "فتح وحدة التحكم",
        design: "مهندس ميكانيكي ومصمم"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;