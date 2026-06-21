import { useLanguage } from "../context/LanguageContext";
import { Upload, Brain, Map, Calendar, Trophy, ChevronDown } from "lucide-react";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { icon: Upload, title: t.step1Title, desc: t.step1Desc, color: "bg-blue-500" },
    { icon: Brain, title: t.step2Title, desc: t.step2Desc, color: "bg-cyan-500" },
    { icon: Map, title: t.step3Title, desc: t.step3Desc, color: "bg-emerald-500" },
    { icon: Calendar, title: t.step4Title, desc: t.step4Desc, color: "bg-amber-500" },
    { icon: Trophy, title: t.step5Title, desc: t.step5Desc, color: "bg-purple-500" },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.howItWorksTitle}</h2>
          <p className="text-lg text-slate-400">{t.howItWorksSubtitle}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="flex items-center gap-6 w-full">
                {/* Step number + icon */}
                <div className="relative flex-shrink-0 w-20 h-20">
                  <div className={`absolute inset-0 rounded-2xl ${step.color} opacity-20 blur-xl`} />
                  <div className={`relative w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-slate-900 text-sm font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-slate-700" />
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
