import { useLanguage } from "../context/LanguageContext";
import { Bot, FileText, ClipboardList, Calendar, BarChart3, Users } from "lucide-react";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Bot, title: t.featureAiTutor, desc: t.featureAiTutorDesc, color: "from-blue-500 to-cyan-400", glow: "shadow-cyan-500/30" },
    { icon: FileText, title: t.featureSummaries, desc: t.featureSummariesDesc, color: "from-emerald-500 to-teal-400", glow: "shadow-emerald-500/30" },
    { icon: ClipboardList, title: t.featureQuiz, desc: t.featureQuizDesc, color: "from-amber-500 to-orange-400", glow: "shadow-amber-500/30" },
    { icon: Calendar, title: t.featurePlanner, desc: t.featurePlannerDesc, color: "from-purple-500 to-pink-400", glow: "shadow-purple-500/30" },
    { icon: BarChart3, title: t.featureAnalytics, desc: t.featureAnalyticsDesc, color: "from-rose-500 to-red-400", glow: "shadow-rose-500/30" },
    { icon: Users, title: t.featureLecturer, desc: t.featureLecturerDesc, color: "from-indigo-500 to-violet-400", glow: "shadow-indigo-500/30" },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.featuresTitle}</h2>
          <p className="text-lg text-slate-400">{t.featuresSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg ${f.glow} group-hover:scale-110 transition-transform duration-500`}>
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
