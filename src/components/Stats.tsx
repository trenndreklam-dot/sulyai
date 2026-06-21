import { useLanguage } from "../context/LanguageContext";
import { Users, BookOpen, Target, Headphones } from "lucide-react";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: t.statsStudents, label: t.statsStudentsLabel, color: "from-blue-500 to-cyan-400" },
    { icon: BookOpen, value: t.statsCourses, label: t.statsCoursesLabel, color: "from-emerald-500 to-teal-400" },
    { icon: Target, value: t.statsAccuracy, label: t.statsAccuracyLabel, color: "from-amber-500 to-orange-400" },
    { icon: Headphones, value: t.statsTutor, label: t.statsTutorLabel, color: "from-purple-500 to-pink-400" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-glass rounded-2xl p-6 lg:p-8 text-center hover:bg-white/[0.08] transition-all duration-500 hover:scale-105"
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
