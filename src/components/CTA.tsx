import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-glass rounded-3xl p-10 lg:p-16 border border-white/10 hover:border-white/20 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Start Today</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>

          <button
            onClick={() => { window.location.href = '/dashboard'; }}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            {t.ctaBtn}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
