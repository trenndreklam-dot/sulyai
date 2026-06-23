import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Dashboard from "./components/Dashboard";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  // حالة التحكم بعرض الداشبورد والشات
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <LanguageProvider>
      <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
        {/* نمرر الدالة للـ Navbar والـ Hero حتى يفتحوا الشات عند الضغط على الأزرار */}
        <Navbar onNavigate={() => setShowDashboard(false)} onStartLearning={() => setShowDashboard(true)} />
        
        {showDashboard ? (
          // إذا ضغط المستخدم على الزر، تظهر لوحة التحكم والشات الذكي فوراً
          <div className="py-20 animate-fade-in">
            <Dashboard />
          </div>
        ) : (
          // الصفحة الرئيسية العادية
          <>
            <Hero onStartLearning={() => setShowDashboard(true)} />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA onStartLearning={() => setShowDashboard(true)} />
          </>
        )}
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;