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
  // فحص إذا كان الرابط في المتصفح يحتوي على كلمة dashboard
  const isDashboardRoute = window.location.pathname.includes('/dashboard');

  return (
    <LanguageProvider>
      <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
        <Navbar />
        
        {isDashboardRoute ? (
          // إذا كان الرابط /dashboard، اعرض الشات والداشبورد فوراً
          <div className="py-20">
            <Dashboard />
          </div>
        ) : (
          // إذا كان الرابط العادي، اعرض الصفحة التعريفية
          <>
            <Hero />
            <Stats />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA />
          </>
        )}
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;