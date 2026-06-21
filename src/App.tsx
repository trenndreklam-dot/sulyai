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
  return (
    <LanguageProvider>
      <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Dashboard />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
