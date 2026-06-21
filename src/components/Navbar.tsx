import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, GraduationCap, Globe } from "lucide-react";

const languages = [
  { code: "en" as const, label: "EN", flag: "🇬🇧" },
  { code: "ar" as const, label: "AR", flag: "🇮🇶" },
  { code: "tr" as const, label: "TR", flag: "🇹🇷" },
  { code: "ku" as const, label: "KU", flag: "🇮🇶" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              SULY<span className="text-cyan-400">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: t.navHome, id: "hero" },
              { label: t.navFeatures, id: "features" },
              { label: t.navHowItWorks, id: "how-it-works" },
              { label: t.navPricing, id: "pricing" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find((l) => l.code === lang)?.label}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full mt-2 right-0 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl shadow-black/40 overflow-hidden min-w-[140px]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                        lang === l.code ? "text-cyan-400 bg-cyan-500/10" : "text-slate-300"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
              {t.login}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {[
              { label: t.navHome, id: "hero" },
              { label: t.navFeatures, id: "features" },
              { label: t.navHowItWorks, id: "how-it-works" },
              { label: t.navPricing, id: "pricing" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-base font-medium text-slate-300 hover:text-white py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <div className="flex gap-2 mb-4">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                      lang === l.code
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        : "bg-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold">
                {t.login}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
