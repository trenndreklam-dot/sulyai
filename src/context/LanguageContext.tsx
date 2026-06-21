import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar" | "tr" | "ku";

interface Translations {
  dir: string;
  navHome: string;
  navFeatures: string;
  navPricing: string;
  navHowItWorks: string;
  login: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  startBtn: string;
  demoBtn: string;
  statsStudents: string;
  statsCourses: string;
  statsAccuracy: string;
  statsTutor: string;
  statsStudentsLabel: string;
  statsCoursesLabel: string;
  statsAccuracyLabel: string;
  statsTutorLabel: string;
  featuresTitle: string;
  featuresSubtitle: string;
  featureAiTutor: string;
  featureAiTutorDesc: string;
  featureSummaries: string;
  featureSummariesDesc: string;
  featureQuiz: string;
  featureQuizDesc: string;
  featurePlanner: string;
  featurePlannerDesc: string;
  featureAnalytics: string;
  featureAnalyticsDesc: string;
  featureLecturer: string;
  featureLecturerDesc: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  step5Title: string;
  step5Desc: string;
  dashboardTitle: string;
  dashboardSubtitle: string;
  dashboardGpa: string;
  dashboardTasks: string;
  dashboardChat: string;
  dashboardSchedule: string;
  dashboardNotifications: string;
  dashboardCourses: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonial1: string;
  testimonial1Name: string;
  testimonial1Uni: string;
  testimonial2: string;
  testimonial2Name: string;
  testimonial2Uni: string;
  testimonial3: string;
  testimonial3Name: string;
  testimonial3Uni: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBtn: string;
  footerAbout: string;
  footerPrivacy: string;
  footerContact: string;
  footerRights: string;
}

const dictionary: Record<Language, Translations> = {
  en: {
    dir: "ltr",
    navHome: "Home",
    navFeatures: "Features",
    navPricing: "Pricing",
    navHowItWorks: "How It Works",
    login: "Login",
    heroTitle: "SULY AI",
    heroSubtitle: "Smart University Learning for You",
    heroDesc: "AI that understands your university journey. Tailored for students to excel in their academic career.",
    startBtn: "Start Learning",
    demoBtn: "Watch Demo",
    statsStudents: "50,000+",
    statsCourses: "150+",
    statsAccuracy: "95%",
    statsTutor: "24/7",
    statsStudentsLabel: "Students",
    statsCoursesLabel: "Courses",
    statsAccuracyLabel: "Accuracy",
    statsTutorLabel: "AI Tutor",
    featuresTitle: "Features",
    featuresSubtitle: "Everything you need to succeed",
    featureAiTutor: "AI Tutor",
    featureAiTutorDesc: "Chat with your own AI assistant that understands your courses",
    featureSummaries: "Smart Summaries",
    featureSummariesDesc: "Generate comprehensive summaries instantly from any material",
    featureQuiz: "AI Quiz Generator",
    featureQuizDesc: "Practice with personalized quizzes tailored to your level",
    featurePlanner: "Study Planner",
    featurePlannerDesc: "Organize your semester with smart scheduling",
    featureAnalytics: "Progress Analytics",
    featureAnalyticsDesc: "Track your performance with detailed insights",
    featureLecturer: "Lecturer Assistant",
    featureLecturerDesc: "Course management tools for educators",
    howItWorksTitle: "How It Works",
    howItWorksSubtitle: "Your path to academic success",
    step1Title: "Upload Syllabus",
    step1Desc: "Upload your course syllabus or paste the content",
    step2Title: "AI Analyzes",
    step2Desc: "Our AI analyzes and structures your course material",
    step3Title: "Personal Roadmap",
    step3Desc: "Get a customized learning roadmap just for you",
    step4Title: "Daily Study Plan",
    step4Desc: "Receive daily study plans and reminders",
    step5Title: "Exams & Quizzes",
    step5Desc: "Practice with generated exams and track progress",
    dashboardTitle: "Dashboard Preview",
    dashboardSubtitle: "Your command center for academic success",
    dashboardGpa: "GPA",
    dashboardTasks: "Today's Tasks",
    dashboardChat: "AI Chat",
    dashboardSchedule: "Schedule",
    dashboardNotifications: "Notifications",
    dashboardCourses: "Courses",
    testimonialsTitle: "Testimonials",
    testimonialsSubtitle: "What students say about us",
    testimonial1: "SULY AI transformed my study routine. I went from struggling to top of my class!",
    testimonial1Name: "Ahmed K.",
    testimonial1Uni: "University of Baghdad",
    testimonial2: "The AI tutor is like having a personal professor available 24/7. Absolutely amazing!",
    testimonial2Name: "Sara M.",
    testimonial2Uni: "University of Kirkuk",
    testimonial3: "Smart summaries saved me hours of reading. Best study tool I've ever used.",
    testimonial3Name: "Omar R.",
    testimonial3Uni: "NTU",
    ctaTitle: "Ready to transform your university learning?",
    ctaSubtitle: "Join thousands of students already using SULY AI",
    ctaBtn: "Get Started",
    footerAbout: "About",
    footerPrivacy: "Privacy",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
  },
  ar: {
    dir: "rtl",
    navHome: "الرئيسية",
    navFeatures: "المميزات",
    navPricing: "الأسعار",
    navHowItWorks: "كيف يعمل",
    login: "تسجيل الدخول",
    heroTitle: "SULY AI",
    heroSubtitle: "التعلم الجامعي الذكي لك",
    heroDesc: "ذكاء اصطناعي يفهم رحلتك الجامعية. مصمم خصيصاً للطلاب للتفوق في مسيرتهم الأكاديمية.",
    startBtn: "ابدأ التعلم",
    demoBtn: "شاهد العرض",
    statsStudents: "+50,000",
    statsCourses: "+150",
    statsAccuracy: "%95",
    statsTutor: "24/7",
    statsStudentsLabel: "طالب",
    statsCoursesLabel: "دورة",
    statsAccuracyLabel: "دقة",
    statsTutorLabel: "معلم ذكي",
    featuresTitle: "المميزات",
    featuresSubtitle: "كل ما تحتاجه للنجاح",
    featureAiTutor: "معلم ذكي",
    featureAiTutorDesc: "تحدث مع مساعدك الذكي الذي يفهم موادك الدراسية",
    featureSummaries: "ملخصات ذكية",
    featureSummariesDesc: "أنشئ ملخصات شاملة فوراً من أي مادة",
    featureQuiz: "مولد اختبارات ذكي",
    featureQuizDesc: "تمرن مع اختبارات مخصصة حسب مستواك",
    featurePlanner: "مخطط الدراسة",
    featurePlannerDesc: "نظم فصلك الدراسي بجدولة ذكية",
    featureAnalytics: "تحليلات التقدم",
    featureAnalyticsDesc: "تتبع أداءك مع رؤى مفصلة",
    featureLecturer: "مساعد المحاضر",
    featureLecturerDesc: "أدوات إدارة المقررات للتدريسيين",
    howItWorksTitle: "كيف يعمل",
    howItWorksSubtitle: "طريقك نحو النجاح الأكاديمي",
    step1Title: "ارفع المنهج",
    step1Desc: "ارفع منهج مقررك أو انسخ المحتوى",
    step2Title: "الذكاء يحلل",
    step2Desc: "يحلل الذكاء الاصطناعي وينظم مادة مقررك",
    step3Title: "خارطة طريق",
    step3Desc: "احصل على خارطة تعلم مخصصة لك",
    step4Title: "خطة يومية",
    step4Desc: "استلم خطط دراسية يومية وتنبيهات",
    step5Title: "امتحانات واختبارات",
    step5Desc: "تمرن مع اختبارات مولدة وتتبع تقدمك",
    dashboardTitle: "معاينة لوحة التحكم",
    dashboardSubtitle: "مركز قيادتك للنجاح الأكاديمي",
    dashboardGpa: "معدل تراكمي",
    dashboardTasks: "مهام اليوم",
    dashboardChat: "محادثة الذكاء",
    dashboardSchedule: "الجدول",
    dashboardNotifications: "التنبيهات",
    dashboardCourses: "المقررات",
    testimonialsTitle: "آراء الطلاب",
    testimonialsSubtitle: "ماذا يقول الطلاب عنا",
    testimonial1: "غيّر SULY AI روتين دراستي. انتقلت من الكفاح إلى أعلى صفي!",
    testimonial1Name: "أحمد ك.",
    testimonial1Uni: "جامعة بغداد",
    testimonial2: "المعلم الذكي كأنك تملك أستاذاً شخصياً متوفراً 24/7. رائع جداً!",
    testimonial2Name: "سارة م.",
    testimonial2Uni: "جامعة كركوك",
    testimonial3: "الملخصات الذكية وفرت لي ساعات من القراءة. أفضل أداة دراسة استخدمتها.",
    testimonial3Name: "عمر ر.",
    testimonial3Uni: "جامعة تكنولوجية",
    ctaTitle: "مستعد لتحويل تعلمك الجامعي؟",
    ctaSubtitle: "انضم إلى آلاف الطلاب الذين يستخدمون SULY AI",
    ctaBtn: "ابدأ الآن",
    footerAbout: "عنا",
    footerPrivacy: "الخصوصية",
    footerContact: "تواصل",
    footerRights: "جميع الحقوق محفوظة.",
  },
  tr: {
    dir: "ltr",
    navHome: "Ana Sayfa",
    navFeatures: "Özellikler",
    navPricing: "Fiyatlandırma",
    navHowItWorks: "Nasıl Çalışır",
    login: "Giriş",
    heroTitle: "SULY AI",
    heroSubtitle: "Senin İçin Akıllı Üniversite Eğitimi",
    heroDesc: "Üniversite yolculuğunuzu anlayan yapay zeka. Öğrencilerin akademik kariyerlerinde başarılı olmaları için tasarlandı.",
    startBtn: "Öğrenmeye Başla",
    demoBtn: "Demoyu İzle",
    statsStudents: "50.000+",
    statsCourses: "150+",
    statsAccuracy: "%95",
    statsTutor: "7/24",
    statsStudentsLabel: "Öğrenci",
    statsCoursesLabel: "Kurs",
    statsAccuracyLabel: "Doğruluk",
    statsTutorLabel: "AI Öğretmen",
    featuresTitle: "Özellikler",
    featuresSubtitle: "Başarı için ihtiyacın olan her şey",
    featureAiTutor: "AI Öğretmen",
    featureAiTutorDesc: "Derslerini anlayan kendi AI asistanınla sohbet et",
    featureSummaries: "Akıllı Özetler",
    featureSummariesDesc: "Herhangi bir materyalden anında kapsamlı özetler oluştur",
    featureQuiz: "AI Quiz Oluşturucu",
    featureQuizDesc: "Seviyene göre kişiselleştirilmiş quizlerle pratik yap",
    featurePlanner: "Çalışma Planlayıcı",
    featurePlannerDesc: "Akıllı programlama ile dönemini organize et",
    featureAnalytics: "İlerleme Analitiği",
    featureAnalyticsDesc: "Detaylı içgörülerle performansını takip et",
    featureLecturer: "Öğretmen Asistanı",
    featureLecturerDesc: "Eğitimciler için ders yönetimi araçları",
    howItWorksTitle: "Nasıl Çalışır",
    howItWorksSubtitle: "Akademik başarıya giden yolun",
    step1Title: "Müfredat Yükle",
    step1Desc: "Ders müfredatını yükle veya içeriği yapıştır",
    step2Title: "AI Analiz Eder",
    step2Desc: "Yapay zekamız ders materyalini analiz eder ve yapılandırır",
    step3Title: "Kişisel Yol Haritası",
    step3Desc: "Sadece senin için özelleştirilmiş bir öğrenme yol haritası al",
    step4Title: "Günlük Çalışma Planı",
    step4Desc: "Günlük çalışma planları ve hatırlatmalar al",
    step5Title: "Sınavlar ve Quizler",
    step5Desc: "Oluşturulan sınavlarla pratik yap ve ilerlemeni takip et",
    dashboardTitle: "Gösterge Paneli Önizlemesi",
    dashboardSubtitle: "Akademik başarın için komuta merkezin",
    dashboardGpa: "GPA",
    dashboardTasks: "Bugünün Görevleri",
    dashboardChat: "AI Sohbet",
    dashboardSchedule: "Program",
    dashboardNotifications: "Bildirimler",
    dashboardCourses: "Dersler",
    testimonialsTitle: "Öğrenci Yorumları",
    testimonialsSubtitle: "Öğrenciler bizim hakkımızda ne diyor",
    testimonial1: "SULY AI çalışma rutinimi dönüştürdü. Zorlanmaktan sınıfın birincisine yükseldim!",
    testimonial1Name: "Ahmed K.",
    testimonial1Uni: "Bağdat Üniversitesi",
    testimonial2: "AI öğretmeni 7/24 ulaşılabilir kişisel bir profesör gibi. Kesinlikle harika!",
    testimonial2Name: "Sara M.",
    testimonial2Uni: "Kerkük Üniversitesi",
    testimonial3: "Akıllı özetler saatlerce okumadan beni kurtardı. Şimdiye kadar kullandığım en iyi çalışma aracı.",
    testimonial3Name: "Omar R.",
    testimonial3Uni: "NTU",
    ctaTitle: "Üniversite öğreniminizi dönüştürmeye hazır mısınız?",
    ctaSubtitle: "SULY AI'yi zaten kullanan binlerce öğrenciye katıl",
    ctaBtn: "Başla",
    footerAbout: "Hakkında",
    footerPrivacy: "Gizlilik",
    footerContact: "İletişim",
    footerRights: "Tüm hakları saklıdır.",
  },
  ku: {
    dir: "rtl",
    navHome: "سەرەکی",
    navFeatures: "تایبەتمەندییەکان",
    navPricing: "نرخەکان",
    navHowItWorks: "چۆن کار دەکات",
    login: "چوونە ژوورەوە",
    heroTitle: "SULY AI",
    heroSubtitle: "فێربوونی زیرەکی زانکۆ بۆ تۆ",
    heroDesc: "ژیريی دەستکرد کە لە گەشتی زانکۆکەت تێدەگات. تایبەت کراوە بۆ قوتابیان بۆ ئەوەی لە کاروانی ئەکادیمی خۆیاندا سەرکەوتوو بن.",
    startBtn: "دەست بکە بە فێربوون",
    demoBtn: "سەیری دیمۆ بکە",
    statsStudents: "+50,000",
    statsCourses: "+150",
    statsAccuracy: "%95",
    statsTutor: "24/7",
    statsStudentsLabel: "قوتابی",
    statsCoursesLabel: "کۆرس",
    statsAccuracyLabel: "ڕاستی",
    statsTutorLabel: "مامۆستای زیرەک",
    featuresTitle: "تایبەتمەندییەکان",
    featuresSubtitle: "هەرچی پێویستە بۆ سەرکەوتن",
    featureAiTutor: "مامۆستای زیرەک",
    featureAiTutorDesc: "لەگەڵ یاریدەدەری زیرەکی خۆت قسە بکە کە لەوانەی وانەکان تێدەگات",
    featureSummaries: "کورتەی زیرەک",
    featureSummariesDesc: "کورتەی پێڕست و تەواو لە هەر مادەیەکەوە دروست بکە",
    featureQuiz: "دروستکەری تاقیکردنەوەی زیرەک",
    featureQuizDesc: "بە تاقیکردنەوەی تایبەت بە ئاستی خۆت ڕاهێنان بکە",
    featurePlanner: "پلانەری خوێندن",
    featurePlannerDesc: "سەمەستەری خۆت بە بەڕێوەبردنی زیرەک ڕێکبخە",
    featureAnalytics: "شیکاری پێشکەوتن",
    featureAnalyticsDesc: "پێشکەوتنی خۆت بە شیکاری وورد ببینە",
    featureLecturer: "یاریدەدەری مامۆستا",
    featureLecturerDesc: "ئامڕازەکانی بەڕێوەبردنی کۆرس بۆ مامۆستایان",
    howItWorksTitle: "چۆن کار دەکات",
    howItWorksSubtitle: "ڕێگات بۆ سەرکەوتنی ئەکادیمی",
    step1Title: "بەرنامە بەرز بکەرەوە",
    step1Desc: "بەرنامەی وانەکەت بەرز بکەرەوە یان ناوەڕۆکەکە بلکێنە",
    step2Title: "زیرەکی شیکار دەکات",
    step2Desc: "ژیريی دەستکردی ئێمە مادەی وانەکەت شیکار دەکات و ڕێکدەخات",
    step3Title: "نەخشەی ڕێگا",
    step3Desc: "نەخشەیەکی فێربوونی تایبەت بە خۆت وەربگرە",
    step4Title: "پلانی ڕۆژانە",
    step4Desc: "پلانی ڕۆژانەی خوێندن و ئاگادارکردنەوەکان وەربگرە",
    step5Title: "تاقیکردنەوەکان",
    step5Desc: "بە تاقیکردنەوەی دروستکراو ڕاهێنان بکە و پێشکەوتن ببینە",
    dashboardTitle: "پێشبینینی داشبۆرد",
    dashboardSubtitle: "سەنتەری فەرماندەتیت بۆ سەرکەوتنی ئەکادیمی",
    dashboardGpa: "GPA",
    dashboardTasks: "ئەرکەکانی ئەمڕۆ",
    dashboardChat: "چاتی زیرەک",
    dashboardSchedule: "خشتە",
    dashboardNotifications: "ئاگادارکردنەوەکان",
    dashboardCourses: "کۆرسەکان",
    testimonialsTitle: "بۆچوونی قوتابیان",
    testimonialsSubtitle: "قوتابیان چی دەڵێن دەربارەی ئێمە",
    testimonial1: "SULY AI ڕەوتێ خوێندنمم گۆڕی. لە خەباتەوە بۆ باشترینی پۆڵەم هاتم!",
    testimonial1Name: "ئەحمەد ک.",
    testimonial1Uni: "زانکۆی بەغداد",
    testimonial2: "مامۆستای زیرەک وەک ئەوەی پڕۆفیسۆرێکی تایبەت بە خۆت هەبێت 24/7. سەرنجڕاکێشە!",
    testimonial2Name: "سارا م.",
    testimonial2Uni: "زانکۆی کەرکووک",
    testimonial3: "کورتەی زیرەک کاتێکی زۆرم لە خوێندنەوە ڕزگار کرد. باشترین ئامرازی خوێندن کە بەکارم هێنابوو.",
    testimonial3Name: "عومەر ر.",
    testimonial3Uni: "NTU",
    ctaTitle: "ئامادەی بۆ گۆڕینی خوێندنی زانکۆیی؟",
    ctaSubtitle: "بە هەزاران قوتابی بێبەری ببە کە پێشتر SULY AI بەکاردەهێنن",
    ctaBtn: "دەست پێبکە",
    footerAbout: " دەربارە",
    footerPrivacy: "نهێنی",
    footerContact: "پەیوەندی",
    footerRights: "هەموو مافێک پارێزراوە.",
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const t = dictionary[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div dir={t.dir as "ltr" | "rtl"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
