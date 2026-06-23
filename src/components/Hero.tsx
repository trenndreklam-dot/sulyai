import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Play, Sparkles, Brain, BookOpen, Target, Clock } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Learning</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-white">{t.heroTitle.split(" ")[0]}</span>
              <span className="text-gradient"> AI</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mb-6">
              {t.heroSubtitle}
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => { window.location.href = '/dashboard'; }}
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {t.startBtn}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                </div>
                {t.demoBtn}
              </button>
            </div>
          </div>

          {/* Right Content - 3D Floating Cards */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Main center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-glass rounded-3xl p-6 animate-float glow-cyan z-20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Tutor</h3>
              <p className="text-sm text-slate-400 mb-4">Personal AI assistant for your courses</p>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded-full w-full" />
                <div className="h-2 bg-white/10 rounded-full w-3/4" />
                <div className="h-2 bg-white/10 rounded-full w-1/2" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs text-cyan-400">Analyzing...</span>
              </div>
            </div>

            {/* Top left card */}
            <div className="absolute top-8 left-4 w-56 h-48 bg-glass rounded-2xl p-5 animate-float-delayed glow-blue z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Smart Summary</h4>
              <p className="text-xs text-slate-400">Instant notes generation</p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs">Math</span>
                <span className="px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 text-xs">CS</span>
              </div>
            </div>

            {/* Top right card */}
            <div className="absolute top-12 right-4 w-52 h-44 bg-glass rounded-2xl p-5 animate-float-delayed-2 z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Quiz Gen</h4>
              <p className="text-xs text-slate-400">Personalized practice</p>
              <div className="mt-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-6 h-1.5 rounded-full bg-amber-500/40" />
                ))}
              </div>
            </div>

            {/* Bottom left card */}
            <div className="absolute bottom-16 left-8 w-60 h-40 bg-glass rounded-2xl p-5 animate-float-delayed-2 z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Study Planner</h4>
              <p className="text-xs text-slate-400">Smart scheduling</p>
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Physics - 2h</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-pink-400" />
                  <span>CS - 1.5h</span>
                </div>
              </div>
            </div>

            {/* Bottom right card */}
            <div className="absolute bottom-8 right-8 w-56 h-36 bg-glass rounded-2xl p-5 animate-float-delayed z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">GPA</span>
                <span className="text-lg font-bold text-emerald-400">3.85</span>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 75, 85, 70, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/60 to-cyan-400/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-20 left-1/2 w-2 h-2 rounded-full bg-cyan-400/60 animate-float" />
            <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 rounded-full bg-blue-400/60 animate-float-delayed" />
            <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-purple-400/60 animate-float-delayed-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
