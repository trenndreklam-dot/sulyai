import { useLanguage } from "../context/LanguageContext";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonial1,
      name: t.testimonial1Name,
      uni: t.testimonial1Uni,
      color: "from-blue-500 to-cyan-400",
    },
    {
      text: t.testimonial2,
      name: t.testimonial2Name,
      uni: t.testimonial2Uni,
      color: "from-emerald-500 to-teal-400",
    },
    {
      text: t.testimonial3,
      name: t.testimonial3Name,
      uni: t.testimonial3Uni,
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t.testimonialsTitle}</h2>
          <p className="text-lg text-slate-400">{t.testimonialsSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group relative bg-glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Quote className="w-5 h-5 text-cyan-400" />
              </div>

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 italic">"{item.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-slate-400">{item.uni}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
